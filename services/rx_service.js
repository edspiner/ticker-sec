"use strict";var




refreshPromise,


currentRx,Q=require("vendor/q"),cus=require("services/current_user_service"),refreshing=!1,initialised=!1,

_filterPrograms=function(rxPrograms,contentTypes){
var filteredRxPrograms=_.map(rxPrograms,function(rxProgram){
return _filter(rxProgram,["VIDEO","DOCUMENT","REPORT"]);
});







return filteredRxPrograms=_.filter(filteredRxPrograms,function(p){var hasViewableContent=_.find(p.program.items,function(i){return i.viewable});return p.enabled&&0<p.program.items.length&&hasViewableContent}),_.sortBy(filteredRxPrograms,function(p){
return"MISC"===p.id?"ZZZ":p.program.title;
});;
},

_filter=function(rxProgram,contentTypes){var
f=function(item){
return _.contains(contentTypes,item.content.type)&&item.enabled;
},
result={
id:rxProgram.id,
enabled:rxProgram.enabled,
program:{
id:rxProgram.program.id,
title:rxProgram.program.title,
items:_.filter(rxProgram.program.items,f),
enableLookAhead:rxProgram.program.enableLookAhead},

dueItems:_.filter(rxProgram.dueItems,f)};

return result;
},

setCurrentRx=function(rx){
if(rx&&rx.rxPrograms&&0<rx.rxPrograms.length){











for(var
rxProgram,isDone=function(progress,item){for(var i=0;i<progress.length;i++)if(progress[i].programItemId===item.id)return progress[i].completed;return!1},allItems=[],allDueItems=[],themeLookAhead=!0,p=0;p<rx.rxPrograms.length;p++)

if(rxProgram=rx.rxPrograms[p],rxProgram.enabled)
if(rxProgram.startDate>new Date().getTime())
rxProgram.enabled=!1;else
{
var program=rxProgram.program;
themeLookAhead=themeLookAhead&&program.enableLookAhead,

rxProgram.dueItems=[];
for(var
item,i=0;i<program.items.length;i++)item=program.items[i],

item.rxId=rx.id,
item.rxProgramId=rxProgram.id,

item.enabled&&(
item.done=isDone(rxProgram.progress,item),
item.due=item.activationDate<=new Date().getTime(),
item.viewable=rxProgram.program.enableLookAhead||item.due,
item.due&&!item.done&&rxProgram.dueItems.push(item));



Array.prototype.push.apply(allItems,program.items),
Array.prototype.push.apply(allDueItems,rxProgram.dueItems);
}


rx.themeRxPrograms=createThemePrograms(allItems,allDueItems,themeLookAhead);
}
currentRx=rx;
var obj={
rx:rx};

cus.save(obj),
DISPATCHER.trigger("tf:rx.loaded",currentRx);
},

createThemePrograms=function(allItems,allDueItems,enableLookAhead){










function toTitleCase(str){
return str.replace(/\w\S*/g,function(txt){
return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
});
}var themeItems=_.groupBy(allItems,function(i){return i.content.theme}),themeDueItems=_.groupBy(allDueItems,function(i){return i.content.theme}),themePrograms=[],activationSort=function(item){return item.activationDate};
for(var theme in themeItems)
if(themeItems.hasOwnProperty(theme)){
var due=[];
themeDueItems.hasOwnProperty(theme)&&(
due=_.sortBy(themeDueItems[theme],activationSort));

var title=toTitleCase(theme);
"Misc"===title&&(title="My Information");
var themeProgram={
id:theme,
enabled:"true",
program:{
id:theme,
title:title,
items:_.sortBy(themeItems[theme],activationSort),
enableLookAhead:enableLookAhead},

dueItems:due};

themePrograms.push(themeProgram);
}

return _.sortBy(themePrograms,function(p){
return"MISC"===p.id?"ZZZ":p.id;
});
},

refreshCurrentRx=function(){


















return refreshing||(currentRx=void 0,refreshing=!0,refreshPromise=Alloy.createModel("rx",{urlParams:{pid:cus.singleton().get("userId"),rxid:"current"}}).fetch().then(function(rx){return rx&&setCurrentRx(rx),rx}),refreshPromise.finally(function(e){refreshing=!1})),refreshPromise;
},

_refreshCurrentRx=_.debounce(refreshCurrentRx,1e4,!0),

_getCurrentRx=function(){
initialised||(
initialised=!0,
_initListeners());

var deferred=Q.defer();







return currentRx?deferred.resolve(currentRx):_refreshCurrentRx().finally(function(){deferred.resolve(currentRx)}),deferred.promise;
},

_initListeners=function(){
Ti.App.addEventListener("tf:life.cycle.loggedin",function(user){
_refreshCurrentRx=_.debounce(refreshCurrentRx,1e4,!0),
_refreshCurrentRx();
}),
Ti.App.addEventListener("tf:life.cycle.resume",function(){
require("bootstrap/lifecycle").isLoggedIn()&&
_refreshCurrentRx();

});
};

module.exports={
getCurrentRx:_getCurrentRx,
refreshCurrentRx:function(){
_refreshCurrentRx();
},
filterPrograms:_filterPrograms};