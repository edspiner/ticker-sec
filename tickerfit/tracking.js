"use strict";var








userId,









lastActivityStopTime,
lastFitbitActivityStopTime,























hk,fit,Q=require("vendor/q"),scule=require("vendor/scule"),cus=require("services/current_user_service"),initialised=!1,at=require("com.tickerfit.activity"),lifecycle=require("bootstrap/lifecycle"),atService=at.createService(),tracking=!1,passiveTracking=!1,legacyTracking=!1,startingTracking=!1,fitbitLinked=!1,fitbitActivityEnabled=!1,fitbitHeartrateEnabled=!1,doneFirst=!1,startedAt=new Date,fitbitSyncing=!1,syncing=!1,SECS_10=1e4,MINS_30=18e5,HOURS_1=36e5,HOURS_8=8*HOURS_1,HOURS_24=24*HOURS_1,DAYS_7=7*HOURS_24,lastUploadTime=new Date(0),lastUploadAttempt=new Date(0),totalSteps=0,totalActiveTime=0,totalSyncedSteps=0,totalSyncedActiveTime=0,summarySteps=0,summaryActiveTime=0,currentActivitySteps=0,currentDay=new Date(0),
healthSettingsDialog=void 0,

startOfDay=function(date){
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0);
},

endOfDay=function(date){
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),23,59,59,999);
},

sameDate=function(d1,d2){
return d1.getTime()==d2.getTime();
};

function _getActivityDB(){
try{
return scule.factoryCollection("scule+titanium://activity-tracking",{
remoteBackup:!1});

}catch(e){

return LOGGER.error("[Tracking Storage] - failed to get db connection: "+JSON.stringify(e)),null;
}
}

var _findLastActivity=function(callback){
_getActivityDB().find({
userId:userId},
{
$limit:1,
$sort:{
startTime:-1}},

function(activities){
1==activities.length?
callback&&callback(activities[0]):

callback&&callback();

});
};

function _saveActivity(activity){



function insertActivity(){
LOGGER.debug("[Tracking Storage] - inserting ["+JSON.stringify(activity)+"]");
try{
db.save(activity),
db.commit(),
lastActivityStopTime=activity.stopTime,
deferred.resolve(activity);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save activity data locally"));
}
}var deferred=Q.defer(),db=_getActivityDB();

return insertActivity(),deferred.promise;
}

function _saveActivities(activities){



function insertActivities(){
LOGGER.debug("[Tracking Storage] - start upserting activities...");
try{
for(var i=0;i<activities.length;i++)
db.save(activities[i]),
lastActivityStopTime=activities[i].stopTime;

db.commit(),
deferred.resolve(activities);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save activities data locally"));
}
}var deferred=Q.defer(),db=_getActivityDB();

return insertActivities(),deferred.promise;
}var

recordActivities=function(activityEvents){var


sod,_Mathround=
































Math.round,activities=[];_.forEach(activityEvents,function(ae){var stTime=new Date(ae.activity.startTime),edTime=new Date(ae.activity.stopTime),activity={steps:ae.activity.steps,startTime:stTime.getTime(),stopTime:edTime.getTime(),source:ae.activity.source||"APP",userId:userId,uploaded:!1};if(totalSteps+=activity.steps,totalActiveTime+=_getDuration(activity),currentActivitySteps=0,sod=startOfDay(stTime),!sameDate(sod,startOfDay(edTime))){var edD1=endOfDay(stTime),stD2=startOfDay(edTime),dur1=edD1.getTime()-stTime.getTime(),dur2=edTime.getTime()-stD2.getTime(),durTotal=edTime.getTime()-stTime.getTime();if(0==dur1)activity.startTime=stD2.getTime(),activities.push(activity);else if(0==dur2)activity.stopTime=edD1.getTime(),activities.push(activity);else{var a1={startTime:stTime.getTime(),stopTime:edD1.getTime(),steps:_Mathround(activity.steps*(dur1/durTotal)),
source:activity.source,
userId:activity.userId,
uploaded:activity.uploaded},

a2={
startTime:stD2.getTime(),
stopTime:edTime.getTime(),
steps:_Mathround(activity.steps*(dur2/durTotal)),
source:activity.source,
userId:activity.userId,
uploaded:activity.uploaded};

activities.push(a1),
activities.push(a2);
}
}else
activities.push(activity);

}),
_saveActivities(activities),

sameDate(currentDay,sod)||(
summarySteps=0,
summaryActiveTime=0,
_updateTotals(notifyActivityUpdate));

},

