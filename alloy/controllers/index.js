var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;




function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){





if(require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='index',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winRoot=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',pinned:!0,exitOnClose:!1,closeOnLogout:!1,id:'winRoot',backgroundColor:'#fff'}),

$.__views.winRoot&&$.addTopLevelView($.__views.winRoot),
$.__views.welcome=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,left:0,backgroundColor:'#FFF',id:'welcome'}),

$.__views.winRoot.add($.__views.welcome),
$.__views.beatingHeartView=Ti.UI.createView(
{height:Ti.UI.FILL,id:'beatingHeartView'}),

$.__views.welcome.add($.__views.beatingHeartView),
$.__views.beatingHeartContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'beatingHeartContainer',layout:'vertical'}),

$.__views.beatingHeartView.add($.__views.beatingHeartContainer),
$.__views.beatingHeart=Ti.UI.createLabel(
{font:{fontFamily:'heart',fontSize:Alloy.Globals.Style.Size.Width.grid7},color:Alloy.Globals.Style.Color.BrandPink,text:'a',id:'beatingHeart'}),

$.__views.beatingHeartContainer.add($.__views.beatingHeart),
$.__views.lblStatus=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Size.Width.pct6},color:'#898989',text:'One moment please...',id:'lblStatus'}),

$.__views.beatingHeartContainer.add($.__views.lblStatus),
$.__views.confirmationView=Ti.UI.createView(
{top:80,left:32,right:32,height:Ti.UI.SIZE,visible:!1,id:'confirmationView',layout:'vertical'}),

$.__views.welcome.add($.__views.confirmationView),
$.__views.imageContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'imageContainer'}),

$.__views.confirmationView.add($.__views.imageContainer),
$.__views.logo=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:140,height:140,id:'logo'}),

$.__views.imageContainer.add($.__views.logo),
$.__views.greeting=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Size.Width.pct6},color:'#898989',top:32,id:'greeting'}),

$.__views.confirmationView.add($.__views.greeting),
$.__views.yesView=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'yesView'}),

$.__views.confirmationView.add($.__views.yesView),
$.__views.meButton=Alloy.createWidget('tf.app.button','widget',{top:80,type:'primary',text:'Yes, that\'s me',enabled:!0,id:'meButton',__parentSymbol:$.__views.yesView}),
$.__views.meButton.setParent($.__views.yesView),
_meButtonClicked?$.__views.meButton.on('click',_meButtonClicked):__defers['$.__views.meButton!click!_meButtonClicked']=!0,$.__views.noView=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'noView'}),

$.__views.confirmationView.add($.__views.noView),
_notMeButtonClicked?$.addListener($.__views.noView,'click',_notMeButtonClicked):__defers['$.__views.noView!click!_notMeButtonClicked']=!0,$.__views.notMeButton=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BrandPink,top:36,id:'notMeButton'}),

$.__views.noView.add($.__views.notMeButton),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var














deeplink,






loginRequest,lifecycle=require('bootstrap/lifecycle'),deepLinker=require('bootstrap/deepLinker'),userConsentService=require('services/user_consent_service'),cus=require('services/current_user_service'),openHomeScreenPending=!1,togglesLoaded=!1,userLoaded=!1,animate=!1,gotDeeplink=!1,doneFirst=!1,dltimer=null,viewingPolicy=!1,checkingProfile=!1,
open=!1,

_init=function(){
_initListeners(),

$.winRoot.onBack=function(){

require('com.tickerfit.activity').sendAppToBackground();



},



$.winRoot.open(),
lifecycle.isFirstLaunch()?(
animate=!0,
startHeartBeat(),

setTimeout(checkDeepLink,3e3)):
!lifecycle.isLogInPending()&&(

lifecycle.isLoggedIn()?
openHomeScreen():


checkDeepLink());


},

startHeartBeat=function(){




function animateHeart1(){
heart.animate({
opacity:1,
duration:50,
transform:Ti.UI.create2DMatrix({
scale:1})},

animateHeart2);
}
function animateHeart2(){
animate&&heart.animate({
opacity:.75,
duration:140,
transform:Ti.UI.create2DMatrix({
scale:.85})},


animateHeart3);
}
function animateHeart3(){
heart.animate({
opacity:.5,
duration:440,
transform:Ti.UI.create2DMatrix({
scale:.75})},


animateHeart4);
}
function animateHeart4(){
heart.animate({
opacity:.8,
duration:400,
transform:Ti.UI.create2DMatrix({
scale:.9})},


animateHeart1);
}var heart=$.beatingHeart;
animateHeart2();
},

