

exports.request=function(success,error){



function requestHandler(res){
!0===res.success?
success():(

Ti.API.error('Permissions: Error while requesting storage permissions:',res.error),
error({
message:L('error_storage_permissions','Missing storage permissions')}));


}return success=success||Alloy.Globals.noop,error=error||Alloy.Globals.noop,

!1===_.isFunction(Ti.Filesystem.hasStoragePermissions)||!1===_.isFunction(Ti.Filesystem.requestStoragePermissions)?void
success():void(



!0===Ti.Filesystem.hasStoragePermissions()?


success():Ti.Filesystem.requestStoragePermissions(requestHandler));

};