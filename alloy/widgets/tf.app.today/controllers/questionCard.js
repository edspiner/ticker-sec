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




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='questionCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.questionCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'questionCard'}),

$.__views.questionCard&&$.addTopLevelView($.__views.questionCard),
_tap?$.addListener($.__views.questionCard,'click',_tap):__defers['$.__views.questionCard!click!_tap']=!0,$.__views.innerCard=Ti.UI.createView(
{touchEnabled:!1,left:'15dp',right:'15dp',top:'15dp',bottom:'15dp',backgroundColor:'#fff',height:Ti.UI.SIZE,id:'innerCard'}),

$.__views.questionCard.add($.__views.innerCard),
$.__views.questionIconContainer=Ti.UI.createView(
{left:0,height:Ti.UI.SIZE,width:Ti.UI.SIZE,touchEnabled:!1,id:'questionIconContainer'}),

$.__views.innerCard.add($.__views.questionIconContainer),
$.__views.questionIcon=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:'40dp'},color:Alloy.Globals.Style.Color.BrandPink,text:Alloy.Globals.Style.DiscoveryString,id:'questionIcon'}),

$.__views.questionIconContainer.add($.__views.questionIcon),
$.__views.lblView=Ti.UI.createView(
{left:'55dp',top:'15dp',bottom:'15dp',height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'lblView'}),

$.__views.innerCard.add($.__views.lblView),
$.__views.lblQuestion=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:'16dp'},color:'#898989',width:Ti.UI.FILL,id:'lblQuestion'}),

$.__views.lblView.add($.__views.lblQuestion),
$.__views.todo=Ti.UI.createView(
{right:'-35dp',top:'-35dp',width:'70dp',height:'70dp',backgroundColor:Alloy.Globals.Style.Color.BrandBlue,borderColor:Alloy.Globals.Style.Color.BrandGreyLight,borderWidth:'1dp',visible:!1,id:'todo'}),

$.__views.questionCard.add($.__views.todo),
exports.destroy=function(){},




_.extend($,$.__views);




var args=arguments[0]||{};

$.lblQuestion.text=args.question,

args.icon&&(
args.icon.font&&(
$.questionIcon.font=args.icon.font),

args.icon.text&&(
$.questionIcon.text=args.icon.text)),


$.todo.transform=Ti.UI.create2DMatrix({
rotate:45}),


$.todo.visible='undefined'==typeof args.todo||args.todo;

var _tap=function(){
args.tap&&args.tap();
};

exports.cleanup=function(){},





__defers['$.__views.questionCard!click!_tap']&&$.addListener($.__views.questionCard,'click',_tap),



_.extend($,exports);
}

module.exports=Controller;