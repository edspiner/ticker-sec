"use strict";

exports.formatNumber=function(num){
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
};