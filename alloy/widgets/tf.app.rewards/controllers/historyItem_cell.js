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




if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='historyItem_cell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'container'}),

$.__views.row.add($.__views.container),
$.__views.__alloyId241=Ti.UI.createView(
{height:Ti.UI.SIZE,top:8,id:'__alloyId241'}),

$.__views.container.add($.__views.__alloyId241),
$.__views.__alloyId242=Ti.UI.createView(
{left:0,right:60,height:Ti.UI.SIZE,id:'__alloyId242'}),

$.__views.__alloyId241.add($.__views.__alloyId242),
$.__views.name=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#65767C',left:0,id:'name'}),

$.__views.__alloyId242.add($.__views.name),
$.__views.right=Ti.UI.createView(
{right:0,width:60,height:Ti.UI.SIZE,id:'right'}),

$.__views.__alloyId241.add($.__views.right),
$.__views.__alloyId243=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,right:0,backgroundColor:'#F0FBFF',borderRadius:16,id:'__alloyId243'}),

$.__views.right.add($.__views.__alloyId243),
$.__views.value=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontHeavy,fontSize:14},color:Alloy.Globals.Style.Color.DarkSkyBlue,top:4,bottom:5,right:8,left:8,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'value'}),

$.__views.__alloyId243.add($.__views.value),
exports.destroy=function(){},




_.extend($,$.__views),



'use strict';var
















item,args=arguments[0]||{},

setItem=function(i){

item=i,

$.updateViews({
"#name":{
text:i.name},

"#value":{
text:i.value},

"#right":{
opacity:i.value?1:0}});


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









_.extend($,exports);
}

module.exports=Controller;