recordActivity=function(activityEvent,preventUpload){var _Mathround2=






































Math.round,stTime=new Date(activityEvent.activity.startTime),edTime=new Date(activityEvent.activity.stopTime),activity={steps:activityEvent.activity.steps,startTime:stTime.getTime(),stopTime:edTime.getTime(),source:activityEvent.activity.source||"APP"};totalSteps+=activity.steps,totalActiveTime+=_getDuration(activity),currentActivitySteps=0;var wrapActivityAndSave=function(a){return a.userId=userId,a.uploaded=!1,_saveActivity(a)},sod=startOfDay(stTime);if(!sameDate(sod,startOfDay(edTime))){var edD1=endOfDay(stTime),stD2=startOfDay(edTime),dur1=edD1.getTime()-stTime.getTime(),dur2=edTime.getTime()-stD2.getTime(),durTotal=edTime.getTime()-stTime.getTime();if(0==dur1)activity.startTime=stD2.getTime(),wrapActivityAndSave(activity);else if(0==dur2)activity.stopTime=edD1.getTime(),wrapActivityAndSave(activity);else{var a1={startTime:stTime.getTime(),stopTime:edD1.getTime(),steps:_Mathround2(activity.steps*(dur1/durTotal)),
source:activity.source},

a2={
startTime:stD2.getTime(),
stopTime:edTime.getTime(),
steps:_Mathround2(activity.steps*(dur2/durTotal)),
source:activity.source};

wrapActivityAndSave(a1).then(function(){
return wrapActivityAndSave(a2);
});
}
}else
wrapActivityAndSave(activity);


sameDate(currentDay,sod)||(
summarySteps=0,
summaryActiveTime=0,
_updateTotals(notifyActivityUpdate)),


!0!==preventUpload&&(
lastUploadTime.getTime()<=stTime.getTime()-HOURS_24&&lastUploadAttempt.getTime()<=stTime.getTime()-HOURS_1?
Ti.Network.online&&
_uploadToServer():

lastUploadTime.getTime()<=stTime.getTime()-HOURS_8&&lastUploadAttempt.getTime()<=stTime.getTime()-MINS_30&&
Ti.Network.online&&Ti.Network.networkType==Ti.Network.NETWORK_WIFI&&
_uploadToServer());



},

_getLastActivityOnServer=function(source){
return Alloy.createModel("activity",{
urlParams:{
pid:userId,
aid:"last",
source:source||""}}).

fetch();
},

_requestFitbitSync=function(){var


timeout,deferred=Q.defer(),done=!1;
if(!fitbitSyncing){
fitbitSyncing=!0,

DISPATCHER.trigger("tf:tracking.fitbit.state.updated");
var complete=function(){
done||(
done=!0,
fitbitSyncing=!1,
Ti.App.removeEventListener("tf:sync",complete),
deferred.resolve({})),

timeout&&clearTimeout(timeout);
};
Ti.App.addEventListener("tf:sync",function(e){
"activity"===e.data.type&&
complete();

}),
timeout=setTimeout(complete,3e4),

Alloy.createModel("activitySync",{
urlParams:{
pid:cus.singleton().get("userId")}}).

fetch();
}else
deferred.reject({});

return deferred.promise;
},

_updateLastFitbitActivityStopTime=function(){
return _getLastActivityOnServer("FB").then(function(a){
lastFitbitActivityStopTime=a.endTime;
});
},

_getLastActivityStopTime=function(){
var deferred=Q.defer();






























return _findLastActivity(function(activity){void 0===activity?_getLastActivityOnServer().then(function(activity){lastActivityStopTime=activity.endTime,deferred.resolve({stopTime:activity.endTime,source:"server"})}).catch(function(error){if(error&&error.status&&404===error.status){var d=new Date;d.setDate(d.getDate()-7),deferred.resolve({stopTime:d.getTime(),source:"server"})}else deferred.reject({source:"server",error:error})}):deferred.resolve({stopTime:activity.stopTime,source:"local"})}),deferred.promise;
},

