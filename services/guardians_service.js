"use strict";

var cus=require("services/current_user_service");

module.exports={
getCurrent:function(){
return Alloy.createCollection("guardians").fetch({
id:cus.singleton().get("userId")});

},
invite:function(email,nickname){
return Alloy.createModel("guardian_invite",{
urlParams:{
id:cus.singleton().get("userId")}}).

save({email:email,nickname:nickname});
},
nudge:function(guardianId,nudgeType){
return Alloy.createModel("guardian_nudge",{
urlParams:{
id:cus.singleton().get("userId"),
gid:guardianId,
nudgeType:nudgeType}}).

save();
},
updateSharing:function(guardianId,sharing){
return Alloy.createModel("guardian_sharing",{
urlParams:{
id:cus.singleton().get("userId"),
gid:guardianId,
sharing:sharing},

id:-1}).save();
}};