var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.chart/'+s:
s.substring(0,index)+'/tf.app.chart/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.chart');




if(this.__widgetId='tf.app.chart',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='bar',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.bar=Ti.UI.createView(
{height:Ti.UI.FILL,borderRadius:5,id:'bar'}),

$.__views.bar&&$.addTopLevelView($.__views.bar),
$.__views.fill=Ti.UI.createView(
{bottom:0,borderRadius:4,id:'fill'}),

$.__views.bar.add($.__views.fill),
exports.destroy=function(){},




_.extend($,$.__views);var


WTools=require('WidgetTools'),
args=arguments[0];

WTools.setTiProps(args,$.bar);var

value=args.value,
barColor=args.barColor;
args.barPadding?(
$.fill.top=args.barPadding,
$.fill.bottom=args.barPadding,
$.fill.left=args.barPadding,
$.fill.right=args.barPadding):

$.fill.height=value+'%',

$.fill.backgroundColor=barColor,









_.extend($,exports);
}

module.exports=Controller;