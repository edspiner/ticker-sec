
exports.config=_.extend({
base:'',
timeout:3e4,
headers:{},
useCache:!0,
offlineCache:!1,
log:!1,
bodyEncodingInJSON:!1,
sslPinning:!1},
Alloy.CFG.T?Alloy.CFG.T.http:{});var

MODULE_NAME='http',

Event=require('T/event'),
Util=require('T/util'),
Q=require('T/ext/q'),
PermissionsStorage=require('T/permissions/storage'),

securityManager=null;

function extractHTTPText(data,info){return(
null!=info&&null!=data&&
'json'===info.format?
Util.parseJSON(data):


data);
}

function HTTPRequest(opt){
var self=this;
if(null==opt.url)
throw new Error(MODULE_NAME+'.Request: URL not set');



















if(this.opt=opt,this.url=/\:\/\//.test(opt.url)?opt.url:exports.config.base.replace(/\/$/,'')+'/'+opt.url.replace(/^\//,''),this.domain=Util.getDomainFromURL(this.url),this.method=null==opt.method?'GET':opt.method.toUpperCase(),this.headers=_.extend({},exports.getHeaders(),exports.getHeaders(this.domain),opt.headers),this.timeout=null==opt.timeout?exports.config.timeout:opt.timeout,this.configureSSLPinning(),this.securityManager=opt.securityManager||securityManager,null!=opt.data)
if('GET'!==this.method)





!0==exports.config.bodyEncodingInJSON||!0==opt.bodyEncodingInJSON?(
this.headers['Content-Type']='application/json',
this.data=JSON.stringify(opt.data)):

this.data=opt.data;else if('object'==typeof opt.data){var exQuery=/\?.*/.test(this.url);this.url+=Util.buildQuery(opt.data,exQuery?'&':'?')}




this.hash=this._calculateHash(),
this.uniqueId=exports.getUniqueId(),

this.defer=Q.defer(),
this.defer.promise.then(function(){
self._onSuccess.apply(self,arguments);
}),
this.defer.promise.catch(function(){
self._onError.apply(self,arguments);
}),
this.defer.promise.finally(function(){
self._onFinally.apply(self,arguments);
}),

Ti.API.debug(MODULE_NAME+': <'+this.uniqueId+'>',this.method,this.url,this.data);
}

HTTPRequest.prototype.configureSSLPinning=function(){
if(null==securityManager&&

!1!=exports.config.sslPinning){

var AppcHttps=Util.requireOrNull('appcelerator.https');
if(null==AppcHttps)
return Ti.API.error(MODULE_NAME+': SSL pinning requires appcelerator.https module');


if(_.isArray(exports.config.sslPinning))
securityManager=AppcHttps.createX509CertificatePinningSecurityManager(_.map(exports.config.sslPinning,function(domain){
var path=Util.getResourcesDirectory()+'certs/'+domain;
if(!1==Ti.Filesystem.getFile(path).exists())
throw new Error(MODULE_NAME+': certificate for SSL pinning not found ('+domain+')');

return{
url:'https://'+domain,
serverCertificate:path};

}));else
if(!0==exports.config.sslPinning){var
domain=Util.getDomainFromURL(config.base),
path=Util.getResourcesDirectory()+'certs/'+domain;
if(!1==Ti.Filesystem.getFile(path).exists())
throw new Error(MODULE_NAME+': certificate for base SSL pinning not found ('+domain+')');

securityManager=AppcHttps.createX509CertificatePinningSecurityManager([{
url:'https://'+Util.getDomainFromURL(config.base),
serverCertificate:path}]);

}}
},

HTTPRequest.prototype.toString=function(){
return this.hash;
},

HTTPRequest.prototype._maybeCacheResponse=function(data){return(
'GET'===this.method?

!1===exports.config.useCache?void
Ti.API.trace(MODULE_NAME+': <'+this.uniqueId+'> cache has been disabled globally'):



!1===this.opt.cache?void
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> set cache has been disabled for this request'):



0>=this.responseInfo.ttl?void
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> set cache is not applicable'):void



require('T/cache').set(this.hash,data,this.responseInfo.ttl,this.responseInfo):void 0);
},

HTTPRequest.prototype.getCachedResponse=function(){return(
'GET'===this.method?

!1===exports.config.useCache?(
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> cache has been disabled globally'),
null):


!1===this.opt.cache||!0===this.opt.refresh?(
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> get cache has been disabled for this request'),
null):(


this.cachedData=require('T/cache').get(this.hash),
null==this.cachedData)?(
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> cache is missing'),
null):(


Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> cache hit up to '+(this.cachedData.expire-Util.now())+'s'),

'blob'===this.cachedData.info.format?
this.cachedData.value:


extractHTTPText(this.cachedData.value.text,this.cachedData.info)):null);
},

HTTPRequest.prototype._getResponseInfo=function(){
if(null==this.client||1>=this.client.readyState)
throw new Error(MODULE_NAME+': Client is null or not ready');var


headers={
Expires:this.client.getResponseHeader('Expires'),
ContentType:this.client.getResponseHeader('Content-Type'),
TTL:this.client.getResponseHeader('X-Cache-Ttl')},


info={
format:'blob',
ttl:0};
















return null!=this.client.responseText&&(info.format='text',/^application\/json/.test(headers.ContentType)&&(info.format='json')),null==headers.TTL?null!=headers.Expires&&(info.ttl=Util.timestamp(headers.Expires)-Util.now()):info.ttl=headers.TTL,null!=this.opt.format&&(info.format=this.opt.format),null!=this.opt.ttl&&(info.ttl=this.opt.ttl),info;
},

HTTPRequest.prototype._onSuccess=function(){return(
null==this.endTime?


Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> response success'):Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> response success (in '+(this.endTime-this.startTime)+'ms)'),


!0===exports.config.log&&
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'>',arguments[0]),


null!=this.client&&
300<=this.client.status&&400>this.client.status&&this.client.location!=this.url?(
Ti.API.trace(MODULE_NAME+':  <'+this.uniqueId+'> following redirect to '+this.client.location),void

exports.send(_.extend(this.opt,{url:this.client.location}))):void(




_.isFunction(this.opt.success)&&
this.opt.success.apply(this,arguments)));

},

