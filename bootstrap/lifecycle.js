"use strict";var

isInitialized=!1,
justLaunched=!0,
performingFetch=!1,
logInPending=!1,

active=!1,

currentWindowId=void 0,

loggedout=!0,
fakeResumeTimer=null,

launch=function(){
LOGGER.debug("[LifeCycle] - app launch"),
Ti.App.fireEvent("tf:life.cycle.launch"),!1;





},

fetch=function(handlerId){
performingFetch=!0,
LOGGER.debug("*********************************************************************"),
LOGGER.debug("************************    FETCH  EVENT   **************************"),
LOGGER.debug("*********************************************************************"),
require("services/event_tracking_service").record("fetch",{}),

setTimeout(function(){
LOGGER.debug("************************   FETCH COMPLETE   *************************"),
Ti.App.iOS.endBackgroundHandler(handlerId);
},2e4);
},

fakeResume=function(){
fakeResumeTimer=null,

require("com.tickerfit.activity").isForeGroundApp()?(
LOGGER.warn("FAKING RESUMED - must have missed resumed event!"),
Ti.App.fireEvent("resumed")):(

performingFetch&&(
performingFetch=!1),

LOGGER.debug("NOT FAKING RESUMED AS STARTED BY HK/LOCATION/NOTIFICATION/BLE/FETCH INTO BACKGROUND"));

},

pause=function(){
active=!1,
LOGGER.info("[LifeCycle] - app pause"),
Ti.App.fireEvent("tf:life.cycle.pause");
},

doneFirstLaunch=!1,
deferredRequested=!1,
firstLaunch=!1,

setFirstLaunch=function(first){
firstLaunch=first;
},

isFirstLaunch=function(){
return firstLaunch;
},

resume=function(){
active=!0,
fakeResumeTimer&&(
LOGGER.debug("Clearing fake resume timer as we have resumed normally on launch"),
clearTimeout(fakeResumeTimer),
fakeResumeTimer=null),

LOGGER.info("[LifeCycle] - app resume");

var deeplink=null;!1?

null!=Ti.App.getArguments().url&&(
Alloy.Globals.ActivationReason="deep-link",
deeplink=Ti.App.getArguments().url):


"undefined"!=typeof DEEPLINK&&(
Alloy.Globals.ActivationReason="deep-link",
deeplink=DEEPLINK,
DEEPLINK=void 0),



isFirstLaunch()&&!doneFirstLaunch?
deeplink?(


















LOGGER.debug("DEEPLINK on firstlaunch:"+deeplink),
Ti.App.fireEvent("tf:life.cycle.deeplink",{
link:deeplink,
checkuser:!1}),

doneFirstLaunch=!0):!deferredRequested&&(LOGGER.debug("Getting deferred deeplink on first app launch"),deferredRequested=!0,require("services/deeplink_service").getDeferredLink().then(function(deferredLink){deferredLink&&deferredLink.link&&null!=deferredLink.link&&(LOGGER.debug("Got deferred deeplink on first app launch:"+JSON.stringify(deferredLink)),deeplink=Ti.App.Properties.getString("deeplink.scheme")+"://"+deferredLink.link)}).finally(function(){LOGGER.debug("DEEPLINK - DEFERRED - on firstlaunch:"+deeplink),Ti.App.fireEvent("tf:life.cycle.deeplink",{link:deeplink,checkuser:!0}),doneFirstLaunch=!0})):(


LOGGER.debug("DEEPLINK on resume:"+deeplink),
Ti.App.fireEvent("tf:life.cycle.deeplink",{
link:deeplink,
checkuser:!1})),



Ti.App.fireEvent("tf:life.cycle.resume");
},

logIn=function(user){
loggedout=!1,
setLogInPending(!1),
LOGGER.debug("[LifeCycle] - logged in"),
DISPATCHER.trigger("tf:life.cycle.loggedin",user),

Ti.App.fireEvent("tf:life.cycle.loggedin",user);
},

logOut=function(){
loggedout=!0,
setLogInPending(!1),
LOGGER.debug("[LifeCycle] - logged out"),
DISPATCHER.trigger("tf:life.cycle.loggedout"),

Ti.App.fireEvent("tf:life.cycle.loggedout");
},

isLoggedIn=function(){
return!1==loggedout;
},

isLogInPending=function(){
return logInPending;
},

setLogInPending=function(val){
logInPending=val;
},

initListeners=function(){!1;













},

isActive=function(){
return active;
};

module.exports={

start:function(){
isInitialized||(


isInitialized=!0,
initListeners(),
launch());
},

pause:pause,
resume:resume,
logIn:logIn,
logOut:logOut,
isLoggedIn:isLoggedIn,
setLogInPending:setLogInPending,
isLogInPending:isLogInPending,
isFirstLaunch:isFirstLaunch,
setFirstLaunch:setFirstLaunch,
isActive:isActive,
getCurrentWindowId:function(){
return currentWindowId;
},
setCurrentWindowId:function(id){
currentWindowId=id;
}};