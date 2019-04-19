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









































































































































































































Math.floor,Widget=new(require('/alloy/widget'))('tf.app.meditate');if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='playtalk',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.playtalk=Ti.UI.createView({left:Alloy.Globals.Style.Widget.Meditate.ViewWidth,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,id:'playtalk'}),$.__views.playtalk&&$.addTopLevelView($.__views.playtalk),$.__views.countdown=Ti.UI.createView({id:'countdown'}),$.__views.playtalk.add($.__views.countdown),$.__views.__alloyId72=Ti.UI.createView({height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId72'}),$.__views.countdown.add($.__views.__alloyId72),$.__views.title=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontLight,fontSize:Alloy.Globals.Style.Widget.Meditate.TrackTitleSize},color:'#fff',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,width:'80%',id:'title'}),$.__views.__alloyId72.add($.__views.title),$.__views.time=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHairline,fontSize:Alloy.Globals.Style.Widget.Meditate.TrackTimerSize},color:'#fff',top:'20dp',id:'time'}),$.__views.__alloyId72.add($.__views.time),$.__views.playpause=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:'30dp',id:'playpause'}),$.__views.__alloyId72.add($.__views.playpause),$.__views.play=(require('/ui/common/custom_circle_button').createButton||Ti.UI.createButton)({borderRadius:Alloy.Globals.Style.Unit.unit4,borderWidth:'1dp',height:'40dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:'transparent',borderColor:'#fff',touchStyle:'#3fff',centerX:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,centerY:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,radius:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,enabled:!0,animate:!1,borderSize:1,svg:{file:'/images/play.svg',txPct:Alloy.Globals.Style.Widget.Meditate.PlaySvgTxPct,tyPct:0,sizePct:Alloy.Globals.Style.Widget.Meditate.PlayPauseSvgScale},bufferScale:1,action:void 0,id:'play'}),$.__views.playpause.add($.__views.play),_play?$.addListener($.__views.play,'click',_play):__defers['$.__views.play!click!_play']=!0,$.__views.pause=(require('/ui/common/custom_circle_button').createButton||Ti.UI.createButton)({borderRadius:Alloy.Globals.Style.Unit.unit4,borderWidth:'1dp',height:'40dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:'transparent',borderColor:'#fff',touchStyle:'#3fff',centerX:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,centerY:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,radius:Alloy.Globals.Style.Widget.Meditate.PlayPauseRadius,enabled:!0,animate:!1,borderSize:1,svg:{file:'/images/pause.svg',txPct:Alloy.Globals.Style.Widget.Meditate.PauseSvgTxPct,tyPct:0,sizePct:Alloy.Globals.Style.Widget.Meditate.PlayPauseSvgScale},bufferScale:1,action:void 0,id:'pause'}),$.__views.playpause.add($.__views.pause),_pause?$.addListener($.__views.pause,'click',_pause):__defers['$.__views.pause!click!_pause']=!0,exports.destroy=function(){},_.extend($,$.__views);var main,timer,review,screenView=$.playtalk,title='Listen';$.init=function(Main,Timer,Review){main=Main,timer=Timer,review=Review};var _cancel=function(path){path.cancelled=!0,path.cancelState='playtalk',main.finish(path),$.end(path)};$.start=function(Path){_showButton();var myPath=Path;myPath.playtalk={start:new Date().getTime()},myPath.playtalk.cancel=function(){_cancel(myPath)},DISPATCHER.trigger('tf:main.home.show'),DISPATCHER.on('tf:main.home.click',myPath.playtalk.cancel),$.countdown.opacity=0,main.show(screenView,title),playAudioItem(myPath)},$.end=function(path){DISPATCHER.off('tf:main.home.click',path.playtalk.cancel),main.hide(screenView)};var playAudio=function(path,url){var audioOpts={url:url,allowBackground:!0};!1;var state,player=Ti.Media.createAudioPlayer(audioOpts),playing=!1,finished=!1;player.addEventListener('change',function(e){state=e.state,3===state&&(playing=!0,_showButton(!0)),2===state&&_showButton(!1),5===state&&(finished=!0)});var togglePlayPause=function(){playing&&!finished&&(currentDuration=void 0,player.paused?player.start():player.pause())};DISPATCHER.on('tf:playtalk.pause.click',togglePlayPause),DISPATCHER.on('tf:playtalk.play.click',togglePlayPause);var currentDuration,cleanup=function(){DISPATCHER.off('tf:playtalk.pause.click',togglePlayPause),DISPATCHER.off('tf:playtalk.play.click',togglePlayPause),clearInterval(interval),player&&(player.stop(),player.release()),player=void 0},finishOnNextInterval=!1,interval=setInterval(function(){var progress;progress=1?player.time:player.progress;var duration=player.duration;finishOnNextInterval&&(finished=!0),0<duration&&1e3>duration-progress&&(finishOnNextInterval=!0),path.cancelled?cleanup():finished?(displayRemaining(0),cleanup(),next(path)):0<duration&&(!currentDuration&&(currentDuration=duration),displayRemaining(_Mathfloor((currentDuration-progress)/1e3)));


},1e3);

player.start(),
displayRemaining('-');
},

playAudioItem=function(path){var
rxProgram=path.rxProgram,
item=path.selecttalk.item;
$.title.text=item.content.title,

Alloy.createModel('contentAccessToken',{
urlParams:{
cid:item.content.id,
rxProgramId:rxProgram.id,
programItemId:item.id}}).

fetch().then(function(token){
playAudio(path,token.url);
});
},

next=function(path){

path.playtalk.completed=!0,
path.playtalk.end=new Date().getTime(),
path.meditate?(
timer.start(path),

$.end(path)):

review.start(path,$.end);

},

displayRemaining=function(duration){
var remain;
if('-'===duration)
remain='--:--';else
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
duration:2e3},
function(){
$.countdown.opacity=1;
}):
0>=duration&&
$.countdown.animate({
opacity:0,
duration:2e3},
function(){

});

},

_showButton=function(playing){
void 0===playing?(



$.play.visible=!1,
$.pause.visible=!1):($.play.visible=!playing,$.pause.visible=!!playing);

},

_play=function(){
DISPATCHER.trigger('tf:playtalk.play.click');
},

_pause=function(){
DISPATCHER.trigger('tf:playtalk.pause.click');
};

$.cleanup=function(){},





__defers['$.__views.play!click!_play']&&$.addListener($.__views.play,'click',_play),__defers['$.__views.pause!click!_pause']&&$.addListener($.__views.pause,'click',_pause),



_.extend($,exports);
}

module.exports=Controller;