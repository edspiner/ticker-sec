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




if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='reward_cell',this.args=arguments[0]||{},arguments[0])var
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
{top:0,width:Ti.UI.FILL,height:Ti.UI.SIZE,backgroundColor:'white',bottom:24,horizontalWrap:!1,id:'container'}),

$.__views.row.add($.__views.container),
$.__views.__alloyId257=Ti.UI.createView(
{top:24,left:24,bottom:24,width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:'__alloyId257'}),

$.__views.container.add($.__views.__alloyId257),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:28},color:Alloy.Globals.Style.Color.LightBlue,text:'7',top:0,width:56,height:56,borderRadius:28,backgroundColor:'#F0FBFF',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'icon'}),

$.__views.__alloyId257.add($.__views.icon),
$.__views.__alloyId258=Ti.UI.createView(
{left:104,right:24,top:24,bottom:24,height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId258'}),

$.__views.container.add($.__views.__alloyId258),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:0,id:'title'}),

$.__views.__alloyId258.add($.__views.title),
$.__views.points=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,top:4,left:0,id:'points'}),

$.__views.__alloyId258.add($.__views.points),
$.__views.__alloyId259=Ti.UI.createView(
{top:16,width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'__alloyId259'}),

$.__views.__alloyId258.add($.__views.__alloyId259),
$.__views.redeem=Alloy.createWidget('tf.app.button','widget',{type:'primary',text:'Redeem now',enabled:!0,id:'redeem',__parentSymbol:$.__views.__alloyId259}),
$.__views.redeem.setParent($.__views.__alloyId259),
_redeem?$.__views.redeem.on('click',_redeem):__defers['$.__views.redeem!click!_redeem']=!0,$.__views.__alloyId260=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId260'}),

$.__views.__alloyId259.add($.__views.__alloyId260),
$.__views.nearlyThere=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.RedPink,left:0,id:'nearlyThere'}),

$.__views.__alloyId260.add($.__views.nearlyThere),
$.__views.progress=Ti.UI.createView(
{top:8,width:Ti.UI.FILL,height:10,borderRadius:5,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'progress'}),

$.__views.__alloyId260.add($.__views.progress),
$.__views.bar=Ti.UI.createView(
{left:0,height:10,borderRadius:5,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,id:'bar'}),

$.__views.progress.add($.__views.bar),
$.__views.__alloyId261=Ti.UI.createView(
{id:'__alloyId261'}),

$.__views.progress.add($.__views.__alloyId261),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var


















item,args=arguments[0]||{},cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,nu=require('/utils/number'),

setItem=function(i){
item=i;var
redeemable=i.balance>=i.amount,
nearlyThere=!redeemable&&.75<i.balance/i.amount&&700>=i.amount-i.balance;
$.redeem.show(redeemable),
$.updateViews({
"#icon":{
color:redeemable?Alloy.Globals.Style.Color.LightBlue:Alloy.Globals.Style.Color.Silver,
backgroundColor:redeemable?'#F0FBFF':'#F8FAFB'},

"#title":{
text:i.name},

"#points":{
text:nu.formatNumber(i.amount)+' points'},

"#nearlyThere":{
height:nearlyThere?Ti.UI.SIZE:0,
text:nearlyThere?'Only '+(i.amount-i.balance)+' points needed!':''},

"#progress":{
height:redeemable?0:10},

"#bar":{
width:!redeemable&&0<i.balance?Math.max(1,Math.round(100*(i.balance/i.amount)))+'%':'0%'}});


},

_redeem=function(){
DISPATCHER.trigger('tf:rewards.claim',item);
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





__defers['$.__views.redeem!click!_redeem']&&$.__views.redeem.on('click',_redeem),



_.extend($,exports);
}

module.exports=Controller;