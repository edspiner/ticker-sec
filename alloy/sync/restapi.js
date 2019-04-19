"use strict";var

Q=require("vendor/q"),
utils=require("utils/utilities"),
Uri=require("vendor/uri"),
cus=require("services/current_user_service"),
DEFAULT_TIME_OUT=60000,
_METHOD_MAP={
read:"GET",
create:"POST",
update:"PUT",
delete:"DELETE"},


_headers={
"Content-Type":"application/json;charset=UTF-8",
Accept:"application/json"},


parseSuccessResponse=function(client){

try{
var json=JSON.parse(client.responseText);
if("object"==typeof json)
return json;

}catch(e){
LOGGER.info("response is not in JSON format");
}

return{
response:client.responseText}||
{};
},

parseErrorResponse=function(client,response){
var json={};
try{
json=JSON.parse(client.responseText);
}catch(e){
LOGGER.debug("[REST Adapter] Response is not in JSON format: "+client.responseText);
}var
getCode=function(json){
return json.errorCode||json.error;
},
getDescription=function(json){
var detail;
json.errors&&json.errors.length&&(
detail="("+json.errors.join()+")");

var message=json.errorMessage||json.description||json.error_description;



return message&&detail&&(message=message+": "+detail),message;
},
error={
url:client.url,
status:client.status,
errorCode:json?getCode(json)||response.error:"",
description:json?getDescription(json)||response.error:""};


return LOGGER.error("[REST Adapter] Returning error: "+JSON.stringify(error)),error;
},

_connect=function(model,options){
var client=Ti.Network.createHTTPClient({
cache:options.cache||!1,
enableKeepAlive:options.enableKeepAlive||!0,
timeout:options.timeout||DEFAULT_TIME_OUT});


client.onload=function(){
LOGGER.debug("[REST Adapter] - response text: "+client.responseText),
options.success.call(this,{
status:client.status,
data:parseSuccessResponse(client)});

},

client.onerror=function(response){

var self=this;


if(LOGGER.error("[REST Adapter] - API Error: "+response.error),"java.io.EOFException"===response.error)


return LOGGER.error("[REST Adapter] - Retry on EOF"),void _connect(model,options);


if(client&&("401"===client.status.toString()||"No authentication challenges found"===response.error)&&cus.singleton().hasAuth())
if("REFRESH_TOKEN"===_.result(model,"url"))
DISPATCHER.trigger("app:sync.invalidcredentials",{});else







return void require("services/patient_service").refreshLogin().then(function(){_attachAuthToken(options,model),_connect(model,options)}).catch(function(err){options.error.call(self,parseErrorResponse(client,response))});


options.error.call(self,parseErrorResponse(client,response));
};var

url=options.url,
data=options.data;
if("GET"===options.method&&options.data){
var u=new Uri(options.url);

for(var key in options.data)
u.addQueryParam(key,options.data[key]);


url=u.toString(),
data=null;
}





for(var header in LOGGER.debug("[REST Adapter]: "+options.method+" "+url),client.open(options.method,url),options.headers)
client.setRequestHeader(header,options.headers[header]),
LOGGER.debug("[REST Adapter]: HEADER["+header+"] = "+options.headers[header]);


options.beforeSend&&
options.beforeSend(client),

LOGGER.debug("[REST Adapter] - "+options.method+" data: "+options.data),

client.send(data||null);
},

_wrapSuccess=function(deferred,model,options){
var successCallback=options.success;
options.success=function(response){
successCallback&&
successCallback(response.data,response.status),

deferred.resolve(model.toJSON());
};
},

_wrapError=function(deferred,model,options){
var errorCallback=options.error;
options.error=function(response){
errorCallback&&
errorCallback(model,response,options),

deferred.reject(response),

LOGGER.error("[REST Adapter] - Error: "+response.error);
};
},

_wrapAPICall=function(deferred,model,options){
_wrapSuccess(deferred,model,options),
_wrapError(deferred,model,options),
_connect(model,options);
},

_read=function(deferred,model,options){
model.trigger("prefetch"),
_wrapAPICall(deferred,model,options);
},

_save=function(deferred,model,options){

var contentType=options.headers["Content-Type"];
contentType&&-1!==contentType.indexOf("application/x-www-form-urlencoded")?
options.data=utils.param(model.toJSON()):
contentType&&-1!==contentType.indexOf("application/json")&&(
options.data=JSON.stringify(model.toJSON())),


model.trigger("presave"),
_wrapAPICall(deferred,model,options);
},

_delete=function(deferred,model,options){
model.trigger("predelete"),
_wrapAPICall(deferred,model,options);
},

_getURL=function(model,options){var
url=_.result(options,"url")||_.result(model,"url")||_.result(model.config,"url"),
dynamicURL=require("tickerfit/url")[url];
return dynamicURL?dynamicURL:url;
},

_attachAuthToken=function(options,model){var


header,auth=model.get("auth");
auth?(
header=auth.header,

model.unset("auth")):

header=cus.singleton().getAuthHeader(),

header&&(
options.headers=_.extend({},options.headers,header));

},

_sync=function(method,model,options){






if(method=_METHOD_MAP[method],options=_.extend({},options),options.method=method,model.config.urlMap&&model.config.urlMap[options.method]){
var url=_.result(model.config.urlMap,options.method);
options.url=_.template(url)(model.toJSON());
}


if(options.url=_getURL(model,options),!options.url)

return LOGGER.error("[REST Adapter] - Error: No url available"),Q.fcall(function(){
throw new Error("A \"url\" property or function must be specified");
});var


isCollection=model.hasOwnProperty("models"),

params=model.get("urlParams");
options.url=isCollection?_.template(options.url)(options):_.template(options.url)(params?params:model.toJSON()),

params&&
model.unset("urlParams"),


LOGGER.debug("[REST Adapter] - : "+options.url),

options.headers=_.extend({},_headers,options.headers),

model.config.headers&&(
options.headers=_.extend({},options.headers,model.config.headers)),


model.get("headers")&&(
options.headers=_.extend({},options.headers,model.get("headers"))),


_attachAuthToken(options,model);

var deferred=Q.defer();











return"GET"===method?_read(deferred,model,options):"POST"===method?_save(deferred,model,options):"PUT"===method?_save(deferred,model,options):"DELETE"===method&&_delete(deferred,model,options),deferred.promise;
};

module.exports.sync=_sync,

module.exports.beforeModelCreate=function(config){

return config=config||{},config;
},

module.exports.afterModelCreate=function(Model){


return Model=Model||{},Model.prototype.config.Model=Model,Model;
};