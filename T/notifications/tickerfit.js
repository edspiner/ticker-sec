

exports.subscribe=function(opt){var
type=!0?"GCM":"production"===Ti.App.deployType?"APNS":"APNS_SANDBOX",
userId=opt.data.userId;
Ti.API.debug("Got ["+type+"] token for user ["+userId+"] : "+opt.deviceToken);
var pt=Alloy.createModel("push_token",{
pid:userId});

pt.save({
type:type,
token:opt.deviceToken}).
then(function(){
LOGGER.debug("Push token set for user ["+userId+"]"),
opt.success();
}).catch(function(e){
LOGGER.warn("Problem setting Push token for user ["+userId+"] : "+JSON.stringify(e)),
opt.error();
});
},

exports.unsubscribe=function(opt){var
userId=opt.data.userId,
pt=Alloy.createModel("push_token",{
pid:userId});

pt.save({
type:"NONE"}).
then(function(){
LOGGER.debug("Push token unregistered for user ["+userId+"]"),
opt.success();
}).catch(function(e){
LOGGER.warn("Problem unregistering Push token for user ["+userId+"] : "+JSON.stringify(e)),
opt.error();
});
},

exports.unmute=function(opt){},

exports.mute=function(opt){};