"use strict";var

ENV_PROPERTY="ENV_PROFILE",
DEPLOYMENT="DEPLOYMENT",

initialised=!1,
deploymentUpdated=!1,

PROFILES={
production:{
id:"production",
name:"Production",
defaultHost:Ti.App.Properties.getString("profile.production.defaultHost")},

simulator:{
id:"simulator",
name:"Simulator",
defaultHost:Ti.App.Properties.getString("profile.simulator.defaultHost")},

development:{
id:"development",
name:"Development",
defaultHost:Ti.App.Properties.getString("profile.development.defaultHost")}};



module.exports={
init:function(){
if(!initialised){var
profile=PROFILES.production,
defaultId=Alloy.CFG.envswitch.defaultId;
defaultId&&(
"development"===defaultId&&"Simulator"===Titanium.Platform.model?
profile=PROFILES.simulator:

profile=PROFILES[defaultId]?PROFILES[defaultId]:profile),


LOGGER.info("Initialising with ENV:"+defaultId+" & PROFILE:"+profile.id),
this.update(profile,!0),
initialised=!0;
}
},

update:function(profile,force){

if(LOGGER.info("[Server Switch] Setting environment to '"+profile.name+"'"),force||!this.getProfile()||profile.id!=this.getProfile().id){
Ti.App.Properties.setObject(ENV_PROPERTY,profile),
Ti.App.fireEvent("tf:env.changed",profile);
var self=this;
deploymentUpdated=!1,
Alloy.createCollection("deployments").fetch().then(function(deployments){
if(deployments&&!deploymentUpdated){
var current=_.findWhere(deployments,{
current:!0});

self.setDeployment(current);
}
}).catch(function(){
self.reset();
});
}
},

reset:function(){
this.setDeployment(),
this.update(this.getProfile(),!0);
},

getProfile:function(){
return Ti.App.Properties.getObject(ENV_PROPERTY);
},

getDeployment:function(){return(
Ti.App.Properties.hasProperty(DEPLOYMENT)?
Ti.App.Properties.getObject(DEPLOYMENT):void 0);



},
setDeployment:function(deployment){
deploymentUpdated=!0,
deployment?
Ti.App.Properties.setObject(DEPLOYMENT,deployment):

Ti.App.Properties.removeProperty(DEPLOYMENT),

Ti.App.fireEvent("tf:env.changed");
},

getProfiles:function(){
return PROFILES;
},

getApiURL:function(){var

protocol,host,port,deployment=this.getDeployment();
if(deployment)
protocol=deployment.protocol||"https",
host=deployment.host,
port=deployment.port;else
{
var profile=this.getProfile();
protocol=profile.protocol||"https",
host=profile.defaultHost,
port=profile.port;
}
var url=protocol+"://"+host+(port?":"+port:"");
return url;
}};