_updateTotals=function(callback){
currentDay=startOfDay(new Date),
_updateTodaysTotalsFromStore(callback);
},

_updateTodaysTotalsFromStore=function(callback){var
steps=0,
duration=0,
syncedSteps=0,
syncedDuration=0,
cb=callback;
_getActivityDB().find({
userId:userId,
startTime:{
$gte:currentDay.getTime()}},

{},function(activities){
activities.forEach(function(activity){
steps+=activity.steps,
duration+=_getDuration(activity),
activity.uploaded&&(
syncedSteps+=activity.steps,
syncedDuration+=_getDuration(activity));

}),
totalSteps=steps,
totalActiveTime=duration,
totalSyncedSteps=syncedSteps,
totalSyncedActiveTime=syncedDuration,
cb&&
cb();

});
},

_getDuration=function(activity){
var duration=activity.stopTime-activity.startTime;



return("HK"==activity.source||"HKW"==activity.source||"FIT"==activity.source||"GPS"==activity.source)&&1>1e3*activity.steps/duration&&(duration=Math.min(duration,Math.round(1e3*(activity.steps/1.65)))),duration;
},

_observeHKSteps=function(handler){
var deferred=Q.defer();





return hk.observeSteps(handler),setTimeout(function(){deferred.resolve({})},1e3),deferred.promise;
},

updatingSteps=!1,
_handleHKStepUpdate=function(){
updatingSteps?



















LOGGER.debug("IGNORE STEP UPDATE - already updating steps"):(updatingSteps=!0,LOGGER.debug("GOT STEP UPDATE"),_getLatestHKData().then(_storeLatestHKData).finally(function(){LOGGER.debug("STEP UPDATE DONE"),notifyActivityUpdate();var timeLeft=Math.round(1e3*at.getBackgroundTimeRemaining());4e3<timeLeft?_uploadWithTimeout(timeLeft-2e3).finally(function(){updatingSteps=!1,hk.notifyStepUpdateCompleted()}):(LOGGER.warn("SYNC TO SERVER - NOT ENOUGH TIME: "+timeLeft),updatingSteps=!1,hk.notifyStepUpdateCompleted())}));

},

_getLatestHKData=function(){
var deferred=Q.defer();














return _getLastActivityStopTime().then(function(obj){LOGGER.debug("GET HK"),hk.getActivitySince(new Date(obj.stopTime)).then(function(res){LOGGER.debug("GET HK - OK"),deferred.resolve(res.result)}).catch(function(err){LOGGER.warn("GET HK - NOT OK"),LOGGER.warn("PROB GETTING ACTIVITIES:"+JSON.stringify(err)),deferred.reject({})})}).catch(function(){deferred.reject({})}),deferred.promise;
},

_storeLatestHKData=function(hkdata){



for(var count=void 0===hkdata.dates?0:hkdata.dates.length,act={},events=[],i=0;i<count;i++)
"Apple"==hkdata.sources[i].manufacturer&&("iPhone"==hkdata.sources[i].model||"Watch"==hkdata.sources[i].model)?(
act={
startTime:hkdata.dates[i].startDate.getTime(),
stopTime:hkdata.dates[i].endDate.getTime(),
steps:hkdata.quantities[i],
source:"iPhone"==hkdata.sources[i].model?"HK":"HKW"},

events.push({activity:act})):

LOGGER.debug("IGNORE HK ACTIVITY: "+i+" - "+JSON.stringify(hkdata.dates[i])+" - "+hkdata.quantities[i]+" ("+JSON.stringify(hkdata.sources[i])+")");





return 0<events.length&&recordActivities(events),count;
},

_promptHKAccess=function(){
var deferred=Q.defer();











return null==Ti.App.Properties.getString("HK",null)?lifecycle.isActive()?(require("services/event_tracking_service").record("hk-permission-requested",{first:!0}),deferred.resolve({})):deferred.reject({}):deferred.resolve({}),deferred.promise;
},

_showHealthSettings=function(){
LOGGER.debug("REQUEST TO SHOW HEALTH SETTINGS : "+lifecycle.isActive()),
healthSettingsDialog===void 0&&(!lifecycle.isFirstLaunch()||doneFirst)&&lifecycle.isActive()&&(
healthSettingsDialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:["Settings","OK"],
message:Ti.App.name+" needs to access your step data to report on your activity. Please open Settings and navigate to\n\nPrivacy -> Health -> "+Ti.App.name+"\n\nthen toggle \"Steps\" on to enable access.",
title:"Unable to access step data"}),

