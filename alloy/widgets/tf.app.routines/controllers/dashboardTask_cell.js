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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dashboardTask_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'#eee',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{backgroundColor:'white',height:45,id:'container'}),

$.__views.row.add($.__views.container),
$.__views.task=Ti.UI.createView(
{left:36,horizontalWrap:!1,height:Ti.UI.SIZE,id:'task',layout:'horizontal'}),

$.__views.container.add($.__views.task),
$.__views.taskLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,width:Ti.UI.FILL,id:'taskLabel',text:'A Task'}),

$.__views.task.add($.__views.taskLabel),
$.__views.modifiedLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:16},color:Alloy.Globals.Style.Color.BrandPink,left:5,width:Ti.UI.SIZE,id:'modifiedLabel',text:'00:00'}),

$.__views.task.add($.__views.modifiedLabel),
$.__views.taskCheck=Alloy.createWidget('tf.app.routines','toggleCheck',{right:32,id:'taskCheck',__parentSymbol:$.__views.container}),
$.__views.taskCheck.setParent($.__views.container),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

















task,
callback,args=arguments[0]||{},du=require('utils/date'),animateButton=require('utils/ui').animateClick,

setTask=function(t){
task=t,
_update();
},

_update=function(){var

attr,done='DONE'===task.taskStatus,
taskname='- '+task.taskName,
range=[0,taskname.length];

attr=done?Ti.UI.createAttributedString({
text:taskname,
attributes:[{
type:Ti.UI.ATTRIBUTE_STRIKETHROUGH_STYLE,
value:Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_THICK,
range:range},
{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:Alloy.Globals.Style.Color.Silver,
range:range}]}):



Ti.UI.createAttributedString({
text:taskname,
attributes:[{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:Alloy.Globals.Style.Color.BattleshipGrey,
range:range}]}),



$.updateViews({
"#modifiedLabel":{
text:task.modifiedAt?du.getTimeString(new Date(task.modifiedAt)):''},

"#taskLabel":{
attributedString:attr}}),


$.taskCheck.setToggle(done);
},

_init=function(){
setTask(args.data),

$.taskCheck.disable(!0);
};

_init(),


exports.setDone=function(val){
task.taskStatus=val?'DONE':'NEW',
_update();
},


exports.onClick=function(callback){
animateButton($.task,$.task.color,.99,function(){
exports.setDone('NEW'===task.taskStatus),
callback&&callback();
});
},

exports.getData=function(){
return task;
},

exports.getContainer=function(){
return $.container;
},

exports.cleanup=function(){
LOGGER.debug('IN CELL CLEANUP');
},









_.extend($,exports);
}

module.exports=Controller;