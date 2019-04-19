"use strict";

var initialised=!1;

module.exports={
_id:{
id:"singleton"},


init:function(){
if(!initialised){
var self=this;
DISPATCHER.on("tf:life.cycle.loggedout",function(){
self.reset();
}),
initialised=!0;
}
},

singleton:function(){
var singleton=Alloy.createModel("current_user",this._id);

return singleton.fetch(),singleton;
},

save:function(obj){
this.singleton().save(obj);
},

reset:function(){
LOGGER.error("***** resetting CU!");var
cu=this.singleton(),

email=cu.get("email"),
device=cu.get("device"),
enableAllDeployments=cu.get("enableAllDeployments");
cu.destroy(),
this.save({
email:email,
device:device,
enableAllDeployments:enableAllDeployments});

}};