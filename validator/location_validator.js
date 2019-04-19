"use strict";

var numberValidator=require("validator/number_validator");

module.exports={

isLat:function(lat){
return numberValidator.isFloat(lat)&&numberValidator.isInRange(lat,-90,90);
},

isLon:function(lon){
return numberValidator.isFloat(lon)&&numberValidator.isInRange(lon,-180,180);
},

isLatLon:function(lat,lon){
return this.isLat(lat)&&this.isLon(lon);
}};