HTTPRequest.prototype._onError=function(err){
Ti.API.error(MODULE_NAME+':  <'+this.uniqueId+'>',err),

_.isFunction(this.opt.error)&&
this.opt.error.apply(this,arguments);

},

HTTPRequest.prototype._onFinally=function(){
_.isFunction(this.opt.complete)&&
this.opt.complete.apply(this,arguments);

},

HTTPRequest.prototype._whenComplete=function(e){
this.endTime=Date.now(),
exports.removeFromQueue(this),

!0!==this.opt.silent&&
Event.trigger(MODULE_NAME+'.end',{
hash:this.hash,
eventName:this.opt.eventName});



try{
this.responseInfo=this._getResponseInfo();
}catch(ex){




return void this.defer.reject({code:0,broken:!0});
}

var data=null;

data='blob'===this.opt.format?this.client.responseData:

extractHTTPText(this.client.responseText,this.responseInfo),


e.success?(

this._maybeCacheResponse(data),
this.defer.resolve(data)):


this.defer.reject({
message:'blob'===this.opt.format?null:Util.getErrorMessage(data),
error:e.error,
code:this.client.status,
response:data});


},

HTTPRequest.prototype._calculateHash=function(){
var hash=this.url+Util.hashJavascriptObject(this.data)+Util.hashJavascriptObject(this.headers);
return'http_'+Ti.Utils.md5HexDigest(hash);
},

HTTPRequest.prototype.send=function(){var
self=this,

promise=Q();
_.each(filters,function(filter,name){
!0==self.opt.suppressFilters||
_.isArray(self.opt.suppressFilters)&&0<=self.opt.suppressFilters.indexOf(name)||(

promise=promise.then(filter.bind(null,self)));
}),

promise.then(self._send.bind(self)).fail(function(ex){
Ti.API.error(MODULE_NAME+':  <'+self.uniqueId+'> filter rejection',ex),
self.defer.reject(ex);
});
},

HTTPRequest.prototype._send=function(){var
self=this,

client=Ti.Network.createHTTPClient(_.extend({
timeout:this.timeout,
cache:!1},
this.securityManager?{securityManager:this.securityManager}:{}));

client.onload=client.onerror=function(e){
self._whenComplete(e);
},

exports.addToQueue(this),

!0!==this.opt.silent&&
Event.trigger(MODULE_NAME+'.start',{
hash:this.hash,
eventName:this.opt.eventName}),



_.isFunction(this.opt.ondatastream)&&(client.ondatastream=this.opt.ondatastream),
_.isFunction(this.opt.ondatasend)&&(client.ondatasend=this.opt.ondatasend),

client.open(this.method,this.url),

null!=this.opt.file&&(
client.file=this.opt.file),


_.each(this.headers,function(h,k){
client.setRequestHeader(k,h);
}),

this.startTime=Date.now(),
null==this.data?


client.send():client.send(this.data),


this.client=client;
},

