"use strict";

var ObjectValidator=require("validator/object_validator"),
_gpsPositionMaxAccuracy=5e3,
_gpsPositionMaxTTL=600000,
_tripMaxAccuracy=3e3,
_tripMaxTTL=120000;
module.exports={

isGPSPositionValid:function(location){

if(!location)
return!1;


if(0===location.lat&&0===location.lon)
return!1;


var accuracy=location.accuracy,
timestamp=location.timestamp;return(

ObjectValidator.isEmpty(accuracy)||0>accuracy||accuracy>_gpsPositionMaxAccuracy?(
LOGGER.debug("LocationValidator - not accurate enough"),!1):!(



ObjectValidator.isEmpty(timestamp)||new Date().getTime()-timestamp>_gpsPositionMaxTTL)||(
LOGGER.debug("LocationValidator - position expired"),!1));




},

isGPSPositionMoved:function(newLocation,oldLocation){

var newLat=newLocation.lat,
newLon=newLocation.lon,
newAccuracy=newLocation.accuracy,
newTimestamp=newLocation.timestamp,
oldLat=oldLocation.lat,
oldLon=oldLocation.lon,
oldAccuracy=oldLocation.accuracy,
oldTimestamp=oldLocation.timestamp;return(

module.exports.isGPSPositionValid(newLocation)?




oldTimestamp>newTimestamp?(
LOGGER.debug("LocationValidator - old location"),!1):



newLat===oldLat&&newLon===oldLon&&newAccuracy===oldAccuracy&&60000>newTimestamp-oldTimestamp?(
LOGGER.debug("LocationValidator - same location"),!1):(



LOGGER.debug("LocationValidator - moved"),!0):(LOGGER.debug("LocationValidator - not valid position"),!1));


},

isLocationValidForPickupDropoff:function(location){

if(!location)
return!1;


var accuracy=location.accuracy,
timestamp=location.timestamp,
lat=location.lat,
lon=location.lon;return!(

ObjectValidator.isEmpty(accuracy)||ObjectValidator.isEmpty(timestamp)||ObjectValidator.isEmpty(lat)||ObjectValidator.isEmpty(lon))&&!(



!location.userGenerated&&0>accuracy||accuracy>_tripMaxAccuracy)&&(



location.userGenerated||!(new Date().getTime()-timestamp>_tripMaxTTL));




}};