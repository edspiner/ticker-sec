"use strict";var

Q=require("vendor/q"),
scule=require("vendor/scule"),
initialised=!1,
loggedIn=!1,
userId=-1,
seq=0,
eventQueue=[],
startTime=new Date,
tracking=require("tickerfit/tracking"),
cus=require("services/current_user_service"),

platform="android|android|"+Titanium.Platform.version+"|"+Titanium.Platform.model,
appVer=Titanium.App.version;

function _getEventDB(){
try{
return scule.factoryCollection("scule+titanium://event-tracking",{
remoteBackup:!1});

}catch(e){

return LOGGER.error("[Event Storage] - failed to get db connection: "+JSON.stringify(e)),null;
}
}
var _purgeOldEvents=function(){
_getEventDB().remove({
timestamp:{
$lt:new Date().getTime()-2678400000}},
{},function(events){
events.forEach(function(event){
LOGGER.debug("REMOVED OLD EVENT:"+JSON.stringify(event));
});
});
};

function _saveEvent(event){



function insertEvent(){
LOGGER.debug("[Event Storage] - inserting ["+JSON.stringify(event)+"]");
try{
db.save(event),
db.commit(),
deferred.resolve(event);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save event data locally"));
}
}var deferred=Q.defer(),db=_getEventDB();

return insertEvent(),deferred.promise;
}

function _saveEvents(events){



function insertEvents(){
LOGGER.debug("[Event Storage] - start upserting events...");
try{
for(var i=0;i<events.length;i++)
db.save(events[i]);

db.commit(),
deferred.resolve(events);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save events data locally"));
}
}var deferred=Q.defer(),db=_getEventDB();

return insertEvents(),deferred.promise;
}

function recordEvent(type,params){var
toggles=cus.singleton().get("toggles"),
uxMode="UNK";
toggles&&toggles.uxMode&&(
uxMode=toggles.uxMode);

var event={
platform:platform,
appVer:appVer,
uxMode:uxMode,
appLaunch:startTime.getTime(),
type:type,
timestamp:new Date().getTime(),
seq:seq++,
params:JSON.stringify(params)};
eventQueue.push(event),
loggedIn&&
flushQueue();

}var

flushing=!1,

flushQueue=_.debounce(function(){
flushing||(
flushing=!0,
_flush().then(_uploadToServer).finally(function(){
flushing=!1;
}));

},1e3),

_flush=function(){var
wrapEventAndSave=function(e){


return e.userId=userId,e.uploaded=!1,_saveEvent(e);
},
defer=Q.defer();
if(0<eventQueue.length){
var event=eventQueue[0];
wrapEventAndSave(event).then(function(){
eventQueue.shift();
}).then(_flush).then(function(){
defer.resolve({});
}).catch(function(err){
LOGGER.warn("Problem saving events to local storage: "+JSON.stringify(err)),
defer.reject(err);
});
}else
defer.resolve({});

return defer.promise;
},

_uploadToServer=function(){
var defer=Q.defer();
try{
_getEventDB().find({
userId:userId,
uploaded:!1},
{},function(events){
_sendEvents(events).then(function(){
events.forEach(function(event){
event.uploaded=!0;
}),
_saveEvents(events).then(function(){
defer.resolve({});
}).catch(function(){
defer.reject({error:"problem saving events locally"});
});
}).then(function(){
defer.resolve({});
}).catch(function(err){
LOGGER.warn("Problem uploading events: "+JSON.stringify(err)),
defer.reject({error:"problem uploading events"});
});
});
}catch(err){
LOGGER.warn("Problem uploadToServer: "+JSON.stringify(err)),
defer.reject(err);
}
return defer.promise;
},

_sendEvent=function(event){
return Alloy.createModel("event",{
urlParams:{
pid:event.userId}}).

save(event);
},

_sendEvents=function(arr){
return Alloy.createModel("events",{
urlParams:{
pid:userId}}).

save({
array:arr});

},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
loggedIn=!0,
userId=user.id,
module.exports.record("login-success",{});
}),
Ti.App.addEventListener("tf:life.cycle.loggedout",function(user){
loggedIn=!1;
});var

wakeReason=Ti.App.Properties.getString("WAKEREASON",null),
params={
reason:wakeReason,
deviceBootTime:tracking.getBootTime()};!1?(



Ti.App.Properties.getObject("TERMINATED")?(
params.lastProcessTerminated=Ti.App.Properties.getObject("TERMINATED"),
Ti.App.Properties.removeProperty("TERMINATED"),

params.lastTerminatedAbruptly=!1):
Ti.App.Properties.getObject("LASTTIMEAWAKE")&&(
params.lastProcessTerminated=Ti.App.Properties.getObject("LASTTIMEAWAKE"),

params.lastTerminatedAbruptly=!0),


require("tickerfit/healthkit").isSupported()&&"user"==wakeReason&&!tracking.isForeGroundApp()&&tracking.hasReceivedStepUpdate()&&(
LOGGER.info("SETTING WAKEREASON : healthkit"),
params.reason="healthkit")):


Ti.App.Properties.getString("TERMINATED")&&(
params.lastProcessTerminated=new Date(+Ti.App.Properties.getString("TERMINATED")),
Ti.App.Properties.removeProperty("TERMINATED")),


LOGGER.debug("RECORDING LAUNCH:"+JSON.stringify(params)),
module.exports.record("launch",params),!1;var

















sessionstart=new Date,
resumed=!1;

Ti.App.addEventListener("tf:life.cycle.resume",function(){
resumed=!0,
sessionstart=new Date,
module.exports.record("start-session",{
reason:Alloy.Globals.ActivationReason||"tap"}),


Alloy.Globals.ActivationReason="tap";
}),

Ti.App.addEventListener("SculeDataCorrupted",function(e){
module.exports.record("data-loss",{
entity:e.entity});

}),

Ti.App.addEventListener("tf:life.cycle.pause",function(){
resumed&&(
resumed=!1,
module.exports.record("end-session",{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)})),



Alloy.Globals.ActivationReason="tap";
});
};

module.exports={

init:function(){
initialised||(
_purgeOldEvents(),
initialised=!0,
_initListeners());

},
record:function(type,params){
recordEvent(type,params);
}};