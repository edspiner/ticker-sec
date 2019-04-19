"use strict";

module.exports={

createError:function(status,errorCode,description){
return new Error(module.exports.createErrorResponse(status,errorCode,description));
},

createErrorResponse:function(status,errorCode,description){

return{
status:status,
errorCode:errorCode,
description:description};

}};