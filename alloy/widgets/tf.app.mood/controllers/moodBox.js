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




if(this.__widgetId='tf.app.mood',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='moodBox',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.mood=Ti.UI.createView(
{borderColor:Alloy.Globals.Style.Color.SilverTwo,id:'mood'}),

$.__views.mood&&$.addTopLevelView($.__views.mood),
$.__views.selected=Ti.UI.createView(
{id:'selected'}),

$.__views.mood.add($.__views.selected),
$.__views.svgIcon=Alloy.createWidget('tf.app.mood','moodIcon',{id:'svgIcon',__parentSymbol:$.__views.selected}),
$.__views.svgIcon.setParent($.__views.selected),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

mood=args.mood||-1;
$.mood.width=args.width,
$.mood.height=args.height,
$.svgIcon.width=.5*args.width,
$.svgIcon.height=.5*args.height;var

svg,
color;

1===mood?(
svg='/images/sad.svg',
color='ef2f7a'):
2===mood?(
svg='/images/notgood.svg',
color='fc7725'):
3===mood?(
svg='/images/soso.svg',
color='ffca54'):
4===mood?(
svg='/images/good.svg',
color='CAD858'):
5===mood&&(
svg='/images/happy.svg',
color='94e65c'),


0<mood?(
$.svgIcon.setValue(mood),

$.mood.backgroundColor='#55'+color):
-1==mood?
$.mood.backgroundColor=Alloy.Globals.Style.Color.PaleGrey:

$.mood.backgroundColor=Alloy.Globals.Style.Color.SilverTwo,

args.selected&&(
0<mood?(
$.selected.borderWidth=3,
$.selected.borderColor='#'+color):

$.mood.borderWidth=3),
















_.extend($,exports);
}

module.exports=Controller;