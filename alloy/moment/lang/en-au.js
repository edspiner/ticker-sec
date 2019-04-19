

(function(global,factory){
'object'==typeof exports&&'undefined'!=typeof module?factory(require('/alloy/moment')):'function'==typeof define&&define.amd?define(['moment'],factory):factory(global.moment);
})(this,function(moment){
'use strict';

var en_au=moment.defineLocale('en-au',{
months:['January','February','March','April','May','June','July','August','September','October','November','December'],
monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
weekdaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
weekdaysMin:['Su','Mo','Tu','We','Th','Fr','Sa'],
longDateFormat:{
LT:'h:mm A',
LTS:'h:mm:ss A',
L:'DD/MM/YYYY',
LL:'D MMMM YYYY',
LLL:'D MMMM YYYY h:mm A',
LLLL:'dddd, D MMMM YYYY h:mm A'},

calendar:{
sameDay:'[Today at] LT',
nextDay:'[Tomorrow at] LT',
nextWeek:'dddd [at] LT',
lastDay:'[Yesterday at] LT',
lastWeek:'[Last] dddd [at] LT',
sameElse:'L'},

relativeTime:{
future:'in %s',
past:'%s ago',
s:'a few seconds',
m:'a minute',
mm:'%d minutes',
h:'an hour',
hh:'%d hours',
d:'a day',
dd:'%d days',
M:'a month',
MM:'%d months',
y:'a year',
yy:'%d years'},

ordinalParse:/\d{1,2}(st|nd|rd|th)/,
ordinal:function(number){
var b=number%10,
output=1==~~(number%100/10)?'th':1==b?'st':2==b?'nd':3==b?'rd':'th';
return number+output;
},
week:{
dow:1,
doy:4}});


return en_au;
});