var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitySummary/'+s:
s.substring(0,index)+'/tf.app.activitySummary/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activitySummary');




if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activityChart',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.activityChart=Ti.UI.createView(
{height:Ti.UI.SIZE,apiName:'Ti.UI.View',id:'activityChart',classes:['view-height-fit']}),

$.__views.activityChart&&$.addTopLevelView($.__views.activityChart),
openActivityLog?$.addListener($.__views.activityChart,'click',openActivityLog):__defers['$.__views.activityChart!click!openActivityLog']=!0,$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14dp'},color:Alloy.Globals.Style.Color.TwilightBlue,apiName:'Ti.UI.Label',id:'icon',classes:['twilight-blue']}),

$.__views.activityChart.add($.__views.icon),
$.__views.chart=Alloy.createWidget('tf.app.chart','circleChart',{chart:{centerX:Alloy.Globals.Style.Widget.Activity.Chart.Radius,centerY:Alloy.Globals.Style.Widget.Activity.Chart.Radius,radius:Alloy.Globals.Style.Widget.Activity.Chart.Radius,borderWidth:Alloy.Globals.Style.Widget.Activity.Chart.BorderWidth,fillColor:'transparent',borderColor:Alloy.Globals.Style.Color.SilverTwo,progressColor:Alloy.Globals.Style.Color.RedPink},apiName:'Alloy.Require',id:'chart',classes:['chart'],__parentSymbol:$.__views.activityChart}),
$.__views.chart.setParent($.__views.activityChart),
$.__views.value=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:Alloy.Globals.Style.Widget.Activity.Chart.ValueFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,text:'--',apiName:'Ti.UI.Label',id:'value',classes:['value','twilight-blue']}),

$.__views.activityChart.add($.__views.value),
$.__views.goal=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Activity.Chart.GoalFontSize},color:Alloy.Globals.Style.Color.BattleshipGrey,top:Alloy.Globals.Style.Widget.Activity.Chart.GoalTop,width:Alloy.Globals.Style.Widget.Activity.Chart.Radius,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'goal',classes:['goal','battleship-grey']}),

$.__views.activityChart.add($.__views.goal),
$.__views.subGoal=Ti.UI.createView(
{top:Alloy.Globals.Style.Widget.Activity.Chart.SubGoalTop,width:Alloy.Globals.Style.Widget.Activity.Chart.Radius,height:Ti.UI.SIZE,opacity:0,apiName:'Ti.UI.View',id:'subGoal',classes:['sub-goal']}),

$.__views.activityChart.add($.__views.subGoal),
$.__views.__alloyId231=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',layout:'horizontal',classes:['view-width-height-fit'],id:'__alloyId231'}),

$.__views.subGoal.add($.__views.__alloyId231),
$.__views.subGoal1=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Activity.Chart.SubGoalFontSize},color:Alloy.Globals.Style.Color.RedPink,width:Ti.UI.SIZE,height:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'subGoal1',classes:['sub-goal-val','red-pink']}),

$.__views.__alloyId231.add($.__views.subGoal1),
$.__views.subGoalIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:Alloy.Globals.Style.Widget.Activity.Chart.SubGoalFontSize},color:Alloy.Globals.Style.Color.RedPink,text:'p',width:Ti.UI.SIZE,height:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'subGoalIcon',classes:['sub-goal-icon','red-pink','tf-heart']}),

$.__views.__alloyId231.add($.__views.subGoalIcon),
$.__views.subGoal2=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Activity.Chart.SubGoalFontSize},color:Alloy.Globals.Style.Color.RedPink,width:Ti.UI.SIZE,height:Ti.UI.SIZE,apiName:'Ti.UI.Label',id:'subGoal2',classes:['sub-goal-val','red-pink']}),

$.__views.__alloyId231.add($.__views.subGoal2),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
nu=require('/utils/number'),
WTools=require('WidgetTools');
WTools.setTiProps(args,$.activityChart);var


id,pageidx,

type,value,goal,progress,hrMin,hrMax,

visible=!1,

current=!1,

dirty=!1,