HTTPRequest.prototype.resolve=function(){
var cache=null;

Ti.Network.online?(

cache=this.getCachedResponse(),
null==cache?


this.send():this.defer.resolve(cache)):(



Event.trigger(MODULE_NAME+'.offline'),

!0===exports.config.offlineCache||!0===this.opt.offlineCache?(
cache=this.getCachedResponse(),
null==cache?


this.defer.reject({
offline:!0,
code:0,
message:L('network_offline','Check your connectivity.')}):this.defer.resolve()):



this.defer.reject({
offline:!0,
code:0,
message:L('network_offline','Check your connectivity.')}));



},

HTTPRequest.prototype.abort=function(){
null!=this.client&&(
this.client.abort(),
Ti.API.debug(MODULE_NAME+':  <'+this.uniqueId+'> aborted!'));

},

HTTPRequest.prototype.success=HTTPRequest.prototype.then=function(func){

return this.opt.success=func,this;
},

HTTPRequest.prototype.error=HTTPRequest.prototype.fail=HTTPRequest.prototype.catch=function(func){

return this.opt.error=func,this;
},

HTTPRequest.prototype.complete=HTTPRequest.prototype.fin=HTTPRequest.prototype.finally=function(func){

return this.opt.complete=func,this;
},

HTTPRequest.prototype.getPromise=function(){
return this.defer.promise;
};

var filters={};

exports.addFilter=function(name,func){
filters[name]=func;
},

exports.removeFilter=function(name,func){
delete filters[name];
},

exports.event=function(name,cb){
Event.on(MODULE_NAME+'.'+name,cb);
};

var __uniqueId=0;
exports.getUniqueId=function(){
return __uniqueId++;
};var

headers=_.clone(exports.config.headers),
headersPerDomain={};

exports.getHeaders=function(domain){return(
null==domain?
headers:

headersPerDomain[domain]||{});

},

exports.addHeader=function(key,value,domain){
null==domain?
headers[key]=value:(

headersPerDomain[domain]=headersPerDomain[domain]||{},
headersPerDomain[domain][key]=value);

},

exports.removeHeader=function(key,domain){
null==domain?
delete headers[key]:

null!=headersPerDomain[domain]&&
delete headersPerDomain[domain][key];


},

exports.resetHeaders=function(domain){
null==domain?(
headers={},
headersPerDomain={}):

headersPerDomain[domain]={};

};

var queue=[];

exports.isQueueEmpty=function(){
return _.isEmpty(queue);
},

exports.getQueue=function(){
return queue;
},

exports.addToQueue=function(request){
queue[request.hash]=request;
},

exports.removeFromQueue=function(request){
delete queue[request.hash];
},

exports.resetCookies=function(){
Ti.Network.removeAllHTTPCookies();
};

function send(opt){
var request=new HTTPRequest(opt);

return request.resolve(),request;
}
exports.send=send,

exports.get=function(url,success,error){
return send({
url:url,
method:'GET',
success:success,
error:error});

},

exports.post=function(url,data,success,error){
return send({
url:url,
method:'POST',
data:data,
success:success,
error:error});

},

exports.getJSON=function(url,data,success,error){
return send({
url:url,
data:data,
method:'GET',
format:'json',
success:success,
error:error});

},

exports.postJSON=function(url,data,success,error){
return send({
url:url,
data:data,
method:'POST',
format:'json',
success:success,
error:error});

},

exports.download=function(url,file,success,error,ondatastream){
var doDownload=function(){
var tiFile=null;

tiFile=null==file?Ti.Filesystem.getFile(Util.getAppDataDirectory(),_.uniqueId('http_')):
_.isString(file)?
Ti.Filesystem.getFile(Util.getAppDataDirectory(),file):

file,


send({
url:url,
cache:!1,
refresh:!0,
format:'blob',
file:tiFile.resolve(),
ondatastream:ondatastream,
error:error,
success:function(){
tiFile.exists()?
success(tiFile):

error({
message:L('unable_to_write_file','Unable to write file')});


}});

};

PermissionsStorage.request(doDownload,error);
},

exports.exportCookiesToSystem=function(domain){


domain=domain||exports.config.base.replace('http://',''),
_.each(Ti.Network.getHTTPCookiesForDomain(domain),function(c){
Ti.Network.addSystemCookie(c);
});
},

headers['X-Ti-Version']=Ti.version,
headers['X-Platform']=Util.getPlatformFullName(),

headers['X-App-Id']=Ti.App.id,
headers['X-App-Version']=Ti.App.version,
headers['X-App-DeployType']=Ti.App.deployType,!1;