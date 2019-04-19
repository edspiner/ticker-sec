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




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='login',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.login=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'login'}),

$.__views.login&&$.addTopLevelView($.__views.login),
$.__views.loginContainer=Ti.UI.createView(
{backgroundColor:'#FFF',width:Alloy.Globals.Style.Size.Width.pct100,id:'loginContainer',layout:'vertical'}),

$.__views.login.add($.__views.loginContainer),
$.__views.imageView=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'imageView',layout:'vertical'}),

$.__views.loginContainer.add($.__views.imageView),
blurTextField?$.addListener($.__views.imageView,'click',blurTextField):__defers['$.__views.imageView!click!blurTextField']=!0,$.__views.imageContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'imageContainer'}),

$.__views.imageView.add($.__views.imageContainer),
$.__views.logo=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:140,height:140,id:'logo',image:''}),

$.__views.imageContainer.add($.__views.logo),
$.__views.welcomeLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:32,fontWeight:'bold'},color:'#000',top:32,textAlign:'center',id:'welcomeLabel'}),

$.__views.imageView.add($.__views.welcomeLabel),
$.__views.subTitleLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#898989',top:4,left:32,right:32,textAlign:'center',id:'subTitleLabel'}),

$.__views.imageView.add($.__views.subTitleLabel),
$.__views.loginView=Ti.UI.createView(
{height:Ti.UI.SIZE,left:48,right:48,id:'loginView',layout:'vertical'}),

$.__views.loginContainer.add($.__views.loginView),
$.__views.errorView=Ti.UI.createView(
{height:27,bottom:5,id:'errorView',horizontalWrap:!0}),

$.__views.loginView.add($.__views.errorView),
$.__views.errorMessage=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BrandWarn,textAlign:'center',bottom:0,id:'errorMessage'}),

$.__views.errorView.add($.__views.errorMessage),

$.__views.__alloyId1=Ti.UI.createTextField(
{height:'1',padding:{left:Alloy.Globals.Style.Size.Width.pct2,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},width:'1',softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,id:'__alloyId1'}),

$.__views.loginView.add($.__views.__alloyId1),

$.__views.email=(require('/ui/common/custom_textfield').createTextField||Ti.UI.createTextField)(
{height:50,padding:{left:20,right:Alloy.Globals.Style.Size.Width.pct2},borderColor:Alloy.Globals.Style.Color.SilverTwo,borderRadius:8,borderWidth:1,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,color:Alloy.Globals.Style.Color.TwilightBlue,hintTextColor:Alloy.Globals.Style.Color.Silver,backgroundColor:'#fff',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'18dp'},left:0,right:0,hintText:L('widget_login_input_hint_email'),keyboardType:Ti.UI.KEYBOARD_TYPE_EMAIL,returnKeyType:Ti.UI.RETURNKEY_NEXT,id:'email'}),

$.__views.loginView.add($.__views.email),
$.__views.consentContainer=Ti.UI.createView(
{height:50,top:12,id:'consentContainer'}),

$.__views.loginView.add($.__views.consentContainer),
$.__views.__alloyId2=Ti.UI.createView(
{layout:'horizontal',horizontalWrap:!1,id:'__alloyId2'}),

$.__views.consentContainer.add($.__views.__alloyId2),
$.__views.checkContainer=Ti.UI.createView(
{width:40,height:40,id:'checkContainer'}),

$.__views.__alloyId2.add($.__views.checkContainer),
toggleConsent?$.addListener($.__views.checkContainer,'click',toggleConsent):__defers['$.__views.checkContainer!click!toggleConsent']=!0,$.__views.check=Ti.UI.createView(
{height:26,width:26,borderColor:Alloy.Globals.Style.Color.BrandGreyDarker,borderRadius:5,touchEnabled:!1,id:'check'}),

$.__views.checkContainer.add($.__views.check),
$.__views.tick=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:'#FFF',text:'h',id:'tick'}),

$.__views.check.add($.__views.tick),
$.__views.policyText=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'13dp'},color:Alloy.Globals.Style.Color.BrandGreyDarker,right:48,left:6,text:'-',id:'policyText'}),

