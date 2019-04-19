var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;




function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){





if(require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='shell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







exports.destroy=function(){},




_.extend($,$.__views),


'use strict';

var args=arguments[0]||{};


'production'===Ti.App.getDeployType()&&
$.shellWindow.applyProperties({
fullscreen:!0}),




$.shellWindow.addEventListener('androidback',function(){
Ti.App.fireEvent('carma:android.back');
}),


$.shellWindow.addEventListener('open',function(){
Ti.App.fireEvent('carma:progress.start');
var webshell=Alloy.createWidget('ma.car.app.shell',args);
$.shellWindow.add(webshell.getView());var

loaded=!1,
webview=webshell.__views.shell.webview;
webview.addEventListener('carma:webview.load',function handleLoad(){
loaded=!0,
setTimeout(function(){
$.shellWindow.height=Ti.UI.FILL,
$.shellWindow.visible=!0,
setTimeout(function(){
Ti.App.fireEvent('carma:progress.stop');
},1e3);
},300);
}),

setTimeout(function(){
loaded||(
Ti.UI.createAlertDialog({
title:L('error_title'),
message:'Failed to load. Try again later...'}).
show(),
$.shellWindow.close(),
Ti.App.fireEvent('carma:progress.stop'));

},1e4);
}),

$.shellWindow.addEventListener('close',function(){
require('services/user_service').findOwn().then(function(profile){
Ti.App.fireEvent('app.carma.profile.change',profile?profile:{});
});
}),


$.shellWindow.height=0,
$.shellWindow.visible=!1,









_.extend($,exports);
}

module.exports=Controller;