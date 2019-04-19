"use strict";var

moment=require("alloy/moment"),

month=["January","February","March","April","May","June","July","August","September","October","November","December"],

nth=function(d){
if(3<d&&21>d)return"th";
switch(d%10){
case 1:
return"st";
case 2:
return"nd";
case 3:
return"rd";
default:
return"th";}

};

exports.getDateString=function(d){
return d.getDate()+nth(d.getDate())+" "+month[d.getMonth()];
},

exports.getRecentDateTimeString=function(d){
var fromNow=moment(d).fromNow();
return moment(d).calendar(null,{
lastWeek:"[Last] dddd, h:mm a",
lastDay:"[Yesterday], h:mm a",
sameDay:function(){return(
36e5>new Date().getTime()-d.getTime()?"["+fromNow+"]":
"[Today], h:mm a");
},
sameElse:function(){
return"D MMMM, h:mm a";
}});

},

exports.getLongDayString=function(d){
var fromNow=moment(d).fromNow();

return moment(d).calendar(null,{
lastWeek:"[Last] dddd",
lastDay:"[Yesterday]",
sameDay:"[Today]",
nextDay:"[Tomorrow]",
nextWeek:"dddd",

sameElse:function(){
return"["+fromNow+"]";
}});

},
exports.getShortDayString=function(d){
var fromNow=moment(d).fromNow();

return moment(d).calendar(null,{
lastWeek:"ddd",
nextWeek:"ddd",
lastDay:"ddd",
sameDay:"ddd",
nextDay:"ddd",

sameElse:function(){
return"["+fromNow+"]";
}});

},

exports.getTimeString=function(d){
return moment(d).format("h:mm a");
},

exports.getStartOfDay=function(date){
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0);
};