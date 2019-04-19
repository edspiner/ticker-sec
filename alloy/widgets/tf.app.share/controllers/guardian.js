var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.share/'+s:
s.substring(0,index)+'/tf.app.share/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.share');




if(this.__widgetId='tf.app.share',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='guardian',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.guardian=Ti.UI.createView(
{top:0,height:Ti.UI.SIZE,layout:'vertical',id:'guardian'}),

$.__views.guardian&&$.addTopLevelView($.__views.guardian),
click?$.addListener($.__views.guardian,'click',click):__defers['$.__views.guardian!click!click']=!0,$.__views.avatar=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'avatar'}),

$.__views.guardian.add($.__views.avatar),
$.__views.border=Ti.UI.createView(
{top:0,backgroundColor:Alloy.Globals.Style.Color.RedPink,width:68,height:68,borderRadius:34,bottom:10,borderWidth:0,id:'border'}),

$.__views.avatar.add($.__views.border),
$.__views.overlay=Ti.UI.createView(
{width:'100%',height:'100%',opacity:1,id:'overlay'}),

$.__views.add=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:30},color:Alloy.Globals.Style.Color.Silver,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'add',text:'+'}),

$.__views.overlay.add($.__views.add),
$.__views.placeholder=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:30},color:Alloy.Globals.Style.Color.Silver,text:'U',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'placeholder'}),

$.__views.overlay.add($.__views.placeholder),
$.__views.thumbnail=Alloy.createWidget('tf.app.thumbnail','widget',{top:4,left:4,width:60,height:60,borderRadius:30,id:'thumbnail',children:[$.__views.overlay],__parentSymbol:$.__views.border}),
$.__views.thumbnail.setParent($.__views.border),
$.__views.tick=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:'#fff',text:'h',bottom:0,right:10,width:30,height:30,borderRadius:15,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,backgroundColor:Alloy.Globals.Style.Color.RedPink,id:'tick'}),

$.__views.avatar.add($.__views.tick),
$.__views.label=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.DarkerSilver,text:'Add new',top:0,left:2,right:2,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,height:Ti.UI.SIZE,id:'label'}),

$.__views.guardian.add($.__views.label),
exports.destroy=function(){},




_.extend($,$.__views);var






callback,

guardian,args=arguments[0]||{},WTools=require('WidgetTools'),animateButton=require('utils/ui').animateClick,SVGView=require('com.geraudbourdin.svgview');

WTools.setTiProps(args,$.getView());var

hasImage=!1,

_setGuardian=function(g){
hasImage=!1,
g&&(
guardian=_.clone(g)),










_updateViews();
},
_updateViews=function(){var
sharing=guardian&&guardian.sharing,
borderColor=guardian?sharing?Alloy.Globals.Style.Color.RedPink:Alloy.Globals.Style.Color.SilverTwo:'transparent';
$.updateViews({
"#overlay":{
opacity:hasImage?0:1,
backgroundColor:sharing?Alloy.Globals.Style.Color.RedPink:Alloy.Globals.Style.Color.PaleGrey},

"#add":{
opacity:guardian?0:1},

"#placeholder":{
opacity:guardian?1:0,
color:sharing?'white':Alloy.Globals.Style.Color.Silver},

"#border":{
backgroundColor:borderColor},

"#tick":{
opacity:sharing?1:0},

"#label":{
text:guardian?guardian.nickname:'Add new'}});


},
_init=function(){
_setGuardian(args.guardian);
};
_init();

var click=function(){
animateButton($.avatar,$.avatar.color,!0,function(){
guardian&&(
guardian.sharing=!guardian.sharing,
_updateViews()),

callback(guardian);
});
};

exports.onClick=function(cb){
callback=cb;
},
exports.setGuardian=_setGuardian,





__defers['$.__views.guardian!click!click']&&$.addListener($.__views.guardian,'click',click),



_.extend($,exports);
}

module.exports=Controller;