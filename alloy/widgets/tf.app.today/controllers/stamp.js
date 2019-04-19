var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='stamp',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.stamp=Ti.UI.createView(
{backgroundColor:'#fff',apiName:'Ti.UI.View',id:'stamp',classes:[]}),

$.__views.stamp&&$.addTopLevelView($.__views.stamp),
_click?$.addListener($.__views.stamp,'click',_click):__defers['$.__views.stamp!click!_click']=!0,$.__views.__alloyId95=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-width-height-fit'],layout:'vertical',id:'__alloyId95'}),

$.__views.stamp.add($.__views.__alloyId95),
$.__views.__alloyId96=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-width-height-fit'],id:'__alloyId96'}),

$.__views.__alloyId95.add($.__views.__alloyId96),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:Alloy.Globals.Style.Color.LightBlue,width:68,height:68,borderRadius:34,backgroundColor:'#F0FBFF',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'icon',classes:['light-blue']}),

$.__views.__alloyId96.add($.__views.icon),
$.__views.badge=Ti.UI.createView(
{right:0,top:0,width:20,height:20,backgroundColor:'#fff',borderRadius:10,apiName:'Ti.UI.View',id:'badge',classes:[]}),

$.__views.__alloyId96.add($.__views.badge),
$.__views.dot=Ti.UI.createView(
{width:14,height:14,backgroundColor:Alloy.Globals.Style.Color.RedPink,borderRadius:7,apiName:'Ti.UI.View',id:'dot',classes:[]}),

$.__views.badge.add($.__views.dot),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Today.Stamp.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,top:5,apiName:'Ti.UI.Label',id:'title',classes:['label','twilight-blue']}),

$.__views.__alloyId95.add($.__views.title),
$.__views.highlight=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Today.Stamp.HighlightFontSize},color:Alloy.Globals.Style.Color.RedPink,width:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,apiName:'Ti.UI.Label',id:'highlight',classes:['label','red-pink']}),

$.__views.__alloyId95.add($.__views.highlight),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.stamp);var

_init=function(){
args.iconClass&&
$.addClass($.icon,args.iconClass),

$.title.text=args.title?args.title:' ',
$.highlight.text=args.highlight?args.highlight:' ',
$.badge.opacity=args.badge?1:0;
},

_click=function(){
animateButton($.stamp,$.stamp.color,.95,args.onClick);
};

_init(),





__defers['$.__views.stamp!click!_click']&&$.addListener($.__views.stamp,'click',_click),



_.extend($,exports);
}

module.exports=Controller;