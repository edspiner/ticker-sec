var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dashboard_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'transparent',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',id:'container',layout:'vertical'}),

$.__views.row.add($.__views.container),
$.__views.header=Ti.UI.createView(
{height:45,backgroundColor:'#F8FAFB',id:'header'}),

$.__views.container.add($.__views.header),
$.__views.__alloyId120=Ti.UI.createView(
{left:32,width:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId120'}),

$.__views.header.add($.__views.__alloyId120),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,text:'i',height:Ti.UI.FILL,id:'icon'}),

$.__views.__alloyId120.add($.__views.icon),
$.__views.time=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,height:Ti.UI.FILL,left:8,width:Ti.UI.SIZE,id:'time',text:'A Time'}),

$.__views.__alloyId120.add($.__views.time),
$.__views.headerState=Ti.UI.createView(
{right:32,height:24,width:Ti.UI.SIZE,borderRadius:4,id:'headerState',layout:'horizontal'}),

$.__views.header.add($.__views.headerState),
$.__views.stateIcon=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,id:'stateIcon'}),

$.__views.headerState.add($.__views.stateIcon),
$.__views.stateDue=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.LightGold,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'F',id:'stateDue'}),

$.__views.stateIcon.add($.__views.stateDue),
$.__views.stateOverdue=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.PumpkinOrange,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'S',id:'stateOverdue'}),

$.__views.stateIcon.add($.__views.stateOverdue),
$.__views.stateUpcoming=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.OtherGreen,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'N',id:'stateUpcoming'}),

$.__views.stateIcon.add($.__views.stateUpcoming),
$.__views.stateIncomplete=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.RedPink,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'S',id:'stateIncomplete'}),

$.__views.stateIcon.add($.__views.stateIncomplete),
$.__views.stateComplete=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.Silver,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'h',id:'stateComplete'}),

$.__views.stateIcon.add($.__views.stateComplete),
$.__views.state=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.BattleshipGrey,left:6,right:0,height:Ti.UI.FILL,width:Ti.UI.SIZE,id:'state'}),

$.__views.headerState.add($.__views.state),
$.__views.title=Ti.UI.createView(
{top:10,height:35,bottom:5,id:'title'}),

$.__views.container.add($.__views.title),
toggleComplete?$.addListener($.__views.title,'click',toggleComplete):__defers['$.__views.title!click!toggleComplete']=!0,$.__views.name=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.SIZE,height:Ti.UI.FILL,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,left:32,id:'name',text:'A Name'}),