require("services/event_tracking_service").record("hk-permission-requested",{first:!1}),
healthSettingsDialog.addEventListener("click",function(e){
0===e.index&&
at.openSettings(),

healthSettingsDialog=void 0;
}),
healthSettingsDialog.show());

},

_checkHKPermissions=function(){
var deferred=Q.defer();










return hk.checkPermissions().then(function(res){deferred.resolve(res)}).catch(function(err){LOGGER.warn("CHECK PERMISSIONS FAILED - Retrying"),hk.checkPermissions().then(function(res){deferred.resolve(res)}).catch(function(err){deferred.reject(err)})}),deferred.promise;
},

_startHKTracking=function(){
var promise;









return hk.isAutoStarted()?(LOGGER.debug("Registering Start Tracking observer"),promise=_observeHKSteps(function(){LOGGER.info("STARTING HK TRACKING ON UPDATE - must have initialised when device locked!"),module.exports.startTracking(userId)})):promise=_promptHKAccess(),promise.then(hk.init).then(_startSpinner).then(_getLatestHKData).then(_storeLatestHKData).then(_checkHKPermissions).then(function(){

return LOGGER.debug("Registering Step Update observer"),_observeHKSteps(_handleHKStepUpdate);
}).finally(_stopSpinner);
},

_observeFITSteps=function(handler){
var deferred=Q.defer();


return fit.startStepUpdates(handler),deferred.resolve({}),deferred.promise;
},

updatingFITSteps=!1,
_handleFITStepUpdate=function(){
updatingFITSteps?











LOGGER.debug("IGNORE STEP UPDATE - already updating steps"):(updatingSteps=!0,LOGGER.debug("GOT STEP UPDATE"),_getLatestFITData().then(_storeLatestFITData).then(function(count){if(LOGGER.debug("STEP UPDATE DONE ("+count+")"),count)return _uploadToServer(!1)}).finally(function(){updatingFITSteps=!1}));

},

_getLatestFITData=function(){
var deferred=Q.defer();
















return _getLastActivityStopTime().then(function(obj){LOGGER.debug("GET FIT");var start=new Date(obj.stopTime);fit.getActivitySince(start).then(function(res){LOGGER.debug("GET FIT - OK"),deferred.resolve({start:start,result:res})}).catch(function(err){LOGGER.warn("GET FIT - NOT OK"),LOGGER.warn("PROB GETTING ACTIVITIES:"+JSON.stringify(err)),deferred.reject({})})}).catch(function(){deferred.reject({})}),deferred.promise;
},
_storeLatestFITData=function(fitdata){











for(var dp,steps,start=fitdata.start,data=fitdata.result,datapoints=_.sortBy(data.dataPoints,function(dp){return dp.startTime.getTime()}),count=datapoints===void 0?0:datapoints.length,act={},activities=[],source=fit.hasStepSensor()?"FIT":"GPS",i=0;i<count;i++)
dp=datapoints[i],

dp.startTime.getTime()>=start.getTime()&&(
steps=parseInt(dp.steps,10),
dp.startTime.getTime()<dp.endTime.getTime()&&0<steps?
dp.startTime.getTime()==act.stopTime?(
act.stopTime=dp.endTime.getTime(),
act.steps+=steps):(

act={
startTime:dp.startTime.getTime(),
stopTime:dp.endTime.getTime(),
steps:steps,
source:source},

activities.push({activity:act})):


LOGGER.debug("Ignoring FIT zero datapoint:"+JSON.stringify(dp)));



if(0<activities.length){
var last=activities.pop();
0<activities.length&&
recordActivities(activities),


currentActivitySteps=last.activity.steps,
notifyActivityUpdate();
}

return activities.length;
},
_startFITTracking=function(){
return fit.startTracking().then(_startSpinner).then(_getLatestFITData).then(_storeLatestFITData).then(function(){
return _observeFITSteps(_handleFITStepUpdate);
}).finally(_stopSpinner);
},

