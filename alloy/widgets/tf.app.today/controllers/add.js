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




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='add',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.overlay=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{width:62,height:62,borderRadius:31,bottom:8,borderWidth:0}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:28}),Alloy.deepExtend(!0,o,{id:'overlay'}),o;
}()),

$.__views.overlay&&$.addTopLevelView($.__views.overlay),
$.__views.shadow=Ti.UI.createView(
{top:0,width:62,height:62,borderRadius:31,backgroundGradient:{type:'radial',startPoint:{x:31,y:31},endPoint:{x:31,y:31},colors:[Alloy.Globals.Style.Color.TwilightBlue,'transparent'],startRadius:1,endRadius:30},id:'shadow'}),

$.__views.overlay.add($.__views.shadow),
$.__views.btn=Ti.UI.createView(
{top:0,width:55,height:55,borderRadius:27.5,backgroundColor:Alloy.Globals.Style.Color.RedPink,id:'btn'}),

$.__views.overlay.add($.__views.btn),
_click?$.addListener($.__views.btn,'click',_click):__defers['$.__views.btn!click!_click']=!0,$.__views.__alloyId82=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:40},color:'#fff',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,top:-3,text:'+',id:'__alloyId82'}),

$.__views.btn.add($.__views.__alloyId82),
exports.destroy=function(){},




_.extend($,$.__views);var


animateButton=require('utils/ui').animateClick,

_click=function(){

$.btn.animate({
duration:75,
transform:Ti.UI.create2DMatrix({
scale:.95}),

autoreverse:!0},
function(){
DISPATCHER.trigger('tf:app.add.click','add');
}),
$.shadow.animate({


duration:75,
transform:Ti.UI.create2DMatrix({
scale:.75}),

autoreverse:!0});

};

$.show=function(show){
$.overlay.visible=show;
},





__defers['$.__views.btn!click!_click']&&$.addListener($.__views.btn,'click',_click),



_.extend($,exports);
}

module.exports=Controller;