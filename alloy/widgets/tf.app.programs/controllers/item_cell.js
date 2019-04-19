var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.programs/'+s:
s.substring(0,index)+'/tf.app.programs/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.programs');




if(this.__widgetId='tf.app.programs',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='item_cell',this.args=arguments[0]||{},arguments[0])var
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
$.__views.header=Ti.UI.createView(
{top:16,left:24,right:24,height:30,backgroundColor:Alloy.Globals.Style.Color.PalerGrey,borderRadius:6,id:'header'}),

$.__views.container.add($.__views.header),
$.__views.__alloyId98=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId98'}),

$.__views.header.add($.__views.__alloyId98),
$.__views.headerIcon=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,id:'headerIcon'}),

$.__views.__alloyId98.add($.__views.headerIcon),
$.__views.headerHighlights=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.RedPink,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'M',id:'headerHighlights'}),

$.__views.headerIcon.add($.__views.headerHighlights),
$.__views.headerUpNext=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.LightGold,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'F',id:'headerUpNext'}),

$.__views.headerIcon.add($.__views.headerUpNext),
$.__views.headerJumpAhead=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.OtherGreen,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'N',id:'headerJumpAhead'}),

$.__views.headerIcon.add($.__views.headerJumpAhead),
$.__views.headerComingSoon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.Silver,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'O',id:'headerComingSoon'}),

$.__views.headerIcon.add($.__views.headerComingSoon),
$.__views.headerCompleted=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.Silver,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'h',id:'headerCompleted'}),

$.__views.headerIcon.add($.__views.headerCompleted),
$.__views.headerText=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:'#111',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:6,id:'headerText'}),

$.__views.__alloyId98.add($.__views.headerText),
$.__views.view_item=Ti.UI.createView(
{bottom:24,left:24,right:24,height:Ti.UI.SIZE,id:'view_item'}),

$.__views.container.add($.__views.view_item),
$.__views.overlay=Ti.UI.createView(
{width:'100%',height:'100%',opacity:1,id:'overlay'}),

$.__views.disabledOverlay=Ti.UI.createView(
{id:'disabledOverlay'}),

$.__views.overlay.add($.__views.disabledOverlay),
$.__views.__alloyId99=Ti.UI.createView(
{backgroundColor:'white',opacity:.5,id:'__alloyId99'}),

$.__views.disabledOverlay.add($.__views.__alloyId99),
$.__views.viewOverlay=Ti.UI.createView(
{width:40,height:40,borderRadius:20,id:'viewOverlay'}),

$.__views.overlay.add($.__views.viewOverlay),
$.__views.__alloyId100=Ti.UI.createView(
{backgroundColor:Alloy.Globals.Style.Color.Silver,opacity:.8,id:'__alloyId100'}),

$.__views.viewOverlay.add($.__views.__alloyId100),
$.__views.play=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:15},color:'black',text:'t',left:14,id:'play'}),

$.__views.viewOverlay.add($.__views.play),
$.__views.open=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:'black',text:'Q',left:13,bottom:13,id:'open'}),

$.__views.viewOverlay.add($.__views.open),
$.__views.doneOverlay=Ti.UI.createView(
{id:'doneOverlay'}),

$.__views.overlay.add($.__views.doneOverlay),
$.__views.__alloyId101=Ti.UI.createView(
{backgroundColor:'white',opacity:.5,id:'__alloyId101'}),

$.__views.doneOverlay.add($.__views.__alloyId101),
$.__views.__alloyId102=Ti.UI.createView(
{backgroundColor:Alloy.Globals.Style.Color.RedPink,opacity:.5,id:'__alloyId102'}),

$.__views.doneOverlay.add($.__views.__alloyId102),
$.__views.__alloyId103=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId103'}),

$.__views.doneOverlay.add($.__views.__alloyId103),
$.__views.__alloyId104=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:15},color:'#fff',height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'h',id:'__alloyId104'}),

$.__views.__alloyId103.add($.__views.__alloyId104),
$.__views.__alloyId105=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:15},color:'#fff',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:6,text:'Viewed',id:'__alloyId105'}),