_startSpinner=function(){
DISPATCHER.trigger("tf:progress.start",{
message:"Loading activities...",
id:"hkupdate"});

},
_stopSpinner=function(){
DISPATCHER.trigger("tf:progress.stop",{
id:"hkupdate"});

},

startTracking=function(){
var deferred=Q.defer();






































































































return summarySteps=0,summaryActiveTime=0,_updateTotals(notifyActivityUpdate),passiveTracking=isPassiveTrackingEnabled(),legacyTracking=isLegacyTrackingForced(),LOGGER.debug("START TRACKING - ENABLED:"+passiveTracking+" LEGACY:"+legacyTracking),passiveTracking?1?0?deferred.reject({success:!1,message:"Unsupported OS"}):(fit=require("tickerfit/googlefit"),fit.init().then(function(){if(!legacyTracking)_startFITTracking().then(function(){LOGGER.debug("Start Fit Tracking - OK"),deferred.resolve({success:!0})}).catch(function(){LOGGER.warn("Start FIT Tracking - ERROR"),deferred.reject({success:!1,message:"unable to access googlefit"})}).finally(function(){doneFirst=!0});else{LOGGER.debug("Legacy tracking forced OR no step sensor detected"),atService.registerStepCallback({callback:function(e){currentActivitySteps=e.steps,notifyActivityUpdate()}}),atService.registerActivityCallback({callback:recordActivity});var started=at.startTracking();started?deferred.resolve({success:!0}):(LOGGER.error("Tracking failed to start"),require("services/event_tracking_service").record("error",{type:"startTracking failed"}),atService.unregisterStepCallback(),atService.unregisterActivityCallback(),deferred.reject({success:!1,message:"failed to start tracking service"}))}})):(hk=require("tickerfit/healthkit"),hk.isSupported()&&!legacyTracking?_startHKTracking().then(function(){LOGGER.debug("Start HK Tracking - OK"),deferred.resolve({success:!0})}).catch(function(){LOGGER.warn("Start HK Tracking - ERROR"),_showHealthSettings(),deferred.reject({success:!1,message:"unable to access healthkit"})}).finally(function(){doneFirst=!0}):(LOGGER.debug("Legacy tracking forced OR no healthkit detected"),atService.registerStepCallback({callback:function(e){currentActivitySteps=e.steps,notifyActivityUpdate()}}),atService.registerActivityCallback({callback:recordActivity}),at.startTracking(),deferred.resolve({success:!0}))):deferred.resolve({success:!0,message:"Passive Tracking Disabled"}),deferred.promise;
},

stopTracking=function(){
passiveTracking&&(!1?

tracking&&
hk.stopStepUpdates():

fit&&!legacyTracking?
tracking&&
fit.stopStepUpdates():(


at.stopTracking(),
atService.unregisterStepCallback(),
atService.unregisterActivityCallback())),


tracking=!1;
},

_syncWithSummary=function(summary){
var s=summary;
_updateTotals(function(){
summarySteps=s.stepsToday-totalSyncedSteps,
summaryActiveTime=s.activeTimeToday-totalSyncedActiveTime,
notifyActivityUpdate();
});
},

_uploadWithTimeout=function(timeout){
var deferred=Q.defer();
LOGGER.debug("UPLOAD - STARTED WITH TIMEOUT IN: "+timeout);
var timer=setTimeout(function(){
LOGGER.warn("UPLOAD - TIMEOUT UPLOADING TO SERVER"),
deferred.reject({
success:!1,
message:"Timeout uploading"});

},timeout);









return _uploadToServer(!0).then(function(res){LOGGER.debug("UPLOAD COMPLETE"),clearTimeout(timer),deferred.resolve(res)}).catch(function(err){LOGGER.warn("UPLOAD PROBLEM"),clearTimeout(timer),deferred.reject(err)}),deferred.promise;
},

