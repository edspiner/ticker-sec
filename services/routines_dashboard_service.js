"use strict";var



refreshPromise,


routines_dashboard,Q=require("vendor/q"),refreshing=!1,initialised=!1,
cus=require("services/current_user_service"),

_getOverallProgress=function(dashboard){
var progress=0;





return dashboard.length&&_.forEach(dashboard,function(r){progress+=_getRoutineProgress(r)/dashboard.length}),Math.max(Math.min(Math.round(progress),100),0);
},
_getRoutineProgress=function(r){var
progress=0,
nTasksDone=0;








return r.tasks.length&&(_.forEach(r.tasks,function(t){"NEW"!==t.taskStatus&&nTasksDone++}),progress+=100*(nTasksDone/r.tasks.length)),Math.max(Math.min(Math.round(progress),100),0);
},

_updateDashboardState=function(dashboard){var

completed,_Mathround=

Math.round,now=new Date().getTime();_.forEach(dashboard,function(r){r.dueAtMins=_Mathround((r.dueAt-now)/6e3)/10,
r.dueByMins=_Mathround((r.dueBy-now)/6e3)/10,
completed=100<=_getRoutineProgress(r),
completed&&(r.complete=!0),

-60>=r.dueByMins?(
r.state="late",
r.distance=-r.dueByMins):
0>=r.dueByMins?(
r.state="overdue",
r.distance=-r.dueByMins):
0>=r.dueAtMins?(
r.state="active",
r.distance=r.dueAtMins):
0<r.dueAtMins&&30>=r.dueAtMins?(
r.state="upcoming",
r.distance=r.dueAtMins):(

r.state="later",
r.distance=r.dueAtMins);

});
},

setRoutinesDashboard=function(rdb){
routines_dashboard=rdb;
var obj={
routinesDashboard:rdb};

cus.save(obj),
DISPATCHER.trigger("tf:routines.dashboard.loaded",routines_dashboard);
},

refreshRoutinesDashboard=function(){
if(!refreshing){
routines_dashboard=void 0,
refreshing=!0;
var routinesDashboardCollection=Alloy.createCollection("routines_dashboard");

refreshPromise=routinesDashboardCollection.fetch({
pid:cus.singleton().get("userId"),
date:"today"}).
then(function(routines_dashboard){



return routines_dashboard&&setRoutinesDashboard(routines_dashboard),routines_dashboard;
}),
refreshPromise.finally(function(e){
refreshing=!1;
});
}
return refreshPromise;
},

_refreshRoutinesDashboard=_.debounce(refreshRoutinesDashboard,1e3,!0),

_getRoutinesDashboard=function(force){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();







return routines_dashboard&&!force?deferred.resolve(routines_dashboard):_refreshRoutinesDashboard().finally(function(){deferred.resolve(routines_dashboard)}),deferred.promise;
},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
_refreshRoutinesDashboard=_.debounce(refreshRoutinesDashboard,1e3,!0),
_refreshRoutinesDashboard();
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
require("bootstrap/lifecycle").isLoggedIn()&&
_refreshRoutinesDashboard();

});
};

module.exports={

getRoutinesDashboard:_getRoutinesDashboard,

refreshRoutinesDashboard:function(){
_refreshRoutinesDashboard();
},

updateDashboardState:_updateDashboardState,

getOverallProgress:_getOverallProgress};