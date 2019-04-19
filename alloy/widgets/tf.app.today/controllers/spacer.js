var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='spacer',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.spacer=Ti.UI.createView(
{height:24,id:'spacer'}),

$.__views.spacer&&$.addTopLevelView($.__views.spacer),
$.__views.line=Ti.UI.createView(
{backgroundColor:Alloy.Globals.Style.Color.SilverTwo,height:1,width:105,top:12,id:'line'}),

$.__views.spacer.add($.__views.line),
exports.destroy=function(){},




_.extend($,$.__views);


var args=arguments[0]||{};

args.height&&(
$.spacer.height=args.height,
$.line.top=args.height/2),

$.line.opacity=void 0===args.separator||!0===args.separator?1:0,









_.extend($,exports);
}

module.exports=Controller;