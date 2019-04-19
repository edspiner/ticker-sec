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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='routine_cell',this.args=arguments[0]||{},arguments[0])var
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
{height:Ti.UI.SIZE,backgroundColor:'#fff',bottom:20,id:'container',layout:'vertical'}),

$.__views.row.add($.__views.container),
$.__views.header=Ti.UI.createView(
{height:55,id:'header'}),

$.__views.container.add($.__views.header),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.FILL,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,left:24,right:60,id:'title',text:'A Title'}),

$.__views.header.add($.__views.title),
$.__views.activeSwitch=Alloy.createWidget('tf.app.routines','toggleSwitch',{right:16,id:'activeSwitch',__parentSymbol:$.__views.header}),
$.__views.activeSwitch.setParent($.__views.header),
$.__views.timeHeader=Ti.UI.createView(
{width:Ti.UI.FILL,height:45,backgroundColor:'#F8FAFB',id:'timeHeader',layout:'horizontal'}),

$.__views.container.add($.__views.timeHeader),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,text:'i',left:24,height:Ti.UI.FILL,id:'icon'}),

$.__views.timeHeader.add($.__views.icon),
$.__views.time=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,height:Ti.UI.FILL,left:8,width:Ti.UI.SIZE,id:'time',text:'A Time'}),

$.__views.timeHeader.add($.__views.time),
$.__views.body=Ti.UI.createView(
{top:15,height:Ti.UI.SIZE,id:'body',layout:'vertical'}),

$.__views.container.add($.__views.body),
$.__views.__alloyId149=Ti.UI.createView(
{height:32,horizontalWrap:!1,width:Ti.UI.FILL,layout:'horizontal',id:'__alloyId149'}),

$.__views.body.add($.__views.__alloyId149),
$.__views.icon_schedule=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.LightBlue,text:'f',left:24,id:'icon_schedule'}),

$.__views.__alloyId149.add($.__views.icon_schedule),
$.__views.title_schedule=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:12,id:'title_schedule',text:'Schedule -'}),

$.__views.__alloyId149.add($.__views.title_schedule),
$.__views.vr_schedule=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.Silver,left:6,width:Ti.UI.FILL,id:'vr_schedule'}),

$.__views.__alloyId149.add($.__views.vr_schedule),
$.__views.__alloyId150=Ti.UI.createView(
{height:32,horizontalWrap:!1,width:Ti.UI.FILL,layout:'horizontal',id:'__alloyId150'}),

$.__views.body.add($.__views.__alloyId150),
$.__views.icon_tasks=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.LightBlue,text:'q',left:24,id:'icon_tasks'}),

$.__views.__alloyId150.add($.__views.icon_tasks),
$.__views.title_tasks=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:12,id:'title_tasks',text:'Routine -'}),

$.__views.__alloyId150.add($.__views.title_tasks),
$.__views.vr_tasks=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.Silver,left:6,width:Ti.UI.FILL,id:'vr_tasks'}),

$.__views.__alloyId150.add($.__views.vr_tasks),
$.__views.__alloyId151=Ti.UI.createView(
{height:32,horizontalWrap:!1,width:Ti.UI.FILL,layout:'horizontal',id:'__alloyId151'}),

$.__views.body.add($.__views.__alloyId151),
$.__views.icon_reminders=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.LightBlue,text:'a',left:24,id:'icon_reminders'}),

$.__views.__alloyId151.add($.__views.icon_reminders),
$.__views.title_reminders=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,left:12,id:'title_reminders',text:'Reminders -'}),

$.__views.__alloyId151.add($.__views.title_reminders),
$.__views.vr_reminders=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.Silver,left:6,width:Ti.UI.FILL,id:'vr_reminders'}),

$.__views.__alloyId151.add($.__views.vr_reminders),
$.__views.btnEdit=Alloy.createWidget('tf.app.button','widget',{left:24,right:24,type:'secondary',text:'Edit Routine',top:16,bottom:24,id:'btnEdit',__parentSymbol:$.__views.container}),
$.__views.btnEdit.setParent($.__views.container),
_edit?$.__views.btnEdit.on('click',_edit):__defers['$.__views.btnEdit!click!_edit']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


















routine,args=arguments[0]||{},animateButton=require('utils/ui').animateClick,du=require('utils/date'),moment=require('alloy/moment'),

setRoutine=function(r){
routine=r,
routine.activeToggled=!1;
var sched=[];
_.forEach(routine.schedule,function(s){
sched.push(s.charAt(0).toUpperCase()+s.slice(1,3).toLowerCase());
});
var tasks=[];
_.forEach(routine.tasks,function(t){
tasks.push(t.name);
});
var reminders=[];
routine.reminderAtStartTime&&
reminders.push('When Due'),

routine.reminderAtCompletionTime&&
reminders.push('If I Forget'),


$.updateViews({
"#title":{
text:routine.name},

"#time":{
text:du.getTimeString(moment(routine.startTime,['h:m a','H:m']).toDate())},





"#vr_schedule":{
text:sched.length?sched.join(','):'Disabled'},

"#vr_tasks":{
text:tasks.length+' task'+(1===tasks.length?'':'s')},

"#icon_reminders":{
color:reminders.length?Alloy.Globals.Style.Color.BrandPink:Alloy.Globals.Style.Color.LightBlue},

"#title_reminders":{
color:reminders.length?Alloy.Globals.Style.Color.BrandPink:Alloy.Globals.Style.Color.TwilightBlue},

"#vr_reminders":{
color:reminders.length?Alloy.Globals.Style.Color.BrandPink:Alloy.Globals.Style.Color.Silver,
text:reminders.length?'On':'Off'}}),


$.activeSwitch.setToggle(routine.active);
},

edit=!1,
_edit=function(){
edit=!0;
},

_init=function(){
setRoutine(args.data),
$.activeSwitch.setCallback(function(val){
routine.active=val,
routine.activeToggled=!0;
});
};

_init(),


exports.onClick=function(callback){


setTimeout(function(){
routine.activeToggled||edit?
callback():

callback(!0),

edit=!1;
},200);
},


exports.getData=function(){
return routine;
},

exports.getContainer=function(){
return $.container;
},

exports.cleanup=function(){

LOGGER.debug('IN ROUTINE CELL CLEANUP');
},





__defers['$.__views.btnEdit!click!_edit']&&$.__views.btnEdit.on('click',_edit),



_.extend($,exports);
}

module.exports=Controller;