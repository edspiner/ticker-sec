
exports.config=_.extend({
enqueueRouteWithUniversalLink:!0,
enqueueRouteWithDeepLink:!0},
Alloy.CFG.T?Alloy.CFG.T.app:{});var

Util=require('T/util'),
Router=require('T/router');

exports.universalLinkToRoute=function(url){
return url;
},

exports.deepLinkToRoute=function(url){
return url;
},

exports.isFirstUse=function(prefix){

return prefix=prefix||'',!Ti.App.Properties.hasProperty('app.firstuse'+prefix);
},

exports.setFirstUse=function(prefix){
prefix=prefix||'',
Ti.App.Properties.setString('app.firstuse'+prefix,Util.now());
},

exports.notifyUpdate=function(url,version_cb,success_cb){
if(Ti.Network.online){var

HTTP=require('T/http'),
Dialog=require('T/dialog'),
GA=require('T/ga');

if(null==url)
if(!1)
url='https://itunes.apple.com/lookup?bundleId='+Ti.App.id;else

return null;



version_cb=version_cb||function(response){return 1?



null:response.results&&response.results[0]?response.results[0].version:null;

},

success_cb=success_cb||function(response){
Util.openInStore(function(){return 1?
null:response.results[0].trackId;
}());
},

HTTP.send({
url:url,
cache:!1,
format:'json',
success:function(response){
if(null!=response&&_.isObject(response)){var

new_version=version_cb(response),
version_compare=Util.compareVersions(new_version,Ti.App.version);




if(Ti.API.info('Util: App store version is '+new_version),Ti.API.info('Util: Current version is '+Ti.App.version),0<version_compare){var
title=L('app_new_version_title','Update available'),
message=String.format(L('app_new_version_message','A new version of %s is available: %s'),Ti.App.name,new_version);

Dialog.confirm(title,message,[{
title:L('app_new_version_button_later','Later'),
callback:function(){
GA.trackEvent('updatedialog','later');
}},
{
title:L('app_new_version_button_update','Update'),
preferred:!0,
callback:function(){
GA.trackEvent('updatedialog','doit'),
success_cb(response);
}}]);

}}
}})}

},!1;

























var url=Util.parseSchema();

null!=url&&(
Ti.API.info('App: Started with schema <'+url+'>'),

exports.config.enqueueRouteWithDeepLink&&
Router.enqueue(exports.deepLinkToRoute(url)));