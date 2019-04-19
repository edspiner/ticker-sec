var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.rewards/'+s:
s.substring(0,index)+'/tf.app.rewards/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.rewards');




if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='milestone_cell',this.args=arguments[0]||{},arguments[0])var
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
$.__views.detail=Ti.UI.createView(
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,horizontalWrap:!1,id:'detail'}),

$.__views.container.add($.__views.detail),
$.__views.left=Ti.UI.createView(
{left:24,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'left'}),

$.__views.detail.add($.__views.left),
$.__views.start=Ti.UI.createView(
{left:0,width:Ti.UI.SIZE,height:0,id:'start'}),

$.__views.left.add($.__views.start),
$.__views.__alloyId256=Ti.UI.createView(
{left:16,width:24,height:24,borderRadius:12,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,id:'__alloyId256'}),

$.__views.start.add($.__views.__alloyId256),
$.__views.down=Ti.UI.createView(
{bottom:0,left:25,width:6,height:6,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,id:'down'}),

$.__views.start.add($.__views.down),
$.__views.spacer=Ti.UI.createView(
{left:0,width:Ti.UI.SIZE,height:0,id:'spacer',layout:'vertical'}),

$.__views.left.add($.__views.spacer),
$.__views.d1=Ti.UI.createView(
{bottom:3,left:25,width:6,height:6,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,top:-3,id:'d1'}),

$.__views.spacer.add($.__views.d1),
$.__views.d2=Ti.UI.createView(
{bottom:3,left:25,width:6,height:6,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'d2'}),

$.__views.spacer.add($.__views.d2),
$.__views.d4=Ti.UI.createView(
{bottom:3,left:25,width:6,height:6,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'d4'}),

$.__views.spacer.add($.__views.d4),
$.__views.d5=Ti.UI.createView(
{bottom:-3,left:25,width:6,height:6,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'d5'}),

$.__views.spacer.add($.__views.d5),
$.__views.line=Ti.UI.createView(
{left:25,width:6,height:0,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'line'}),

$.__views.left.add($.__views.line),
$.__views.milestone=Ti.UI.createView(
{width:Ti.UI.SIZE,height:0,id:'milestone'}),

$.__views.left.add($.__views.milestone),
_tap?$.addListener($.__views.milestone,'touchstart',_tap):__defers['$.__views.milestone!touchstart!_tap']=!0,$.__views.down1=Ti.UI.createView(
{top:-3,left:25,width:6,height:31,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'down1'}),

$.__views.milestone.add($.__views.down1),
$.__views.accross=Ti.UI.createView(
{left:25,width:36,height:6,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'accross'}),

$.__views.milestone.add($.__views.accross),
$.__views.down2=Ti.UI.createView(
{bottom:-3,left:25,width:6,height:31,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'down2'}),

$.__views.milestone.add($.__views.down2),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:28},color:Alloy.Globals.Style.Color.Silver,text:'F',left:57,width:56,height:56,borderRadius:28,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'icon'}),

$.__views.milestone.add($.__views.icon),
$.__views.tag=Ti.UI.createView(
{left:0,width:Ti.UI.SIZE,height:0,id:'tag'}),

$.__views.left.add($.__views.tag),
$.__views.amount=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:12},color:Alloy.Globals.Style.Color.BattleshipGrey,left:0,width:56,height:28,borderRadius:3,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'100,000',id:'amount'}),

$.__views.tag.add($.__views.amount),
$.__views.right=Ti.UI.createView(
{left:153,right:24,height:0,width:Ti.UI.FILL,id:'right',layout:'vertical'}),

$.__views.detail.add($.__views.right),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:0,height:24,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,id:'title'}),

$.__views.right.add($.__views.title),
$.__views.points=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,top:4,left:0,id:'points'}),

$.__views.right.add($.__views.points),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

















item,args=arguments[0]||{},nu=require('/utils/number'),cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,

setItem=function(i){
item=i,
'START'===i.type?
$.updateViews({
"#start":{
top:24,
height:Ti.UI.SIZE}}):


'SPACER'===i.type?
$.updateViews({
"#spacer":{
height:Ti.UI.SIZE},

"#d1":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#d2":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},




"#d4":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#d5":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey}}):


'MILESTONE'===i.type?
$.updateViews({
"#milestone":{
height:Ti.UI.SIZE},

"#icon":{
color:i.completed?Alloy.Globals.Style.Color.LightGold:Alloy.Globals.Style.Color.Silver,
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#accross":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#detail":{
bottom:i.last&&!i.completed?24:0},

"#right":{
height:Ti.UI.SIZE},

"#title":{
text:i.name},

"#points":{
text:nu.formatNumber(i.amount)+' points'},

"#down1":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#down2":{
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey,
opacity:i.last&&!i.completed?0:1}}):


'TAG'===i.type?
$.updateViews({
"#tag":{
height:Ti.UI.SIZE},

"#amount":{
text:nu.formatNumber(i.amount),
color:i.completed?'white':Alloy.Globals.Style.Color.BattleshipGrey,
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey},

"#detail":{
bottom:i.last?24:0}}):


'LINE'===i.type&&
$.updateViews({
"#line":{
height:Math.max(1,i.height),
backgroundColor:i.completed?Alloy.Globals.Style.Color.DarkSkyBlue:Alloy.Globals.Style.Color.PaleGrey}});



},
_tap=function(){
DISPATCHER.trigger('tf:app.slideWindow.open',{
content:{
widget:'tf.app.slideWindow',
controller:'info',
args:{title:'Milestone Information',
message:'The \''+item.name+'\' milestone is awarded when you reach or exceed a lifetime points total of '+nu.formatNumber(item.amount)+' points'}}});



},

update=function(){
item&&setItem(item);
};
setItem(args.data),


exports.onClick=function(callback){
callback(!0);
},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},





__defers['$.__views.milestone!touchstart!_tap']&&$.addListener($.__views.milestone,'touchstart',_tap),



_.extend($,exports);
}

module.exports=Controller;