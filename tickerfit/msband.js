"use strict";var

initialised=!1,
at=require("com.tickerfit.activity");
if(!1)
var atService=at.createService();var

PAIRED_BAND_UUID_PROPERTY="BAND_UUID",

uuid=null,

enabled=!1,

connected=!1,

connecting=!1,

monitoringHR=0,

_isEnabled=function(){
return enabled;
},

_setEnabled=function(val){
enabled=val;
},

_isPaired=function(){
return null!=uuid&&0<uuid.length;
},

_pair=function(){return(
_isPaired()?(











LOGGER.warn("Already paired with band ("+uuid+") - unpair before attempting to pair again"),!0):(uuid=at.getBandUUID(),0<uuid.length?(Ti.App.Properties.setString(PAIRED_BAND_UUID_PROPERTY,uuid),LOGGER.info("Found band("+uuid+") to pair with - connecting..."),_connect(),!0):(LOGGER.warn("No band found to pair with - ensure it is setup and powered on..."),!1)));


},

_unpair=function(){
_isPaired()?((
_isConnected()||_isConnecting())&&(
LOGGER.info("Disconnecting band("+uuid+") before unpairing..."),
_disconnect()),

uuid=null,
Ti.App.Properties.removeProperty(PAIRED_BAND_UUID_PROPERTY)):

LOGGER.warn("Cannot unpair as no device paired!");

},

_isConnected=function(){
return connected;
},

_isConnecting=function(){
return connecting;
},

_connect=function(){
_isPaired()?
_isConnected()&&_isConnecting()?





LOGGER.warn("Already connected to band!"):(at.connectBand({uuid:uuid}),connecting=!0):


LOGGER.warn("Cannot connect to band as none paired!");

},

_disconnect=function(){
_isConnected()||_isConnecting()?(
connecting=!1,
at.disconnectBand()):

LOGGER.warn("Cannot disconnect from band - not connected!");

},

_handleConnectionEvent=function(event){
"connected"===event.status?(
connected=!0,
DISPATCHER.trigger("tf:msband.connected",{})):
"disconnected"===event.status?(
connected=!1,
DISPATCHER.trigger("tf:msband.disconnected",{})):
"error"===event.status&&(
connecting=!1,
connected=!1,
LOGGER.warn("Failed to connect to band - Error:"+event.message));

},

_startHRMonitoring=function(){
0===monitoringHR?(
monitoringHR=1,
DISPATCHER.trigger("tf:msband.heartrate.started",{}),
_isConnected()?
at.startHeartRateUpdates():(

LOGGER.warn("Monitoring will start once connected!"),
_HRKeepalive())):(


monitoringHR++,
LOGGER.warn("Already monitoring HR - incrementing count:"+monitoringHR));

},

_stopHRMonitoring=function(){
1<monitoringHR?(
monitoringHR--,
LOGGER.info("Decrementing HR Monitor count - now:"+monitoringHR)):
1==monitoringHR?(
DISPATCHER.trigger("tf:msband.heartrate.stopped",{}),
monitoringHR=0,
at.stopHeartRateUpdates()):

LOGGER.warn("Cannot stop monitoring HR as not monitoring!");

},

_handleHeartRateEvent=function(event){
event.error?(
DISPATCHER.trigger("tf:msband.heartrate.error",event),
monitoringHR=0,
LOGGER.warn("Problem monitoring heartrate - Error:"+event.error)):(

DISPATCHER.trigger("tf:msband.heartrate",event),
LOGGER.info("Got HR : "+event.heartrate+"QUAL:"+event.quality));

},

_handleTileEvent=function(event){
"buttonPress"===event.type&&(
DISPATCHER.trigger("tf:msband.button",event),
LOGGER.warn("Band button press:"+event.button));

},

_HRKeepalive=function(){
if(0<monitoringHR){
DISPATCHER.trigger("tf:msband.heartrate.stopped",{
reason:"DISCONNECTED"});


var restartHR=function(){
DISPATCHER.off("tf:msband.connected",restartHR),

0<monitoringHR?(
LOGGER.info("Restarting HR updates after disconnect..."),
DISPATCHER.trigger("tf:msband.heartrate.started",{}),
at.startHeartRateUpdates()):(

LOGGER.info("Stopping HR updates after disconnect..."),
at.stopHeartRateUpdates());

};
DISPATCHER.on("tf:msband.connected",restartHR);
}
},

_vibrate=function(){return(
_isConnected()?(
at.vibrate(),!0):(


LOGGER.warn("Cannot vibrate not connected!"),!1));


},

_installTile=function(){
if(_isConnected())

return at.createTickerFitTile(),!0;

LOGGER.warn("Tile will install once connected!");
var installTile=function(){
DISPATCHER.off("tf:msband.connected",installTile),
_installTile();
};

return DISPATCHER.on("tf:msband.connected",installTile),!1;

},

_HRKeepalive=function(){
if(0<monitoringHR){
DISPATCHER.trigger("tf:msband.heartrate.stopped",{
reason:"DISCONNECTED"});


var restartHR=function(){
DISPATCHER.off("tf:msband.connected",restartHR),

0<monitoringHR?(
LOGGER.info("Restarting HR updates after disconnect..."),
DISPATCHER.trigger("tf:msband.heartrate.started",{}),
at.startHeartRateUpdates()):(

LOGGER.info("Stopping HR updates after disconnect..."),
at.stopHeartRateUpdates());

};
DISPATCHER.on("tf:msband.connected",restartHR);
}
},

_initListeners=function(){
enabled&&(
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
atService.registerMSBandCallback({
callback:function(e){
"connection"===e.type?
_handleConnectionEvent(e.event):
"heartrate"===e.type?
_handleHeartRateEvent(e.event):
"tile"===e.type&&
_handleTileEvent(e.event);

}});


var bandId=Ti.App.Properties.getString(PAIRED_BAND_UUID_PROPERTY);
null!=bandId&&0<bandId.length&&(
uuid=bandId,
_connect(),
_installTile());

}),
Ti.App.addEventListener("tf:life.cycle.loggedout",function(){
_disconnect(),
atService.unregisterMSBandCallback();
}),

DISPATCHER.on("tf:msband.disconnected",_HRKeepalive));

};

module.exports={

init:function(){
initialised||(
initialised=!0,!1);




},

isPaired:_isPaired,

pair:_pair,

unpair:_unpair,

connect:_connect,

disconnect:_disconnect,

isConnected:_isConnected,

isConnecting:_isConnecting,

isEnabled:_isEnabled,

setEnabled:function(enabled){!1;



},

startHRMonitoring:_startHRMonitoring,

stopHRMonitoring:_stopHRMonitoring,

vibrate:_vibrate,

installTile:_installTile};