$.__views.__alloyId2.add($.__views.policyText),
$.__views.buttonContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'buttonContainer'}),

$.__views.loginView.add($.__views.buttonContainer),
$.__views.submit=Alloy.createWidget('tf.app.button','widget',{type:'primary',text:'Continue',top:22,id:'submit',__parentSymbol:$.__views.buttonContainer}),
$.__views.submit.setParent($.__views.buttonContainer),
_validateLoginRequest?$.__views.submit.on('click',_validateLoginRequest):__defers['$.__views.submit!click!_validateLoginRequest']=!0,$.__views.closeButton=Ti.UI.createView(
{height:60,width:60,top:12,id:'closeButton'}),

$.__views.loginView.add($.__views.closeButton),
blurTextField?$.addListener($.__views.closeButton,'click',blurTextField):__defers['$.__views.closeButton!click!blurTextField']=!0,$.__views.downArrow=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:24},color:Alloy.Globals.Style.Color.LightBlue,text:'b',opacity:.7,id:'downArrow'}),

$.__views.closeButton.add($.__views.downArrow),
$.__views.borderLine=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{height:1,bottom:62,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:86}),Alloy.deepExtend(!0,o,{id:'borderLine'}),o;
}()),

$.__views.login.add($.__views.borderLine),
$.__views.deployment=Ti.UI.createView(
function(){
var o={};



return Alloy.deepExtend(!0,o,{bottom:0,height:62}),Alloy.Globals.isIPhoneX&&Alloy.deepExtend(!0,o,{bottom:24}),Alloy.deepExtend(!0,o,{id:'deployment',layout:'horizontal'}),o;
}()),

$.__views.login.add($.__views.deployment),
$.__views.deploymentText=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#111',left:32,textAlign:'center',text:'-',id:'deploymentText'}),

$.__views.deployment.add($.__views.deploymentText),
$.__views.switchContainer=Ti.UI.createView(
{right:0,textAlign:'center',id:'switchContainer'}),

$.__views.deployment.add($.__views.switchContainer),
$.__views.switchButton=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:18},color:Alloy.Globals.Style.Color.LightBlue,right:48,text:'Switch',id:'switchButton'}),

$.__views.switchContainer.add($.__views.switchButton),
_selectDeployment?$.addListener($.__views.switchButton,'click',_selectDeployment):__defers['$.__views.switchButton!click!_selectDeployment']=!0,$.__views.rightArrow=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:12},color:Alloy.Globals.Style.Color.LightBlue,text:'e',right:32,id:'rightArrow'}),

$.__views.switchContainer.add($.__views.rightArrow),
_selectDeployment?$.addListener($.__views.rightArrow,'click',_selectDeployment):__defers['$.__views.rightArrow!click!_selectDeployment']=!0,$.__views.selectRegion=Alloy.createWidget('tf.app.login','selectRegion',{navigation:Alloy.Globals.Nav.Login,id:'selectRegion',__parentSymbol:__parentSymbol}),
$.__views.selectRegion&&$.addTopLevelView($.__views.selectRegion),
$.__views.requestCode=Alloy.createWidget('tf.app.login','requestCode',{navigation:Alloy.Globals.Nav.Login,id:'requestCode',__parentSymbol:__parentSymbol}),
$.__views.requestCode&&$.addTopLevelView($.__views.requestCode),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var












consent,

emailAddress,Q=require('vendor/q'),Validator=require('validator/validator_factory'),userConsentService=require('services/user_consent_service'),ErrorDialog=require('ui/common/validation_error'),cus=require('services/current_user_service'),dimension=require('platform/dimension'),iconStyles=require('/styles/iconFormats'),emojis=require('/styles/emojis'),strings=require('/utils/loginStrings'),args=arguments[0]||{},margins=96,
screenWidth=Alloy.Globals.Style.Size.Width.pct100,

