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

function Controller(){var _Mathround=












































































































Math.round,Widget=new(require('/alloy/widget'))('tf.app.activitySummary');if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.activitySummary=Ti.UI.createView({backgroundColor:'white',height:Ti.UI.SIZE,id:'activitySummary'}),$.__views.activitySummary&&$.addTopLevelView($.__views.activitySummary),$.__views.goalBackground=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)({opacity:0,height:0,id:'goalBackground',image:'/images/bg-full-color.svg'}),$.__views.activitySummary.add($.__views.goalBackground),$.__views.container=Ti.UI.createView({height:Ti.UI.SIZE,id:'container',layout:'vertical'}),$.__views.activitySummary.add($.__views.container),_postlayout?$.addListener($.__views.container,'postlayout',_postlayout):__defers['$.__views.container!postlayout!_postlayout']=!0,$.__views.title=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:Alloy.Globals.Style.Widget.Activity.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,id:'title'}),$.__views.container.add($.__views.title),$.__views.sync=Alloy.createWidget('tf.app.activitySummary','sync',{top:-2,height:20,id:'sync',__parentSymbol:$.__views.container}),$.__views.sync.setParent($.__views.container),$.__views.steps=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Widget.Activity.Chart.Height,label:'Steps',id:'steps'}),$.__views.stepsScroller=Alloy.createWidget('tf.app.synchronisedScrollable','widget',{bubbleParent:!1,pageType:{widget:'tf.app.activitySummary',controller:'activityChart',args:{type:'steps',visible:!0}},scrollSyncId:'activity',id:'stepsScroller',__parentSymbol:$.__views.steps}),$.__views.stepsScroller.setParent($.__views.steps),$.__views.exercise=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Widget.Activity.Chart.Height,label:'Exercise',id:'exercise'}),$.__views.exerciseScroller=Alloy.createWidget('tf.app.synchronisedScrollable','widget',{bubbleParent:!1,pageType:{widget:'tf.app.activitySummary',controller:'activityChart',args:{type:'exercise'}},scrollSyncId:'activity',id:'exerciseScroller',__parentSymbol:$.__views.exercise}),$.__views.exerciseScroller.setParent($.__views.exercise),$.__views.cardio=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Widget.Activity.Chart.Height,label:'Cardio',id:'cardio'}),$.__views.cardioScroller=Alloy.createWidget('tf.app.synchronisedScrollable','widget',{bubbleParent:!1,pageType:{widget:'tf.app.activitySummary',controller:'activityChart',args:{type:'cardio'}},scrollSyncId:'activity',id:'cardioScroller',__parentSymbol:$.__views.cardio}),$.__views.cardioScroller.setParent($.__views.cardio),$.__views.activityTabGroup=Alloy.createWidget('tf.app.tabGroup','widget',{top:16,id:'activityTabGroup',children:[$.__views.steps,$.__views.exercise,$.__views.cardio],__parentSymbol:$.__views.container}),$.__views.activityTabGroup.setParent($.__views.container),$.__views.__alloyId234=Ti.UI.createView({opacity:.6,height:1,width:Alloy.Globals.Style.Widget.Activity.Chart.Radius,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId234'}),$.__views.container.add($.__views.__alloyId234),$.__views.activityReview=Alloy.createWidget('tf.app.activitySummary','activityReview',{top:12,id:'activityReview',__parentSymbol:$.__views.container}),$.__views.activityReview.setParent($.__views.container),exports.destroy=function(){},_.extend($,$.__views);var rxActivity,args=arguments[0]||{},du=require('utils/date'),realTimeSteps=0,realTimeActiveTime=0,stepsdata=[],exercisedata=[],cardiodata=[],showCardio=!1,hideAnimation=Ti.UI.createAnimation({opacity:0,duration:100}),showAnimation=Ti.UI.createAnimation({opacity:1,duration:100}),_postlayout=function(){$.container.removeEventListener('postlayout',_postlayout);var heightFitted=$.container.rect.height;$.container.height=heightFitted,$.activitySummary.height=heightFitted,$.goalBackground.height=heightFitted},setActivity=function(activity){rxActivity=activity,$.activityReview.setActivity(activity)},_handleActivityUpdate=function(data){realTimeSteps=data.steps,realTimeActiveTime=_Mathround(data.activeTime/6e4),
stepsdata.length&&(
stepsdata[stepsdata.length-1].value=realTimeSteps,
_update());

},

_handleSummaryData=function(summary){var _Mathceil=






















Math.ceil,summaryData=summary.data;showCardio=!1,stepsdata=[],exercisedata=[],cardiodata=[];for(var day,stepCount,stepGoal,i=1;7>=i;i++)day=summaryData[i],stepCount=7==i?realTimeSteps:day.steps,stepGoal=day.prescribedSteps?day.prescribedSteps:1e4,stepsdata.push({id:day.start,value:stepCount,goal:stepGoal,progress:Math.floor(100*(stepCount/stepGoal)),daysPerWeek:day.prescribedDays}),exercisedata.push({id:day.start,value:_Mathceil(day.qualifyingTime/60),
goal:day.prescribedTime?_Mathround(day.prescribedTime/60):30,
progress:day.percentComplete,
daysPerWeek:day.prescribedDays}),

cardiodata.push({
id:day.start,
value:_Mathceil(day.qualifyingCardioTime/60),
goal:day.prescribedCardioTime?_Mathround(day.prescribedCardioTime/60):0,
progress:day.percentCardioComplete,
daysPerWeek:day.prescribedCardioDays,
minHR:day.prescribedHeartRateMin,
maxHR:day.prescribedHeartRateMax}),

showCardio=showCardio||0<day.prescribedCardioTime;

_update();
},

_update=function(){
$.sync.update(),
$.stepsScroller.setData(stepsdata),
$.exerciseScroller.setData(exercisedata),
showCardio?(
$.cardioScroller.setData(cardiodata),
$.activityTabGroup.showTab('cardio',!0)):

$.activityTabGroup.showTab('cardio',!1),

$.activityReview.setData({steps:stepsdata,exercise:exercisedata,cardio:cardiodata});
},

_updateTitle=function(date){
var title=du.getLongDayString(date)+'\u2019s Activity';
$.title.text!==title&&(
$.title.text?
$.title.animate(hideAnimation,function(){
$.title.text=title,
$.title.animate(showAnimation);
}):

$.title.text=title);


},

_handlePageView=function(e){
'activity'===e.scrollSyncId&&
_updateTitle(new Date(e.id));

},

_handleGoalUpdate=function(e){
$.goalBackground.opacity=e.completed?1:0;
},

_init=function(){
DISPATCHER.on('tf:activity.update',_handleActivityUpdate),
DISPATCHER.on('tf:summary.loaded',_handleSummaryData),
DISPATCHER.on('tf:app.synchronisedScrollable.scrollend',_handlePageView),
DISPATCHER.on('tf:app.activitySummary.goal',_handleGoalUpdate),
require('services/summary_service').getSummaryData().then(_handleSummaryData),
require('tickerfit/tracking').triggerUpdate();
};

args.rxActivity&&
setActivity(args.rxActivity),


_init(),

exports.setActivity=setActivity,

exports.cleanup=function(){
LOGGER.debug('IN SUMMARY CLEANUP'),
DISPATCHER.off('tf:activity.update',_handleActivityUpdate),
DISPATCHER.off('tf:summary.loaded',_handleSummaryData),
DISPATCHER.off('tf:app.synchronisedScrollable.scrollend',_handlePageView),
DISPATCHER.off('tf:app.activitySummary.goal',_handleGoalUpdate),
$.activityTabGroup.cleanup(),
$.activityReview.cleanup(),
$.stepsScroller.cleanup(),
$.exerciseScroller.cleanup(),
$.cardioScroller.cleanup();
},





__defers['$.__views.container!postlayout!_postlayout']&&$.addListener($.__views.container,'postlayout',_postlayout),



_.extend($,exports);
}

module.exports=Controller;