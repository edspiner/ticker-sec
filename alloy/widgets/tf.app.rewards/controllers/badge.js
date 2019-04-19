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




if(this.__widgetId='tf.app.rewards',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='badge',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.badge=Ti.UI.createView(
{backgroundColor:'#fff',opacity:0,apiName:'Ti.UI.View',id:'badge',classes:[]}),

$.__views.badge&&$.addTopLevelView($.__views.badge),
_click?$.addListener($.__views.badge,'click',_click):__defers['$.__views.badge!click!_click']=!0,$.__views.topA=Alloy.createWidget('tf.app.svgIcon','widget',{apiName:'Alloy.Require',id:'topA',classes:[],__parentSymbol:$.__views.badge}),
$.__views.topA.setParent($.__views.badge),
_topReady?$.__views.topA.on('ready',_topReady):__defers['$.__views.topA!ready!_topReady']=!0,$.__views.topB=Alloy.createWidget('tf.app.svgIcon','widget',{apiName:'Alloy.Require',id:'topB',classes:[],__parentSymbol:$.__views.badge}),
$.__views.topB.setParent($.__views.badge),
_topReady?$.__views.topB.on('ready',_topReady):__defers['$.__views.topB!ready!_topReady']=!0,$.__views.__alloyId239=Ti.UI.createView(
{width:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-width-fit'],layout:'vertical',id:'__alloyId239'}),

$.__views.badge.add($.__views.__alloyId239),
$.__views.__alloyId240=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-width-height-fit'],id:'__alloyId240'}),

$.__views.__alloyId239.add($.__views.__alloyId240),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:Alloy.Globals.Style.Color.LightBlue,top:24,width:68,height:68,borderRadius:34,backgroundColor:'#fff',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,apiName:'Ti.UI.Label',id:'icon',classes:['light-blue']}),

$.__views.__alloyId240.add($.__views.icon),
$.__views.updated=Ti.UI.createView(
{right:0,top:24,width:20,height:20,backgroundColor:'#fff',borderRadius:10,apiName:'Ti.UI.View',id:'updated',classes:[]}),

$.__views.__alloyId240.add($.__views.updated),
$.__views.dot=Ti.UI.createView(
{width:14,height:14,backgroundColor:Alloy.Globals.Style.Color.RedPink,borderRadius:7,apiName:'Ti.UI.View',id:'dot',classes:[]}),

$.__views.updated.add($.__views.dot),
$.__views.highlightContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:80,backgroundColor:Alloy.Globals.Style.Color.DarkSkyBlue,borderRadius:4,apiName:'Ti.UI.View',id:'highlightContainer',classes:['view-width-height-fit']}),

$.__views.__alloyId240.add($.__views.highlightContainer),
$.__views.highlight=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Rewards.Badge.HighlightFontSize},color:'#fff',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,right:8,top:2,bottom:4,apiName:'Ti.UI.Label',id:'highlight',classes:['white','view-width-height-fit']}),

$.__views.highlightContainer.add($.__views.highlight),
$.__views.bottom=Ti.UI.createView(
{top:0,bottom:8,apiName:'Ti.UI.View',id:'bottom',classes:[]}),

$.__views.__alloyId239.add($.__views.bottom),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Rewards.Badge.TitleFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,width:'85%',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,top:0,height:'70%',apiName:'Ti.UI.Label',id:'title',classes:['label','twilight-blue']}),

$.__views.bottom.add($.__views.title),
$.__views.subHighlight=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Rewards.Badge.SubHighlightFontSize},color:Alloy.Globals.Style.Color.BattleshipGrey,width:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,height:'30%',bottom:0,apiName:'Ti.UI.Label',id:'subHighlight',classes:['label','battleship-grey']}),

$.__views.bottom.add($.__views.subHighlight),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick,

topReadyCount=0;

WTools.setTiProps(args,$.badge);var
topAColors=['#EEF7FF','#D8F7F4','#FFEFEC','#FFF5FF','#FFDFE3','#FFF3DE','#EFFFFD','#D9ECFE','#F2EFFF','#ECFEF3'],
topBColors=['#DEF1FF','#AAF3EC','#FFE1DC','#FFECFF','#FFC2CC','#FFEABF','#DBFFFC','#B3DDFF','#EAE1FF','#D5FFE9'],

_init=function(){
args.iconClass&&
$.addClass($.icon,args.iconClass),

$.updateViews({
"#title":{
text:args.title?args.title:'',
color:args.highlight?Alloy.Globals.Style.Color.TwilightBlue:Alloy.Globals.Style.Color.Silver},

"#highlightContainer":{
opacity:args.highlight?1:0},

"#highlight":{
text:args.highlight?args.highlight:''},

"#subHighlight":{
text:args.subHighlight?args.subHighlight:'',
color:args.highlight?Alloy.Globals.Style.Color.BattleshipGrey:Alloy.Globals.Style.Color.Silver},

"#updated":{
opacity:args.updated?1:0},

"#icon":{
color:args.highlight?Alloy.Globals.Style.Color.LightBlue:Alloy.Globals.Style.Color.SilverTwo}});


var idx=args.index%10;
$.topA.color=args.highlight?topAColors[idx]:Alloy.Globals.Style.Color.SilverTwo,
$.topA.file='/images/badge-top/pat-'+(idx+1)+'/a.svg',
$.topB.color=args.highlight?topBColors[idx]:Alloy.Globals.Style.Color.Silver,
$.topB.file='/images/badge-top/pat-'+(idx+1)+'/b.svg';
},
_topReady=function(evt){
evt&&'ready'===evt.type&&
topReadyCount++,

2<=topReadyCount&&_show();
},

_show=function(){
$.badge.animate({opacity:1,duration:500});
},

_click=function(){
animateButton($.badge,$.badge.color,.95,args.onClick);
};

_init(),





__defers['$.__views.badge!click!_click']&&$.addListener($.__views.badge,'click',_click),__defers['$.__views.topA!ready!_topReady']&&$.__views.topA.on('ready',_topReady),__defers['$.__views.topB!ready!_topReady']&&$.__views.topB.on('ready',_topReady),



_.extend($,exports);
}

module.exports=Controller;