_init=function(){










if(DISPATCHER.on('tf.app.login.onOpen',onOpen),onOpen(args),$.logo.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',$.welcomeLabel.text='Welcome',$.logo.height=iconStyles.getIconCircleSize(),$.logo.width=iconStyles.getIconCircleSize(),$.loginContainer.top=350>screenWidth?0:'4%',$.email.top=350>screenWidth?-8:0,$.deployment.width=screenWidth+4,$.downArrow.visible=!1,args.email)
$.email.value=args.email;else
{
var email=cus.singleton().get('email');
email&&(
$.email.value=email);

}var

text='I consent to the use of my personal data as defined in the T&Cs and privacy policy.',
attr=Ti.UI.createAttributedString({
text:text,
attributes:[{
type:Titanium.UI.ATTRIBUTE_LINK,
value:Ti.App.Properties.getString('privacyUrl'),
range:[text.indexOf('privacy policy'),14]},
{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:Alloy.Globals.Style.Color.BrandPink,
range:[text.indexOf('privacy policy'),14]},
{
type:Ti.UI.ATTRIBUTE_UNDERLINE_COLOR,
value:'transparent',
range:[text.indexOf('privacy policy'),14]},
{
type:Titanium.UI.ATTRIBUTE_LINK,
value:Ti.App.Properties.getString('termsUrl'),
range:[text.indexOf('T&Cs'),4]},
{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:Alloy.Globals.Style.Color.BrandPink,
range:[text.indexOf('T&Cs'),4]},
{
type:Ti.UI.ATTRIBUTE_UNDERLINE_COLOR,
value:'transparent',
range:[text.indexOf('T&Cs'),4]}]});


$.policyText.attributedString=attr,
$.policyText.addEventListener('link',function(e){
Ti.Platform.openURL(e.url);
}),
$.policyText.width=Alloy.Globals.Style.Size.Width.pct100-$.checkContainer.width-margins,
$.email.addEventListener('return',_validateLoginRequest),
$.email.addEventListener('focus',focusTextField),
updateRegionText(),

Ti.App.addEventListener('focus',function(){
consent=userConsentService.getUserConsent();
}),

Ti.App.addEventListener('tf:env.changed',function(){
LOGGER.debug('Deployment region updated...'),
updateRegionText();
});
},

onOpen=function(params){
consent=userConsentService.getUserConsent(),
$.errorMessage.text=strings.errorMessage(params.reason),
$.subTitleLabel.text=strings.loginMessage(params.reason),
$.check.backgroundColor=consent?Alloy.Globals.Style.Color.BrandPink:'transparent',
$.check.borderWidth=consent?0:1;
},

blurTextField=function(){0?(





$.loginView.animate({top:0}),
$.consentContainer.animate({top:12}),
$.buttonContainer.animate({top:0})):($.imageContainer.visible=!0,$.loginView.top=0,Ti.UI.Android.hideSoftKeyboard()),

$.downArrow.visible=!1,
$.welcomeLabel.visible=!0,
$.subTitleLabel.visible=!0,
$.email.blur();
},
focusTextField=function(){0?(




$.loginView.animate({top:-88}),
$.consentContainer.animate({top:0}),
$.buttonContainer.animate({top:-16})):($.imageContainer.visible=!1,$.loginView.top=-216),

$.downArrow.visible=!0,
$.welcomeLabel.visible=!1,
$.subTitleLabel.visible=!1;
},

updateRegionText=function(){
var deploy=require('bootstrap/env').getDeployment();
if(deploy&&deploy.region){var
region=deploy.region,
text='Region: '+region+'  '+emojis.getUnicode(region),
attr=Ti.UI.createAttributedString({
text:text,
attributes:[{
type:Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
value:'#88999f',
range:[text.indexOf(': ')+2,text.length-8]}]});


$.deploymentText.attributedString=attr,
$.deploymentText.opacity=1;
}else
$.deploymentText.opacity=0;

},

_selectDeployment=function(){
blurTextField(),
Ti.UI.Android.hideSoftKeyboard(),
Alloy.Globals.Nav.Login.open($.selectRegion,{
title:'Select Region',
backEnabled:!0});

},

toggleConsent=function(e){
consent=!consent,
userConsentService.setUserConsent(consent),
$.check.backgroundColor=consent?Alloy.Globals.Style.Color.BrandPink:'transparent',
$.check.borderWidth=consent?0:1,
$.errorMessage.text='';
},

_back=function(){
$.requestCode.hide();
},

_validateLoginRequest=function(){return(
_clearError(),


Validator.form.checkCustomTextFieldsEmpty([$.email]))?void
ErrorDialog.show():(




emailAddress=$.email.value,
' '===emailAddress.slice(-1)&&(
emailAddress=emailAddress.slice(0,-1)),

Validator.string.isEmpty(emailAddress)||Validator.email.isEmail(emailAddress)?void






_requestPermission().then(_requestPermissionSuccess).catch(_requestPermissionError):void($.errorMessage.text=L('widget_signup_error_invalid_email')));
},

_requestPermission=function(){
var deferred=Q.defer();

if(!consent){var

msg='\nYou must consent to the use of your personal data as defined by our privacy policy in order to use this application. \n\nWe treat your privacy very seriously. For further information please see our Privacy Policy below.',
dialog=Ti.UI.createAlertDialog({
buttonNames:['T&Cs','Privacy Policy','Dismiss'],
message:msg,
title:'Terms of Service',
persistent:!0,
canceledOnTouchOutside:!1});

dialog.addEventListener('click',function(e){
0<=e.index&&2>=e.index&&(
0==e.index?(
require('services/event_tracking_service').record('start-view-terms-conditions',{}),
Ti.Platform.openURL(Ti.App.Properties.getString('termsUrl'))):
1==e.index&&(
require('services/event_tracking_service').record('start-view-privacy-policy',{}),
Ti.Platform.openURL(Ti.App.Properties.getString('privacyUrl'))));


}),
dialog.show(),
deferred.reject({
message:'consent-denied'});

}else{

var params={
urlParams:{
email:encodeURIComponent(emailAddress)}};


Alloy.createModel('validate_email',params).fetch().then(function(){
deferred.resolve();
}).catch(function(err){
LOGGER.warn('EMAIL ADDRESS ERROR:'+JSON.stringify(err)),
deferred.reject();
});
}
return deferred.promise;
},

_requestPermissionError=function(err){






return blurTextField(),void($.errorMessage.text=err&&'consent-denied'===err.message?'Your consent is required before continuing':L('widget_signup_error_invalid_email'));
},

_requestPermissionSuccess=function(){
blurTextField(),
Ti.UI.Android.hideSoftKeyboard(),
$.requestCode.setEmail(emailAddress),
$.requestCode._clearError(),
Alloy.Globals.Nav.Login.open($.requestCode,{backEnabled:!0});
},

_clearError=function(){
$.email.clearError(),
$.email.blur(),
$.errorMessage.text='';
};

$.cleanup=function(){
DISPATCHER.off('tf.app.login.onOpen'),
$.email.removeEventListener('return',_validateLoginRequest),
$.email.removeEventListener('focus',focusTextField),
$.policyText.removeEventListener('link',function(e){
Ti.Platform.openURL(e.url);
}),
Ti.App.removeEventListener('tf:env.changed',function(){
LOGGER.debug('Deployment region updated...'),
updateRegionText();
}),
$.selectRegion.cleanup(),
$.requestCode.cleanup();
},

_init(),





__defers['$.__views.imageView!click!blurTextField']&&$.addListener($.__views.imageView,'click',blurTextField),__defers['$.__views.checkContainer!click!toggleConsent']&&$.addListener($.__views.checkContainer,'click',toggleConsent),__defers['$.__views.submit!click!_validateLoginRequest']&&$.__views.submit.on('click',_validateLoginRequest),__defers['$.__views.closeButton!click!blurTextField']&&$.addListener($.__views.closeButton,'click',blurTextField),__defers['$.__views.switchButton!click!_selectDeployment']&&$.addListener($.__views.switchButton,'click',_selectDeployment),__defers['$.__views.rightArrow!click!_selectDeployment']&&$.addListener($.__views.rightArrow,'click',_selectDeployment),



_.extend($,exports);
}

module.exports=Controller;