

var Permissions=require('T/permissions/phone');

exports.requireOrNull=function(name){
try{
return require(name)||null;
}catch(ex){
return null;
}
},

exports.openURL=function(url,fallback,error){
var doFallback=function(){
null==fallback?





null!=error&&
exports.errorAlert(error):_.isFunction(fallback)?fallback():_.isString(fallback)&&Ti.Platform.openURL(fallback);

};

if(!1)
Ti.Platform.canOpenURL(url)?
Ti.Platform.openURL(url):

doFallback();else

if(!0)
try{
Ti.Platform.openURL(url);
}catch(err){
doFallback();
}

},

exports.openHTTPLink=function(url){
if(!1){

var SD=exports.requireOrNull('ti.safaridialog');

if(null!=SD&&SD.isSupported())


return SD.open({url:url}),SD;

require('T/dialog').confirmYes(L('confirm_openlink_leave_app','Leave application?'),L('confirm_openlink_browser_alert','The link will be open in the browser'),function(){
Ti.Platform.openURL(url);
},L('yes','Yes'));

}else
Ti.Platform.openURL(url);

},

exports.tryOpenURLs=function(urls){
for(var i=0;i<urls.length;i++)
try{
if(!1){
if(Ti.Platform.canOpenURL(urls[i]))
Ti.Platform.openURL(urls[i]);else

throw new Error;}else

if(!0&&
!Ti.Platform.openURL(urls[i]))throw new Error;


return!0;
}catch(err){}


return!1;
},

exports.startActivity=function(opt,error){
try{
Ti.Android.currentActivity.startActivity(Ti.Android.createIntent(opt));
}catch(ex){
null!=error&&
exports.errorAlert(error);

}
},

exports.openFacebookProfile=function(fb_id){




return /^\d+$/.test(fb_id)||Ti.API.warn('Util: openFacebookProfile needs a numeric ID, not the username'),exports.tryOpenURLs(['fb://profile/'+fb_id,'https://www.facebook.com/'+fb_id]);
},

exports.openTwitterProfile=function(tw_username){return 1?



Ti.Platform.openURL('http://www.twitter.com/'+tw_username):exports.tryOpenURLs(['tweetbot:///user_profile/'+tw_username,'twitter://user?screen_name='+tw_username,'http://www.twitter.com/'+tw_username]);

},

exports.openTwitterStatus=function(tw_username,status_id){
return exports.tryOpenURLs(['twitter://status?id='+status_id,'http://www.twitter.com/'+tw_username+'/statuses/'+status_id]);
},

exports.openYoutubeProfile=function(ytid){
return Ti.Platform.openURL('https://www.youtube.com/user/'+ytid);
},

exports.openInstagramProfile=function(ig_username){
return exports.tryOpenURLs(['instagram://user?username='+ig_username,'http://www.instagram.com/'+ig_username]);
},

exports.getFacebookAvatar=function(fbid,w,h){
return'http://graph.facebook.com/'+fbid+'/picture/?width='+(w||150)+'&height='+(h||150);
},

exports.openInStore=function(appid){!1?

Ti.Platform.openURL('https://itunes.apple.com/app/id'+appid):

Ti.Platform.openURL('https://play.google.com/store/apps/details?id='+appid);

},

exports.getDomainFromURL=function(url){
var matches=url.match(/^.+\:\/\/([^\/]+)/);return(
null==matches||null==matches[1]?'':
matches[1]);
},

exports.getDeployType=function(){
return'production'===Ti.App.deployType?'production':'development';
},

exports.getOS=function(){
var name='android';
return'ipad'==name?'ios':name;
},

exports.getIOSVersion=function(){return 0?

Ti.Platform.version.split('.')[0]>>0:0;
},

exports.isIOS6=function(){
return 6===exports.getIOSVersion();
},

exports.isIOS7=function(){
return 7===exports.getIOSVersion();
},

exports.isIOS8=function(){
return 8===exports.getIOSVersion();
},

exports.isIOS9=function(){
return 9===exports.getIOSVersion();
},

exports.parseSchema=function(){
if(!1){
var cmd=Ti.App.getArguments();
if(null!=cmd.url)return cmd.url;
}else if(!0){
var url=Ti.Android.currentActivity.intent.data;
if(null!=url)return url;
}
return null;
},

exports.timestamp=function(arg){return(
null==arg?exports.now():
new Date(arg).getTime()/1e3>>0);
},

exports.now=function(){
return Date.now()/1e3>>0;
},

exports.fromNow=function(t){
return exports.timestamp(Date.now()+1e3*t);
},

exports.timestampForHumans=function(ts){
return require('alloy/moment')(1e3*ts).format();
},

exports.parseJSON=function(json){
try{
return JSON.parse(json)||null;
}catch(ex){
return null;
}
},

exports.buildQuery=function(obj,prepend){
if(_.isEmpty(obj))return'';var

q=[],
builder=function(value,key){
null===value||void 0===value||(

_.isArray(value)?
_.each(value,function(v){
builder(v,key+'[]');
}):
_.isObject(value)?
_.each(value,function(v,k){
builder(v,key+'['+k+']');
}):

q.push(encodeURIComponent(key)+'='+encodeURIComponent(value)));

};


return _.each(obj,builder),0===q.length?'':(null==prepend?'?':prepend)+q.join('&');
};

var APPDATA_DIRECTORY=null;