stopHeartBeat=function(){
animate=!1;
},


checkDeepLink=function(){return(
LOGGER.info('Checking deeplink...'),
null!=dltimer&&(
clearTimeout(dltimer),
dltimer=null),

gotDeeplink?void(



doneFirst=!0,
stopHeartBeat(),
processLoginDeepLink()):void(dltimer=setTimeout(checkDeepLink,500)));
},

processLoginDeepLink=function(){var


dl=deeplink,
handleNoLink=function(){
LOGGER.info('NO LINK DATA FOR LOGIN ON LAUNCH'),
showRequestLoginLink({reason:'no-link'});
},
handleLink=function(link){
link.deployment&&

require('bootstrap/env').setDeployment(link.deployment),


_.defer(function(){
dl.checkuser?(


LOGGER.info('HANDLING DEFERRED LINK DATA'),
require('services/patient_service').getProfile(link.uid,link.token).then(function(data){
showProfileCheck(data,link);
}).catch(function(err){

showRequestLoginLink({reason:'no-profile',email:link.email});
})):(


LOGGER.info('HANDLING LOGIN LINK DATA'),
confirmUser(!0));

});
},

link=deepLinker.handleUrl(dl.link);
if(!link||'login'!=link.type)

handleNoLink();else

if(userConsentService.getUserConsent())
handleLink(link);else
{var
msg='\nYou must consent to the use of your personal data as defined by our T&Cs and privacy policy in order to use this application. \n\nWe treat your privacy very seriously. For further information please see our Privacy Policy below.',
dialog=Ti.UI.createAlertDialog({
buttonNames:['Accept','T&Cs','Privacy Policy','Refuse'],
message:msg,
title:'Terms of Service',
persistent:!0,
canceledOnTouchOutside:!1});

dialog.addEventListener('click',function dlgClick(e){
0<=e.index&&3>=e.index&&(
1==e.index?(

viewingPolicy=!0,
require('services/event_tracking_service').record('start-view-terms-conditions',{}),
Ti.Platform.openURL(Ti.App.Properties.getString('termsUrl')),1?




dialog.show():setTimeout(dialog.show,5)):

2==e.index?(

viewingPolicy=!0,
require('services/event_tracking_service').record('start-view-privacy-policy',{}),
Ti.Platform.openURL(Ti.App.Properties.getString('privacyUrl')),1?




dialog.show():setTimeout(dialog.show,5)):


0===e.index?(

userConsentService.setUserConsent(!0),
handleLink(link)):(


DISPATCHER.trigger('tf.app.login.onOpen',{reason:'no-consent'}),
handleNoLink()));



}),
dialog.show();
}

},

_meButtonClicked=function(){
confirmUser(!0);
},
_notMeButtonClicked=function(){
confirmUser(!1);
},

showProfileCheck=function(user,link){
$.logo.image=IS_HACKA?'/images/hacka-logo.svg':'/images/tickerfit-logo.svg',
$.confirmationView.top=Alloy.Globals.Style.Size.Height.pct50-1.5*$.logo.height,
checkingProfile=!0,
$.greeting.text='Hi, '+user.firstname+'?',
$.notMeButton.text='No, that\'s not me!',
$.confirmationView.visible=!0,
$.beatingHeartView.visible=!1;
},

showRequestLoginLink=function(reason){
loginRequest?


'set-password-failed'===reason.reason&&
DISPATCHER.trigger('tf.app.login.onOpen',reason):(loginRequest=Alloy.createWidget('tf.app.login',reason),loginRequest.getView().open());

},

confirmUser=function(confirmed){




if(checkingProfile=!1,$.confirmationView.visible=!1,$.beatingHeartView.visible=!0,confirmed){

var link=deepLinker.handleUrl(deeplink.link,!0);
setPasswordAndLogin(link);
}else
showRequestLoginLink({reason:'wrong-profile'});

},

