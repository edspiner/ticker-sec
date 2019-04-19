var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='setup',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.setup=Ti.UI.createView(
{height:Ti.UI.SIZE,backgroundColor:'#fff',id:'setup',layout:'vertical'}),

$.__views.setup&&$.addTopLevelView($.__views.setup),
$.__views.icon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:32},color:Alloy.Globals.Style.Color.LightBlue,text:'z',top:24,width:82,height:82,borderRadius:41,backgroundColor:'#F0FBFF',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'icon'}),

$.__views.setup.add($.__views.icon),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,left:48,right:48,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,top:12,text:'Ready to setup your daily routines?',id:'title'}),

$.__views.setup.add($.__views.title),
$.__views.message=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BattleshipGrey,left:48,right:48,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,top:4,text:'We\u2019ll help you stay on top of your daily tasks and send you reminders so you don\u2019t forget!',id:'message'}),

$.__views.setup.add($.__views.message),
$.__views.action=Ti.UI.createView(
{left:48,right:48,height:50,bottom:8,id:'action'}),

$.__views.setup.add($.__views.action),
_action?$.addListener($.__views.action,'touchstart',_action):__defers['$.__views.action!touchstart!_action']=!0,$.__views.button=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'button',layout:'horizontal'}),

$.__views.action.add($.__views.button),
$.__views.actionText=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.RedPink,text:'Add new',id:'actionText'}),

$.__views.button.add($.__views.actionText),
$.__views.__alloyId152=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.RedPink,text:'e',left:8,id:'__alloyId152'}),

$.__views.button.add($.__views.__alloyId152),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.setup);var

_init=function(){
args.onClick&&_setOnClick(args.onClick);
},

_action=function(){
animateButton($.button,$.button.color,.9,_onClick);
};

Object.defineProperty($,'opacity',{

get:function(){
return $.setup.opacity;
},
set:function(opacity){
$.setup.opacity=opacity;
}}),

Object.defineProperty($,'height',{

get:function(){
return $.setup.height;
},
set:function(height){
$.setup.height=height;
}});var


_setIconActive=function(active){
$.icon.backgroundColor=active?'#F0FBFF':'#F8FAFB',
$.icon.color=active?Alloy.Globals.Style.Color.LightBlue:Alloy.Globals.Style.Color.SilverTwo;
},

_setTitle=function(title){
$.title.text=title;
},
_setMessage=function(message){
$.message.text=message;
},
_hideAction=function(val){
$.action.opacity=val?0:1;
},

_onClick=function(){
LOGGER.warn('NOOP!');
},

_setOnClick=function(callback){
_onClick=callback;
};

_init(),

exports.setOnClick=_setOnClick,
exports.cleanup=function(){

},
exports.setIconActive=_setIconActive,
exports.setTitle=_setTitle,
exports.setMessage=_setMessage,
exports.hideAction=_hideAction,





__defers['$.__views.action!touchstart!_action']&&$.addListener($.__views.action,'touchstart',_action),



_.extend($,exports);
}

module.exports=Controller;