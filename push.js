"use strict";var










loggedInUser,Notifications=require("T/notifications"),cus=require("services/current_user_service"),initialised=!1,broadcast=!1,buffer=[],loggedIn=!1,resumed=!1,registered=!1,

_initListeners=function(){
var reminderactions=[{
id:"ROUTINE_COMPLETE",
title:"Complete",
callback:function(e){}},
{
id:"ROUTINE_OPEN",
title:"Open",
openApplication:!0,
callback:function(e){}}];


reminderactions.callback=function(e){







if(_.forEach(reminderactions,function(action){action.id!==e.identifier||action.openApplication||(e.processInBackground=!0)}),e.processInBackground){var
onComplete=function(){
Ti.App.removeEventListener("tf:notification.background.complete",onComplete),
Ti.App.iOS.endBackgroundHandler(e.handlerId);
},

timeout=setTimeout(onComplete,2e4);
Ti.App.addEventListener("tf:notification.background.complete",onComplete);
}else
Ti.App.iOS.endBackgroundHandler(e.handlerId);

onReceived(e);
},

Notifications.addInteractiveNotificationCategory("ROUTINE_REMINDER",reminderactions),

Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
loggedIn=!0,
loggedInUser=user;
var cu=cus.singleton();
if("undefined"!=typeof cu.get("showWelcome")&&!0==cu.get("showWelcome")){
var regOnLogin=function(){
Ti.App.Properties.setString("PUSH_REQUESTED","YES"),
module.exports.register(user),
DISPATCHER.off("tf:register.push",regOnLogin);
};
DISPATCHER.on("tf:register.push",regOnLogin);
}else
resumed&&module.exports.register(user);

}),
Ti.App.addEventListener("tf:life.cycle.loggedout",function(user){
loggedIn=!1,
loggedInUser=void 0;
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
resumed=!0,

loggedIn&&!registered&&
module.exports.register(loggedInUser);

});
},

_notifyBackground=function(data,id){
Ti.App.fireEvent("tf:notification.background",{
data:data,
identifier:id,
processInBackground:!0});

},

notifyBackground=_.debounce(_notifyBackground,1e3,!0),

onReceived=function(e){
if(!1)
for(var i in e.data.aps)
e.data[i]=e.data.aps[i];



e.identifier&&
require("services/event_tracking_service").record("tap-notification-action",{identifier:e.identifier}),


e.processInBackground?(
LOGGER.debug("ROUTING BACKGROUND NOTIFICATION: "+JSON.stringify(e)),

notifyBackground(e.data,e.identifier)):

e.data&&e.data["content-available"]?(
LOGGER.debug("INVALID FOREGROUND NOTIFICATION SENDING TO BACKGROUND: "+JSON.stringify(e)),
notifyBackground(e.data,e.identifier)):(

LOGGER.debug("ROUTING FOREGROUND NOTIFICATION: "+JSON.stringify(e)),
e.inBackground&&!0==e.inBackground&&(
Alloy.Globals.ActivationReason="remote-notification"),


broadcast?
DISPATCHER.trigger("tf:notification.foreground",e):

buffer.push(e));



},

onSilent=function(e){
e.aps&&e.aps["content-available"]?(
LOGGER.debug("RECEIVED SILENT NOTIFICATION: "+JSON.stringify(e)),
notifyBackground(e.aps,e.identifier)):

LOGGER.debug("IGNORED INVALID SILENT NOTIFICATION: "+JSON.stringify(e)),

setTimeout(function(){
Ti.App.iOS.endBackgroundHandler(e.handlerId);
},2e4);
};

module.exports={

init:function(){
initialised||(
initialised=!0,
_initListeners());

},

register:function(user){
registered?(
















LOGGER.warn("Not Registering user["+user.id+" - "+user.email+"] for push notifications as already registered"),
DISPATCHER.trigger("tf:push.registered",{success:!0})):(LOGGER.debug("Registering user["+user.id+" - "+user.email+"] for push notifications"),Notifications.on("subscription.success",function(){DISPATCHER.trigger("tf:push.registered",{success:!0})}),Notifications.on("subscription.error",function(){DISPATCHER.trigger("tf:push.registered",{success:!1})}),Notifications.subscribe(null,{userId:user.id}),registered=!0,Notifications.on("received",onReceived),!1);

},
unregister:function(uid){
LOGGER.debug("Unregistering user["+uid+"] for push notifications"),
Notifications.unsubscribe(null,{
userId:uid}),

registered=!1,
Notifications.off("received",onReceived),!1;



},
onReceived:onReceived,
enableBroadcast:function(on){

if(broadcast=on,broadcast)for(;
buffer.length;)
DISPATCHER.trigger("tf:notification.foreground",buffer.shift());


}};