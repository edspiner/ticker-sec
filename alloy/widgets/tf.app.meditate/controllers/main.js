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

function Controller(){

















































































































































































function createPanel(w,h,color){
var opts={
width:w,
height:h,
backgroundColor:color?color:'white'};

return Ti.UI.createView(opts);
}var Widget=new(require('/alloy/widget'))('tf.app.meditate');if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='main',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.meditate=Ti.UI.createView({top:0,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,id:'meditate'}),$.__views.meditate&&$.addTopLevelView($.__views.meditate),$.__views.action=Ti.UI.createView({id:'action'}),$.__views.meditate.add($.__views.action),$.__views.selecttalk=Alloy.createWidget('tf.app.meditate','selecttalk',{id:'selecttalk',__parentSymbol:$.__views.meditate}),$.__views.selecttalk.setParent($.__views.meditate),$.__views.selecttime=Alloy.createWidget('tf.app.meditate','selecttime',{id:'selecttime',__parentSymbol:$.__views.meditate}),$.__views.selecttime.setParent($.__views.meditate),$.__views.prereview=Alloy.createWidget('tf.app.meditate','review',{id:'prereview',__parentSymbol:$.__views.meditate}),$.__views.prereview.setParent($.__views.meditate),$.__views.playtalk=Alloy.createWidget('tf.app.meditate','playtalk',{id:'playtalk',__parentSymbol:$.__views.meditate}),$.__views.playtalk.setParent($.__views.meditate),$.__views.timer=Alloy.createWidget('tf.app.meditate','timer',{id:'timer',__parentSymbol:$.__views.meditate}),$.__views.timer.setParent($.__views.meditate),$.__views.postreview=Alloy.createWidget('tf.app.meditate','review',{id:'postreview',__parentSymbol:$.__views.meditate}),$.__views.postreview.setParent($.__views.meditate),exports.destroy=function(){},_.extend($,$.__views),'use strict',$.meditate.title='Begin';var animatedButton,rxProgram,title='Begin',animate=!1,show=0,cus=require('services/current_user_service');$.show=function(screen,titleTxt){screen!=$.action&&++show,screen.opacity=0,screen.left=0,screen.animate({opacity:1,duration:300},function(){titleTxt&&($.meditate.title=titleTxt,DISPATCHER.trigger('tf:main.title.update'))}),1==show&&($.hide($.action),animatedButton.object.animate(!1))},$.hide=function(screen){screen!=$.action&&--show,0==show&&($.show($.action,title),animatedButton.object.animate(!0),DISPATCHER.trigger('tf:main.home.hide')),screen.animate({opacity:0,duration:300},function(){screen.left=Alloy.Globals.Style.Widget.Meditate.ViewWidth})};var _initScreens=function(){$.selecttalk.init($,$.selecttime,$.playtalk),$.selecttime.init($,$.prereview),$.prereview.init($,$.playtalk,$.timer),$.playtalk.init($,$.timer,$.postreview),$.timer.init($,$.postreview),$.postreview.init($),draw()},start=function(path){path.rxProgram=rxProgram,path.start=new Date().getTime(),path.listen?path.rxProgram?$.selecttalk.start(path):alert('Cannot listen to talks as no program is currently loaded'):$.selecttime.start(path)},finish=function(path){path.end=new Date().getTime(),DISPATCHER.trigger('tf:register.push'),path.review&&path.review.showRating&&(Ti.App.Properties.setString('meditate.showReview',path.review.showRating),DISPATCHER.trigger('tf:app.drawer.update')),!path.cancelled&&path.playtalk&&path.playtalk.completed&&Alloy.createModel('rx_program_item_progress',{urlParams:{pid:cus.singleton().get('userId'),rxid:path.rxProgram.rxId,rxProgramId:path.rxProgram.id},id:-1,completed:!0,programItemId:path.selecttalk.item.id}).save().then(function(){_loadRx()}),path.rxProgram&&(path.selecttalk&&(path.rxId=path.rxProgram.rxId,path.selecttalk.rxProgramId=path.rxProgram.id,path.selecttalk.itemId=path.selecttalk.item.id,delete path.selecttalk.item),delete path.rxProgram),require('services/event_tracking_service').record('meditate-session',path)};$.finish=finish;var









































































































sessionstart,startListenMeditate=function(){var pathway={listen:!0,meditate:!0};start(pathway)},startMeditate=function(){var pathway={listen:!1,meditate:!0};start(pathway)},startListen=function(){var pathway={listen:!0,meditate:!1};start(pathway)},draw=function(){var cfg=Alloy.Globals.Style.Widget.Meditate,panelHeight=.9*cfg.dp.ViewHeight,panelWidth=.8*cfg.dp.ViewWidth,cx=panelWidth/2,buttonBufferRadius=panelHeight/6;2*buttonBufferRadius>panelWidth&&(buttonBufferRadius=panelWidth/2,panelHeight=6*buttonBufferRadius);var panel=createPanel(panelWidth+'dp',panelHeight+'dp','#0fff'),bufferScale=1.25;buttonRadius=buttonBufferRadius/bufferScale;var meditate={file:'/images/meditate.svg',txPct:1?0:2,tyPct:-5,sizePct:75},listen={file:'/images/listen.svg',txPct:0,tyPct:-5,sizePct:75},listen_meditate={file:'/images/listen_meditate.svg',txPct:1?0:8,tyPct:-5,sizePct:80},btn1=require('ui/common/custom_circle_button').createButton({color:'transparent',borderColor:'#7fff',touchStyle:'#3fff',centerX:cx,centerY:buttonBufferRadius,radius:buttonRadius,enabled:!0,animate:!1,borderSize:1,svg:meditate,bufferScale:bufferScale,action:function(e,button){startMeditate()}});panel.add(btn1);var btn2=require('ui/common/custom_circle_button').createButton({color:'transparent',borderColor:'#7fff',touchStyle:'#3fff',centerX:cx,centerY:3*buttonBufferRadius,radius:buttonRadius,enabled:!0,animate:!1,borderSize:1,svg:listen,bufferScale:bufferScale,action:function(e,button){startListen()}});panel.add(btn2);var btn3=require('ui/common/custom_circle_button').createButton({color:'transparent',borderColor:'#fff',touchStyle:'#3fff',centerX:cx,centerY:5*buttonBufferRadius,radius:buttonRadius,enabled:!0,animate:!0,borderSize:1,svg:listen_meditate,bufferScale:bufferScale,action:function(e,button){startListenMeditate()}});animatedButton=btn3,panel.add(btn3),$.action.add(panel)},_init=function(){require('bootstrap/lifecycle').isActive()&&!animate&&(animate=!0),_initScreens(),_loadRx()},
trackSessionStart=function(){
require('services/event_tracking_service').record('start-view-meditate',{}),
sessionstart=new Date;
},
trackSessionEnd=function(){
require('services/event_tracking_service').record('end-view-meditate',{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});

},

_pause=function(){

animate=!1,
windowed&&
trackSessionEnd();

},

_resumed=function(){

animate||(
animate=!0),



windowed&&
trackSessionStart(),

_loadRx();
},



_loadRx=function(){
Alloy.createModel('rx',{
urlParams:{
pid:cus.singleton().get('userId'),
rxid:'current'}}).

fetch().then(function(rx){
if(rx&&rx.rxPrograms&&0<rx.rxPrograms.length){

rxProgram=void 0;

for(var i=rx.rxPrograms.length-1;0<=i;i--)

if(rx.rxPrograms[i].enabled&&(

void 0===rxProgram&&(
rxProgram=rx.rxPrograms[i]),


rx.rxPrograms[i].program.title&&rx.rxPrograms[i].program.title.match(/meditate/i))){
rxProgram=rx.rxPrograms[i];
break;
}


rxProgram&&(


rxProgram.rxId=rx.id);

}
});
},

_initEventListeners=function(){

Ti.App.addEventListener('tf:life.cycle.pause',_pause),
Ti.App.addEventListener('tf:life.cycle.resume',_resumed),
Ti.App.addEventListener('tf:life.cycle.loggedout',$.cleanup);var

v=$.meditate,
init=function(){
v.removeEventListener('postlayout',init),
_init();
};
v.addEventListener('postlayout',init);
},
removeEventListeners=function(){
Ti.App.removeEventListener('tf:life.cycle.pause',_pause),
Ti.App.removeEventListener('tf:life.cycle.resume',_resumed),
Ti.App.removeEventListener('tf:life.cycle.loggedout',$.cleanup);
};

$.cleanup=function(){
LOGGER.error('IN CLEANUP'),
animate=!1,
animatedButton&&
animatedButton.circleButton.destroy(),

$.selecttalk.cleanup(),
$.selecttime.cleanup(),
$.playtalk.cleanup(),
$.timer.cleanup(),
$.prereview.cleanup(),
$.postreview.cleanup(),
removeEventListeners(),
windowed&&
trackSessionEnd();

};

var windowed=!1;


$.setWindow=function(win,shared){
windowed=!shared,
windowed&&(

win.onBack=function(){
win.close();
},

$.activity.addEventListener('swipe',function(_event){!1;











}),
trackSessionStart()),

win.addEventListener('close',$.cleanup),
_initEventListeners();
},









_.extend($,exports);
}

module.exports=Controller;