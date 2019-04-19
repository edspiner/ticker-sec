var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.login/'+s:
s.substring(0,index)+'/tf.app.login/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.login');




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='enterAccessCode',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{height:Ti.UI.FILL,layout:'vertical',backgroundColor:'#FFF',width:Alloy.Globals.Style.Size.Width.pct100,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.accessCodeIconView=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'accessCodeIconView',layout:'vertical'}),

$.__views.container.add($.__views.accessCodeIconView),
blurTextField?$.addListener($.__views.accessCodeIconView,'click',blurTextField):__defers['$.__views.accessCodeIconView!click!blurTextField']=!0,$.__views.accessCodeIconContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,top:32,id:'accessCodeIconContainer'}),

$.__views.accessCodeIconView.add($.__views.accessCodeIconContainer),
$.__views.iconContainer=Ti.UI.createView(
{height:140,width:140,borderRadius:70,backgroundColor:'#61C7E9',opacity:.05,id:'iconContainer'}),

$.__views.accessCodeIconContainer.add($.__views.iconContainer),
$.__views.accessCodeIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:72},color:'#2DB9E8',text:'Z',textAlign:'center',opacity:1,id:'accessCodeIcon'}),

$.__views.accessCodeIconContainer.add($.__views.accessCodeIcon),
$.__views.enterCodeLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24,fontWeight:'bold'},color:'#000',top:32,textAlign:'center',id:'enterCodeLabel'}),

$.__views.accessCodeIconView.add($.__views.enterCodeLabel),
$.__views.subTitleLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#898989',left:48,right:48,top:8,textAlign:'center',id:'subTitleLabel'}),

$.__views.accessCodeIconView.add($.__views.subTitleLabel),
$.__views.errorView=Ti.UI.createView(
{height:27,bottom:5,id:'errorView'}),

$.__views.container.add($.__views.errorView),
$.__views.errorMessage=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BrandWarn,width:Alloy.Globals.Style.Size.Width.grid11,textAlign:'center',bottom:0,id:'errorMessage',visible:!1}),

$.__views.errorView.add($.__views.errorMessage),
$.__views.codeEntryContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,top:0,left:48,right:48,zIndex:10,id:'codeEntryContainer',layout:'vertical'}),

$.__views.container.add($.__views.codeEntryContainer),

$.__views.__alloyId0=Ti.UI.createTextField(
{height:'1',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},width:'1',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,id:'__alloyId0'}),

$.__views.codeEntryContainer.add($.__views.__alloyId0),

$.__views.accessCodeTextField=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)(
{height:50,padding:{left:20,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},left:0,right:0,keyboardType:Ti.UI.KEYBOARD_TYPE_EMAIL,returnKeyType:Ti.UI.RETURNKEY_NEXT,id:'accessCodeTextField'}),

$.__views.codeEntryContainer.add($.__views.accessCodeTextField),
$.__views.buttonContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'buttonContainer'}),

$.__views.codeEntryContainer.add($.__views.buttonContainer),
$.__views.activateButton=Alloy.createWidget('tf.app.button','widget',{top:16,type:'primary',text:'Activate',id:'activateButton',__parentSymbol:$.__views.buttonContainer}),
$.__views.activateButton.setParent($.__views.buttonContainer),
_validateLogin?$.__views.activateButton.on('click',_validateLogin):__defers['$.__views.activateButton!click!_validateLogin']=!0,$.__views.closeButton=Ti.UI.createView(
{height:60,width:60,top:12,id:'closeButton'}),

$.__views.codeEntryContainer.add($.__views.closeButton),
blurTextField?$.addListener($.__views.closeButton,'click',blurTextField):__defers['$.__views.closeButton!click!blurTextField']=!0,$.__views.downArrow=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:24},color:Alloy.Globals.Style.Color.LightBlue,text:'b',opacity:.7,id:'downArrow'}),

$.__views.closeButton.add($.__views.downArrow),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var








email,
keyboard,Q=require('vendor/q'),Validator=require('validator/validator_factory'),ErrorDialog=require('ui/common/validation_error'),cus=require('services/current_user_service'),ps=require('services/patient_service'),iconStyles=require('/styles/iconFormats'),
screenWidth=Alloy.Globals.Style.Size.Width.pct100,