_init=function(){
args.type&&_setType(args.type),
visible=!0===args.visible,
_setData(args),
DISPATCHER.on('tf:app.synchronisedScrollable.scrollend',_handleScroll),
DISPATCHER.on('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab);
},

_setData=function(data){
dirty=dirty||pageidx!==data.pageidx,
dirty=dirty||id!==data.id,
dirty=dirty||value!==data.value,
dirty=dirty||goal!==data.goal,
dirty=dirty||hrMin!==data.minHR,
dirty=dirty||hrMax!==data.maxHR,
dirty=dirty||progress!==data.progress,
pageidx=data.pageidx,
id=data.id||0,
value=data.value||0,
goal=data.goal||0,
progress=data.progress||0,
hrMin=data.minHR||0,
hrMax=data.maxHR||0;
},
_getPageIdx=function(){
return pageidx;
},
_getId=function(){
return id;
},
_setType=function(t){
type=t,
'steps'===type?
$.addClass($.icon,'tf-walking'):
'exercise'===type?
$.addClass($.icon,'tf-running'):
'cardio'===type&&
$.addClass($.icon,'tf-cardio');

},

updating=!1,
_update=function(animate){
if(updating)

return void LOGGER.debug('Activity Chart['+type+' - '+new Date(id)+'] Update:'+progress+' - Ignored, already updating');

if(!dirty)

return void LOGGER.debug('Activity Chart['+type+' - '+new Date(id)+'] Update:'+progress+' - Ignored, not dirty!');

updating=!0;
var pct=progress;
LOGGER.debug('Activity Chart['+type+' - '+new Date(id)+'] Update:'+progress+' Animate:'+animate),

96<pct&&100>pct&&(pct=96);var
valueTxt='steps'===type?nu.formatNumber(value):value+' min'+(1===value?'':'s'),
goalTxt='steps'===type?type+' of '+goal:'cardio'===type?'of '+goal+' mins':type+' of '+goal+' mins';
$.updateViews({
"#value":{
text:valueTxt,
color:0<pct?Alloy.Globals.Style.Color.TwilightBlue:Alloy.Globals.Style.Color.BattleshipGrey},

"#goal":{
text:goalTxt},

"#subGoal":{
opacity:'cardio'===type?1:0},

"#subGoal1":{
text:hrMin+' \u2264 ',
color:Alloy.Globals.Style.Color.RedPink},

"#subGoalIcon":{
color:Alloy.Globals.Style.Color.RedPink},

"#subGoal2":{
text:' \u2264 '+hrMax,
color:Alloy.Globals.Style.Color.RedPink},

"#icon":{
color:0<pct?Alloy.Globals.Style.Color.TwilightBlue:Alloy.Globals.Style.Color.BattleshipGrey}}),


$.chart.setProgressColor(Alloy.Globals.Style.Color.RedPink),
$.chart.setBorderColor(0<pct?Alloy.Globals.Style.Color.DuckEggBlue:Alloy.Globals.Style.Color.SilverTwo),
$.chart.setProgress(pct,animate,function(){
100<=pct&&(
$.chart.setProgressColor(Alloy.Globals.Style.Color.KiwiGreen,!0,animate),
$.value.color=Alloy.Globals.Style.Color.KiwiGreen),

updating=!1;
});
},
_hide=function(animate){
$.updateViews({
"#value":{
text:'--',
color:Alloy.Globals.Style.Color.BattleshipGrey},

"#goal":{
text:'cardio'===type?'of -- mins':type+' of --'},

"#subGoal":{
opacity:'cardio'===type?1:0},

"#subGoal1":{
text:'--',
color:Alloy.Globals.Style.Color.BattleshipGrey},

"#subGoalIcon":{
color:Alloy.Globals.Style.Color.BattleshipGrey},

"#subGoal2":{
text:'--',
color:Alloy.Globals.Style.Color.BattleshipGrey},

"#icon":{
color:Alloy.Globals.Style.Color.BattleshipGrey}}),


$.chart.setBorderColor(Alloy.Globals.Style.Color.SilverTwo),
$.chart.setProgress(0);
},
_handleScroll=function(e){
e.id===id?(
current=!0,
_update(visible),
updating=!1,
dirty=!1):

current&&(
updating=!1,
current=!1,
dirty=!0,
_hide(visible));


},
_handleShowTab=function(e){

visible=type===e.id;
},

openActivityLog=function(){
DISPATCHER.trigger('tf:app.activitylog.open',{pageId:pageidx});
},

_cleanup=function(){
$.chart.cleanup(),
DISPATCHER.off('tf:app.synchronisedScrollable.scrollend',_handleScroll),
DISPATCHER.off('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab);
};

_init(),


exports.setData=_setData,
exports.getPageIdx=_getPageIdx,
exports.getId=_getId,
exports.cleanup=_cleanup,





__defers['$.__views.activityChart!click!openActivityLog']&&$.addListener($.__views.activityChart,'click',openActivityLog),



_.extend($,exports);
}

module.exports=Controller;