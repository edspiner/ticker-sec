"use strict";var

initialised=!1,
moment=require("alloy/moment"),
cus=require("services/current_user_service"),

handleRoutineReminderAction=function(notification){
if("ROUTINE_COMPLETE"===notification.identifier){var
routineId=notification.data.routineId,

today=moment(moment(new Date).format("YYYY-MM-DD")),

date=moment(notification.data.date).toDate();
LOGGER.debug("HANDLING ROUTINE_COMPLETE:"+routineId+" FOR DATE:"+notification.data.date),
Alloy.createModel("routine_dashboard",{
urlParams:{
pid:cus.singleton().get("userId"),
rid:routineId,
status:"DONE",
date:"today-"+today.diff(date,"days")},

id:-1}).save().finally(function(){
Ti.App.fireEvent("tf:notification.background.complete");
});
}
},

_initListeners=function(){
Ti.App.addEventListener("tf:notification.background",function(notification){
if(notification.data&&1==notification.data["content-available"]){
var type=notification.data["content-type"];
Ti.App.fireEvent("tf:sync",{data:{type:type}});
}
notification.data&&"ROUTINE_REMINDER"===notification.data.category&&
handleRoutineReminderAction(notification);

});
};

module.exports={
init:function(){
initialised||(
initialised=!0,
_initListeners());

}};