blurTextField=function(){1?(



$.codeEntryContainer.top=0,
$.accessCodeIconContainer.visible=!0):$.codeEntryContainer.animate({top:0}),

$.downArrow.visible=!1,
$.enterCodeLabel.visible=!0,
$.subTitleLabel.visible=!0,
$.accessCodeTextField.blur(),
$.errorMessage.visible=!0;
},
focusTextField=function(){
if(!1){
var buffer=350>screenWidth?-120:-88;
$.codeEntryContainer.animate({top:buffer});
}else
$.codeEntryContainer.top=-240,
$.accessCodeIconContainer.visible=!1;

$.downArrow.visible=!0,
$.enterCodeLabel.visible=!1,
$.subTitleLabel.visible=!1,
$.errorMessage.visible=!1;
},

_validateLogin=function(){return(
blurTextField(),
$.accessCodeTextField.clearError(),
$.errorMessage.applyProperties({
visible:!1,
text:''}),



Validator.form.checkCustomTextFieldsEmpty([$.accessCodeTextField])?void
ErrorDialog.show():void



_startSpinner().then(_setAccessCode).then(_login).then(_loginSuccess).catch(_loginError).finally(_stopSpinner));
},

_setAccessCode=function(){
var accessCode=$.accessCodeTextField.value;
return ps.setPassword(-1,accessCode,require('utils/utilities').guid(),email);
},

_login=function(user){var
ps=require('services/patient_service'),

cu=cus.singleton();
return ps.login(cu.get('email'),cu.get('password')).then(function(){
return user;
});
},

_loginSuccess=function(user){

Ti.UI.Android.hideSoftKeyboard(),

$.errorMessage.visible=!1;var
defer=require('vendor/q').defer(),
func=function(){
$.closeWindow(),
defer.resolve({});
};

return DISPATCHER.trigger('tf:login.success',{callback:func,user:user}),defer.promise;
},

_loginError=function(error){var _Stringformat=



































String.format;return(LOGGER.debug('Error to be handled....'),LOGGER.debug(JSON.stringify(error)),LOGGER.debug(!1),404===error.status)?void $.errorMessage.applyProperties({visible:!0,text:L('widget_login_msg_login_error_unknown')}):401===error.status?void $.errorMessage.applyProperties({visible:!0,text:L('widget_login_error_unauthorized')}):'missing_password'===error.errorCode?void $.accessCodeTextField.setErrorText($.accessCodeTextField.hintText):'missing_identity_key'===error.errorCode?void 0:error.description?void $.errorMessage.applyProperties({visible:!0,text:_Stringformat(L('widget_login_msg_login_error_with_info'),error.description)}):



error.errorCode?void

$.errorMessage.applyProperties({
visible:!0,
text:_Stringformat(L('widget_login_msg_login_error_with_info'),error.errorCode)}):void





$.errorMessage.applyProperties({
visible:!0,
text:L('widget_login_msg_login_error_unknown')});

},

_startSpinner=function(){

return require('services/event_tracking_service').record('login-attempt',{}),Q.fcall(function(){

return DISPATCHER.trigger('tf:progress.start',{message:'Logging in...'}),!0;
});
},
_stopSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
},

_init=function(){
$.enterCodeLabel.text='Enter your access code',
$.subTitleLabel.text='Enter your access code which can be found in the same email as your magic sign in link.',
$.accessCodeTextField.hintText='Access code (case sensitive)',
$.accessCodeTextField.addEventListener('return',_validateLogin),
$.accessCodeTextField.addEventListener('focus',focusTextField),
$.downArrow.visible=!1,
$.container.top=350>screenWidth?-24:'4%',
$.iconContainer.height=iconStyles.getIconCircleSize(),
$.iconContainer.width=iconStyles.getIconCircleSize(),
$.iconContainer.borderRadius=iconStyles.getBorderRadius(),
keyboard=!1,

Ti.App.addEventListener('keyboardframechanged',function(){
keyboard?
blurTextField():

focusTextField(),

keyboard=!keyboard;
});
};

_init(),

$.cleanup=function(){
$.accessCodeTextField.removeEventListener('return',_validateLogin),
$.accessCodeTextField.removeEventListener('focus',focusTextField);
},

exports._clearError=function(){
$.errorMessage.visible=!1,
$.accessCodeTextField.setValue('');
},

exports.setEmail=function(emailAddress){
email=emailAddress;
},





__defers['$.__views.accessCodeIconView!click!blurTextField']&&$.addListener($.__views.accessCodeIconView,'click',blurTextField),__defers['$.__views.activateButton!click!_validateLogin']&&$.__views.activateButton.on('click',_validateLogin),__defers['$.__views.closeButton!click!blurTextField']&&$.addListener($.__views.closeButton,'click',blurTextField),



_.extend($,exports);
}

module.exports=Controller;