$.__views.title.add($.__views.name),
$.__views.routineCheck=Alloy.createWidget('tf.app.routines','toggleCheck',{right:32,id:'routineCheck',__parentSymbol:$.__views.title}),
$.__views.routineCheck.setParent($.__views.title),
$.__views.taskList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.routines',controller:'dashboardTask_cell'},opacity:1,bottom:24,type:'simulated',id:'taskList',__parentSymbol:$.__views.container}),
$.__views.taskList.setParent($.__views.container),
$.__views.underline=Ti.UI.createView(
{height:3,backgroundColor:'#EEF1F2',id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

















tasks,
dashboardViewId,
dashboardRoutine,args=arguments[0]||{},du=require('utils/date'),cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,

_onUpdate=function(reload){
dashboardViewId&&DISPATCHER.trigger('tf:routines.dashboard.'+dashboardViewId+'.updated',{reload:reload});
},
completeTask=function(task){
_updateDashboardRoutine(),

_onUpdate(!1),
Alloy.createModel('routine_dashboard_task',{
urlParams:{
pid:cus.singleton().get('userId'),
rid:dashboardRoutine.id,
tid:task.id,
status:task.taskStatus,
date:'today'},

id:-1}).
save().then(function(){



















}).finally(function(){
_onUpdate(!0);
}),
require('services/event_tracking_service').record('tap-routine-task-complete',{complete:'DONE'===task.taskStatus,routineId:dashboardRoutine.id,taskId:task.id});
},

toggleComplete=function(){
animateButton($.name,$.name.color,.97,function(){
var complete=$.routineCheck.getToggle();
complete=!complete,
$.routineCheck.setToggle(complete),
_completeRoutine(complete),
require('services/event_tracking_service').record('tap-routine-complete',{complete:complete,routineId:dashboardRoutine.id});
});
},
_completeRoutine=function(val){
_.forEach($.taskList.getTableViewRows(),function(row){
row.setDone(val);
}),
_updateDashboardRoutine(),
_onUpdate(!1),
Alloy.createModel('routine_dashboard',{
urlParams:{
pid:cus.singleton().get('userId'),
rid:dashboardRoutine.id,
status:val?'DONE':'NEW',
date:'today'},

id:-1}).
save().then(function(){


_onUpdate(!0);
});
},

setDashboardRoutine=function(dr){

dr&&(dashboardRoutine=dr),

dashboardRoutine&&(
_updateDashboardRoutine(),
setTasks(dashboardRoutine.tasks));

},

getStateText=function(){return(
dashboardRoutine.complete?'Complete':
'active'===dashboardRoutine.state?'Due':
'overdue'===dashboardRoutine.state?'Overdue':
'late'===dashboardRoutine.state?'Incomplete':
'upcoming'===dashboardRoutine.state||'later'===dashboardRoutine.state?'Upcoming':void 0);
},
getStateColor=function(){return(
dashboardRoutine.complete?Alloy.Globals.Style.Color.BattleshipGrey:
'active'===dashboardRoutine.state?Alloy.Globals.Style.Color.LightBlue:
'overdue'===dashboardRoutine.state?Alloy.Globals.Style.Color.PumpkinOrange:
'late'===dashboardRoutine.state?Alloy.Globals.Style.Color.RedPink:
'upcoming'===dashboardRoutine.state||'later'===dashboardRoutine.state?Alloy.Globals.Style.Color.OtherGreen:void 0);
},

setTasks=function(t){
tasks=t;

var sorted=_.sortBy(tasks,function(t){
return t.taskName;
});
$.taskList.setHeight(45*sorted.length),
$.taskList.setData(sorted);
},

_updateDashboardRoutine=function(){
dashboardRoutine&&(
dashboardRoutine.complete=!0,
_.forEach(dashboardRoutine.tasks,function(t){
'NEW'===t.taskStatus&&(
dashboardRoutine.complete=!1);

}),
$.updateViews({
"#stateDue":{
visible:!dashboardRoutine.complete&&'active'===dashboardRoutine.state},

"#stateOverdue":{
visible:!dashboardRoutine.complete&&'overdue'===dashboardRoutine.state},

"#stateUpcoming":{
visible:!dashboardRoutine.complete&&('upcoming'===dashboardRoutine.state||'later'===dashboardRoutine.state)},

"#stateIncomplete":{
visible:!dashboardRoutine.complete&&'late'===dashboardRoutine.state},

"#stateComplete":{
visible:!0===dashboardRoutine.complete},

"#state":{
text:getStateText(),
color:getStateColor()},

"#name":{
text:dashboardRoutine.routineName},

"#time":{
text:du.getTimeString(new Date(dashboardRoutine.dueAt))},

"#underline":{
visible:args.showSeparator}}),


$.routineCheck.setToggle(dashboardRoutine.complete));

},

_init=function(){
$.routineCheck.disable(!0),
$.taskList.onClick(completeTask),
setDashboardRoutine(args.data);
};

_init(),

exports.setDashboardViewId=function(id){
dashboardViewId=id;
},


exports.onClick=function(callback){


callback();
},

exports.getData=function(){
return dashboardRoutine;
},

exports.getContainer=function(){
return $.container;
},

exports.cleanup=function(){
$.taskList.cleanup(),
LOGGER.debug('IN DASH CELL CLEANUP');
},





__defers['$.__views.title!click!toggleComplete']&&$.addListener($.__views.title,'click',toggleComplete),



_.extend($,exports);
}

module.exports=Controller;