setPasswordAndLogin=function(link){
LOGGER.info('User - Logged In With DeepLink'),

require('services/patient_service').setPassword(link.uid,link.token,require('utils/utilities').guid()).then(function(user){

var cu=cus.singleton();
return require('services/patient_service').login(cu.get('email'),cu.get('password')).then(function(){
return user;
});
}).then(function(user){
loginSuccess(user);
}).catch(function(err){


LOGGER.error('error setting password:'+JSON.stringify(err)),
showRequestLoginLink({reason:'set-password-failed',email:link.email});
});
},


loginSuccess=function(user){
lifecycle.logIn(user),
loginRequest&&(
loginRequest.getView().close(),
loginRequest=null);

},

openHomeScreen=function(){
openHomeScreenPending=!0,
waitForUserAndToggles();
},

waitForUserAndToggles=function(){
userLoaded&&togglesLoaded&&openHomeScreenPending&&(
openHomeScreenPending=!1,
progressToOpenHomeScreen());

},

progressToOpenHomeScreen=function(){
var dialog=Alloy.createWidget('tf.app.dialog');
dialog.init();
var cu=cus.singleton();
if('undefined'!=typeof cu.get('showWelcome')&&!1==cu.get('showWelcome'))
createAndOpenMain();else
{
var welcomeType='show-welcome';
cus.singleton().get('email')===Ti.App.Properties.getString('lastLoginEmail')&&(
welcomeType='show-welcome-back'),

DISPATCHER.once('tf:welcome.done',function(){
cus.save({showWelcome:!1}),
createAndOpenMain();
}),
DISPATCHER.trigger('tf:app.dialog.show',{type:welcomeType});
}
},

createAndOpenMain=function(){
if(!open){
open=!0;
var opts;1?





opts={}:(opts=Ti.UI.createAnimation(),opts.left=0,opts.duration=1500),

Alloy.createWidget('tf.app.main').getView().open(opts)}
},

_initListeners=function(){
DISPATCHER.on('tf:toggles.loaded',function(toggles){
toggles.defaults||(
togglesLoaded=!0,
waitForUserAndToggles());

}),

DISPATCHER.on('tf:user.loaded',function(){
userLoaded=!0,
waitForUserAndToggles();
}),


DISPATCHER.on('tf:login.success',function(evt){
LOGGER.info('User Logged In With Access Code'),
evt&&evt.callback&&(

loginSuccess(evt.user),

evt.callback());

}),


DISPATCHER.on('tf:logout',function(){
var cu=cus.singleton();

Ti.App.Properties.setString('lastLoginEmail',cu.get('email'));
var userId=cu.get('userId');
require('push').unregister(cu.get('userId')),
require('services/event_tracking_service').record('logout',{
reason:'user'}),


setTimeout(function(){
lifecycle.logOut();
},1250);
}),

Ti.App.addEventListener('tf:life.cycle.loggedout',function(user){
openHomeScreenPending=!1,
togglesLoaded=!1,
userLoaded=!1,
open=!1,
showRequestLoginLink({reason:'logged-out'});
}),

Ti.App.addEventListener('tf:life.cycle.loggedin',function(user){
openHomeScreen();
}),

Ti.App.addEventListener('tf:life.cycle.deeplink',function(e){
LOGGER.info('DEEPLINK:'+JSON.stringify(e)),
viewingPolicy||(
LOGGER.info('...Updating DEEPLINK'),
gotDeeplink=!0,
deeplink=e);

}),

Ti.App.addEventListener('tf:life.cycle.pause',function(){
viewingPolicy||(
LOGGER.info('RESETTING DEEPLINK ON PAUSE'),
gotDeeplink=!1,
deeplink=null);

}),

Ti.App.addEventListener('tf:life.cycle.resume',function(){
if(viewingPolicy)


return LOGGER.info('RESUMING AFTER VIEWING POLICY'),void(viewingPolicy=!1);

if(!lifecycle.isFirstLaunch()||doneFirst){
var cu=cus.singleton();
cu.hasAuth()||

checkDeepLink();

}
}),

$.winRoot.addEventListener('close',$.cleanup);
};

$.cleanup=function cleanup(){
LOGGER.error('MAIN WINDOW IS EXITING...'),


$.destroy(),

$.off();















},

_init(),





__defers['$.__views.meButton!click!_meButtonClicked']&&$.__views.meButton.on('click',_meButtonClicked),__defers['$.__views.noView!click!_notMeButtonClicked']&&$.addListener($.__views.noView,'click',_notMeButtonClicked),



_.extend($,exports);
}

module.exports=Controller;