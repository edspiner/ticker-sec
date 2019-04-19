"use strict";var

Q=require("vendor/q"),
utils=require("utils/utilities"),
Uri=require("vendor/uri"),
SyncError=require("alloy/utils/sync_error"),
persistenceFactory=require("alloy/persistence/persistence_factory"),
cus=require("services/current_user_service"),

DEFAULT_TIME_OUT=60000,

_DEFAULT_HEADERS={
"Content-Type":"application/json;charset=UTF-8",
Accept:"application/json"},


_DEFAULT_OPTIONS={
localOnly:!1,
returnStoredData:!0},


_METHOD_MAP={
read:"GET",
create:"POST",
update:"PUT",
delete:"DELETE"},


_createHttpClient=function(options){
return Ti.Network.createHTTPClient({
cache:options.cache||!1,
enableKeepAlive:options.enableKeepAlive||!0,
timeout:options.timeout||DEFAULT_TIME_OUT});

},

_getRemoteURL=function(model,options){

var url=options.url||_.result(model,"url")||model.config.url,
isCollection=model.hasOwnProperty("models");

model.config.urlMap&&model.config.urlMap[options.method]&&(
url=model.config.urlMap[options.method]);


var dynamicURL=require("tickerfit/url")[url];
url=dynamicURL?dynamicURL:url;

var params=null;









if(isCollection?params=_.extend({},options.urlParams):(params=_.extend({},model.toJSON(),model.get("urlParams"),options.urlParams),model.unset("urlParams",{silent:!0})),url=_.template(url)(params),"GET"===options.method&&options.data){



for(var key in url=new Uri(url),options.data)
url.addQueryParam(key,options.data[key]);


url=url.toString(),
delete options.data;
}
options.url=url;
},

parseSuccessResponse=function(client){

try{
return JSON.parse(client.responseText);
}catch(e){
LOGGER.info("[Sync Adapter] - response is not in JSON format");
}

return client.responseText;
},

