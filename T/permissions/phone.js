

exports.request=function(success,error){



function requestHandler(res){
!0===res.success?
success():(

Ti.API.error('Permissions: Error while requesting phone permissions:',res.error),
error({
message:L('error_phone_permissions','Missing phone permissions')}));


}return success=success||Alloy.Globals.noop,error=error||Alloy.Globals.noop,

!1===_.isFunction(Ti.Android.hasPermission)||!1===_.isFunction(Ti.Android.requestPermissions)?void
success():void(



!0===Ti.Android.hasPermission('android.permission.CALL_PHONE')?


success():Ti.Android.requestPermissions(['android.permission.CALL_PHONE'],requestHandler));

};