$.__views.__alloyId103.add($.__views.__alloyId105),
$.__views.thumbnail=Alloy.createWidget('tf.app.thumbnail','widget',{top:0,left:0,width:Alloy.Globals.Style.Widget.Program.Item.ThumbnailWidth,height:Alloy.Globals.Style.Widget.Program.Item.ThumbnailHeight,borderRadius:4,id:'thumbnail',children:[$.__views.overlay],__parentSymbol:$.__views.view_item}),
$.__views.thumbnail.setParent($.__views.view_item),
$.__views.details=Ti.UI.createView(
{left:Alloy.Globals.Style.Widget.Program.Item.DetailLeft,right:0,height:Ti.UI.SIZE,id:'details',layout:'vertical'}),

$.__views.view_item.add($.__views.details),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14dp'},color:Alloy.Globals.Style.Color.TwilightBlue,left:1,width:Ti.UI.FILL,height:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title'}),

$.__views.details.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'14dp'},color:Alloy.Globals.Style.Color.BattleshipGrey,left:1,top:2,height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'description'}),

$.__views.details.add($.__views.description),
$.__views.underline=Ti.UI.createView(
{height:1,bottom:0,left:24,right:24,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

















item,args=arguments[0]||{},cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,

setItem=function(i){
item=i;var

showHeader=!0===item.showHeader,
headerText='',
headerHighlights=!1,
headerUpNext=!1,
headerJumpAhead=!1,
headerComingSoon=!1,
headerCompleted=!1,
headerColor=Alloy.Globals.Style.Color.PalerGrey,
headerTextColor=Alloy.Globals.Style.Color.BattleshipGrey;

showHeader&&(
item.due&&item.sticky?(
headerText='Highlights',
headerHighlights=!0,
headerTextColor=Alloy.Globals.Style.Color.RedPink):
item.due&&!item.done?(
headerText='Up next',
headerUpNext=!0,
headerColor=Alloy.Globals.Style.Color.IceBlue,
headerTextColor=Alloy.Globals.Style.Color.LightBlue):
item.viewable&&!item.done?(
headerText='Jump Ahead',
headerJumpAhead=!0,
headerTextColor=Alloy.Globals.Style.Color.OtherGreen):
item.viewable||item.done?


item.done&&(
headerText='Completed',
headerCompleted=!0):(headerText='Coming Soon',headerComingSoon=!0));var


showStar=item.due&&!item.done,
play='VIDEO'===item.content.type,

url=require('bootstrap/env').getApiURL()+'/rest/content/'+item.content.id+'/thumbnail';
$.thumbnail.setUrl(url),

$.updateViews({
"#header":{
visible:showHeader,
backgroundColor:headerColor},

"#headerHighlights":{
visible:headerHighlights},

"#headerUpNext":{
visible:headerUpNext},

"#headerJumpAhead":{
visible:headerJumpAhead},

"#headerComingSoon":{
visible:headerComingSoon},

"#headerCompleted":{
visible:headerCompleted},

"#headerText":{
text:headerText,
color:headerTextColor},

"#view_item":{
top:showHeader?56:0},

"#disabledOverlay":{
opacity:item.viewable?0:1},

"#doneOverlay":{
opacity:item.viewable&&item.done&&!item.sticky?1:0},

"#viewOverlay":{
opacity:item.viewable&&(!item.done||item.sticky)?1:0},

"#play":{
opacity:play?1:0},

"#open":{
opacity:play?0:1},

"#title":{
text:item.content.title,
font:{
fontSize:14,
fontFamily:item.viewable?Alloy.CFG.fontBold:Alloy.CFG.fontBoldItalic}},


"#description":{
text:item.content.description,
font:{
fontSize:14,
fontFamily:item.viewable?Alloy.CFG.fontNormal:Alloy.CFG.fontItalic}},


"#underline":{
visible:args.showSeparator&&item.separator}});


},

update=function(){
item&&setItem(item);
};
setItem(args.data),


exports.onClick=function(callback){
item.viewable?

animateButton($.thumbnail.getView(),$.thumbnail.getView().color,!0,callback):


callback(!0);

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