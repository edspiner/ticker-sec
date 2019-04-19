var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.add/'+s:
s.substring(0,index)+'/tf.app.add/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.add');




if(this.__widgetId='tf.app.add',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='add_cell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:90,backgroundColor:'white',id:'container'}),

$.__views.row.add($.__views.container),
$.__views.item=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'item'}),

$.__views.container.add($.__views.item),
$.__views.details=Ti.UI.createView(
{left:20,right:40,height:Ti.UI.SIZE,id:'details',layout:'vertical'}),

$.__views.item.add($.__views.details),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:0,id:'title'}),

$.__views.details.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,left:0,id:'description'}),

$.__views.details.add($.__views.description),
$.__views.__alloyId215=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:30},color:Alloy.Globals.Style.Color.RedPink,right:20,text:'+',id:'__alloyId215'}),

$.__views.item.add($.__views.__alloyId215),
$.__views.underline=Ti.UI.createView(
{height:1,bottom:0,left:16,right:16,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var














item,args=arguments[0]||{},animateButton=require('utils/ui').animateClick,

setItem=function(i){
item=i,
$.updateViews({
"#title":{
text:item.title},

"#description":{
text:item.description},

"#underline":{
visible:args.showSeparator}});


};

setItem(args.data),


exports.onClick=function(callback){

animateButton($.item,$.item.color,!0,callback);
},

exports.getData=function(){
return item;
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