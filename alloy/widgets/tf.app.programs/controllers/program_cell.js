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
























































































































































function roundedToFixed(_float,_digits){
var rounder=Math.pow(10,_digits);
return(Math.round(_float*rounder)/rounder).toFixed(_digits);
}var Widget=new(require('/alloy/widget'))('tf.app.programs');if(this.__widgetId='tf.app.programs',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='program_cell',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.row=Ti.UI.createTableViewRow({backgroundColor:'transparent',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),$.__views.row&&$.addTopLevelView($.__views.row),$.__views.container=Ti.UI.createView({top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',id:'container'}),$.__views.row.add($.__views.container),$.__views.header=Ti.UI.createView({top:16,left:24,right:24,height:30,backgroundColor:Alloy.Globals.Style.Color.IceBlue,borderRadius:6,id:'header'}),$.__views.container.add($.__views.header),$.__views.__alloyId106=Ti.UI.createView({height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId106'}),$.__views.header.add($.__views.__alloyId106),$.__views.__alloyId107=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.LightGold,text:'F',left:8,height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'__alloyId107'}),$.__views.__alloyId106.add($.__views.__alloyId107),$.__views.headerText=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.LightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:6,id:'headerText',text:'Just added'}),$.__views.__alloyId106.add($.__views.headerText),$.__views.view_rxprogram=Ti.UI.createView({bottom:24,left:24,right:24,height:Ti.UI.SIZE,id:'view_rxprogram'}),$.__views.container.add($.__views.view_rxprogram),_postLayout?$.addListener($.__views.view_rxprogram,'postlayout',_postLayout):__defers['$.__views.view_rxprogram!postlayout!_postLayout']=!0,$.__views.thumbnail=Alloy.createWidget('tf.app.thumbnail','widget',{top:0,left:0,width:70,height:70,borderRadius:4,id:'thumbnail',__parentSymbol:$.__views.view_rxprogram}),$.__views.thumbnail.setParent($.__views.view_rxprogram),_onLoad?$.__views.thumbnail.on('load',_onLoad):__defers['$.__views.thumbnail!load!_onLoad']=!0,$.__views.details=Ti.UI.createView({top:-6,left:82,right:14,height:Ti.UI.SIZE,id:'details',layout:'vertical'}),$.__views.view_rxprogram.add($.__views.details),$.__views.title=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.FILL,height:Ti.UI.SIZE,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title'}),$.__views.details.add($.__views.title),$.__views.__alloyId108=Ti.UI.createView({top:10,height:Ti.UI.SIZE,width:Ti.UI.FILL,horizontalWrap:!1,layout:'horizontal',id:'__alloyId108'}),$.__views.details.add($.__views.__alloyId108),$.__views.__alloyId109=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.BattleshipGrey,text:'u',height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'__alloyId109'}),$.__views.__alloyId108.add($.__views.__alloyId109),$.__views.itemCount=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BattleshipGrey,height:Ti.UI.SIZE,left:6,width:Ti.UI.FILL,id:'itemCount'}),$.__views.__alloyId108.add($.__views.itemCount),$.__views.__alloyId110=Ti.UI.createView({top:10,height:Ti.UI.SIZE,width:Ti.UI.FILL,horizontalWrap:!1,layout:'horizontal',id:'__alloyId110'}),$.__views.details.add($.__views.__alloyId110),$.__views.iconProgress=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.Silver,text:'x',height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'iconProgress'}),$.__views.__alloyId110.add($.__views.iconProgress),$.__views.itemProgress=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.Silver,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:6,id:'itemProgress'}),$.__views.__alloyId110.add($.__views.itemProgress),$.__views.arrow=Ti.UI.createLabel({font:{fontFamily:'tickerfit',fontSize:'14dp'},color:'#111',text:'e',right:0,width:Ti.UI.SIZE,id:'arrow'}),$.__views.view_rxprogram.add($.__views.arrow),$.__views.overlay=Ti.UI.createView({height:0,opacity:0,id:'overlay'}),$.__views.container.add($.__views.overlay),$.__views.__alloyId111=Ti.UI.createView({backgroundColor:'white',opacity:.5,id:'__alloyId111'}),$.__views.overlay.add($.__views.__alloyId111),$.__views.underline=Ti.UI.createView({height:1,bottom:0,left:24,right:24,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),$.__views.container.add($.__views.underline),exports.destroy=function(){},_.extend($,$.__views),'use strict';var rxProgram,args=arguments[0]||{},cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,getNextItem=function(rxProgram){var item;return(rxProgram.dueItems&&0<rxProgram.dueItems.length&&(item=rxProgram.dueItems[0]),item)?item:(item=_.find(rxProgram.program.items,function(i){return i.sticky&&i.due}),item)?item:(item=_.find(rxProgram.program.items,function(i){return i.viewable&&!i.done}),item)?item:(item=_.find(rxProgram.program.items,function(i){return!i.done}),item?item:rxProgram.program.items[0])},