_recordSelfReportedActivity=function(activity,isEdit){var _Mathround3=




































Math.round;DISPATCHER.trigger("tf:activity.data.uploadstart");var upload={startTime:activity.startTime.getTime(),endTime:activity.startTime.getTime()+1e3*activity.activeTime},endOfToday=new Date().setHours(23,59,59,999);if(upload.endTime>endOfToday)throw DISPATCHER.trigger("tf:activity.data.changed"),new Error("Activities can't have end times later than today");upload.intensity=-1,upload.ee=-1,upload.amount=activity.steps||0,upload.source="MANUAL",upload.activity=activity.type?activity.type:"Other";var splitting=!1,activities=[];if(!sameDate(startOfDay(new Date(upload.startTime)),startOfDay(new Date(upload.endTime)))){var edD1=endOfDay(new Date(upload.startTime)),stD2=startOfDay(new Date(upload.endTime)),dur1=edD1.getTime()-upload.startTime,dur2=upload.endTime-stD2.getTime(),durTotal=upload.endTime-upload.startTime;if(0==dur1)upload.startTime=stD2.getTime(),activities.push(upload);else if(0==dur2)upload.stopTime=edD1.getTime(),activities.push(upload);else{splitting=!0;var a1={startTime:upload.startTime,endTime:edD1.getTime(),amount:_Mathround3(upload.amount*(dur1/durTotal))||0,
source:upload.source,
intensity:upload.intensity,
ee:upload.ee,
activity:upload.activity},

a2={
startTime:stD2.getTime(),
endTime:upload.endTime,
amount:_Mathround3(upload.amount*(dur2/durTotal))||0,
source:upload.source,
intensity:upload.intensity,
ee:upload.ee,
activity:upload.activity};

activities.push(a1),
activities.push(a2);
}
}else
activities.push(upload);


if(isEdit){
upload.id=activity.sourceActivityId;
var model=Alloy.createModel("activity",{
urlParams:{
pid:userId,
aid:activity.sourceActivityId},

id:-1});
if(splitting)
model.destroy({});else

return model.save(upload).finally(function(){
DISPATCHER.trigger("tf:activity.data.changed");
});

}
return Alloy.createModel("activities",{
urlParams:{
pid:userId}}).

save({
array:activities}).
finally(function(){
DISPATCHER.trigger("tf:activity.data.uploaded");
});
},

_uploadToServer=function(force){
var deferred=Q.defer();
LOGGER.debug("UPLOADING");
var now=new Date;













































































return lastUploadAttempt.getTime()<=now.getTime()-SECS_10||force?(lastUploadAttempt=now,_getActivityDB().find({userId:userId,uploaded:!1},{},function(activities){var arr=[];activities.forEach(function(activity){arr.push({startTime:activity.startTime,endTime:activity.stopTime,intensity:-1,activity:"Walking",ee:-1,amount:activity.steps,source:activity.source})}),DISPATCHER.trigger("tf:activity.data.uploadstart"),0<arr.length?(LOGGER.debug("UPLOADING - BEGINING"),Alloy.createModel("activities",{urlParams:{pid:userId}}).save({array:arr}).then(function(){LOGGER.debug("UPLOADING - DONE"),require("services/event_tracking_service").record("activity-sync",{count:arr.length}),activities.forEach(function(activity){activity.uploaded=!0}),_saveActivities(activities).then(function(){lastUploadTime=new Date}).finally(function(){setTimeout(function(){deferred.resolve({count:arr.length})},1e3)})}).catch(function(err){LOGGER.warn("UPLOADING - PROBLEM:"+JSON.stringify(err)),deferred.reject({count:0})}).finally(function(){DISPATCHER.trigger("tf:activity.data.uploaded")})):(LOGGER.debug("UPLOADING - NOTHING TO UPLOAD"),DISPATCHER.trigger("tf:activity.data.uploaded"),deferred.resolve({count:0}),lastUploadTime=new Date,require("services/event_tracking_service").record("activity-sync",{count:0})),_purgeOldActivities()})):(LOGGER.debug("UPLOADING - IGNORED"),deferred.resolve({count:0})),deferred.promise;
},

_purgeOldActivities=function(){
_getActivityDB().remove({
userId:userId,
startTime:{
$lt:currentDay.getTime()-DAYS_7}},
{},function(activities){
activities.forEach(function(activity){
LOGGER.debug("REMOVED OLD ACTIVITY: "+JSON.stringify(activity));
});
});
},

isPassiveTrackingEnabled=function(){
var cu=cus.singleton();

return cu.get("enablePassiveTracking")&&!cu.get("forceFitbit");
},
isLegacyTrackingForced=function(){
var cu=cus.singleton();
return cu.get("forceLegacyTracking");
},

