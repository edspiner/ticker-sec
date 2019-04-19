var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.toast/'+s:
s.substring(0,index)+'/tf.app.toast/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.toast');




if(this.__widgetId='tf.app.toast',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.toast=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,opacity:0,id:'toast',layout:'vertical'}),

$.__views.toast&&$.addTopLevelView($.__views.toast),
_hide?$.addListener($.__views.toast,'touchstart',_hide):__defers['$.__views.toast!touchstart!_hide']=!0,$.__views.caret=Ti.UI.createView(
{top:3,backgroundColor:Alloy.Globals.Style.Color.RedPink,width:15,height:15,id:'caret'}),

$.__views.toast.add($.__views.caret),
$.__views.bubble=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:-13,backgroundColor:Alloy.Globals.Style.Color.RedPink,borderRadius:4,id:'bubble'}),

$.__views.toast.add($.__views.bubble),
$.__views.text=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:'white',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:12,right:12,top:6,bottom:6,id:'text'}),

$.__views.bubble.add($.__views.text),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict',

$.caret.transform=Ti.UI.create2DMatrix({
rotate:45});var

hidden=!0,

_show=function(text,properties,timeout){
hidden&&(
hidden=!1,
$.toast.applyProperties(properties),
$.text.applyProperties({
text:text}),

$.toast.animate({opacity:1,duration:200},function(){
$.toast.applyProperties({
opacity:1});

}),
timeout&&
setTimeout(function(){
hidden||
_hide();

},timeout));


},
_hide=function(){
$.toast.animate({opacity:0,duration:300},function(){
hidden=!0,
$.toast.applyProperties({
opacity:0}),

$.text.applyProperties({
text:''});

});
};
exports.show=_show,
exports.hide=_hide,





__defers['$.__views.toast!touchstart!_hide']&&$.addListener($.__views.toast,'touchstart',_hide),



_.extend($,exports);
}

module.exports=Controller;