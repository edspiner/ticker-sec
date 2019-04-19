var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.dialog/'+s:
s.substring(0,index)+'/tf.app.dialog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.dialog');




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='titleBar',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.titleBar=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'titleBar'}),

$.__views.titleBar&&$.addTopLevelView($.__views.titleBar),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBlack,fontSize:Alloy.Globals.Style.Widget.Dialog.TitleBarFontSize},color:Alloy.Globals.Style.Color.TwilightBlue,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,height:Ti.UI.SIZE,width:'80%',id:'title'}),

$.__views.titleBar.add($.__views.title),
$.__views.back=Ti.UI.createView(
{width:50,height:50,left:0,id:'back'}),

$.__views.titleBar.add($.__views.back),
back?$.addListener($.__views.back,'click',back):__defers['$.__views.back!click!back']=!0,$.__views.__alloyId212=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:18},color:Alloy.Globals.Style.Color.SilverTwo,text:'d',width:Ti.UI.SIZE,id:'__alloyId212'}),

$.__views.back.add($.__views.__alloyId212),
$.__views.close=Ti.UI.createView(
{width:50,height:50,right:0,id:'close'}),

$.__views.titleBar.add($.__views.close),
close?$.addListener($.__views.close,'click',close):__defers['$.__views.close!click!close']=!0,$.__views.__alloyId213=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:18},color:Alloy.Globals.Style.Color.SilverTwo,text:'j',width:Ti.UI.SIZE,id:'__alloyId213'}),

$.__views.close.add($.__views.__alloyId213),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.getView());var

_init=function(){
args.title&&_setTitle(args.title),
args.titleLeft&&(
$.title.left=args.titleLeft,
$.title.textAlign=Ti.UI.TEXT_ALIGNMENT_LEFT),

$.close.visible=args.showClose||!1,
$.back.visible=args.showBack||!1;
},

_setTitle=function(title){
$.title.text=title;
},

close=function(){
animateButton($.close,$.close.color,.8,function(){
$.trigger('close',{
type:'close',
source:$});

});
},
back=function(){
animateButton($.back,$.back.color,.8,function(){
$.trigger('back',{
type:'back',
source:$});

});
};
_init(),
exports.setTitle=_setTitle,





__defers['$.__views.back!click!back']&&$.addListener($.__views.back,'click',back),__defers['$.__views.close!click!close']&&$.addListener($.__views.close,'click',close),



_.extend($,exports);
}

module.exports=Controller;