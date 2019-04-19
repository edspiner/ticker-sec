var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.mood/'+s:
s.substring(0,index)+'/tf.app.mood/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.mood');




if(this.__widgetId='tf.app.mood',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='moodIcon',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.icon=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{touchEnabled:!1,id:'icon'}),

$.__views.icon&&$.addTopLevelView($.__views.icon),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools'),

_init=function(){
WTools.setTiProps(args,$.icon),
args.value&&_setValue(args.value);
},

_setValue=function(val){
var image;

image=1.5>val?'/images/mood-down.svg':
2.5>val?
'/images/mood-sad.svg':
3.5>val?
'/images/mood-ok.svg':
4.5>val?
'/images/mood-happy.svg':

'/images/mood-delighted.svg',

image&&($.icon.image=image);
};

_init(),

Object.defineProperty($,'height',{

get:function(){
return $.icon.height;
},
set:function(height){
$.icon.height=height;
}}),


Object.defineProperty($,'width',{
get:function(){
return $.icon.width;
},
set:function(width){
$.icon.width=width;
}}),


exports.setValue=_setValue,









_.extend($,exports);
}

module.exports=Controller;