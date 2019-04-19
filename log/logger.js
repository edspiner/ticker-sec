"use strict";

var LOG_METHODS=["trace","debug","info","warn","error"],
self={};

function canLog(target,level){var
targetIndex=LOG_METHODS.indexOf(target),
levelIndex=LOG_METHODS.indexOf(level);
return levelIndex>=targetIndex;
}

function consoleLog(level,args){
if(args){
var messages=Array.prototype.slice.call(args);



return void messages.forEach(function(message){Ti.API.log(level,"LOG - "+message)});
}
}

function log(level,args){
args&&
canLog(Alloy.CFG.logLevel,level)&&
consoleLog(level,args);


}

LOG_METHODS.forEach(function(method){
self[method]=function(){
log(method,arguments);
};
}),

module.exports=self;