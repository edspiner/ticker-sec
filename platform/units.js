"use strict";

function isIOSRetina(){
return!1;
}

function isIOSLowRes(){
return!1;
}

module.exports={

pixelToDip:function(pixel){
if(isIOSRetina())
return pixel/2;


if(isIOSLowRes())
return pixel;


var dpi=Ti.Platform.displayCaps.dpi;return(

160<dpi?
Math.round(pixel/(dpi/160)):


pixel);
},

dipToPixel:function(dp){

if(isIOSRetina())
return 2*dp;


if(isIOSLowRes())
return dp;


var dpi=Ti.Platform.displayCaps.dpi;return(

160<dpi?
Math.round(dp*(dpi/160)):


dp);
},

dipToSystemUnit:function(dp){return 1?





module.exports.dipToPixel(dp):dp;
}};