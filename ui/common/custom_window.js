"use strict";var

LifeCycle=require("bootstrap/lifecycle"),
deepLinker=require("bootstrap/deepLinker"),

getDefaultCloseOptions=function(){
if(!1)
return{
transition:Ti.UI.iOS.AnimationStyle.NONE,
animation:{duration:200,opacity:0}};return 0?void 0:


{
animated:!0,
activityEnterAnimation:Titanium.App.Android.R.anim.fade_in,
activityExitAnimation:Titanium.App.Android.R.anim.fade_out};


},
closeWindow=function(win,opts){
opts||(opts={animated:!1}),!1?

win.animate(opts.animation,function(){
win.close(opts);
}):

win.close(opts);

},

CustomWindow=function(args){




















function _closeCurrent(options){
try{
var opts=_.extend({},getDefaultCloseOptions(),options);
win&&!pinned&&(opts.force||2e3<new Date().getTime()-createTime)&&(
LOGGER.debug("Window:"+args.id+" closing - options:"+JSON.stringify(opts)),
closeWindow(win,opts));

}catch(e){}
}
function _closeOnLogout(){
try{
LOGGER.debug("Window: "+args.id+(closeOnLogout?" logout - not closing":" logout - closing")),
win&&closeOnLogout&&
win.close();

}catch(e){}
}var createTime=new Date().getTime(),win=Ti.UI.createWindow(args),closeOnLogout=!0,pinned=!1;if(args&&"undefined"!=typeof args.closeOnLogout&&(closeOnLogout=args.closeOnLogout),args&&"undefined"!=typeof args.pinned&&(pinned=args.pinned),!0){var context=require("ui/common/android_custom_window_context"),winId=context.getNextID();context.on(winId,win.activity,args.id)}
















return win.addEventListener("open",function handler(){LOGGER.debug("[CustomWindow] - ("+winId+") , listen to life cycle events"),DISPATCHER.on("tf:app.window.current.close",_closeCurrent),DISPATCHER.on("tf:logout",_closeOnLogout)}),win.addEventListener("close",function handler(){LOGGER.debug("[CustomWindow] - ("+winId+") , closed"),DISPATCHER.off("tf:app.window.current.close",_closeCurrent),DISPATCHER.off("tf:logout",_closeOnLogout)}),win;
};

exports.closeWindow=function(win,options){
var opts=_.extend({},getDefaultCloseOptions(),options);
closeWindow(win,opts);
},

exports.openWindow=function(win){
var opts;

opts=1?



{
animated:!0,
activityEnterAnimation:Titanium.App.Android.R.anim.fade_in,
activityExitAnimation:Titanium.App.Android.R.anim.fade_out}:{transition:Ti.UI.iOS.AnimationStyle.NONE},


win.open(opts);
},

exports.createWindow=function(args){
return new CustomWindow(args);
};