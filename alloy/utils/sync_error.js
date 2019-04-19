"use strict";

var Q=require("vendor/q");

module.exports={

createError:function(status,errorCode,description){
return new Error(module.exports.createErrorResponse(status,errorCode,description));
},

createErrorResponse:function(status,errorCode,description){

return{
status:status,
errorCode:errorCode,
description:description};

},

createErrorPromise:function(status,errorCode,description){
return Q.fcall(function(){
throw module.exports.createError(status,errorCode,description);
});
}};