"use strict";var




refreshPromise,


summaryData,Q=require("vendor/q"),cus=require("services/current_user_service"),refreshing=!1,initialised=!1,

setSummaryData=function(summary){
var today=summary[7];
summaryData={
data:summary,
stepsToday:today.steps,
activeTimeToday:1e3*today.activeTime},


DISPATCHER.trigger("tf:summary.loaded",summaryData);
},

refreshSummaryData=function(){



















return refreshing||(summaryData=void 0,refreshing=!0,refreshPromise=Alloy.createModel("summary",{urlParams:{pid:cus.singleton().get("userId"),utcOffset:-new Date().getTimezoneOffset(),days:7}}).fetch().then(function(summary){setSummaryData(summary)}).catch(function(error){DISPATCHER.trigger("tf:summary.failed")}),refreshPromise.finally(function(e){refreshing=!1})),refreshPromise;
},

_refreshSummaryData=_.debounce(refreshSummaryData,1e4,!0),

_getSummaryData=function(){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();







return summaryData?deferred.resolve(summaryData):_refreshSummaryData().finally(function(){deferred.resolve(summaryData)}),deferred.promise;
},

_initListeners=function(){
DISPATCHER.on("tf:activity.data.changed",function(user){
_refreshSummaryData=_.debounce(refreshSummaryData,1e4,!0),
_refreshSummaryData();
}),

DISPATCHER.on("tf:activity.data.uploaded",function(user){
_refreshSummaryData=_.debounce(refreshSummaryData,1e4,!0),
_refreshSummaryData();
}),
DISPATCHER.on("tf:toggles.loaded",function(user){
summaryData?
DISPATCHER.trigger("tf:summary.loaded",summaryData):(

_refreshSummaryData=_.debounce(refreshSummaryData,1e4,!0),
_refreshSummaryData());

});
};

module.exports={

getSummaryData:_getSummaryData,

refreshSummaryData:function(){
_refreshSummaryData();
}};