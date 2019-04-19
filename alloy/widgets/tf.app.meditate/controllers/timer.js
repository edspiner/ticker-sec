var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.meditate/'+s:
s.substring(0,index)+'/tf.app.meditate/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){var _Mathfloor=


















































































































































Math.floor,Widget=new(require('/alloy/widget'))('tf.app.meditate');if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='timer',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.timer=Ti.UI.createView({left:Alloy.Globals.Style.Widget.Meditate.ViewWidth,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,id:'timer'}),$.__views.timer&&$.addTopLevelView($.__views.timer),$.__views.countdown=Ti.UI.createView({id:'countdown'}),$.__views.timer.add($.__views.countdown),$.__views.__alloyId81=Ti.UI.createView({height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId81'}),$.__views.countdown.add($.__views.__alloyId81),$.__views.time=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHairline,fontSize:Alloy.Globals.Style.Widget.Meditate.TimerSize},color:'#fff',id:'time'}),$.__views.__alloyId81.add($.__views.time),$.__views.playpause=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:'20dp',id:'playpause'}),$.__views.__alloyId81.add($.__views.playpause),$.__views.play=(require('/ui/common/custom_circle_button').createButton||Ti.UI.createButton)({borderRadius:Alloy.Globals.Style.Unit.unit4,borderWidth:'1dp',height:'40dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:'transparent',borderColor:'#fff',touchStyle:'#3fff',centerX:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,centerY:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,radius:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,enabled:!0,animate:!1,borderSize:1,svg:{file:'/images/play.svg',txPct:Alloy.Globals.Style.Widget.Meditate.PlaySvgTxPct,tyPct:0,sizePct:Alloy.Globals.Style.Widget.Meditate.PlayPauseSvgScale},bufferScale:1,action:void 0,id:'play'}),$.__views.playpause.add($.__views.play),_play?$.addListener($.__views.play,'click',_play):__defers['$.__views.play!click!_play']=!0,$.__views.pause=(require('/ui/common/custom_circle_button').createButton||Ti.UI.createButton)({borderRadius:Alloy.Globals.Style.Unit.unit4,borderWidth:'1dp',height:'40dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:'transparent',borderColor:'#fff',touchStyle:'#3fff',centerX:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,centerY:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,radius:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,enabled:!0,animate:!1,borderSize:1,svg:{file:'/images/pause.svg',txPct:Alloy.Globals.Style.Widget.Meditate.PauseSvgTxPct,tyPct:0,sizePct:Alloy.Globals.Style.Widget.Meditate.PlayPauseSvgScale},bufferScale:1,action:void 0,id:'pause'}),$.__views.playpause.add($.__views.pause),_pause?$.addListener($.__views.pause,'click',_pause):__defers['$.__views.pause!click!_pause']=!0,exports.destroy=function(){},_.extend($,$.__views);var main,review,started,paused,screenView=$.timer,title='Timer',soundPlayer=Titanium.Media.createSound({allowBackground:!0,url:'/sounds/bell.mp3'});$.init=function(Main,Review){main=Main,review=Review};var _cancel=function(path){path.cancelled=!0,path.cancelState='timer',soundPlayer.stop(),main.finish(path),$.end(path)};$.start=function(Path){started=!1,_showButton();var myPath=Path;myPath.timer={},myPath.timer.cancel=function(){_cancel(myPath)},DISPATCHER.trigger('tf:main.home.show'),DISPATCHER.on('tf:main.home.click',myPath.timer.cancel),$.countdown.opacity=0,setTimeout(function(){myPath.cancelled||displayRemaining(myPath.selecttime.durationSecs)},12e3),main.show(screenView,title),!1;var doCountDown=function(){soundPlayer.removeEventListener('complete',doCountDown),myPath.cancelled||setTimeout(function(){myPath.cancelled||start(myPath)},5e3)};soundPlayer.addEventListener('complete',doCountDown),soundPlayer.play()},$.end=function(path){DISPATCHER.off('tf:main.home.click',path.timer.cancel),main.hide(screenView)};var start=function(path){displayRemaining(path.selecttime.durationSecs),started=!0,paused=!1,_showButton(started),path.timer={start:new Date().getTime()};var update=function(){var duration;path.timer.elapsed=new Date().getTime()-path.timer.start,path.timer.paused=path.timer.paused||0,paused?!path.timer.pause&&(path.timer.pause=new Date().getTime(),path.timer.durationSecs=_Mathfloor((path.timer.elapsed-path.timer.paused)/1e3)):(


path.timer.pause&&(


path.timer.paused+=new Date().getTime()-path.timer.pause,
path.timer.pause=void 0),

path.timer.durationSecs=_Mathfloor((path.timer.elapsed-path.timer.paused)/1e3)),


path.cancelled?
clearInterval(interval):
path.timer.durationSecs>=path.selecttime.durationSecs?(
started=!1,
clearInterval(interval),
displayRemaining(0),
next(path)):

displayRemaining(path.selecttime.durationSecs-path.timer.durationSecs);

},
interval=setInterval(update,1e3);
},

displayRemaining=function(duration){
var remain;
if(0<duration){var
mins=_Mathfloor(duration/60),
secs=duration%60;
remain=(9<mins?mins:'0'+mins)+':'+(9<secs?secs:'0'+secs);
}else
remain='00:00';

$.time.text=remain,
0===$.countdown.opacity?
$.countdown.animate({
opacity:1,
duration:8e3},
function(){
$.countdown.opacity=1;
}):
0>=duration&&
$.countdown.animate({
opacity:0,
duration:6e3},
function(){

});

},

next=function(path){

path.timer.end=new Date().getTime(),
path.timer.completed=!0;
var doReview=function(){
soundPlayer.removeEventListener('complete',doReview),
path.cancelled||
review.start(path,$.end);

};
soundPlayer.addEventListener('complete',doReview),
soundPlayer.play();
},

_showButton=function(playing){
void 0===playing?(



$.play.visible=!1,
$.pause.visible=!1):($.play.visible=!playing,$.pause.visible=!!playing);

},

_play=function(){
started&&(
paused=!1,
_showButton(!0));

},

_pause=function(){
started&&(
paused=!0,
_showButton(!1));

};

$.cleanup=function(){},





__defers['$.__views.play!click!_play']&&$.addListener($.__views.play,'click',_play),__defers['$.__views.pause!click!_pause']&&$.addListener($.__views.pause,'click',_pause),



_.extend($,exports);
}

module.exports=Controller;