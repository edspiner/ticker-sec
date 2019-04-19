"use strict";var



refreshPromise,


routines,Q=require("vendor/q"),refreshing=!1,initialised=!1,cus=require("services/current_user_service"),

setRoutines=function(rs){
routines=rs;
var obj={
routines:routines};

cus.save(obj),
DISPATCHER.trigger("tf:routines.loaded",routines);
},

refreshRoutines=function(){
if(!refreshing){
routines=void 0,
refreshing=!0;
var routinesCollection=Alloy.createCollection("routines");

refreshPromise=routinesCollection.fetch({
pid:cus.singleton().get("userId")}).
then(function(routines){
if(routines){
var filtered=[];
_.forEach(routines,function(r){
r.id&&
filtered.push(r);

}),
setRoutines(filtered);
}
return filtered;
}),
refreshPromise.finally(function(e){
refreshing=!1;
});
}
return refreshPromise;
},

_refreshRoutines=_.debounce(refreshRoutines,1e3,!0),

_getRoutines=function(force){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();







return routines&&!force?deferred.resolve(routines):_refreshRoutines().finally(function(){deferred.resolve(routines)}),deferred.promise;
},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
_refreshRoutines=_.debounce(refreshRoutines,1e3,!0),
_refreshRoutines();
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
require("bootstrap/lifecycle").isLoggedIn()&&
_refreshRoutines();

});
};

module.exports={

getRoutines:_getRoutines,

refreshRoutines:function(){
_refreshRoutines();
}};