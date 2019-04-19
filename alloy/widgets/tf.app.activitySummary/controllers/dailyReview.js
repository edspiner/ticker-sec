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




if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dailyReview',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.dailyReview=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'dailyReview',layout:'vertical'}),

$.__views.dailyReview&&$.addTopLevelView($.__views.dailyReview),
_touchStart?$.addListener($.__views.dailyReview,'touchstart',_touchStart):__defers['$.__views.dailyReview!touchstart!_touchStart']=!0,$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:11},color:Alloy.Globals.Style.Color.BattleshipGrey,id:'title'}),

$.__views.dailyReview.add($.__views.title),
$.__views.progress=Alloy.createWidget('tf.app.activitySummary','progressIcon',{top:8,id:'progress',__parentSymbol:$.__views.dailyReview}),
$.__views.progress.setParent($.__views.dailyReview),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
du=require('utils/date'),
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.dailyReview);var


activityType,data=!1,

_init=function(){
DISPATCHER.on('tf:app.synchronisedScrollable.scrollend',_handleScroll),
DISPATCHER.on('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab),
DISPATCHER.on('tf:app.activitySummary.goal',_handleGoalUpdate);
},
_handleGoalUpdate=function(e){
e.completed?
$.progress.setColor(Alloy.Globals.Style.Color.KiwiGreen):

$.progress.setColor(Alloy.Globals.Style.Color.LightGold);

},

_touchStart=function(){
animateButton($.dailyReview,$.dailyReview.color,.9,function(){
DISPATCHER.trigger('tf:app.synchronisedScrollable.scrollToId',{scrollSyncId:'activity',id:data.id,type:activityType});
}),
require('services/event_tracking_service').record('tap-daily-review',{type:activityType});
},

_setText=function(label,text){
label.text!==text&&(
label.text=text);

},

_handleScroll=function(e){
$.progress.setHighlight(data&&data.id===e.id);
},

_handleShowTab=function(e){



},

_setData=function(d,icon,type){
var dateChange=!1;
data&&data.id===d.id||(
dateChange=!0),

data=d,
activityType=type,
dateChange&&
_setText($.title,du.getShortDayString(new Date(data.id))),

$.progress.setIcon(icon),
$.progress.setProgress(data.progress);
};

_init(),

exports.setData=_setData,
exports.cleanup=function(){
DISPATCHER.off('tf:app.synchronisedScrollable.scrollend',_handleScroll),
DISPATCHER.off('tf:app.tabGroup.activityTabGroup.button.click',_handleShowTab),
DISPATCHER.off('tf:app.activitySummary.goal',_handleGoalUpdate);
},





__defers['$.__views.dailyReview!touchstart!_touchStart']&&$.addListener($.__views.dailyReview,'touchstart',_touchStart),



_.extend($,exports);
}

module.exports=Controller;