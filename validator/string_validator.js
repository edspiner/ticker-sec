"use strict";

module.exports={

isEmpty:function(str){
return null===str||"undefined"==typeof str||0===str.trim().length;
}};