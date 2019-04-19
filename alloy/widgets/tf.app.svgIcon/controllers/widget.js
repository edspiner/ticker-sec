var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.svgIcon/'+s:
s.substring(0,index)+'/tf.app.svgIcon/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.svgIcon');




if(this.__widgetId='tf.app.svgIcon',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.iconContainer=Ti.UI.createScrollView(
{contentWidth:'auto',contentHeight:'auto',scrollingEnabled:!1,scrollType:'vertical',id:'iconContainer'}),

$.__views.container.add($.__views.iconContainer),
$.__views.icon=Ti.UI.createImageView(
{touchEnabled:!1,top:0,bottom:0,left:0,right:0,opacity:0,preventDefaultImage:!0,id:'icon'}),

$.__views.iconContainer.add($.__views.icon),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},

WTools=require('WidgetTools');

WTools.setTiProps(args,$.container);

var containerRect;


$.iconContainer.addEventListener('postlayout',function pl(){
containerRect=$.iconContainer.rect,
loadSVG();
});


var fitSVG=function(imageView,rect){var
img=1?imageView.toBlob():imageView.image,


ih=img.height*(rect.width/img.width);
imageView.width=rect.width,
imageView.height=ih;
};

$._file=args.file,
$._color=args.color;var

SVGView=require('com.geraudbourdin.svgview'),

loadSVG=function(){
var imageView=$.icon;
if($._file){
imageView.addEventListener('load',function load(){
imageView.removeEventListener('load',load),

fitSVG(imageView,containerRect),
$._color&&(
imageView.tintColor=$._color),

imageView.opacity=1,
$.trigger('ready',{
type:'ready',
source:$});

});

var svgOptions={
image:$._file,
width:1?void 0:containerRect.width,
height:1?void 0:containerRect.height};

imageView.image=SVGView.createView(svgOptions).toImage();;
}else
imageView.image=void 0;

};

Object.defineProperty($,'file',{
get:function(){
return $._file;
},
set:function(file){
$._file=file;
}}),


Object.defineProperty($,'color',{
get:function(){
return $._color;
},
set:function(color){
$._color=color;
}}),










_.extend($,exports);
}

module.exports=Controller;