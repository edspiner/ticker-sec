var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.inbox/'+s:
s.substring(0,index)+'/tf.app.inbox/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.inbox');




if(this.__widgetId='tf.app.inbox',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='message_cell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',id:'container'}),

$.__views.row.add($.__views.container),
$.__views.view_message=Ti.UI.createView(
{top:16,bottom:16,left:24,right:24,height:Ti.UI.SIZE,id:'view_message'}),

$.__views.container.add($.__views.view_message),
$.__views.iconView=Ti.UI.createView(
{top:0,left:0,width:40,height:40,borderRadius:20,borderColor:Alloy.Globals.Style.Color.DarkSkyBlue,borderWidth:0,id:'iconView'}),

$.__views.view_message.add($.__views.iconView),
$.__views.likeIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'2',id:'likeIcon'}),

$.__views.iconView.add($.__views.likeIcon),
$.__views.defaultIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'(',id:'defaultIcon'}),

$.__views.iconView.add($.__views.defaultIcon),
$.__views.rewardIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'7',id:'rewardIcon'}),

$.__views.iconView.add($.__views.rewardIcon),
$.__views.messageIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'&',id:'messageIcon'}),

$.__views.iconView.add($.__views.messageIcon),
$.__views.messageUserIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'*',id:'messageUserIcon'}),

$.__views.iconView.add($.__views.messageUserIcon),
$.__views.messageProgramIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:')',id:'messageProgramIcon'}),

$.__views.iconView.add($.__views.messageProgramIcon),
$.__views.reminderIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'a',id:'reminderIcon'}),

$.__views.iconView.add($.__views.reminderIcon),
$.__views.programIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'u',id:'programIcon'}),

$.__views.iconView.add($.__views.programIcon),
$.__views.exerciseIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'A',id:'exerciseIcon'}),

$.__views.iconView.add($.__views.exerciseIcon),
$.__views.nudgeIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'-',id:'nudgeIcon'}),

$.__views.iconView.add($.__views.nudgeIcon),
$.__views.badgeIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:'#fff',text:'6',id:'badgeIcon'}),

$.__views.iconView.add($.__views.badgeIcon),
$.__views.details=Ti.UI.createView(
{left:54,right:0,height:Ti.UI.SIZE,id:'details',layout:'vertical'}),

$.__views.view_message.add($.__views.details),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.TwilightBlue,left:1,width:Ti.UI.FILL,height:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title'}),

$.__views.details.add($.__views.title),
$.__views.timestamp=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:12},color:Alloy.Globals.Style.Color.Silver,left:1,top:2,height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'timestamp'}),

$.__views.details.add($.__views.timestamp),
$.__views.underline=Ti.UI.createView(
{height:1,bottom:0,left:24,right:24,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

















item,args=arguments[0]||{},cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,

setItem=function(i){
item=i;var
likeCategories=['KUDOS'],
rewardCategories=['REWARD'],
badgeCategories=['BADGE'],
messageCategories=[],
programMessageCategories=['PROGRAM'],
userMessageCategories=['MESSAGE'],
reminderCategories=['REMINDER','ROUTINE_REMINDER'],
programCategories=['RX_REVIEW'],
exerciseCategories=['ERX_REVIEW'],
nudgeCategories=['NUDGE'],

allSpecificCategories=_.union(likeCategories,rewardCategories,badgeCategories,messageCategories,programMessageCategories,userMessageCategories,reminderCategories,programCategories,exerciseCategories,nudgeCategories),

lightCategories=[];

$.updateViews({
"#container":{
backgroundColor:i.readTimestamp?'white':Alloy.Globals.Style.Color.IceBlue},

"#underline":{
visible:args.showSeparator},

"#iconView":{
borderWidth:i.readTimestamp?0:1,
borderColor:i.readTimestamp?'transparent':Alloy.Globals.Style.Color.DarkSkyBlue,
backgroundColor:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.IceBlue:Alloy.Globals.Style.Color.DarkSkyBlue},

"#defaultIcon":{
visible:!_.contains(allSpecificCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#likeIcon":{
visible:_.contains(likeCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#rewardIcon":{
visible:_.contains(rewardCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#messageIcon":{
visible:_.contains(messageCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#messageUserIcon":{
visible:_.contains(userMessageCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#messageProgramIcon":{
visible:_.contains(programMessageCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#reminderIcon":{
visible:_.contains(reminderCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#programIcon":{
visible:_.contains(programCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#exerciseIcon":{
visible:_.contains(exerciseCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#nudgeIcon":{
visible:_.contains(nudgeCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#badgeIcon":{
visible:_.contains(badgeCategories,i.category),
color:_.contains(lightCategories,i.category)?Alloy.Globals.Style.Color.DarkSkyBlue:'#fff'},

"#title":{
text:i.text},

"#timestamp":{
text:require('/utils/date').getRecentDateTimeString(new Date(i.timestamp))}});



},

update=function(){
item&&setItem(item);
};
setItem(args.data),


exports.onClick=function(callback){


_.contains(['BADGE','REWARD'],item.category)?
animateButton($.container,$.container.color,.99,function(){
callback();
}):
item.readTimestamp?









callback(!0):callback(!0);

},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},









_.extend($,exports);
}

module.exports=Controller;