var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='textEdit',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.editText=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,backgroundColor:'#EEE',id:'editText'}),

$.__views.editText&&$.addTopLevelView($.__views.editText),
$.__views.__alloyId165=Ti.UI.createView(
{height:50,top:'33%',backgroundColor:'#fff',id:'__alloyId165'}),

$.__views.editText.add($.__views.__alloyId165),
$.__views.__alloyId166=Ti.UI.createView(
{left:0,right:0,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,top:0,id:'__alloyId166'}),

$.__views.__alloyId165.add($.__views.__alloyId166),
$.__views.text=Ti.UI.createTextField(
{height:Ti.UI.FILL,padding:{left:0,right:0},borderColor:'transparent',borderRadius:0,borderWidth:0,borderStyle:Ti.UI.INPUT_BORDERSTYLE_NONE,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,color:Alloy.Globals.Style.Color.BrandGreyDark,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'transparent',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18'},left:10,right:10,returnKeyType:Ti.UI.RETURNKEY_DONE,softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS,id:'text'}),

$.__views.__alloyId165.add($.__views.text),
$.__views.__alloyId167=Ti.UI.createView(
{left:0,right:0,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId167'}),

$.__views.__alloyId165.add($.__views.__alloyId167),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='EDITTEXT';var


text,callback,navigation=Alloy.Globals.Nav.Routines,

setText=function(t){
text=t,
$.updateViews({
"#text":{
value:text?text:''}});


},
setPlaceholder=function(p){
$.updateViews({
"#text":{
hintText:p?p:''}});


},
setDoneCallback=function(cb){
callback=cb;
};
navigation.addEventListener('nav.backstart',function focusText(event){
event.tag===$.TAG&&
callback&&
callback($.text.value);


}),
navigation.addEventListener('nav.opencomplete',function focusText(event){
if(event.tag===$.TAG){
var cursor=$.text.value.length;
$.text.setSelection(cursor,cursor);
}
}),
$.text.addEventListener('return',function(e){
navigation.back();
}),

exports.setText=setText,
exports.setPlaceholder=setPlaceholder,
exports.setDoneCallback=setDoneCallback,









_.extend($,exports);
}

module.exports=Controller;