exports.getAppDataDirectory=function(){
if(null===APPDATA_DIRECTORY){

APPDATA_DIRECTORY=1?0?



Ti.Filesystem.applicationDataDirectory:Ti.Filesystem.getFile(Ti.Filesystem[Ti.Filesystem.isExternalStoragePresent()?'externalStorageDirectory':'applicationDataDirectory']).nativePath+'/':Ti.Filesystem.applicationSupportDirectory;


try{
Ti.Filesystem.getFile(APPDATA_DIRECTORY).createDirectory();
}catch(err){}
}
return APPDATA_DIRECTORY;
},

exports.dial=function(tel){var
telString=tel.match(/[0-9]/g).join(''),
errString=String.format(L('unable_to_call','Unable to call %s'),tel);!1?

exports.openURL('tel:'+telString,null,errString):

Permissions.request(function(){
exports.startActivity({
action:Ti.Android.ACTION_CALL,
data:'tel:'+telString},
errString);
},function(){
exports.errorAlert(errString);
});

};

var XCU={
key:['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'],
parser:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
queryParser:function(params){
var obj={};









































return _.each(params.replace(/\+/g,' ').split('&'),function(v,j){var val,param=v.split('='),key=decodeURIComponent(param[0]),cur=obj,i=0,keys=key.split(']['),keys_last=keys.length-1;if(/\[/.test(keys[0])&&/\]$/.test(keys[keys_last])?(keys[keys_last]=keys[keys_last].replace(/\]$/,''),keys=keys.shift().split('[').concat(keys),keys_last=keys.length-1):keys_last=0,2!==param.length)key&&(obj[key]='');else if(val=decodeURIComponent(param[1]),keys_last)for(;i<=keys_last;i++)key=''===keys[i]?cur.length:keys[i],cur=cur[key]=i<keys_last?cur[key]||(keys[i+1]&&isNaN(keys[i+1])?{}:[]):val;else _.isArray(obj[key])?obj[key].push(val):{}.hasOwnProperty.call(obj,key)?obj[key]=[obj[key],val]:obj[key]=val}),obj;
}};


exports.parseAsXCallbackURL=function(str){for(var
uri={},

m=XCU.parser.exec(str),
i=XCU.key.length;
i--;)uri[XCU.key[i]]=m[i]||'';



return uri.queryKey=XCU.queryParser(uri.query),uri;
},

exports.decodeHtmlEntity=function(str){
return str.replace(/&#(\d+);/g,function(match,dec){
return String.fromCharCode(dec);
});
},

exports.encodeHtmlEntity=function(str){

for(var buf=[],i=str.length-1;0<=i;i--)
buf.unshift(['&#',str[i].charCodeAt(),';'].join(''));

return buf.join('');
},

exports.hashJavascriptObject=function(obj){return(
null==obj?'null':
_.isArray(obj)||_.isObject(obj)?JSON.stringify(obj):
obj.toString());
},

exports.getErrorMessage=function(obj,def){
if(_.isObject(obj)){
if(_.isString(obj.message))
return obj.message;
if(_.isObject(obj.error)&&_.isString(obj.error.message))
return obj.error.message;
if(_.isString(obj.error))
return obj.error;

}else if(!_.isEmpty(obj))
return obj.toString();return(


null==def?

L('unexpected_error','Unexpected error'):def);
},

exports.errorAlert=function(err,callback){
require('T/dialog').alert(L('error','Error'),exports.getErrorMessage(err),callback);
},

exports.alertError=exports.errorAlert,

exports.bytesForHumans=function(bytes){
var sizes=['B','KB','MB','GB','TB'];
if(0===bytes)return'n/a';
var i=parseInt(Math.floor(Math.log(bytes)/6.931471805599453));
return Math.round(bytes/Math.pow(1024,i),2)+' '+sizes[i];
};

var DATABASE_DIRECTORY=null;

exports.getDatabaseDirectoryName=exports.getDatabaseDirectory=function(){
if(null===DATABASE_DIRECTORY)
if(!1){var
db=require('T/db').open('test'),
path=db.file.resolve().split('/');path.pop(),
db.close(),
DATABASE_DIRECTORY=path.join('/')+'/';
}else if(!0){
DATABASE_DIRECTORY=Ti.Filesystem[Ti.Filesystem.isExternalStoragePresent()?'externalStorageDirectory':'applicationDataDirectory']+'/databases';
try{
Ti.Filesystem.getFile(DATABASE_DIRECTORY).createDirectory();
}catch(err){}
}

return DATABASE_DIRECTORY;
},

exports.getResourcesDirectory=function(){return 1?







Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'').nativePath+(Ti.Shadow?'/':''):Ti.Shadow?Ti.Filesystem.applicationDataDirectory+Ti.App.name+'/iphone/':Ti.Filesystem.resourcesDirectory;

},

exports.compareVersions=function(a,b){
if(null==a||null==b)return 0;

a=a.split('.'),
b=b.split('.');
for(var i=0;i<Math.max(a.length,b.length);i++){
var _a=+a[i]||0,
_b=+b[i]||0;
if(_a>_b)return 1;if(_a<_b)return-1;
}
return 0;
},

exports.zeroPad=function(num,size){
if(null==num)return num;for(

var result=num.toString();
result.length<(size||2);)result='0'+result;
return result;
},

exports.guid=function(){
return Ti.Platform.createUUID();
},

exports.getPlatformFullName=function(){
return Ti.Platform.model+' - android '+Ti.Platform.version+' ('+Ti.Platform.ostype+') - '+Ti.Platform.locale;
},

exports.rot13=function(s){
return s.replace(/[a-zA-Z]/g,function(c){
return String.fromCharCode(('Z'>=c?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
});
};