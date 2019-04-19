var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.textInput/'+s:
s.substring(0,index)+'/tf.app.textInput/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.textInput');




if(this.__widgetId='tf.app.textInput',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.widget=Ti.UI.createView(
{layout:'vertical',width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'widget'}),

$.__views.widget&&$.addTopLevelView($.__views.widget),
$.__views.__alloyId214=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'__alloyId214'}),

$.__views.widget.add($.__views.__alloyId214),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,width:Ti.UI.FILL,id:'description'}),

$.__views.__alloyId214.add($.__views.description),
$.__views.warning=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.PinkRed,text:'S',width:Ti.UI.SIZE,right:6,opacity:0,id:'warning'}),

$.__views.__alloyId214.add($.__views.warning),
$.__views.input=Ti.UI.createTextField(
{height:48,padding:{left:12,right:12},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},top:6,width:Ti.UI.FILL,id:'input'}),

$.__views.widget.add($.__views.input),
$.__views.error=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.Silver,top:2,width:Ti.UI.FILL,height:0,opacity:0,id:'error'}),

$.__views.widget.add($.__views.error),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools'),
Validator=require('validator/validator_factory');

WTools.setTiProps(args,$.getView()),

args.description&&($.description.text=args.description),
args.hintText&&($.input.hintText=args.hintText),
args.keyboardType&&($.input.keyboardType=args.keyboardType),
args.returnKeyType&&($.input.returnKeyType=args.returnKeyType);var

validate=args.validate||[],
validBorderColor=$.input.borderColor,
errorColor=Alloy.Globals.Style.Color.PinkRed,

_init=function(){0?



$.input.addEventListener('click',clearError):$.input.addEventListener('singletap',clearError),

$.input.addEventListener('focus',clearError),
$.input.addEventListener('blur',function(){
_validate();
});
},

showError=function(text){
$.updateViews({
"#input":{
borderColor:errorColor},

"#error":{
text:text,
height:Ti.UI.SIZE,
opacity:1},

"#warning":{
opacity:1}});


},
clearError=function(){
$.updateViews({
"#input":{
borderColor:validBorderColor},

"#error":{
height:0,
opacity:0},

"#warning":{
opacity:0}});


},
testRule=function(rule){
if('NOT_EMPTY'===rule){
if(Validator.string.isEmpty($.input.value))

return showError('Uh oh, please fill in this field'),!1;}else

if('EMAIL'===rule&&
!Validator.email.isEmail($.input.value))

return showError('Uh oh, please enter a a valid email address'),!1;


return!0;
},

_validate=function(){

var failed=_.find(validate,function(rule){
return!testRule(rule);
});

return failed||clearError(),!failed;
},
_reset=function(){
$.input.value='',
clearError();
};

_init(),


exports.on=function(evt,callback){
$.input.addEventListener(evt,callback);
},
exports.off=function(evt,callback){
$.input.removeEventListener(evt,callback);
},

exports.focus=function(){
$.input.focus();
},

exports.blur=function(){
$.input.blur();
},
exports.getValue=function(){
return $.input.value;
},
exports.validate=_validate,
exports.reset=_reset,









_.extend($,exports);
}

module.exports=Controller;