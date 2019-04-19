var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.cardview/'+s:
s.substring(0,index)+'/tf.app.cardview/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.cardview');




if(this.__widgetId='tf.app.cardview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='card',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.card=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.FILL,left:0,id:'card'}),

$.__views.card&&$.addTopLevelView($.__views.card),
$.__views.box=Ti.UI.createView(
{top:16,bottom:0,left:16,right:16,backgroundColor:'#DADADA',height:Ti.UI.SIZE,id:'box'}),

$.__views.card.add($.__views.box),
$.__views.frame=Ti.UI.createView(
{top:0,left:.5,right:.5,bottom:1,backgroundColor:'white',height:Ti.UI.SIZE,id:'frame'}),

$.__views.box.add($.__views.frame),
$.__views.content=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'content'}),

$.__views.frame.add($.__views.content),
exports.destroy=function(){},




_.extend($,$.__views);



var args=arguments[0]||{};


exports.on=$.frame.addEventListener,
exports.off=$.frame.removeEventListener,

exports.bind=$.frame.addEventListener,
exports.unbind=$.frame.removeEventListener,

exports.addEventListener=$.frame.addEventListener,
exports.removeEventListener=$.frame.removeEventListener,

exports.trigger=$.frame.fireEvent,
exports.fireEvent=$.frame.fireEvent,

exports._hasListenersForEventType=$.card._hasListenersForEventType,

args.children&&
_.forEach(args.children,function(child){
$.content.add(child);
}),


exports.setChildren=function(children){
$.content.removeAllChildren(),
_.forEach(children,function(child){
$.content.add(child);
});
},

'undefined'!=typeof args.backgroundColor&&(
$.frame.backgroundColor=args.backgroundColor),(

'undefined'!=typeof args.borderColor||'transparent'===$.frame.backgroundColor)&&(
'transparent'===$.frame.backgroundColor?(
$.box.borderColor=args.borderColor||$.box.backgroundColor,
$.box.backgroundColor='transparent'):

$.box.backgroundColor=args.borderColor),


'undefined'!=typeof args.top&&(
$.box.top=args.top),

'undefined'!=typeof args.bottom&&(
$.box.bottom=args.bottom),

'undefined'!=typeof args.left&&(
$.box.left=args.left),

'undefined'!=typeof args.right&&(
$.box.right=args.right),










_.extend($,exports);
}

module.exports=Controller;