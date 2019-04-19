var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.share/'+s:
s.substring(0,index)+'/tf.app.share/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.share');




if(this.__widgetId='tf.app.share',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='add',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.add=Ti.UI.createView(
{opacity:0,left:Alloy.Globals.Style.Size.Width.pct99,height:Alloy.Globals.Style.Size.Height.pct100,width:Alloy.Globals.Style.Size.Width.pct100,id:'add'}),

$.__views.add&&$.addTopLevelView($.__views.add),
$.__views.dialog=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,id:'dialog',layout:'vertical'}),

$.__views.add.add($.__views.dialog),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Share Your Progress',showClose:!0,showBack:!0,id:'titlebar',__parentSymbol:$.__views.dialog}),
$.__views.titlebar.setParent($.__views.dialog),
_close?$.__views.titlebar.on('close',_close):__defers['$.__views.titlebar!close!_close']=!0,_back?$.__views.titlebar.on('back',_back):__defers['$.__views.titlebar!back!_back']=!0,$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:5,left:24,right:24,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'Add who you would like to share your progress with\u2026',id:'description'}),

$.__views.dialog.add($.__views.description),

$.__views.focus=Ti.UI.createTextField(
{height:'1',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},width:'1',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,id:'focus'}),

$.__views.dialog.add($.__views.focus),

$.__views.name=Alloy.createWidget('tf.app.textInput','widget',{top:16,left:16,right:16,description:'Name',hintText:'e.g Mum, Dad, Mary...',keyboardType:Ti.UI.KEYBOARD_TYPE_DEFAULT,returnKeyType:Ti.UI.RETURNKEY_NEXT,validate:['NOT_EMPTY'],id:'name',__parentSymbol:$.__views.dialog}),
$.__views.name.setParent($.__views.dialog),
$.__views.email=Alloy.createWidget('tf.app.textInput','widget',{top:16,left:16,right:16,description:'Email address',hintText:'e.g joe@email.com',keyboardType:Ti.UI.KEYBOARD_TYPE_EMAIL,returnKeyType:Ti.UI.RETURNKEY_DONE,validate:['NOT_EMPTY','EMAIL'],id:'email',__parentSymbol:$.__views.dialog}),
$.__views.email.setParent($.__views.dialog),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:16,right:16,bottom:16,type:'primary',text:'Share now',id:'button',__parentSymbol:$.__views.dialog}),
$.__views.button.setParent($.__views.dialog),
_add?$.__views.button.on('click',_add):__defers['$.__views.button!click!_add']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var





shiftBottom,guardians=require('services/guardians_service'),Q=require('vendor/q'),initialised=!1,
keyboardHeight=Alloy.Globals.isIPhoneX||!0?300:250,
up=!1,

_showSpinner=function(){
return Q.fcall(function(){



return DISPATCHER.trigger('tf:progress.start',{message:'Inviting...'}),!0;
});
},
_hideSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
},

_init=function(){
initialised||(
initialised=!0,
$.name.on('return',function(e){
$.email.focus();
}),
$.email.on('return',function(e){


$.email.blur(),

_add();
}),
_.forEach([$.name,$.email],function(input){
input.on('focus',_moveUp),
input.on('blur',_moveDown);
}),
$.dialog.addEventListener('postlayout',function pl(){
shiftBottom=keyboardHeight-(Alloy.Globals.Style.Size.Height.pct100-$.dialog.size.height)/2,
up&&_moveUp();
}));
},
setBottom=function(bottom){
bottom?
$.add.animate({bottom:bottom,duration:100}):

$.add.bottom=bottom;

},
_setBottom=_.debounce(setBottom,50),
_moveUp=function(){
_setBottom(shiftBottom),
up=!0;
},
_moveDown=function(){
_setBottom(void 0),
up=!1;
},

_close=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},
_back=function(){
_hide(),
$.trigger('back',{
type:'cancel',
source:$});

},

_add=function(){
_.forEach([$.name,$.email],function(input){
input.blur();
}),
$.name.validate()&&
$.email.validate()&&
_showSpinner().then(function(){
return guardians.invite($.email.getValue(),$.name.getValue());
}).then(_added).catch(_error).finally(_hideSpinner);
},

_added=function(){

_hide(function(){
$.trigger('back',{
type:'progress-sent',
source:$});

});
},

_error=function(error){
error&&error.description&&-1!=error.description.indexOf('registered in another practice')&&(
message='Cannot share with '+$.name.getValue()+'. The email provided is associated with an account that cannot be used to view your progress.  Please use a different email address.'),

LOGGER.debug('ERROR Inviting Guardian:'+error);
var dialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:message||'There was a problem inviting '+$.name.getValue()+' to view your progress, please try again later.',
title:'Uh Oh!'});

dialog.show();
},

_show=function(){
DISPATCHER.on('tf:share.back',_back),
$.add.animate({
opacity:1,
duration:200,
left:0},
function(){

});
},
_hide=function(callback){
DISPATCHER.off('tf:share.back',_back),
$.add.animate({
opacity:0,
duration:300,
left:Alloy.Globals.Style.Size.Width.pct99},
function(){

_.forEach([$.name,$.email],function(input){
input.blur(),
input.reset();
}),

Ti.UI.Android.hideSoftKeyboard(),

callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.titlebar!close!_close']&&$.__views.titlebar.on('close',_close),__defers['$.__views.titlebar!back!_back']&&$.__views.titlebar.on('back',_back),__defers['$.__views.button!click!_add']&&$.__views.button.on('click',_add),



_.extend($,exports);
}

module.exports=Controller;