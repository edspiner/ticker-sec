var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.mood/'+s:
s.substring(0,index)+'/tf.app.mood/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.mood');




if(this.__widgetId='tf.app.mood',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='mood_cell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:36,backgroundColor:'transparent',id:'container'}),

$.__views.row.add($.__views.container),
$.__views.item=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Alloy.Globals.Style.Widget.Mood.ChoiceWidth,id:'item'}),

$.__views.container.add($.__views.item),
$.__views.details=Ti.UI.createView(
{left:24,right:75,height:Ti.UI.SIZE,id:'details',layout:'horizontal'}),

$.__views.item.add($.__views.details),
$.__views.__alloyId173=Ti.UI.createView(
{width:Ti.UI.SIZE,id:'__alloyId173'}),

$.__views.details.add($.__views.__alloyId173),
$.__views.topline=Ti.UI.createView(
{width:2,backgroundColor:Alloy.Globals.Style.Color.BattleshipGrey,height:10,top:0,id:'topline'}),

$.__views.__alloyId173.add($.__views.topline),
$.__views.__alloyId174=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,text:'i',id:'__alloyId174'}),

$.__views.__alloyId173.add($.__views.__alloyId174),
$.__views.bottomline=Ti.UI.createView(
{width:2,backgroundColor:Alloy.Globals.Style.Color.BattleshipGrey,height:10,bottom:0,id:'bottomline'}),

$.__views.__alloyId173.add($.__views.bottomline),
$.__views.time=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,left:8,id:'time'}),

$.__views.details.add($.__views.time),
$.__views.mood=Alloy.createWidget('tf.app.mood','moodIcon',{width:20,height:20,right:24,id:'mood',__parentSymbol:$.__views.item}),
$.__views.mood.setParent($.__views.item),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var














item,args=arguments[0]||{},du=require('utils/date'),

setItem=function(i){
item=i,
$.updateViews({
"#time":{
text:du.getTimeString(item.timestamp)},

"#topline":{
visible:0<item.rowidx},

"#bottomline":{
visible:args.showSeparator}}),


$.mood.setValue(item.value1);
};

setItem(args.data),


exports.onClick=function(callback){

},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},

exports.cleanup=function(){
LOGGER.debug('IN MOOD CELL CLEANUP');
},









_.extend($,exports);
}

module.exports=Controller;