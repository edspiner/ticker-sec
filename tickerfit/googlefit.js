"use strict";var

Q=require("vendor/q"),
startTime=new Date,
lifecycle=require("bootstrap/lifecycle"),
initialised=!1,
started=!1;

if(!0)
var mod=require("com.tickerfit.activity");var


_initTrackingModule=function(){
var deferred=Q.defer();










return Ti.App.addEventListener("com.tickerfit.activity.init",function success(evt){Ti.App.removeEventListener("com.tickerfit.activity.init",success),!0===evt.success?(initialised=!0,deferred.resolve({})):deferred.reject({success:!1})}),mod.init(),deferred.promise;
},


_hasStepSensor=function(){
return mod.hasStepSensor();
},

_isGooglePlayServicesAvailable=function(){
return mod.isGooglePlayServicesAvailable();
},

_makeGooglePlayServicesAvailable=function(){
var deferred=Q.defer();











return Ti.App.addEventListener("com.tickerfit.activity.playservices.status",function status(evt){LOGGER.debug("GooglePlayServices STATUS"+evt.status),Ti.App.removeEventListener("com.tickerfit.activity.playservices.status",status),"AVAILABLE"===evt.status?deferred.resolve({}):deferred.reject({success:!1,reason:status.reason})}),mod.makeGooglePlayServicesAvailable(),deferred.promise;
},

_checkAndUpdateGooglePlayServices=function(){
var deferred=Q.defer();























return 0==_isGooglePlayServicesAvailable()?(LOGGER.debug("GooglePlayServices AVAILABLE"),deferred.resolve({})):lifecycle.isActive()?(LOGGER.debug("GooglePlayServices - Attempting to install/update"),setTimeout(function(){_makeGooglePlayServicesAvailable().then(function(){LOGGER.info("GooglePlayServices INSTALLED"),deferred.resolve({})}).catch(function(error){LOGGER.warn("GooglePlayServices NOT INSTALLED"),deferred.reject({success:!1,reason:"Cannot start tracking as Google Play Services is required"})})},2e3)):(LOGGER.warn("Cannot update GooglePlayServices in background"),deferred.reject({})),deferred.promise;
},

_promptFITAccess=function(){
var deferred=Q.defer();







return lifecycle.isActive()?(Ti.App.Properties.setString("FIT_REQUESTED","YES"),require("services/event_tracking_service").record("fit-permission-requested",{first:!0}),deferred.resolve({})):deferred.reject({}),deferred.promise;
},

_checkPermissions=function(){
var deferred=Q.defer();



















return mod.hasPermissions()?(LOGGER.debug("GoogleFIT - PERMISSIONS ALREADY GRANTED"),deferred.resolve({})):lifecycle.isActive()?setTimeout(function(){_promptFITAccess().then(function(){mod.requestPermissions(),deferred.reject({})}).catch(function(){deferred.reject({})})},2e3):(LOGGER.warn("Cannot request GoogleFIT permissions in background"),deferred.reject({})),deferred.promise;
},

_startRecording=function(){
var deferred=Q.defer();










return LOGGER.debug("STARTING GoogleFIT RECORDING"),mod.startRecording(function(res){res.success?(LOGGER.debug("GoogleFIT RECORDING STARTED"),deferred.resolve({})):(LOGGER.warn("GoogleFIT RECORDING FAILED TO START"),deferred.reject({}))}),deferred.promise;
},

_startTracking=function(){
if(!started)

return LOGGER.debug("START TRACKING - mode: GoogleFIT"),_checkAndUpdateGooglePlayServices().then(_checkPermissions).then(_startRecording).then(function(){
started=!0;
});

var deferred=Q.defer();




return LOGGER.debug("INIT - ALREADY INITIALISED"),deferred.resolve({success:!0}),deferred.promise;

},

_getActivitySince=function(date){
var deferred=Q.defer();





















return LOGGER.debug("READING GoogleFIT DATA SINCE: "+date),mod.readDataSince(date,function(res){if(res.success&&res.dataSets&&1<=res.dataSets.length){var dataset;1==res.dataSets.length?dataset=res.dataSets[0]:(dataset=_.find(res.dataSets,function(ds){return-1!==ds.dataSource.indexOf("com.google.android.gms")}),!dataset&&(dataset=res.dataSets[0])),LOGGER.debug("GoogleFIT DATA READ SUCCESS - SELECTED DATASET:"+dataset.dataSource+" TYPE:"+dataset.dataType+" (FROM "+res.dataSets.length+" DATASETS)"),deferred.resolve(dataset)}else LOGGER.warn("PROBLEM READING GoogleFIT DATA"),deferred.reject({})}),deferred.promise;
},

_startStepUpdates=function(callback){
mod.startStepUpdates(callback);
},

_stopStepUpdates=function(){
mod.stopStepUpdates();
};

module.exports={

init:function(){
return _initTrackingModule();
},

hasStepSensor:function(){
return _hasStepSensor();
},
startTracking:function(){
return _startTracking();
},
getActivitySince:function(since){
return _getActivitySince(since);
},
startStepUpdates:function(callback){
return _startStepUpdates(callback);
},
stopStepUpdates:function(){
return _stopStepUpdates();
}};