_initListeners=function(){






















































function startOnConfigChange(){
var cu=cus.singleton();
cu.get("recordActivity")?(
LOGGER.debug("STARTING TRACKING ON TOGGLES"),
"undefined"!=typeof cu.get("showWelcome")&&!0==cu.get("showWelcome")?
!welcomeListener&&(
LOGGER.debug("SETTING WELCOME LISTENER TO START TRACKING"),
DISPATCHER.once("tf:tracking.welcome.done",startOnWelcome),
welcomeListener=!0):((


passiveTracking!=isPassiveTrackingEnabled()||legacyTracking!=isLegacyTrackingForced())&&
module.exports.stopTracking(),

module.exports.startTracking(cu.get("userId")))):(


LOGGER.debug("GOT TOGGLES, TRACKING DISABLED - Stopping if running!"),
module.exports.stopTracking());

}Ti.App.addEventListener("tf:life.cycle.pause",function(){at.setForegroundApp(!1),healthSettingsDialog!==void 0&&(healthSettingsDialog.hide(),healthSettingsDialog=void 0)}),Ti.App.addEventListener("tf:life.cycle.resume",function(){at.setForegroundApp(!0),tracking?(!sameDate(currentDay,startOfDay(new Date))&&_updateTotals(notifyActivityUpdate),passiveTracking?!1?5e3<new Date().getTime()-startedAt.getTime()&&_checkHKPermissions().catch(function(err){stopTracking(),_showHealthSettings()}).finally(function(){_uploadToServer()}):_uploadToServer():_uploadToServer()):userId!==void 0&&(LOGGER.warn("START TRACKING ON RESUME"),module.exports.startTracking(userId))}),Ti.App.addEventListener("tf:sync",function(e){"activity"===e.data.type&&(LOGGER.debug("Activity SYNC Received - tracking:"+tracking),tracking&&_uploadToServer())});var welcomeListener=!1,startOnWelcome=function(){LOGGER.debug("STARTING TRACKING ON WELCOME"),module.exports.startTracking(cus.singleton().get("userId")),welcomeListener=!1};

DISPATCHER.on("tf:tracking.fitbit.state.updated",function(){
startOnConfigChange();
}),

DISPATCHER.on("tf:toggles.loaded",function(){
if(lifecycle.isLoggedIn()){
var cu=cus.singleton();
cu.get("enableFitbit")&&
_checkIsFitbitActivityLinked(),

_findLastActivity(function(a){
a!==void 0&&(lastActivityStopTime=a.stopTime);
}),
startOnConfigChange();
}
}),

Ti.App.addEventListener("tf:life.cycle.loggedout",function(){
welcomeListener&&
DISPATCHER.off("tf:tracking.welcome.done",startOnWelcome),

_setUserId(void 0),
module.exports.stopTracking();
}),
DISPATCHER.on("tf:summary.loaded",_syncWithSummary),

DISPATCHER.on("tf:activity.data.uploadstart",function(){
syncing=!0,
DISPATCHER.trigger("tf:activity.data.sync",{syncing:!0}),

DISPATCHER.once("tf:activity.data.uploaded",function(){var
waitingForSummary=!0,
onSummary=function(data){
if(waitingForSummary){
waitingForSummary=!1,
syncing=!1;
var success=data!==void 0;
DISPATCHER.trigger("tf:activity.data.sync",{syncing:!1,success:success}),
DISPATCHER.off("tf:summary.loaded",onSummary),
DISPATCHER.off("tf:summary.failed",onSummary);
}
};
DISPATCHER.on("tf:summary.loaded",onSummary),
DISPATCHER.on("tf:summary.failed",onSummary),
setTimeout(onSummary,3e4);
});
});
},

notifyActivityUpdate=function(){
DISPATCHER.trigger("tf:activity.update",{
steps:currentActivitySteps+totalSteps+summarySteps,
activeTime:totalActiveTime+summaryActiveTime});

},

_setUserId=function(id){
userId=id;
},

