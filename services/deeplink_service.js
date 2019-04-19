"use strict";

var Q=require("vendor/q");

module.exports={
getDeferredLink:function(){var
dimension=require("platform/dimension"),

urlParams={};










if(urlParams.family=1?Titanium.Platform.model:"android",urlParams.os=1?"android":"ios",urlParams.ver=Titanium.Platform.version,urlParams.utc=-new Date().getTimezoneOffset(),urlParams.nameHint="",urlParams.emailHint="",!0){var
deferred=Q.defer(),

msg="In order to help get you started, access to the email you've logged into your device with is requested to help locate your corresponding "+Ti.App.name+" account. This information will not be shared with anyone else. \n\nWe treat your privacy very seriously. For further information please see our Privacy Policy below.\n\nBy pressing 'Accept' you also consent to allow the use of your personal data as set out in our Privacy Policy",
dialog=Ti.UI.createAlertDialog({
buttonNames:["Accept","T&Cs","Privacy Policy","Refuse"],
message:msg,
title:"Terms of Service",
persistent:!0,
canceledOnTouchOutside:!1});








































return dialog.addEventListener("click",function(e){if(!(0<=e.index&&3>=e.index))dialog.show();else if(1==e.index)require("services/event_tracking_service").record("start-view-terms-conditions",{}),Ti.Platform.openURL(Ti.App.Properties.getString("termsUrl")),dialog.show();else if(2==e.index)require("services/event_tracking_service").record("start-view-privacy-policy",{}),Ti.Platform.openURL(Ti.App.Properties.getString("privacyUrl")),dialog.show();else{if(0===e.index){require("services/user_consent_service").setUserConsent(!0);var userHint=require("com.tickerfit.activity").getUserHint()}else var userHint="";urlParams.screen=dimension.deviceWidthDp()+"x"+dimension.deviceHeightDp(),userHint&&null!=userHint&&(urlParams.emailHint=userHint),urlParams.lang=Titanium.Locale.currentLocale.toLowerCase(),LOGGER.info("Device fingerprint details: "+JSON.stringify(urlParams)),Alloy.createModel("deferred_link",{urlParams:urlParams}).fetch().then(function(deferredLink){deferred.resolve(deferredLink)})}}),setTimeout(function(){dialog.show()},2e3),deferred.promise;
}
var userHint=require("com.tickerfit.activity").getUserHint();








return urlParams.screen=dimension.deviceWidthDp()+"x"+dimension.deviceHeightDp(),userHint&&null!=userHint&&(urlParams.nameHint=userHint),urlParams.lang=Titanium.Locale.currentLocale.toLowerCase(),LOGGER.debug("Device fingerprint details: "+JSON.stringify(urlParams)),Alloy.createModel("deferred_link",{
urlParams:urlParams}).
fetch();

},

expireLink:function(ref){
var urlParams={
ref:ref,
expire:"true"};
return Alloy.createModel("deeplink",{
urlParams:urlParams}).
fetch();
}};