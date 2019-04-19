"use strict";var

animation=require("alloy/animation"),
dimension=require("platform/dimension"),
AnimatedBottomView=function(){var

_options=null,
_bottomWhenViewOnTop=null,
_container=null,
_triggers=null,
_timer=null,

_registerAnimationTriggers=function(triggers){

var singular=!_.isArray(triggers);
_triggers=singular?[triggers]:triggers,

_triggers.forEach(function(trigger){
_registerAnimationTrigger(trigger);
});
},

_registerAnimationTrigger=function(trigger){

trigger.isFocus=!1,

trigger.addEventListener("focus",_focus),
trigger.addEventListener("blur",_blur);
},

_focus=function(e){
e.source.isFocus=!0,
_moveViewToTop(),
_startTimer();
},

_blur=function(e){
e.source.isFocus=!1;
},

_startTimer=function(){

_timer||(



_timer=setInterval(_checkFocusedTriggers,100));
},

_checkFocusedTriggers=function(){

var trigger=_getFocusedTrigger();

trigger||(



_moveViewToBottom(),
clearInterval(_timer),
_timer=null);
},

_calcBottomWhenViewOnTop=function(){

if(_options.hasOwnProperty("bottomWhenViewOnTop"))
return _options.bottomWhenViewOnTop;


var windowHeight=dimension.windowHeightDp(),
navBarHeight=dimension.navBarHeightDp();

if(0<_container.size.height)

return windowHeight-navBarHeight-_container.size.height;

},

_moveViewToTop=function(){

var trigger=_getFocusedTrigger();

if(trigger){



_bottomWhenViewOnTop||(
_bottomWhenViewOnTop=_calcBottomWhenViewOnTop());


var callbackResult=!0;

_options.hasOwnProperty("beforeMoveToTop")&&(
callbackResult=_options.beforeMoveToTop()),

_options.bottom||
_container.repeatCount,


!1===callbackResult||(



"transparent"==_options.bgdown?(
setTimeout(function(){
_container.backgroundColor=_options.bgup||"#efff";
},100),
_container.animate({
bottom:_bottomWhenViewOnTop,
duration:200})):


_container.animate({
backgroundColor:_options.bgup||"#efff",
bottom:_bottomWhenViewOnTop,
duration:200}))}


},

_moveViewToBottom=function(){

var callbackResult=!0;

_options.hasOwnProperty("beforeMoveToBottom")&&(
callbackResult=_options.beforeMoveToBottom());


!1===callbackResult||(



"transparent"==_options.bgdown?(
setTimeout(function(){
_container.backgroundColor=_options.bgdown||"#ffff";
},100),
_container.animate({
bottom:_options.bottom||0,
duration:200})):


_container.animate({
backgroundColor:_options.bgdown||"#ffff",
bottom:_options.bottom||0,
duration:200}));


},

_getFocusedTrigger=function(){

for(var

trigger,i=0;i<_triggers.length;i++)

if(trigger=_triggers[i],trigger.isFocus)
return trigger;



return null;
};

return{

setup:function(options){

_options=options||{};
_options.container&&_options.triggers&&(


_options.bgdown=_options.bgdown||_options.container.backgroundColor,
_options.bottom=_options.bottom||_options.container.bottom,
_container=_options.container,

_registerAnimationTriggers(_options.triggers));
},

forceMoveViewToBottom:_moveViewToBottom};


};

module.exports=AnimatedBottomView;