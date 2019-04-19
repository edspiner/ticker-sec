
exports.config=_.extend({
subscribeEndpoint:'/notifications/subscribe',
unsubscribeEndpoint:'/notifications/unsubscribe',
unmuteEndpoint:'/notifications/unmute',
muteEndpoint:'/notifications/mute'},
Alloy.CFG.T&&Alloy.CFG.T.notifications?Alloy.CFG.T.notifications.http:{});var

HTTP=require('T/http'),
Util=require('T/util'),

deploy_type='production'===Ti.App.deployType?'production':'development';

exports.subscribe=function(opt){
if(null==exports.config.subscribeEndpoint)
throw new Error('Notifications.HTTP: Invalid HTTP endpoint');


HTTP.send({
url:exports.config.subscribeEndpoint,
method:'POST',
data:_.extend({},opt.data,{
device_token:opt.deviceToken,
channel:opt.channel,
app_id:Ti.App.id,
app_version:Ti.App.version,
app_deploytype:Util.getDeployType(),
os:Util.getOS()}),

success:opt.success,
error:opt.error,
suppressFilters:opt.suppressFilters,
errorAlert:!1,
silent:!0});

},

exports.unsubscribe=function(opt){
if(null==exports.config.unsubscribeEndpoint)
throw new Error('Notifications.HTTP: Invalid HTTP endpoint');


HTTP.send({
url:exports.config.unsubscribeEndpoint,
method:'POST',
data:_.extend({},opt.data,{
device_token:opt.deviceToken,
channel:opt.channel,
app_deploytype:Util.getDeployType()}),

success:opt.success,
error:opt.error,
suppressFilters:opt.suppressFilters,
errorAlert:!1,
silent:!0});

},

exports.unmute=function(opt){
if(null==exports.config.unmuteEndpoint)
throw new Error('Notifications.HTTP: Invalid HTTP endpoint');


HTTP.send({
url:exports.config.unmuteEndpoint,
method:'POST',
data:_.extend({},opt.data,{
device_token:opt.deviceToken,
app_id:Ti.App.id,
app_version:Ti.App.version,
app_deploytype:Util.getDeployType(),
os:Util.getOS()}),

success:opt.success,
error:opt.error,
suppressFilters:opt.suppressFilters,
errorAlert:!1,
silent:!0});

},

exports.mute=function(opt){
if(null==exports.config.muteEndpoint)
throw new Error('Notifications.HTTP: Invalid HTTP endpoint');


HTTP.send({
url:exports.config.muteEndpoint,
method:'POST',
data:_.extend({},opt.data,{
device_token:opt.deviceToken,
app_id:Ti.App.id,
app_version:Ti.App.version,
app_deploytype:Util.getDeployType(),
os:Util.getOS()}),

success:opt.success,
error:opt.error,
suppressFilters:opt.suppressFilters,
errorAlert:!1,
silent:!0});

};