"use strict";var




refreshPromise,


tasks,Q=require("vendor/q"),cus=require("services/current_user_service"),refreshing=!1,initialised=!1,

setTasks=function(ts){
tasks=ts;
var obj={
tasks:tasks};

cus.save(obj),
DISPATCHER.trigger("tf:tasks.loaded",tasks);
},

_getTasks=function(){
if(!refreshing){
tasks=void 0,
refreshing=!0;
var tasksCollection=Alloy.createCollection("tasks");

refreshPromise=tasksCollection.fetch({
pid:cus.singleton().get("userId")}).
then(function(tasks){
if(tasks){
var filtered=[];
_.forEach(tasks,function(t){
t.id&&
filtered.push(t);

}),
setTasks(filtered);
}
return filtered;
}),
refreshPromise.finally(function(e){
refreshing=!1;
});
}
return refreshPromise;
};

module.exports={
getTasks:_getTasks};