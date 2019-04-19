"use strict";

var INT_REGEX=/^(?:-?(?:0|[1-9][0-9]*))$/,
FLOAT_REGEX=/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/,
_NUMBER_REGEX=/^\d+$/;

module.exports={

isNumber:function(val){
return _NUMBER_REGEX.test(val);
},

isInt:function(value){
return INT_REGEX.test(value);
},

isFloat:function(value){
return FLOAT_REGEX.test(value);
},

isInRange:function(value,min,max){return!!(

this.isFloat(value)&&this.isFloat(min)&&this.isFloat(max))&&



parseFloat(value)>parseFloat(min)&&parseFloat(value)<parseFloat(max);
}};