parseErrorResponse=function(client,response){
LOGGER.debug("[Sync Adapter] - http client on error");
var json={};
try{
json=JSON.parse(client.responseText);
}catch(e){
LOGGER.info("[Sync Adapter] - response is not in JSON format");
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
error=SyncError.createErrorResponse(client.status,json?getCode(json)||response.code:"",json?getDescription(json)||response.error:"");

return LOGGER.error("[PERSISTENTREST] "+JSON.stringify(error)),error;
},

_connect=function(model,options,deferred){

if(!Ti.Network.online)

throw LOGGER.error("[Sync Adapter] - offline, unable to make HTTP request"),SyncError.createErrorPromise(522,"offline","no network connectivity");


var client=_createHttpClient(options),
deferred=deferred||Q.defer();




























































for(var header in client.onload=function(){LOGGER.debug("[Sync Adapter] - response text: "+client.responseText);var successResponse=parseSuccessResponse(client);options.success&&options.success(successResponse,client.status);var persistence=persistenceFactory[model.config.adapter.persistentType];persistence&&!options.remoteOnly&&(LOGGER.debug("[Sync Adapter] - persist server response"),persistence.save(model,options)),deferred.resolve(model.toJSON())},client.onerror=function(response){if(LOGGER.error("[Sync Adapter] - API Error: "+response.error),"java.io.EOFException"===response.error)return LOGGER.error("[Sync Adapter] - Retry on EOF"),void _connect(model,options,deferred);if(client&&("401"===client.status.toString()||"No authentication challenges found"===response.error)&&cus.singleton().hasAuth())if("REFRESH_TOKEN"===_.result(model,"url"))DISPATCHER.trigger("app:sync.invalidcredentials",{});else return void require("services/patient_service").refreshLogin().then(function(){_attachAuthToken(options,model),_connect(model,options,deferred)}).catch(function(err){var errorResponse=parseErrorResponse(client,response);options.error&&options.error(model,errorResponse,options),deferred.reject(errorResponse)});var errorResponse=parseErrorResponse(client,response);options.error&&options.error(model,errorResponse,options),deferred.reject(errorResponse)},_getRemoteURL(model,options),LOGGER.debug("[Sync Adapter]: "+options.method+" "+options.url),client.open(options.method,options.url),options.headers)
client.setRequestHeader(header,options.headers[header]);






return client.send(options.data||null),LOGGER.debug("[Sync Adapter] - post data: "+options.data),deferred.promise;
},

_formatData=function(contentType,model){return(

contentType?



-1===contentType.indexOf("application/x-www-form-urlencoded")?




-1===contentType.indexOf("application/json")?




model.toJSON():(LOGGER.debug("[Sync Adapter] - post data as json format"),JSON.stringify(model.toJSON())):(LOGGER.debug("[Sync Adapter] - post data as form format"),utils.param(model.toJSON())):model.toJSON());
},

_read=function(model,options){

LOGGER.debug("[Sync Adapter] - GET request");var


persistence=persistenceFactory[model.config.adapter.persistentType],

deferred=Q.defer();

if(options.localOnly)

return LOGGER.debug("[Sync Adapter] - fetch local data only"),persistence.fetch(model,options);


if(!Ti.Network.online&&options.returnStoredData)











return LOGGER.error("[Sync Adapter] - no network connection, get data from local storage"),persistence.fetch(model,options).then(function(data){if(data)deferred.resolve(data);else{var error=SyncError.createErrorResponse(404,"","Not Found Locally");deferred.reject(error)}}).catch(function(err){deferred.reject(err)}),deferred.promise;


var offline;
























return persistence.fetch(model,options).then(function(offlineResults){offlineResults&&(LOGGER.debug("[Sync Adapter] - progress with data from local storage"),offline=offlineResults,deferred.notify(offlineResults))}).finally(function(){_connect(model,options).then(function(apiResults){LOGGER.debug("[Sync Adapter] - fullfill the promise with the response from API"),deferred.resolve(apiResults)}).catch(function(err){0==err.status?(LOGGER.error("[Sync Adapter] - API Error, fall back to the data from local storage : "+JSON.stringify(err)),offline?deferred.resolve(offline):deferred.reject(err)):deferred.reject(err)})}),deferred.promise;
},

_save=function(model,options){

LOGGER.debug("[Sync Adapter] - POST/PUT request"),
model.trigger("presave");

var persistence=persistenceFactory[model.config.adapter.persistentType];return(

options.localOnly?(
LOGGER.debug("[Sync Adapter] - only store data locally"),
persistence.save(model,options)):(


options.data=_formatData(options.headers["Content-Type"],model),
_connect(model,options)));
},

_delete=function(model,options){

LOGGER.debug("[Sync Adapter] - DELETE request"),
model.trigger("predelete");

var persistence=persistenceFactory[model.config.adapter.persistentType];return(

options.localOnly?(
LOGGER.debug("[Sync Adapter] - only remove data locally"),
persistence.remove(model,options)):


_connect(model,options));
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




if(options=_.extend({},_DEFAULT_OPTIONS,options),options.method=_METHOD_MAP[method],!options.method)

return LOGGER.error("[Sync Adapter] - Error: Invalid HTTP method"),SyncError.createErrorPromise(401,"invalid_http_method","Invalid HTTP method");






switch(options.headers=_.extend({},_DEFAULT_HEADERS,model.config.headers,options.headers),_attachAuthToken(options,model),options.method){

case"GET":
return _read(model,options);

case"POST":
return _save(model,options);

case"PUT":
return _save(model,options);

case"DELETE":
return _delete(model,options);

default:
return;}

};

module.exports={

beforeModelCreate:function(config){

return config=config||{},config;
},

afterModelCreate:function(Model){


return Model=Model||{},Model.prototype.config.Model=Model,Model;
},

sync:_sync};