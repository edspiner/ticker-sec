"use strict";

var ANDROID_STATUS_BAR_HEIGHT=25,
ANDROID_NAV_BAR_HEIGHT=52,
IOS_STATUS_BAR_HEIGHT=20,
IOS_STATUS_BAR_HEIGHT_IPHONEX=44,
IOS_NAV_BAR_HEIGHT=52;

module.exports={
statusBarHeightDp:function(){return 1?0?void 0:








ANDROID_STATUS_BAR_HEIGHT:Alloy.Globals.isIPhoneX?IOS_STATUS_BAR_HEIGHT_IPHONEX:IOS_STATUS_BAR_HEIGHT;

},

navBarHeightDp:function(){return 1?0?void 0:






ANDROID_NAV_BAR_HEIGHT:IOS_NAV_BAR_HEIGHT;

},

windowHeightDp:function(){
return module.exports.deviceHeightDp()-module.exports.statusBarHeightDp();
},

deviceHeightDp:function(){
return Ti.Platform.displayCaps.platformHeight/(!1?1:Ti.Platform.displayCaps.logicalDensityFactor);
},
deviceWidthDp:function(){
return Ti.Platform.displayCaps.platformWidth/(!1?1:Ti.Platform.displayCaps.logicalDensityFactor);
}};