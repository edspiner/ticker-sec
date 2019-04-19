"use strict";

module.exports={

turnOnGPSPrompt:function(){

var buttons=[L("gps_modal_disabled_button_ok")],
cancelIndex=0;


buttons=[L("gps_modal_disabled_button_settings"),L("gps_modal_disabled_button_cancel")],
cancelIndex=1;


var dialog=Ti.UI.createAlertDialog({
buttonNames:buttons,
cancel:cancelIndex,
message:L("gps_modal_disabled_message")});


dialog.addEventListener("click",function(e){

if(e.index!==e.source.cancel&&!0)



{
var locationSettings=Ti.Android.createIntent({action:"android.settings.LOCATION_SOURCE_SETTINGS"});
Ti.Android.currentActivity.startActivity(locationSettings);
}
}),

dialog.show();
}};