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




if(this.__widgetId='tf.app.login',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='requestCode',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{height:Ti.UI.FILL,layout:'vertical',backgroundColor:'#FFF',width:Alloy.Globals.Style.Size.Width.pct100,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.requestCodePage=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'requestCodePage',layout:'vertical'}),

$.__views.container.add($.__views.requestCodePage),
$.__views.iconView=Ti.UI.createView(
{height:Ti.UI.SIZE,top:32,id:'iconView'}),

$.__views.requestCodePage.add($.__views.iconView),
$.__views.iconContainer=Ti.UI.createView(
{height:140,width:140,borderRadius:70,backgroundColor:'#61C7E9',opacity:.05,id:'iconContainer'}),

$.__views.iconView.add($.__views.iconContainer),
$.__views.waveIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:72},color:'#2DB9E8',text:'#',textAlign:'center',opacity:1,id:'waveIcon'}),

$.__views.iconView.add($.__views.waveIcon),
$.__views.signInLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:32,fontWeight:'bold'},color:'#000',top:32,textAlign:'center',id:'signInLabel'}),

$.__views.requestCodePage.add($.__views.signInLabel),
$.__views.subTitleLabel=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#898989',left:48,right:48,top:8,textAlign:'center',id:'subTitleLabel'}),

$.__views.requestCodePage.add($.__views.subTitleLabel),
$.__views.errorView=Ti.UI.createView(
{height:27,bottom:5,id:'errorView',horizontalWrap:!0}),

$.__views.container.add($.__views.errorView),
$.__views.errorMessage=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BrandWarn,textAlign:'center',bottom:0,id:'errorMessage'}),

$.__views.errorView.add($.__views.errorMessage),
$.__views.requestButtonContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,left:48,right:48,id:'requestButtonContainer',layout:'vertical'}),

$.__views.container.add($.__views.requestButtonContainer),
$.__views.request=Alloy.createWidget('tf.app.button','widget',{type:'primary',text:'Request magic sign in link',id:'request',__parentSymbol:$.__views.requestButtonContainer}),
$.__views.request.setParent($.__views.requestButtonContainer),
_requestLogin?$.__views.request.on('click',_requestLogin):__defers['$.__views.request!click!_requestLogin']=!0,$.__views.or=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#898989',top:18,textAlign:'center',opacity:.7,id:'or'}),

$.__views.requestButtonContainer.add($.__views.or),
$.__views.accessCodeOptionContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,top:18,id:'accessCodeOptionContainer'}),

$.__views.requestButtonContainer.add($.__views.accessCodeOptionContainer),
openAccessCodeScreen?$.addListener($.__views.accessCodeOptionContainer,'click',openAccessCodeScreen):__defers['$.__views.accessCodeOptionContainer!click!openAccessCodeScreen']=!0,$.__views.enterCodeButton=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BrandPink,id:'enterCodeButton'}),

$.__views.accessCodeOptionContainer.add($.__views.enterCodeButton),
$.__views.enterAccessCode=Alloy.createWidget('tf.app.login','enterAccessCode',{navigation:Alloy.Globals.Nav.Login,id:'enterAccessCode',__parentSymbol:__parentSymbol}),
$.__views.enterAccessCode&&$.addTopLevelView($.__views.enterAccessCode),
$.__views.emailSent=Alloy.createWidget('tf.app.login','emailSent',{id:'emailSent',__parentSymbol:__parentSymbol}),
$.__views.emailSent&&$.addTopLevelView($.__views.emailSent),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var




email,cus=require('services/current_user_service'),iconStyles=require('/styles/iconFormats'),args=arguments[0]||{},

_init=function(){
$.signInLabel.text=IS_HACKA?'Sign in to Hacka':'Sign in to TickerFit',
$.subTitleLabel.text='We can email you an access code and magic link to automatically sign you in. If you prefer you can also enter your access code below.',
$.enterCodeButton.text='Enter access code',
$.or.text='OR',
$.container.top=350>Alloy.Globals.Style.Size.Width.pct100?-24:'4%',
$.iconContainer.height=iconStyles.getIconCircleSize(),
$.iconContainer.width=iconStyles.getIconCircleSize(),
$.iconContainer.borderRadius=iconStyles.getBorderRadius();
},

_requestLogin=function(val){
var params={
urlParams:{
email:encodeURIComponent(email)}};


return Widget.createModel('request_login_mail',params).fetch().then(function(){
$.emailSent.setEmail(email),
Alloy.Globals.Nav.Login.open($.emailSent,{
backgroundColor:'transparent',
backEnabled:!0});

}).catch(_requestLoginError).finally(_requestLoginSuccess);
},

_requestLoginSuccess=function(user){

cus.save({email:email}),

cus.reset();
},

_requestLoginError=function(error){
var errorMessage='';

errorMessage=400===error.status?'Email address not registered':

'consent-denied'===error.message?
'Your consent is required in order to continue.':

'There was a problem accessing the server, please try again.',


LOGGER.error(errorMessage),
$.errorMessage.text=errorMessage;
},

openAccessCodeScreen=function(){
$.errorMessage.text='',
$.enterAccessCode.setEmail(email),
$.enterAccessCode._clearError(),
Alloy.Globals.Nav.Login.open($.enterAccessCode,{
backEnabled:!0});

};

$.cleanup=function(){
$.enterAccessCode.cleanup(),
$.emailSent.cleanup();
},

exports._clearError=function(){
$.errorMessage.text='';
},

exports.setEmail=function(emailAddress){
email=emailAddress;
},

_init(),





__defers['$.__views.request!click!_requestLogin']&&$.__views.request.on('click',_requestLogin),__defers['$.__views.accessCodeOptionContainer!click!openAccessCodeScreen']&&$.addListener($.__views.accessCodeOptionContainer,'click',openAccessCodeScreen),



_.extend($,exports);
}

module.exports=Controller;