_postLayout=function(){
$.overlay.height=$.view_rxprogram.rect.height;
},
setRxProgram=function(rxp){
rxProgram=rxp;var








itemCountText,showHeader=0<rxProgram.dueItems.length,headerText=rxProgram.dueItems.length+' item'+(1<rxProgram.dueItems.length?'s':'')+' ready to view',itemCount=rxProgram.program.items.length,videoCount=(_.filter(rxProgram.program.items,function(i){return'VIDEO'===i.content.type})||[]).length,otherCount=itemCount-videoCount;
videoCount?(
itemCountText=videoCount+' video'+(1===videoCount?'':'s'),
otherCount&&(
itemCountText=itemCountText+' & '+otherCount+' other item'+(1==otherCount?'':'s'))):


itemCountText=otherCount+' item'+(1==otherCount?'':'s');var

doneCount=(_.filter(rxProgram.program.items,function(i){
return i.done;
})||[]).length,
item=getNextItem(rxProgram),
progress=roundedToFixed(100*(doneCount/itemCount),0),

complete=100<=progress,
progressColor=Alloy.Globals.Style.Color.Silver;
complete?
progressColor=Alloy.Globals.Style.Color.KiwiGreen:
0<progress&&(
progressColor=Alloy.Globals.Style.Color.RedPink);



var url=require('bootstrap/env').getApiURL()+'/rest/content/'+item.content.id+'/thumbnail';
$.thumbnail.setUrl(url),

$.updateViews({
"#overlay":{
opacity:complete?1:0,
top:showHeader?56:24},

"#title":{
text:rxProgram.program.title},

"#itemCount":{
text:itemCountText},

"#iconProgress":{
color:progressColor},

"#itemProgress":{
text:progress+'% complete',
color:progressColor},

"#view_rxprogram":{
top:showHeader?56:24},

"#arrow":{
color:complete?Alloy.Globals.Style.Color.Silver:Alloy.Globals.Style.Color.RedPink},

"#header":{
visible:showHeader},

"#headerText":{
text:headerText},

"#underline":{
visible:args.showSeparator}});


},

_onLoad=function(){

};

setRxProgram(args.data),


exports.onClick=function(callback){

animateButton($.view_rxprogram,$.view_rxprogram.color,!0,callback);
},

exports.getData=function(){
return rxProgram;
},

exports.getContainer=function(){
return $.container;
},
exports.cleanup=function(){
LOGGER.debug('IN CELL CLEANUP');
},





__defers['$.__views.view_rxprogram!postlayout!_postLayout']&&$.addListener($.__views.view_rxprogram,'postlayout',_postLayout),__defers['$.__views.thumbnail!load!_onLoad']&&$.__views.thumbnail.on('load',_onLoad),



_.extend($,exports);
}

module.exports=Controller;