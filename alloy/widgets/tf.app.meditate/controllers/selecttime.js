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
}

function createLabelStyle(text,size){
return{
font:{
fontFamily:Alloy.CFG.fontLight,
fontSize:size+'dp'},

color:'#fff',
text:text};

}
function createTimeButton(time,cx,cy,buttonRadius,bufferScale,borderColor){

var secsInMin=60;
return require('ui/common/custom_circle_button').createButton({
color:'transparent',
borderColor:borderColor?borderColor:'#7fff',
touchStyle:'#3fff',
centerX:cx,
centerY:cy,
radius:buttonRadius,
iconStyle:createLabelStyle(time,buttonRadius),
enabled:!0,
animate:!1,
borderSize:1,
bufferScale:bufferScale,
action:function(e,button){
next(time*secsInMin);
}});

}var Widget=new(require('/alloy/widget'))('tf.app.meditate');if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='selecttime',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.selecttime=Ti.UI.createView({left:Alloy.Globals.Style.Widget.Meditate.ViewWidth,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,id:'selecttime'}),$.__views.selecttime&&$.addTopLevelView($.__views.selecttime),exports.destroy=function(){},_.extend($,$.__views);var path,main,suggested,prereview,screenView=$.selecttime,title='How long?';$.init=function(Main,Prereview){main=Main,prereview=Prereview,draw()};var _cancel=function(){path.cancelled=!0,path.cancelState='selecttime',main.finish(path),$.end()};$.start=function(Path){DISPATCHER.trigger('tf:main.home.show'),DISPATCHER.on('tf:main.home.click',_cancel),path=Path,main.show(screenView,title),animateSuggested(!0)},$.end=function(){DISPATCHER.off('tf:main.home.click',_cancel),animateSuggested(!1),main.hide(screenView)};var next=function(duration){path.selecttime={durationSecs:duration},prereview.start(path),$.end()},
draw=function(){var _Mathsin=





















Math.sin,_MathPI=Math.PI,cfg=Alloy.Globals.Style.Widget.Meditate,panelWidth=.7*cfg.dp.ViewWidth,buttonRadius=panelWidth/8,bufferScale=1.25,buttonBufferRadius=buttonRadius*bufferScale,animationBuffer=2*(buttonBufferRadius-buttonRadius);panelWidth+=animationBuffer;var panelHeight=panelWidth,panel=createPanel(panelWidth+'dp',panelHeight+'dp','#0fff'),cx=panelWidth/2,cy=cx,panelRadius=cy-buttonBufferRadius;panel.add(Ti.UI.createLabel(createLabelStyle('Minutes',buttonRadius/2)));var btn5=createTimeButton(5,cx,buttonBufferRadius,buttonRadius,bufferScale);panel.add(btn5);var xOff=panelRadius*_Mathsin(60*_MathPI/180),
yOff=panelRadius*_Mathsin(30*_MathPI/180),
btn10=createTimeButton(10,cx+xOff,cy-yOff,buttonRadius,bufferScale);
panel.add(btn10);
var btn15=createTimeButton(15,cx+xOff,cy+yOff,buttonRadius,bufferScale);
panel.add(btn15);
var btn20=createTimeButton(20,cx,panelHeight-buttonBufferRadius,buttonRadius,bufferScale,'#fff');
suggested=btn20,
panel.add(btn20);
var btn25=createTimeButton(25,cx-xOff,cy+yOff,buttonRadius,bufferScale);
panel.add(btn25);
var btn30=createTimeButton(30,cx-xOff,cy-yOff,buttonRadius,bufferScale);
panel.add(btn30),
$.selecttime.add(panel);
},

animateSuggested=function(animate){
suggested.object.animate(animate);
};

$.cleanup=function(){
suggested&&
suggested.circleButton.destroy();

},









_.extend($,exports);
}

module.exports=Controller;