checkIsFitbitActivityLinked=function(){
return require("services/linked_accounts_service").getLinkedAccount("FITBIT").then(function(la){
LOGGER.debug("GOT LINKED FITBIT ACCOUNT: "+JSON.stringify(la)),

fitbitLinked=la&&la.valid,
fitbitActivityEnabled=fitbitLinked&&la.enabled&&-1!==la.scope.indexOf("activity"),
fitbitHeartrateEnabled=fitbitLinked&&la.enabled&&-1!==la.scope.indexOf("heartrate");
}).catch(function(e){
fitbitLinked=!1,
fitbitActivityEnabled=!1,
fitbitHeartrateEnabled=!1,
LOGGER.warn("Problem getting linked account:"+e);
}).finally(function(){
fitbitLinked?
_requestFitbitSync().then(_updateLastFitbitActivityStopTime).finally(function(){
DISPATCHER.trigger("tf:tracking.fitbit.state.updated");
}):

DISPATCHER.trigger("tf:tracking.fitbit.state.updated");

});
},
_checkIsFitbitActivityLinked=_.debounce(checkIsFitbitActivityLinked,1e4,!0);

module.exports={

init:function(){
initialised||(
initialised=!0,
_initListeners());

},

startTracking:function(uid){









if(LOGGER.debug("Starting activity tracking for user["+uid+"]"),"undefined"==typeof userId?_setUserId(uid):userId!==uid&&(LOGGER.warn("Stopping previously started activity tracking for user["+userId+"]"),stopTracking(),_setUserId(uid)),!tracking&&!startingTracking){
startingTracking=!0;
var promise=startTracking().then(function(){





if(tracking=!0,LOGGER.debug("Start tracking - STARTED : triggering started event"),DISPATCHER.trigger("tf:tracking.started",{success:!0}),startedAt=new Date,!passiveTracking)
return _uploadToServer(!0);
if(!1){
var timeLeft=Math.round(1e3*at.getBackgroundTimeRemaining());
if(4e3<timeLeft)
return _uploadWithTimeout(timeLeft-2e3);

}else
return _uploadToServer(!0);

}).catch(function(err){
LOGGER.warn("Start tracking FAILED - "+err.message),
DISPATCHER.trigger("tf:tracking.started",{success:!1});
}).finally(function(){
startingTracking=!1,!1;




});
}else
LOGGER.debug("Start tracking - IGNORED: Already started or starting!");

},

recordSelfReportedActivity:function(activity,isEdit){
return _recordSelfReportedActivity(activity,isEdit);
},

hasReceivedStepUpdate:function(){
if(!1)
return at.hasReceivedStepUpdate();

},

stopTracking:function(){
LOGGER.debug("Stopping activity tracking"),
stopTracking();
},

isForeGroundApp:function(){
if(!1)
return at.isForeGroundApp();

},

getBootTime:function(){
return at.getBootTime();
},

setLifecycleListener:function(listener){!1;





},
getLastActivityStopTime:function(){
return lastActivityStopTime;
},
isSyncing:function(){
return syncing;
},
isFitbitSyncing:function(){
return fitbitSyncing;
},
getLastFitbitActivityStopTime:function(){
return lastFitbitActivityStopTime;
},
isFitbitLinked:function(){
return fitbitLinked;
},
isFitbitActivityEnabled:function(){
return fitbitActivityEnabled;
},
isFitbitHeartrateEnabled:function(){
return fitbitHeartrateEnabled;
},
linkFitbit:function(){
require("services/patient_service").refreshLogin().then(function(){
require("services/event_tracking_service").record("tap-link-fitbit",{});var
host=require("bootstrap/env").getApiURL(),
url=host+"#/patient/login?toState=link-fitbit&token="+cus.singleton().get("token");
Ti.Platform.openURL(url);
});
},
unlinkFitbit:function(){

return require("services/event_tracking_service").record("tap-unlink-fitbit",{}),require("services/linked_accounts_service").disableLinkedAccount("FITBIT").then(function(){
fitbitLinked=!1,
fitbitActivityEnabled=!1,
fitbitHeartrateEnabled=!1;
}).catch(function(e){
LOGGER.warn("Problem disabling linked account:"+JSON.stringify(e));
}).finally(function(){
DISPATCHER.trigger("tf:tracking.fitbit.state.updated");
});
},

enablePassiveTracking:function(val){
require("services/event_tracking_service").record("tap-passive-tracking",{enable:val}),
require("featureToggles").setToggle("enablePassiveTracking",val?"yes":"no");
},

isTracking:function(){
return tracking;
},

triggerUpdate:notifyActivityUpdate};