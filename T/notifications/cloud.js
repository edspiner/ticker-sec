

var Cloud=require('ti.cloud');
Cloud.debug=!1;

var os_enum=function(){return 1?0?void 0:

'gcm':'ios';
}();

exports.subscribe=function(opt){
Cloud.PushNotifications.subscribeToken({
device_token:opt.deviceToken,
channel:opt.channel||'none',
type:os_enum},
function(e){
opt[!0===e.success?'success':'error'](e);
});
},

exports.unsubscribe=function(opt){
Cloud.PushNotifications.unsubscribeToken({
device_token:opt.deviceToken,
channel:opt.channel||'none'},
function(e){
opt[!0===e.success?'success':'error'](e);
});
};