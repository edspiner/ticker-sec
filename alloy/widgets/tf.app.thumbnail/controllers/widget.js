var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.thumbnail/'+s:
s.substring(0,index)+'/tf.app.thumbnail/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.thumbnail');




if(this.__widgetId='tf.app.thumbnail',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.thumb=Ti.UI.createView(
{id:'thumb'}),

$.__views.thumb&&$.addTopLevelView($.__views.thumb),
$.__views.thumbnail=Ti.UI.createScrollView(
{contentWidth:'auto',contentHeight:'auto',scrollingEnabled:!1,scrollType:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'thumbnail'}),

$.__views.thumb.add($.__views.thumbnail),
$.__views.thumbnail_imageview=Ti.UI.createImageView(
{top:0,bottom:0,left:0,right:0,visible:!1,preventDefaultImage:!0,id:'thumbnail_imageview'}),

$.__views.thumbnail.add($.__views.thumbnail_imageview),
$.__views.overlay=Ti.UI.createView(
{id:'overlay'}),

$.__views.thumb.add($.__views.overlay),
$.__views.activity=Ti.UI.createActivityIndicator(
{height:Ti.UI.FILL,width:Ti.UI.FILL,backgroundColor:'#d999',color:'#fff',font:{fontFamily:Alloy.CFG.fontBold,fontSize:'12dp'},zIndex:999,style:Titanium.UI.ActivityIndicatorStyle.PLAIN,id:'activity'}),

$.__views.thumb.add($.__views.activity),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
WTools=require('WidgetTools');

WTools.setTiProps(args,$.thumb),
args.children&&1===args.children.length&&
$.overlay.add(args.children[0]);var


loading,
















containerRect,imageLoaded,activity=$.activity,hideActivity=function(){$.overlay.opacity=1,setTimeout(function(){loading&&(loading=!1,activity.hide(),$.trigger('load',{type:'load',source:$}))},100)};


$.thumbnail.addEventListener('postlayout',function pl(){
$.thumbnail.removeEventListener('postlayout',pl),
containerRect=$.thumbnail.rect,
imageLoaded&&

fitImage($.thumbnail_imageview,containerRect);

});var

fitImage=function(imageView,rect){var
img=1?imageView.toBlob():imageView.image,
clipVertical=rect.width/img.width>rect.height/img.height;
if(clipVertical){
var ih=img.height*(rect.width/img.width);
imageView.width=rect.width,
imageView.height=ih,
imageView.top=-(ih-rect.height)/2;
}else{

var iw=img.width*(rect.height/img.height);
imageView.height=rect.height,
imageView.width=iw,
imageView.left=-(iw-rect.width)/2;

}
imageView.visible=!0,
hideActivity();
},
beforeLoadThumbnail=function(){
var imageView=$.thumbnail_imageview;
imageView.visible=!1,
imageView.addEventListener('load',function load(){
imageView.removeEventListener('load',load),
imageLoaded=!0,
containerRect&&

fitImage($.thumbnail_imageview,containerRect);

});
},

_setUrl=function(url){
$.overlay.opacity=0,
loading=!0,
activity.show(),
require('utils/imagecache').cache(url,25e3,function load(blob){
beforeLoadThumbnail(),
$.thumbnail_imageview.image=blob;
},function error(error){
LOGGER.error('Error loading url ['+url+']: '+error),
$.thumbnail_imageview.visible=!1,
hideActivity();
});
},
_setImage=function(image){
$.overlay.opacity=0,
loading=!0,
activity.show(),
beforeLoadThumbnail(),
$.thumbnail_imageview.image=image;
};

args.url&&_setUrl(args.url),
args.image&&_setImage(args.image),

exports.setUrl=_setUrl,
exports.setImage=_setImage,









_.extend($,exports);
}

module.exports=Controller;