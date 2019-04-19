var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.dialog/'+s:
s.substring(0,index)+'/tf.app.dialog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.dialog');




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='welcomeBack',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.welcome=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'welcome',layout:'vertical'}),

$.__views.welcome&&$.addTopLevelView($.__views.welcome),
$.__views.logoContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'logoContainer'}),

$.__views.welcome.add($.__views.logoContainer),
$.__views.brand=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:140,height:140,borderRadius:70,id:'brand'}),

$.__views.logoContainer.add($.__views.brand),
$.__views.details=Ti.UI.createView(
{top:32,left:32,right:32,id:'details',layout:'vertical'}),

$.__views.welcome.add($.__views.details),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:22},color:'#111',id:'title'}),

$.__views.details.add($.__views.title),
$.__views.continueButton=Alloy.createWidget('tf.app.button','widget',{top:48,type:'primary',text:'Continue',enabled:!0,id:'continueButton',__parentSymbol:$.__views.details}),
$.__views.continueButton.setParent($.__views.details),
_continue?$.__views.continueButton.on('click',_continue):__defers['$.__views.continueButton!click!_continue']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
emojis=require('/styles/emojis'),
cus=require('services/current_user_service'),
working=!1,

_init=function(){
$.title.text='Welcome back '+cus.singleton().get('user').firstname+'  '+emojis.getUnicode('Wave'),
$.brand.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',
$.logoContainer.top=Alloy.Globals.Style.Size.Height.pct50-$.brand.height;
},

_continue=function(){
working||(
working=!0,
DISPATCHER.once('tf:tracking.started',function(){
DISPATCHER.trigger('tf:welcome.done'),
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
}),
DISPATCHER.trigger('tf:register.push'),
DISPATCHER.trigger('tf:tracking.welcome.done'));

},

_show=function(){
$.welcome.left=0,
$.welcome.animate({
opacity:1});

},

_hide=function(callback){
$.welcome.left=Alloy.Globals.Style.Size.Width.pct100,
$.welcome.animate({
opacity:0},
function(){
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.continueButton!click!_continue']&&$.__views.continueButton.on('click',_continue),



_.extend($,exports);
}

module.exports=Controller;