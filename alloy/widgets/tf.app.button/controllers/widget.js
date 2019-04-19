var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.button/'+s:
s.substring(0,index)+'/tf.app.button/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.button');




if(this.__widgetId='tf.app.button',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.btn=Ti.UI.createView(
{borderRadius:8,height:48,apiName:'Ti.UI.View',id:'btn',classes:[]}),

$.__views.btn&&$.addTopLevelView($.__views.btn),
click?$.addListener($.__views.btn,'click',click):__defers['$.__views.btn!click!click']=!0,$.__views.__alloyId184=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,apiName:'Ti.UI.View',classes:['view-width-height-fit'],layout:'horizontal',id:'__alloyId184'}),

$.__views.btn.add($.__views.__alloyId184),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:28},color:'#111',apiName:'Ti.UI.Label',id:'icon',classes:[]}),

$.__views.__alloyId184.add($.__views.icon),
$.__views.label=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBlack,fontSize:16},color:'#111',apiName:'Ti.UI.Label',id:'label',classes:[]}),

$.__views.__alloyId184.add($.__views.label),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.btn);var

enabled,
backgroundColor,textColor,

_setEnabled=function(val){
$.btn.opacity=val?1:.5,
enabled=val;
},

click=function(){
enabled&&
animateButton($.btn,$.btn.color,!0,function(){
$.trigger('click',{
type:'click',
source:$});

});

},

_init=function(){


















if('tertiary'===args.type?(textColor='#88999F',backgroundColor='#F8FAFB'):'secondary'===args.type?(textColor='#2DB9E8',backgroundColor='#E3F5FB'):'primary'===args.type&&(textColor='#fff',backgroundColor=Alloy.Globals.Style.Color.RedPink),$.btn.backgroundColor=backgroundColor,$.label.color=textColor,args.text&&($.label.text=args.text),'undefined'==typeof args.enabled?_setEnabled(!0):_setEnabled(args.enabled),args.icon){






if($.addClass($.icon,args.icon),$.icon.color=args.iconColor?args.iconColor:textColor,args.iconSize){
var font=$.icon.font;
font.fontSize=args.iconSize,
$.icon.font=font;
}
$.label.left=6;
}
};

_init(),

exports.enable=_setEnabled,
exports.show=function(val){
val?(
$.btn.height=48,
$.btn.opacity=1,
WTools.setTiProps(args,$.btn)):(

$.btn.opacity=0,
$.btn.height=0,
$.btn.top=0,
$.btn.bottom=0);

},
exports.setText=function(text){
$.label.text=text;
},





__defers['$.__views.btn!click!click']&&$.addListener($.__views.btn,'click',click),



_.extend($,exports);
}

module.exports=Controller;