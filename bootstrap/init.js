var
lifecycle,initialised=!1,
cus=require("services/current_user_service"),
pushInit=!1;

T=function(name){
return require("T/"+name);
};var

_init=function(startedBy){




























































if(pushInit="notification"===startedBy,!1,null==Ti.App.Properties.getString("WAKEREASON")?Ti.App.Properties.setString("WAKEREASON","first"):"undefined"==typeof DEEPLINK?"undefined"==typeof APP_LAUNCHED?Ti.App.Properties.setString("WAKEREASON","system"):Ti.App.Properties.setString("WAKEREASON","user"):Ti.App.Properties.setString("WAKEREASON","deep-link"),"undefined"==typeof LOGGER?(LOGGER=require("log/logger"),LOGGER.debug("Initialising Globals...."),LOGGER.debug("... LOGGER now defined")):LOGGER.debug("Initialising Globals...."),lifecycle=require("bootstrap/lifecycle"),lifecycle.start(),"undefined"==typeof Alloy&&(Alloy=require("alloy"),_=Alloy._,Backbone=Alloy.Backbone,LOGGER.debug("... Alloy, _ & Backbone now defined")),T("trimethyl_background"),Alloy.Globals.alert=function(message,title){var dialog=Ti.UI.createAlertDialog({message:message,ok:"OK",title:title?title:Ti.App.name});return dialog.show(),dialog},"undefined"==typeof DISPATCHER&&(DISPATCHER=require("bootstrap/dispatcher"),LOGGER.debug("... DISPATCHER now defined")),require("bootstrap/env").init(),require("services/current_user_service").init(),require("featureToggles").init(),require("services/patient_service").init(),!0){
var FirebaseCore=require("firebase.core");
FirebaseCore.configure({
GCMSenderID:Ti.App.Properties.getString("fcm.senderId"),
applicationID:Ti.App.Properties.getString("fcm.applicationId"),
APIKey:Ti.App.Properties.getString("fcm.APIKey")});

}

require("backgroundPush").init(),
require("push").init(),
require("tickerfit/tracking").init(),

lifecycle.setFirstLaunch("first"==Ti.App.Properties.getString("WAKEREASON")),!1,







require("services/event_tracking_service").init(),

LOGGER.debug("Attempting to login..."),
login(),
require("utils/imagecache").flushExpired();
},

login=function(){
DISPATCHER.on("app:sync.invalidcredentials",function(){
lifecycle.logOut(),
require("services/event_tracking_service").record("logout",{
reason:"invalid-credentials"});

});var
cu=cus.singleton(),
recordActivity=cu.get("recordActivity");

"undefined"==typeof recordActivity&&(
recordActivity=!0),


"undefined"!=typeof cu.get("showWelcome")&&!0==cu.get("showWelcome")&&(
LOGGER.debug("Preventing start tracking on startup as permissions not yet requested"),
recordActivity=!1),


cu.hasAuth()&&(
lifecycle.setLogInPending(!0),
require("services/patient_service").findOne(cu.get("userId")).progress(function(user){
recordActivity&&(
LOGGER.debug("START TRACKING ON CACHED LOGIN(user:"+cu.get("userId")+")"),
require("tickerfit/tracking").startTracking(cu.get("userId")));

}).then(function(user){
lifecycle.logIn(user);
}));

};

module.exports={
init:function(startedBy){return(
initialised?(




LOGGER.error("RECEIVED INIT BUT ALREADY RUNNING"),!1):(_init(startedBy),initialised=!0,!0));


}};