var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.login/'+s:
s.substring(0,index)+'/tf.app.login/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.login');




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='regionCell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:64,backgroundColor:'white',visible:!0,font:{fontFamily:'tickerfit'},id:'container'}),

$.__views.row.add($.__views.container),
$.__views.regionTitleContainer=Ti.UI.createView(
{id:'regionTitleContainer'}),

$.__views.container.add($.__views.regionTitleContainer),
$.__views.regionTitle=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#111',left:24,id:'regionTitle'}),

$.__views.regionTitleContainer.add($.__views.regionTitle),
$.__views.selectContainer=Ti.UI.createView(
{width:40,height:40,right:24,touchEnabled:!0,id:'selectContainer'}),

$.__views.container.add($.__views.selectContainer),
select?$.addListener($.__views.selectContainer,'click',select):__defers['$.__views.selectContainer!click!select']=!0,$.__views.select=Ti.UI.createView(
{height:26,width:26,borderColor:Alloy.Globals.Style.Color.BrandGreyDarker,borderWidth:.5,borderRadius:13,touchEnabled:!0,id:'select'}),

$.__views.selectContainer.add($.__views.select),
$.__views.tick=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:'#FFF',text:'h',id:'tick'}),

$.__views.select.add($.__views.tick),
$.__views.underline=Ti.UI.createView(
{height:1,bottom:0,left:24,right:24,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.container.add($.__views.underline),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var





item,args=arguments[0]||{},selected=!1,emojis=require('/styles/emojis'),
setItem=function(i){
DISPATCHER.on('tf.app.login.regionSelected',deselect),
item=i,
item.selected&&
select(),

$.regionTitle.text=emojis.getUnicode(item.region)+'  '+item.region;
},

select=function(){
DISPATCHER.trigger('tf.app.login.regionSelected',item),
selected=!0,
$.select.backgroundColor=Alloy.Globals.Style.Color.BrandPink,
$.select.borderWidth=0,
require('bootstrap/env').setDeployment(item.value);
},

deselect=function(selectedItem){
selectedItem!==item&&(
selected=!1,
$.select.backgroundColor='transparent',
$.select.borderWidth=1);

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





__defers['$.__views.selectContainer!click!select']&&$.addListener($.__views.selectContainer,'click',select),



_.extend($,exports);
}

module.exports=Controller;