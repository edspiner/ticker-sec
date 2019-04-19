

;(function(global,factory){
'object'==typeof exports&&'undefined'!=typeof module?module.exports=factory():'function'==typeof define&&define.amd?define(factory):global.moment=factory();
})(this,function(){
'use strict';



function hooks(){
return hookCallback.apply(null,arguments);
}

function setHookCallback(callback){
hookCallback=callback;
}

function isArray(input){
return input instanceof Array||'[object Array]'===Object.prototype.toString.call(input);
}

function isObject(input){
return null!=input&&'[object Object]'===Object.prototype.toString.call(input);
}

function isObjectEmpty(obj){
if(Object.getOwnPropertyNames)
return 0===Object.getOwnPropertyNames(obj).length;

var k;
for(k in obj)
if(obj.hasOwnProperty(k))
return!1;


return!0;

}

function isUndefined(input){
return void 0===input;
}

function isNumber(input){
return'number'==typeof input||'[object Number]'===Object.prototype.toString.call(input);
}

function isDate(input){
return input instanceof Date||'[object Date]'===Object.prototype.toString.call(input);
}

function map(arr,fn){
var
i,res=[];
for(i=0;i<arr.length;++i)
res.push(fn(arr[i],i));

return res;
}

function hasOwnProp(a,b){
return Object.prototype.hasOwnProperty.call(a,b);
}

function extend(a,b){
for(var i in b)
hasOwnProp(b,i)&&(
a[i]=b[i]);











return hasOwnProp(b,'toString')&&(a.toString=b.toString),hasOwnProp(b,'valueOf')&&(a.valueOf=b.valueOf),a;
}

function createUTC(input,format,locale,strict){
return createLocalOrUTC(input,format,locale,strict,!0).utc();
}

function defaultParsingFlags(){
return{
empty:!1,
unusedTokens:[],
unusedInput:[],
overflow:-2,
charsLeftOver:0,
nullInput:!1,
invalidMonth:null,
invalidFormat:!1,
userInvalidated:!1,
iso:!1,
parsedDateParts:[],
meridiem:null,
rfc2822:!1,
weekdayMismatch:!1};

}

function getParsingFlags(m){



return null==m._pf&&(m._pf=defaultParsingFlags()),m._pf;
}



















function isValid(m){
if(null==m._isValid){var
flags=getParsingFlags(m),
parsedParts=some.call(flags.parsedDateParts,function(i){
return null!=i;
}),
isNowValid=!isNaN(m._d.getTime())&&0>flags.overflow&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.weekdayMismatch&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||flags.meridiem&&parsedParts);





if(m._strict&&(isNowValid=isNowValid&&0===flags.charsLeftOver&&0===flags.unusedTokens.length&&void 0===flags.bigHour),null==Object.isFrozen||!Object.isFrozen(m))
m._isValid=isNowValid;else

return isNowValid;

}
return m._isValid;
}

function createInvalid(flags){
var m=createUTC(NaN);






return null==flags?getParsingFlags(m).userInvalidated=!0:extend(getParsingFlags(m),flags),m;
}



function copyConfig(to,from){
var i,prop,val;
































if(isUndefined(from._isAMomentObject)||(to._isAMomentObject=from._isAMomentObject),isUndefined(from._i)||(to._i=from._i),isUndefined(from._f)||(to._f=from._f),isUndefined(from._l)||(to._l=from._l),isUndefined(from._strict)||(to._strict=from._strict),isUndefined(from._tzm)||(to._tzm=from._tzm),isUndefined(from._isUTC)||(to._isUTC=from._isUTC),isUndefined(from._offset)||(to._offset=from._offset),isUndefined(from._pf)||(to._pf=getParsingFlags(from)),isUndefined(from._locale)||(to._locale=from._locale),0<momentProperties.length)
for(i=0;i<momentProperties.length;i++)
prop=momentProperties[i],
val=from[prop],
isUndefined(val)||(
to[prop]=val);




return to;
}



function Moment(config){
copyConfig(this,config),
this._d=new Date(null==config._d?NaN:config._d.getTime()),
this.isValid()||(
this._d=new Date(NaN)),


!1===updateInProgress&&(
updateInProgress=!0,
hooks.updateOffset(this),
updateInProgress=!1);

}

function isMoment(obj){
return obj instanceof Moment||null!=obj&&null!=obj._isAMomentObject;
}

function absFloor(number){return(
0>number?
_Mathceil(number)||0:

_Mathfloor(number));

}

function toInt(argumentForCoercion){
var coercedNumber=+argumentForCoercion,
value=0;





return 0!=coercedNumber&&isFinite(coercedNumber)&&(value=absFloor(coercedNumber)),value;
}

function compareArrays(array1,array2,dontConvert){
var


i,len=_Mathmin(array1.length,array2.length),lengthDiff=_Mathabs(array1.length-array2.length),diffs=0;
for(i=0;i<len;i++)(
dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i]))&&
diffs++;


return diffs+lengthDiff;
}

function warn(msg){
!1===hooks.suppressDeprecationWarnings&&'undefined'!=typeof console&&console.warn&&
console.warn('Deprecation warning: '+msg);

}

function deprecate(msg,fn){
var firstTime=!0;

return extend(function(){



if(null!=hooks.deprecationHandler&&hooks.deprecationHandler(null,msg),firstTime){


for(var arg,args=[],i=0;i<arguments.length;i++){

if(arg='','object'==typeof arguments[i]){

for(var key in arg+='\n['+i+'] ',arguments[0])
arg+=key+': '+arguments[0][key]+', ';

arg=arg.slice(0,-2);
}else
arg=arguments[i];

args.push(arg);
}
warn(msg+'\nArguments: '+Array.prototype.slice.call(args).join('')+'\n'+new Error().stack),
firstTime=!1;
}
return fn.apply(this,arguments);
},fn);
}



function deprecateSimple(name,msg){
null!=hooks.deprecationHandler&&
hooks.deprecationHandler(name,msg),

deprecations[name]||(
warn(msg),
deprecations[name]=!0);

}




function isFunction(input){
return input instanceof Function||'[object Function]'===Object.prototype.toString.call(input);
}

function set(config){
var prop,i;
for(i in config)
prop=config[i],
isFunction(prop)?
this[i]=prop:

this['_'+i]=prop;


this._config=config,

this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+'|'+/\d{1,2}/.source);
}

function mergeConfigs(parentConfig,childConfig){
var
prop,res=extend({},parentConfig);
for(prop in childConfig)
hasOwnProp(childConfig,prop)&&(
isObject(parentConfig[prop])&&isObject(childConfig[prop])?(
res[prop]={},
extend(res[prop],parentConfig[prop]),
extend(res[prop],childConfig[prop])):
null==childConfig[prop]?


delete res[prop]:res[prop]=childConfig[prop]);



for(prop in parentConfig)
hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])&&(
res[prop]=extend({},res[prop]));


return res;
}

function Locale(config){
null!=config&&
this.set(config);

}



























function calendar(key,mom,now){
var output=this._calendar[key]||this._calendar.sameElse;
return isFunction(output)?output.call(mom,now):output;
}










function longDateFormat(key){
var format=this._longDateFormat[key],
formatUpper=this._longDateFormat[key.toUpperCase()];return(

format||!formatUpper?
format:(


this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){
return val.slice(1);
}),

this._longDateFormat[key]));
}



function invalidDate(){
return this._invalidDate;
}




function ordinal(number){
return this._ordinal.replace('%d',number);
}


















function relativeTime(number,withoutSuffix,string,isFuture){
var output=this._relativeTime[string];
return isFunction(output)?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);
}

function pastFuture(diff,output){
var format=this._relativeTime[0<diff?'future':'past'];
return isFunction(format)?format(output):format.replace(/%s/i,output);
}



function addUnitAlias(unit,shorthand){
var lowerCase=unit.toLowerCase();
aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;
}

function normalizeUnits(units){
return'string'==typeof units?aliases[units]||aliases[units.toLowerCase()]:void 0;
}

function normalizeObjectUnits(inputObject){
var
normalizedProp,
prop,normalizedInput={};

for(prop in inputObject)
hasOwnProp(inputObject,prop)&&(
normalizedProp=normalizeUnits(prop),
normalizedProp&&(
normalizedInput[normalizedProp]=inputObject[prop]));




return normalizedInput;
}



function addUnitPriority(unit,priority){
priorities[unit]=priority;
}

function getPrioritizedUnits(unitsObj){
var units=[];
for(var u in unitsObj)
units.push({unit:u,priority:priorities[u]});




return units.sort(function(a,b){return a.priority-b.priority}),units;
}

function zeroFill(number,targetLength,forceSign){
var absNumber=''+_Mathabs(number),
zerosToFill=targetLength-absNumber.length,
sign=0<=number;
return(sign?forceSign?'+':'':'-')+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;
}









function addFormatToken(token,padded,ordinal,callback){
var func=callback;
'string'==typeof callback&&(
func=function(){
return this[callback]();
}),

token&&(
formatTokenFunctions[token]=func),

padded&&(
formatTokenFunctions[padded[0]]=function(){
return zeroFill(func.apply(this,arguments),padded[1],padded[2]);
}),

ordinal&&(
formatTokenFunctions[ordinal]=function(){
return this.localeData().ordinal(func.apply(this,arguments),token);
});

}

function removeFormattingTokens(input){return(
input.match(/\[[\s\S]/)?
input.replace(/^\[|\]$/g,''):

input.replace(/\\/g,''));
}

function makeFormatFunction(format){
var
i,
length,array=format.match(formattingTokens);

for(i=0,length=array.length;i<length;i++)

array[i]=formatTokenFunctions[array[i]]?formatTokenFunctions[array[i]]:

removeFormattingTokens(array[i]);



return function(mom){
var
i,output='';
for(i=0;i<length;i++)
output+=isFunction(array[i])?array[i].call(mom,format):array[i];

return output;
};
}

function formatMoment(m,format){return(
m.isValid()?(



format=expandFormat(format,m.localeData()),
formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format),

formatFunctions[format](m)):m.localeData().invalidDate());
}

function expandFormat(format,locale){


function replaceLongDateFormatTokens(input){
return locale.longDateFormat(input)||input;
}var i=5;for(

localFormattingTokens.lastIndex=0;
0<=i&&localFormattingTokens.test(format);)
format=format.replace(localFormattingTokens,replaceLongDateFormatTokens),
localFormattingTokens.lastIndex=0,
i-=1;


return format;
}
























function addRegexToken(token,regex,strictRegex){
regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){
return isStrict&&strictRegex?strictRegex:regex;
};
}

function getParseRegexForToken(token,config){return(
hasOwnProp(regexes,token)?



regexes[token](config._strict,config._locale):new RegExp(unescapeFormat(token)));
}

function unescapeFormat(s){
return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){
return p1||p2||p3||p4;
}));
}

function regexEscape(s){
return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');
}



function addParseToken(token,callback){
var i,
func=callback;








for('string'==typeof token&&(token=[token]),isNumber(callback)&&(func=function(input,array){array[callback]=toInt(input)}),i=0;i<token.length;i++)
tokens[token[i]]=func;

}

function addWeekParseToken(token,callback){
addParseToken(token,function(input,array,config,token){
config._w=config._w||{},
callback(input,config._w,config,token);
});
}

function addTimeToArrayFromToken(token,input,config){
null!=input&&hasOwnProp(tokens,token)&&
tokens[token](input,config._a,config,token);

}













































function daysInYear(year){
return isLeapYear(year)?366:365;
}

function isLeapYear(year){
return 0==year%4&&0!=year%100||0==year%400;
}







function getIsLeapYear(){
return isLeapYear(this.year());
}

function makeGetSet(unit,keepTime){
return function(value){return(
null==value?




get(this,unit):(set$1(this,unit,value),hooks.updateOffset(this,keepTime),this));

};
}

function get(mom,unit){
return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN;
}

function set$1(mom,unit,value){
mom.isValid()&&!isNaN(value)&&(
'FullYear'===unit&&isLeapYear(mom.year())&&1===mom.month()&&29===mom.date()?
mom._d['set'+(mom._isUTC?'UTC':'')+unit](value,mom.month(),daysInMonth(value,mom.month())):

mom._d['set'+(mom._isUTC?'UTC':'')+unit](value));


}

function stringGet(units){return(
units=normalizeUnits(units),
isFunction(this[units])?
this[units]():

this);
}

function stringSet(units,value){
if('object'==typeof units){
units=normalizeObjectUnits(units);

for(var prioritized=getPrioritizedUnits(units),i=0;i<prioritized.length;i++)
this[prioritized[i].unit](units[prioritized[i].unit]);

}else

if(units=normalizeUnits(units),isFunction(this[units]))
return this[units](value);


return this;
}

function mod(n,x){
return(n%x+x)%x;
}

















function daysInMonth(year,month){
if(isNaN(year)||isNaN(month))
return NaN;

var modMonth=mod(month,12);

return year+=(month-modMonth)/12,1===modMonth?isLeapYear(year)?29:28:31-modMonth%7%2;
}










































function localeMonths(m,format){return(
m?


isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?'format':'standalone'][m.month()]:isArray(this._months)?this._months:this._months.standalone);
}


function localeMonthsShort(m,format){return(
m?


isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()]:isArray(this._monthsShort)?this._monthsShort:this._monthsShort.standalone);
}

function handleStrictParse(monthName,format,strict){
var i,
ii,
mom,
llc=monthName.toLocaleLowerCase();
if(!this._monthsParse)



for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;12>i;++i)
mom=createUTC([2e3,i]),
this._shortMonthsParse[i]=this.monthsShort(mom,'').toLocaleLowerCase(),
this._longMonthsParse[i]=this.months(mom,'').toLocaleLowerCase();return(



strict?
'MMM'===format?(
ii=indexOf.call(this._shortMonthsParse,llc),
-1===ii?null:ii):(

ii=indexOf.call(this._longMonthsParse,llc),
-1===ii?null:ii):


'MMM'===format?(
ii=indexOf.call(this._shortMonthsParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._longMonthsParse,llc),
-1===ii?null:ii):(

ii=indexOf.call(this._longMonthsParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._shortMonthsParse,llc),
-1===ii?null:ii));


}

function localeMonthsParse(monthName,format,strict){
var i,mom,regex;

if(this._monthsParseExact)
return handleStrictParse.call(this,monthName,format,strict);








for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){










if(mom=createUTC([2e3,i]),strict&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i'),this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i')),strict||this._monthsParse[i]||(regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,''),this._monthsParse[i]=new RegExp(regex.replace('.',''),'i')),strict&&'MMMM'===format&&this._longMonthsParse[i].test(monthName))
return i;
if(strict&&'MMM'===format&&this._shortMonthsParse[i].test(monthName))
return i;
if(!strict&&this._monthsParse[i].test(monthName))
return i;

}
}

function setMonth(mom,value){
var dayOfMonth;

if(!mom.isValid())
return mom;


if('string'==typeof value)
if(/^\d+$/.test(value))
value=toInt(value);else



if(value=mom.localeData().monthsParse(value),!isNumber(value))
return mom;






return dayOfMonth=_Mathmin(mom.date(),daysInMonth(mom.year(),value)),mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth),mom;
}

function getSetMonth(value){return(
null==value?




get(this,'Month'):(setMonth(this,value),hooks.updateOffset(this,!0),this));

}

function getDaysInMonth(){
return daysInMonth(this.year(),this.month());
}


function monthsShortRegex(isStrict){return(
this._monthsParseExact?(
hasOwnProp(this,'_monthsRegex')||
computeMonthsParse.call(this),

isStrict?
this._monthsShortStrictRegex:

this._monthsShortRegex):(


hasOwnProp(this,'_monthsShortRegex')||(
this._monthsShortRegex=defaultMonthsShortRegex),

this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex));

}


function monthsRegex(isStrict){return(
this._monthsParseExact?(
hasOwnProp(this,'_monthsRegex')||
computeMonthsParse.call(this),

isStrict?
this._monthsStrictRegex:

this._monthsRegex):(


hasOwnProp(this,'_monthsRegex')||(
this._monthsRegex=defaultMonthsRegex),

this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex));

}

function computeMonthsParse(){
function cmpLenRev(a,b){
return b.length-a.length;
}

var


i,
mom,shortPieces=[],longPieces=[],mixedPieces=[];
for(i=0;12>i;i++)
mom=createUTC([2e3,i]),
shortPieces.push(this.monthsShort(mom,'')),
longPieces.push(this.months(mom,'')),
mixedPieces.push(this.months(mom,'')),
mixedPieces.push(this.monthsShort(mom,''));





for(shortPieces.sort(cmpLenRev),longPieces.sort(cmpLenRev),mixedPieces.sort(cmpLenRev),i=0;12>i;i++)
shortPieces[i]=regexEscape(shortPieces[i]),
longPieces[i]=regexEscape(longPieces[i]);

for(i=0;24>i;i++)
mixedPieces[i]=regexEscape(mixedPieces[i]);


this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i'),
this._monthsShortRegex=this._monthsRegex,
this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')','i'),
this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');
}

function createDate(y,m,d,h,M,s,ms){
var date=new Date(y,m,d,h,M,s,ms);




return 100>y&&0<=y&&isFinite(date.getFullYear())&&date.setFullYear(y),date;
}

function createUTCDate(y){
var date=new Date(Date.UTC.apply(null,arguments));




return 100>y&&0<=y&&isFinite(date.getUTCFullYear())&&date.setUTCFullYear(y),date;
}

function firstWeekOffset(year,dow,doy){
var fwd=7+dow-doy,
fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;

return-fwdlw+fwd-1;
}

function dayOfYearFromWeeks(year,week,weekday,dow,doy){
var


resYear,
resDayOfYear,localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset;












return 0>=dayOfYear?(resYear=year-1,resDayOfYear=daysInYear(resYear)+dayOfYear):dayOfYear>daysInYear(year)?(resYear=year+1,resDayOfYear=dayOfYear-daysInYear(year)):(resYear=year,resDayOfYear=dayOfYear),{
year:resYear,
dayOfYear:resDayOfYear};

}

function weekOfYear(mom,dow,doy){
var

resWeek,
resYear,weekOffset=firstWeekOffset(mom.year(),dow,doy),week=_Mathfloor((mom.dayOfYear()-weekOffset-1)/7)+1;












return 1>week?(resYear=mom.year()-1,resWeek=week+weeksInYear(resYear,dow,doy)):week>weeksInYear(mom.year(),dow,doy)?(resWeek=week-weeksInYear(mom.year(),dow,doy),resYear=mom.year()+1):(resYear=mom.year(),resWeek=week),{
week:resWeek,
year:resYear};

}

function weeksInYear(year,dow,doy){
var weekOffset=firstWeekOffset(year,dow,doy),
weekOffsetNext=firstWeekOffset(year+1,dow,doy);
return(daysInYear(year)-weekOffset+weekOffsetNext)/7;
}



















function localeWeek(mom){
return weekOfYear(mom,this._week.dow,this._week.doy).week;
}





function localeFirstDayOfWeek(){
return this._week.dow;
}

function localeFirstDayOfYear(){
return this._week.doy;
}

function getSetWeek(input){
var week=this.localeData().week(this);
return null==input?week:this.add(7*(input-week),'d');
}

function getSetISOWeek(input){
var week=weekOfYear(this,1,4).week;
return null==input?week:this.add(7*(input-week),'d');
}





















































function parseWeekday(input,locale){return(
'string'==typeof input?



isNaN(input)?(



input=locale.weekdaysParse(input),
'number'==typeof input?
input:


null):parseInt(input,10):input);
}

function parseIsoWeekday(input,locale){return(
'string'==typeof input?
locale.weekdaysParse(input)%7||7:

isNaN(input)?null:input);
}


function localeWeekdays(m,format){return(
m?


isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()]:isArray(this._weekdays)?this._weekdays:this._weekdays.standalone);
}


function localeWeekdaysShort(m){
return m?this._weekdaysShort[m.day()]:this._weekdaysShort;
}


function localeWeekdaysMin(m){
return m?this._weekdaysMin[m.day()]:this._weekdaysMin;
}

function handleStrictParse$1(weekdayName,format,strict){
var i,
ii,
mom,
llc=weekdayName.toLocaleLowerCase();
if(!this._weekdaysParse)




for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;7>i;++i)
mom=createUTC([2e3,1]).day(i),
this._minWeekdaysParse[i]=this.weekdaysMin(mom,'').toLocaleLowerCase(),
this._shortWeekdaysParse[i]=this.weekdaysShort(mom,'').toLocaleLowerCase(),
this._weekdaysParse[i]=this.weekdays(mom,'').toLocaleLowerCase();return(



strict?
'dddd'===format?(
ii=indexOf.call(this._weekdaysParse,llc),
-1===ii?null:ii):
'ddd'===format?(
ii=indexOf.call(this._shortWeekdaysParse,llc),
-1===ii?null:ii):(

ii=indexOf.call(this._minWeekdaysParse,llc),
-1===ii?null:ii):


'dddd'===format?(
ii=indexOf.call(this._weekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._shortWeekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._minWeekdaysParse,llc),
-1===ii?null:ii):
'ddd'===format?(
ii=indexOf.call(this._shortWeekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._weekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._minWeekdaysParse,llc),
-1===ii?null:ii):(

ii=indexOf.call(this._minWeekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._weekdaysParse,llc),
-1!==ii)?
ii:(

ii=indexOf.call(this._shortWeekdaysParse,llc),
-1===ii?null:ii));


}

function localeWeekdaysParse(weekdayName,format,strict){
var i,mom,regex;

if(this._weekdaysParseExact)
return handleStrictParse$1.call(this,weekdayName,format,strict);









for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){












if(mom=createUTC([2e3,1]).day(i),strict&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','.?')+'$','i'),this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','.?')+'$','i'),this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','.?')+'$','i')),this._weekdaysParse[i]||(regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,''),this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i')),strict&&'dddd'===format&&this._fullWeekdaysParse[i].test(weekdayName))
return i;
if(strict&&'ddd'===format&&this._shortWeekdaysParse[i].test(weekdayName))
return i;
if(strict&&'dd'===format&&this._minWeekdaysParse[i].test(weekdayName))
return i;
if(!strict&&this._weekdaysParse[i].test(weekdayName))
return i;

}
}

function getSetDayOfWeek(input){
if(!this.isValid())
return null==input?NaN:this;

var day=this._isUTC?this._d.getUTCDay():this._d.getDay();return(
null==input?



day:(input=parseWeekday(input,this.localeData()),this.add(input-day,'d')));

}

function getSetLocaleDayOfWeek(input){
if(!this.isValid())
return null==input?NaN:this;

var weekday=(this.day()+7-this.localeData()._week.dow)%7;
return null==input?weekday:this.add(input-weekday,'d');
}

function getSetISODayOfWeek(input){
if(!this.isValid())
return null==input?NaN:this;


if(null!=input){
var weekday=parseIsoWeekday(input,this.localeData());
return this.day(this.day()%7?weekday:weekday-7);
}
return this.day()||7;

}


function weekdaysRegex(isStrict){return(
this._weekdaysParseExact?(
hasOwnProp(this,'_weekdaysRegex')||
computeWeekdaysParse.call(this),

isStrict?
this._weekdaysStrictRegex:

this._weekdaysRegex):(


hasOwnProp(this,'_weekdaysRegex')||(
this._weekdaysRegex=defaultWeekdaysRegex),

this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex));

}


function weekdaysShortRegex(isStrict){return(
this._weekdaysParseExact?(
hasOwnProp(this,'_weekdaysRegex')||
computeWeekdaysParse.call(this),

isStrict?
this._weekdaysShortStrictRegex:

this._weekdaysShortRegex):(


hasOwnProp(this,'_weekdaysShortRegex')||(
this._weekdaysShortRegex=defaultWeekdaysShortRegex),

this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex));

}


function weekdaysMinRegex(isStrict){return(
this._weekdaysParseExact?(
hasOwnProp(this,'_weekdaysRegex')||
computeWeekdaysParse.call(this),

isStrict?
this._weekdaysMinStrictRegex:

this._weekdaysMinRegex):(


hasOwnProp(this,'_weekdaysMinRegex')||(
this._weekdaysMinRegex=defaultWeekdaysMinRegex),

this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex));

}

function computeWeekdaysParse(){
function cmpLenRev(a,b){
return b.length-a.length;
}

var



i,
mom,
minp,
shortp,
longp,minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[];
for(i=0;7>i;i++)
mom=createUTC([2e3,1]).day(i),
minp=this.weekdaysMin(mom,''),
shortp=this.weekdaysShort(mom,''),
longp=this.weekdays(mom,''),
minPieces.push(minp),
shortPieces.push(shortp),
longPieces.push(longp),
mixedPieces.push(minp),
mixedPieces.push(shortp),
mixedPieces.push(longp);






for(minPieces.sort(cmpLenRev),shortPieces.sort(cmpLenRev),longPieces.sort(cmpLenRev),mixedPieces.sort(cmpLenRev),i=0;7>i;i++)
shortPieces[i]=regexEscape(shortPieces[i]),
longPieces[i]=regexEscape(longPieces[i]),
mixedPieces[i]=regexEscape(mixedPieces[i]);


this._weekdaysRegex=new RegExp('^('+mixedPieces.join('|')+')','i'),
this._weekdaysShortRegex=this._weekdaysRegex,
this._weekdaysMinRegex=this._weekdaysRegex,

this._weekdaysStrictRegex=new RegExp('^('+longPieces.join('|')+')','i'),
this._weekdaysShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i'),
this._weekdaysMinStrictRegex=new RegExp('^('+minPieces.join('|')+')','i');
}

function hFormat(){
return this.hours()%12||12;
}

function kFormat(){
return this.hours()||24;
}





















function meridiem(token,lowercase){
addFormatToken(token,0,0,function(){
return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);
});
}








function matchMeridiem(isStrict,locale){
return locale._meridiemParse;
}























































function localeIsPM(input){
return'p'===(input+'').toLowerCase().charAt(0);
}


function localeMeridiem(hours,minutes,isLower){return(
11<hours?
isLower?'pm':'PM':

isLower?'am':'AM');

}



























function normalizeLocale(key){
return key?key.toLowerCase().replace('_','-'):key;
}

function chooseLocale(names){for(
var
j,
next,
locale,
split,i=0;

i<names.length;){for(
split=normalizeLocale(names[i]).split('-'),
j=split.length,
next=normalizeLocale(names[i+1]),
next=next?next.split('-'):null;
0<j;){

if(locale=loadLocale(split.slice(0,j).join('-')),locale)
return locale;

if(next&&next.length>=j&&compareArrays(split,next,!0)>=j-1)
break;

j--;
}
i++;
}
return globalLocale;
}

function loadLocale(name){
var oldLocale=null;

if(!locales[name]&&'undefined'!=typeof module&&module&&module.exports)
try{
oldLocale=globalLocale._abbr;
var aliasedRequire=require;
aliasedRequire('alloy/moment/lang/'+name),
getSetGlobalLocale(oldLocale);
}catch(e){}

return locales[name];
}

function getSetGlobalLocale(key,values){
var data;
















return key&&(data=isUndefined(values)?getLocale(key):defineLocale(key,values),data?globalLocale=data:'undefined'!=typeof console&&console.warn&&console.warn('Locale '+key+' not found. Did you forget to load it?')),globalLocale._abbr;
}

function defineLocale(name,config){
if(null!==config){
var locale,
parentConfig=baseConfig;

if(config.abbr=name,null!=locales[name])
deprecateSimple('defineLocaleOverride','use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'),
parentConfig=locales[name]._config;else
if(null!=config.parentLocale)
if(null!=locales[config.parentLocale])
parentConfig=locales[config.parentLocale]._config;else


if(locale=loadLocale(config.parentLocale),null!=locale)
parentConfig=locale._config;else








return localeFamilies[config.parentLocale]||(localeFamilies[config.parentLocale]=[]),localeFamilies[config.parentLocale].push({name:name,config:config}),null;













return locales[name]=new Locale(mergeConfigs(parentConfig,config)),localeFamilies[name]&&localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config)}),getSetGlobalLocale(name),locales[name];
}

return delete locales[name],null;

}

function updateLocale(name,config){
if(null!=config){
var locale,
tmpLocale,
parentConfig=baseConfig;

tmpLocale=loadLocale(name),
null!=tmpLocale&&(
parentConfig=tmpLocale._config),

config=mergeConfigs(parentConfig,config),
locale=new Locale(config),
locale.parentLocale=locales[name],
locales[name]=locale,

getSetGlobalLocale(name);
}else
null!=locales[name]&&(
null==locales[name].parentLocale?

null!=locales[name]&&
delete locales[name]:locales[name]=locales[name].parentLocale);



return locales[name];
}

function getLocale(key){
var locale;





if(key&&key._locale&&key._locale._abbr&&(key=key._locale._abbr),!key)
return globalLocale;


if(!isArray(key)){

if(locale=loadLocale(key),locale)
return locale;

key=[key];
}

return chooseLocale(key);
}

function listLocales(){
return keys(locales);
}

function checkOverflow(m){var
overflow,
a=m._a;

















return a&&-2===getParsingFlags(m).overflow&&(overflow=0>a[MONTH]||11<a[MONTH]?MONTH:1>a[DATE]||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:0>a[HOUR]||24<a[HOUR]||24===a[HOUR]&&(0!==a[MINUTE]||0!==a[SECOND]||0!==a[MILLISECOND])?HOUR:0>a[MINUTE]||59<a[MINUTE]?MINUTE:0>a[SECOND]||59<a[SECOND]?SECOND:0>a[MILLISECOND]||999<a[MILLISECOND]?MILLISECOND:-1,getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)&&(overflow=DATE),getParsingFlags(m)._overflowWeeks&&-1===overflow&&(overflow=WEEK),getParsingFlags(m)._overflowWeekday&&-1===overflow&&(overflow=WEEKDAY),getParsingFlags(m).overflow=overflow),m;
}

function defaults(a,b,c){return(
null==a?


null==b?


c:b:a);
}

function currentDateArray(config){
var nowValue=new Date(hooks.now());return(
config._useUTC?
[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()]:

[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()]);
}

function configFromArray(config){
var i,
date,

currentDate,
expectedWeekday,
yearToUse,input=[];

if(!config._d){





















for(currentDate=currentDateArray(config),config._w&&null==config._a[DATE]&&null==config._a[MONTH]&&dayOfYearFromWeekInfo(config),null!=config._dayOfYear&&(yearToUse=defaults(config._a[YEAR],currentDate[YEAR]),(config._dayOfYear>daysInYear(yearToUse)||0===config._dayOfYear)&&(getParsingFlags(config)._overflowDayOfYear=!0),date=createUTCDate(yearToUse,0,config._dayOfYear),config._a[MONTH]=date.getUTCMonth(),config._a[DATE]=date.getUTCDate()),i=0;3>i&&null==config._a[i];++i)
config._a[i]=input[i]=currentDate[i];


for(;7>i;i++)
config._a[i]=input[i]=null==config._a[i]?2===i?1:0:config._a[i];


24===config._a[HOUR]&&0===config._a[MINUTE]&&0===config._a[SECOND]&&0===config._a[MILLISECOND]&&(
config._nextDay=!0,
config._a[HOUR]=0),


config._d=(config._useUTC?createUTCDate:createDate).apply(null,input),
expectedWeekday=config._useUTC?config._d.getUTCDay():config._d.getDay(),

null!=config._tzm&&
config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm),


config._nextDay&&(
config._a[HOUR]=24),


config._w&&'undefined'!=typeof config._w.d&&config._w.d!==expectedWeekday&&(
getParsingFlags(config).weekdayMismatch=!0)}

}

function dayOfYearFromWeekInfo(config){
var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;


if(w=config._w,null!=w.GG||null!=w.W||null!=w.E)
dow=1,
doy=4,

weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year),
week=defaults(w.W,1),
weekday=defaults(w.E,1),(
1>weekday||7<weekday)&&(
weekdayOverflow=!0);else

{
dow=config._locale._week.dow,
doy=config._locale._week.doy;

var curWeek=weekOfYear(createLocal(),dow,doy);

weekYear=defaults(w.gg,config._a[YEAR],curWeek.year),

week=defaults(w.w,curWeek.week),

null==w.d?




null==w.e?





weekday=dow:(weekday=w.e+dow,(0>w.e||6<w.e)&&(weekdayOverflow=!0)):(weekday=w.d,(0>weekday||6<weekday)&&(weekdayOverflow=!0));

}
1>week||week>weeksInYear(weekYear,dow,doy)?
getParsingFlags(config)._overflowWeeks=!0:
null==weekdayOverflow?(


temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),
config._a[YEAR]=temp.year,
config._dayOfYear=temp.dayOfYear):getParsingFlags(config)._overflowWeekday=!0;

}












function configFromISO(config){
var i,
l,


allowTime,
dateFormat,
timeFormat,
tzFormat,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string);

if(match){


for(getParsingFlags(config).iso=!0,i=0,l=isoDates.length;i<l;i++)
if(isoDates[i][1].exec(match[1])){
dateFormat=isoDates[i][0],
allowTime=!1!==isoDates[i][2];
break;
}

if(null==dateFormat)

return void(config._isValid=!1);

if(match[3]){
for(i=0,l=isoTimes.length;i<l;i++)
if(isoTimes[i][1].exec(match[3])){
timeFormat=(match[2]||' ')+isoTimes[i][0];
break;
}

if(null==timeFormat)

return void(config._isValid=!1);

}
if(!allowTime&&null!=timeFormat)

return void(config._isValid=!1);

if(match[4])
if(tzRegex.exec(match[4]))
tzFormat='Z';else


return void(config._isValid=!1);


config._f=dateFormat+(timeFormat||'')+(tzFormat||''),
configFromStringAndFormat(config);
}else
config._isValid=!1;

}



function extractFromRFC2822Strings(yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){
var result=[untruncateYear(yearStr),defaultLocaleMonthsShort.indexOf(monthStr),parseInt(dayStr,10),parseInt(hourStr,10),parseInt(minuteStr,10)];





return secondStr&&result.push(parseInt(secondStr,10)),result;
}

function untruncateYear(yearStr){
var year=parseInt(yearStr,10);return(
49>=year?
2e3+year:
999>=year?
1900+year:

year);
}

function preprocessRFC2822(s){
return s.replace(/\([^)]*\)|[\n\t]/g,' ').replace(/(\s\s+)/g,' ').trim();
}

function checkWeekday(weekdayStr,parsedInput,config){
if(weekdayStr){
var weekdayProvided=defaultLocaleWeekdaysShort.indexOf(weekdayStr),
weekdayActual=new Date(parsedInput[0],parsedInput[1],parsedInput[2]).getDay();
if(weekdayProvided!==weekdayActual)


return getParsingFlags(config).weekdayMismatch=!0,config._isValid=!1,!1;

}
return!0;
}














function calculateOffset(obsOffset,militaryOffset,numOffset){
if(obsOffset)
return obsOffsets[obsOffset];
if(militaryOffset)
return 0;var

hm=parseInt(numOffset,10),
m=hm%100,
h=(hm-m)/100;
return 60*h+m;

}

function configFromRFC2822(config){
var match=rfc2822.exec(preprocessRFC2822(config._i));
if(match){
var parsedArray=extractFromRFC2822Strings(match[4],match[3],match[2],match[5],match[6],match[7]);
if(!checkWeekday(match[1],parsedArray,config))
return;


config._a=parsedArray,
config._tzm=calculateOffset(match[8],match[9],match[10]),

config._d=createUTCDate.apply(null,config._a),
config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm),

getParsingFlags(config).rfc2822=!0;
}else
config._isValid=!1;

}

function configFromString(config){
var matched=aspNetJsonRegex.exec(config._i);

if(null!==matched)

return void(config._d=new Date(+matched[1]));



if(configFromISO(config),!1===config._isValid)
delete config._isValid;else

return;



if(configFromRFC2822(config),!1===config._isValid)
delete config._isValid;else

return;


hooks.createFromInputFallback(config);
}









function configFromStringAndFormat(config){
if(config._f===hooks.ISO_8601)

return void configFromISO(config);

if(config._f===hooks.RFC_2822)

return void configFromRFC2822(config);

config._a=[],
getParsingFlags(config).empty=!0;

var
i,
parsedInput,
tokens,
token,
skipped,string=''+config._i,
stringLength=string.length,
totalParsedInputLength=0;



for(tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[],i=0;i<tokens.length;i++)
token=tokens[i],
parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0],

parsedInput&&(
skipped=string.substr(0,string.indexOf(parsedInput)),
0<skipped.length&&
getParsingFlags(config).unusedInput.push(skipped),

string=string.slice(string.indexOf(parsedInput)+parsedInput.length),
totalParsedInputLength+=parsedInput.length),


formatTokenFunctions[token]?(
parsedInput?
getParsingFlags(config).empty=!1:

getParsingFlags(config).unusedTokens.push(token),

addTimeToArrayFromToken(token,parsedInput,config)):
config._strict&&!parsedInput&&
getParsingFlags(config).unusedTokens.push(token);



getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength,
0<string.length&&
getParsingFlags(config).unusedInput.push(string),


12>=config._a[HOUR]&&!0===getParsingFlags(config).bigHour&&0<config._a[HOUR]&&(
getParsingFlags(config).bigHour=void 0),


getParsingFlags(config).parsedDateParts=config._a.slice(0),
getParsingFlags(config).meridiem=config._meridiem,

config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem),

configFromArray(config),
checkOverflow(config);
}

function meridiemFixWrap(locale,hour,meridiem){
var isPm;return(

null==meridiem?
hour:

null==locale.meridiemHour?

null==locale.isPM?









hour:(isPm=locale.isPM(meridiem),isPm&&12>hour&&(hour+=12),isPm||12!==hour||(hour=0),hour):locale.meridiemHour(hour,meridiem));

}

function configFromStringAndArray(config){
var tempConfig,bestMoment,scoreToBeat,i,currentScore;

if(0===config._f.length)


return getParsingFlags(config).invalidFormat=!0,void(config._d=new Date(NaN));


for(i=0;i<config._f.length;i++)(
currentScore=0,
tempConfig=copyConfig({},config),
null!=config._useUTC&&(
tempConfig._useUTC=config._useUTC),

tempConfig._f=config._f[i],
configFromStringAndFormat(tempConfig),!

!isValid(tempConfig))&&(



currentScore+=getParsingFlags(tempConfig).charsLeftOver,

currentScore+=10*getParsingFlags(tempConfig).unusedTokens.length,

getParsingFlags(tempConfig).score=currentScore,(

null==scoreToBeat||currentScore<scoreToBeat)&&(
scoreToBeat=currentScore,
bestMoment=tempConfig));



extend(config,bestMoment||tempConfig);
}

function configFromObject(config){
if(!config._d){



var i=normalizeObjectUnits(config._i);
config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){
return obj&&parseInt(obj,10);
}),

configFromArray(config)}
}

function createFromConfig(config){
var res=new Moment(checkOverflow(prepareConfig(config)));





return res._nextDay&&(res.add(1,'d'),res._nextDay=void 0),res;
}

function prepareConfig(config){
var input=config._i,
format=config._f;return(

config._locale=config._locale||getLocale(config._l),

null===input||void 0===format&&''===input)?
createInvalid({nullInput:!0}):(


'string'==typeof input&&(
config._i=input=config._locale.preparse(input)),


isMoment(input))?
new Moment(checkOverflow(input)):(
isDate(input)?
config._d=input:
isArray(format)?
configFromStringAndArray(config):
format?
configFromStringAndFormat(config):

configFromInput(config),


isValid(config)||(
config._d=null),


config);
}

function configFromInput(config){
var input=config._i;
isUndefined(input)?
config._d=new Date(hooks.now()):
isDate(input)?
config._d=new Date(input.valueOf()):
'string'==typeof input?
configFromString(config):
isArray(input)?(
config._a=map(input.slice(0),function(obj){
return parseInt(obj,10);
}),
configFromArray(config)):
isObject(input)?
configFromObject(config):
isNumber(input)?
config._d=new Date(input):

hooks.createFromInputFallback(config);

}

function createLocalOrUTC(input,format,locale,strict,isUTC){
var c={};

















return(!0===locale||!1===locale)&&(strict=locale,locale=void 0),(isObject(input)&&isObjectEmpty(input)||isArray(input)&&0===input.length)&&(input=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=isUTC,c._l=locale,c._i=input,c._f=format,c._strict=strict,createFromConfig(c);
}

function createLocal(input,format,locale,strict){
return createLocalOrUTC(input,format,locale,strict,!1);
}



















function pickBy(fn,moments){
var res,i;



if(1===moments.length&&isArray(moments[0])&&(moments=moments[0]),!moments.length)
return createLocal();


for(res=moments[0],i=1;i<moments.length;++i)(
!moments[i].isValid()||moments[i][fn](res))&&(
res=moments[i]);


return res;
}

function min(){
var args=[].slice.call(arguments,0);

return pickBy('isBefore',args);
}

function max(){
var args=[].slice.call(arguments,0);

return pickBy('isAfter',args);
}







function isDurationValid(m){
for(var key in m)
if(-1===indexOf.call(ordering,key)||null!=m[key]&&isNaN(m[key]))
return!1;




for(var unitHasDecimal=!1,i=0;i<ordering.length;++i)
if(m[ordering[i]]){
if(unitHasDecimal)
return!1;

parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])&&(
unitHasDecimal=!0);

}


return!0;
}

function isValid$1(){
return this._isValid;
}

function createInvalid$1(){
return createDuration(NaN);
}

function Duration(duration){
var normalizedInput=normalizeObjectUnits(duration),
years=normalizedInput.year||0,
quarters=normalizedInput.quarter||0,
months=normalizedInput.month||0,
weeks=normalizedInput.week||0,
days=normalizedInput.day||0,
hours=normalizedInput.hour||0,
minutes=normalizedInput.minute||0,
seconds=normalizedInput.second||0,
milliseconds=normalizedInput.millisecond||0;

this._isValid=isDurationValid(normalizedInput),

this._milliseconds=+milliseconds+1e3*seconds+6e4*minutes+60*(60*(1e3*hours)),
this._days=+days+7*weeks,

this._months=+months+3*quarters+12*years,

this._data={},

this._locale=getLocale(),

this._bubble();
}

function isDuration(obj){
return obj instanceof Duration;
}

function absRound(number){return(
0>number?
-1*_Mathround(-1*number):

_Mathround(number));

}

function offset(token,separator){
addFormatToken(token,0,0,function(){var
offset=this.utcOffset(),
sign='+';




return 0>offset&&(offset=-offset,sign='-'),sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2);
});
}













function offsetFromString(matcher,string){
var matches=(string||'').match(matcher);

if(null===matches)
return null;var


chunk=matches[matches.length-1]||[],
parts=(chunk+'').match(chunkOffset)||['-',0,0],
minutes=+(60*parts[1])+toInt(parts[2]);

return 0===minutes?0:'+'===parts[0]?minutes:-minutes;
}

function cloneWithOffset(input,model){
var res,diff;return(
model._isUTC?(
res=model.clone(),
diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf(),

res._d.setTime(res._d.valueOf()+diff),
hooks.updateOffset(res,!1),
res):

createLocal(input).local());

}

function getDateOffset(m){
return 15*-_Mathround(m._d.getTimezoneOffset()/15);
}



function getSetOffset(input,keepLocalTime,keepMinutes){
var
localAdjust,offset=this._offset||0;
if(!this.isValid())
return null==input?NaN:this;

if(null!=input){
if('string'!=typeof input)




16>_Mathabs(input)&&!keepMinutes&&(
input*=60);else if(input=offsetFromString(matchShortOffset,input),null===input)return this;


















return!this._isUTC&&keepLocalTime&&(localAdjust=getDateOffset(this)),this._offset=input,this._isUTC=!0,null!=localAdjust&&this.add(localAdjust,'m'),offset!==input&&(!keepLocalTime||this._changeInProgress?addSubtract(this,createDuration(input-offset,'m'),1,!1):!this._changeInProgress&&(this._changeInProgress=!0,hooks.updateOffset(this,!0),this._changeInProgress=null)),this;
}
return this._isUTC?offset:getDateOffset(this);

}

function getSetZone(input,keepLocalTime){return(
null==input?








-this.utcOffset():('string'!=typeof input&&(input=-input),this.utcOffset(input,keepLocalTime),this));

}

function setOffsetToUTC(keepLocalTime){
return this.utcOffset(0,keepLocalTime);
}

function setOffsetToLocal(keepLocalTime){








return this._isUTC&&(this.utcOffset(0,keepLocalTime),this._isUTC=!1,keepLocalTime&&this.subtract(getDateOffset(this),'m')),this;
}

function setOffsetToParsedOffset(){
if(null!=this._tzm)
this.utcOffset(this._tzm,!1,!0);else
if('string'==typeof this._i){
var tZone=offsetFromString(matchOffset,this._i);
null==tZone?


this.utcOffset(0,!0):this.utcOffset(tZone);

}
return this;
}

function hasAlignedHourOffset(input){return!!
this.isValid()&&(


input=input?createLocal(input).utcOffset():0,

0==(this.utcOffset()-input)%60);
}

function isDaylightSavingTime(){
return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
}

function isDaylightSavingTimeShifted(){
if(!isUndefined(this._isDSTShifted))
return this._isDSTShifted;


var c={};




if(copyConfig(c,this),c=prepareConfig(c),c._a){
var other=c._isUTC?createUTC(c._a):createLocal(c._a);
this._isDSTShifted=this.isValid()&&0<compareArrays(c._a,other.toArray());
}else
this._isDSTShifted=!1;


return this._isDSTShifted;
}

function isLocal(){
return!!this.isValid()&&!this._isUTC;
}

function isUtcOffset(){
return!!this.isValid()&&this._isUTC;
}

function isUtc(){
return!!this.isValid()&&this._isUTC&&0===this._offset;
}





function createDuration(input,key){
var

sign,
ret,
diffRes,duration=input,match=null;


















































return isDuration(input)?duration={ms:input._milliseconds,d:input._days,M:input._months}:isNumber(input)?(duration={},key?duration[key]=input:duration.milliseconds=input):(match=aspNetRegex.exec(input))?(sign='-'===match[1]?-1:1,duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(1e3*match[MILLISECOND]))*sign}):(match=isoRegex.exec(input))?(sign='-'===match[1]?-1:'+'===match[1]?1:1,duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)}):null==duration?duration={}:'object'==typeof duration&&('from'in duration||'to'in duration)&&(diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to)),duration={},duration.ms=diffRes.milliseconds,duration.M=diffRes.months),ret=new Duration(duration),isDuration(input)&&hasOwnProp(input,'_locale')&&(ret._locale=input._locale),ret;
}




function parseIso(inp,sign){
var res=inp&&parseFloat(inp.replace(',','.'));

return(isNaN(res)?0:res)*sign;
}

function positiveMomentsDifference(base,other){
var res={milliseconds:0,months:0};








return res.months=other.month()-base.month()+12*(other.year()-base.year()),base.clone().add(res.months,'M').isAfter(other)&&--res.months,res.milliseconds=+other-+base.clone().add(res.months,'M'),res;
}

function momentsDifference(base,other){
var res;return(
base.isValid()&&other.isValid()?(



other=cloneWithOffset(other,base),
base.isBefore(other)?
res=positiveMomentsDifference(base,other):(

res=positiveMomentsDifference(other,base),
res.milliseconds=-res.milliseconds,
res.months=-res.months),


res):{milliseconds:0,months:0});
}

function createAdder(direction,name){
return function(val,period){
var dur,tmp;









return null===period||isNaN(+period)||(deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'),tmp=val,val=period,period=tmp),val='string'==typeof val?+val:val,dur=createDuration(val,period),addSubtract(this,dur,direction),this;
};
}

function addSubtract(mom,duration,isAdding,updateOffset){
var milliseconds=duration._milliseconds,
days=absRound(duration._days),
months=absRound(duration._months);

mom.isValid()&&(



updateOffset=null==updateOffset||updateOffset,

months&&
setMonth(mom,get(mom,'Month')+months*isAdding),

days&&
set$1(mom,'Date',get(mom,'Date')+days*isAdding),

milliseconds&&
mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding),

updateOffset&&
hooks.updateOffset(mom,days||months));

}




function getCalendarFormat(myMoment,now){
var diff=myMoment.diff(now,'days',!0);
return-6>diff?'sameElse':-1>diff?'lastWeek':0>diff?'lastDay':1>diff?'sameDay':2>diff?'nextDay':7>diff?'nextWeek':'sameElse';
}

function calendar$1(time,formats){var
now=time||createLocal(),
sod=cloneWithOffset(now,this).startOf('day'),
format=hooks.calendarFormat(this,sod)||'sameElse',

output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);

return this.format(output||this.localeData().calendar(format,this,createLocal(now)));
}

function clone(){
return new Moment(this);
}

function isAfter(input,units){
var localInput=isMoment(input)?input:createLocal(input);return!!(
this.isValid()&&localInput.isValid())&&(


units=normalizeUnits(isUndefined(units)?'millisecond':units),
'millisecond'===units?
this.valueOf()>localInput.valueOf():

localInput.valueOf()<this.clone().startOf(units).valueOf());

}

function isBefore(input,units){
var localInput=isMoment(input)?input:createLocal(input);return!!(
this.isValid()&&localInput.isValid())&&(


units=normalizeUnits(isUndefined(units)?'millisecond':units),
'millisecond'===units?
this.valueOf()<localInput.valueOf():

this.clone().endOf(units).valueOf()<localInput.valueOf());

}

function isBetween(from,to,units,inclusivity){

return inclusivity=inclusivity||'()',('('===inclusivity[0]?this.isAfter(from,units):!this.isBefore(from,units))&&(')'===inclusivity[1]?this.isBefore(to,units):!this.isAfter(to,units));
}

function isSame(input,units){
var
inputMs,localInput=isMoment(input)?input:createLocal(input);return!!(
this.isValid()&&localInput.isValid())&&(


units=normalizeUnits(units||'millisecond'),
'millisecond'===units?
this.valueOf()===localInput.valueOf():(

inputMs=localInput.valueOf(),
this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf()));

}

function isSameOrAfter(input,units){
return this.isSame(input,units)||this.isAfter(input,units);
}

function isSameOrBefore(input,units){
return this.isSame(input,units)||this.isBefore(input,units);
}

function diff(input,units,asFloat){
var that,zoneDelta,output;return(

this.isValid()?(



that=cloneWithOffset(input,this),

!that.isValid())?
NaN:(


zoneDelta=6e4*(that.utcOffset()-this.utcOffset()),

units=normalizeUnits(units),(



output='year'===units?monthDiff(this,that)/12:
'month'===units?
monthDiff(this,that):
'quarter'===units?
monthDiff(this,that)/3:
'second'===units?
(this-that)/1e3:
'minute'===units?
(this-that)/6e4:
'hour'===units?
(this-that)/36e5:
'day'===units?
(this-that-zoneDelta)/864e5:
'week'===units?
(this-that-zoneDelta)/6048e5:

this-that,


asFloat?output:absFloor(output))):NaN);
}

function monthDiff(a,b){
var

anchor2,
adjust,wholeMonthDiff=12*(b.year()-a.year())+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months');











return 0>b-anchor?(anchor2=a.clone().add(wholeMonthDiff-1,'months'),adjust=(b-anchor)/(anchor-anchor2)):(anchor2=a.clone().add(wholeMonthDiff+1,'months'),adjust=(b-anchor)/(anchor2-anchor)),-(wholeMonthDiff+adjust)||0;
}




function toString(){
return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset){
if(!this.isValid())
return null;var

utc=!0!==keepOffset,
m=utc?this.clone().utc():this;return(
0>m.year()||9999<m.year()?
formatMoment(m,utc?'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]':'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'):

isFunction(Date.prototype.toISOString)?
utc?
this.toDate().toISOString():

new Date(this.valueOf()+1e3*(60*this.utcOffset())).toISOString().replace('Z',formatMoment(m,'Z')):


formatMoment(m,utc?'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]':'YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
}

function inspect(){
if(!this.isValid())
return'moment.invalid(/* '+this._i+' */)';var

func='moment',
zone='';
this.isLocal()||(
func=0===this.utcOffset()?'moment.utc':'moment.parseZone',
zone='Z');var

prefix='['+func+'("]',
year=0<=this.year()&&9999>=this.year()?'YYYY':'YYYYYY',
datetime='-MM-DD[T]HH:mm:ss.SSS',
suffix=zone+'[")]';

return this.format(prefix+year+datetime+suffix);
}

function format(inputString){
inputString||(
inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat);

var output=formatMoment(this,inputString);
return this.localeData().postformat(output);
}

function from(time,withoutSuffix){return(
this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())?
createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix):

this.localeData().invalidDate());

}

function fromNow(withoutSuffix){
return this.from(createLocal(),withoutSuffix);
}

function to(time,withoutSuffix){return(
this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())?
createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix):

this.localeData().invalidDate());

}

function toNow(withoutSuffix){
return this.to(createLocal(),withoutSuffix);
}

function locale(key){
var newLocaleData;return(

void 0===key?
this._locale._abbr:(

newLocaleData=getLocale(key),
null!=newLocaleData&&(
this._locale=newLocaleData),

this));

}









function localeData(){
return this._locale;
}

function startOf(units){


switch(units=normalizeUnits(units),units){
case'year':
this.month(0);

case'quarter':
case'month':
this.date(1);

case'week':
case'isoWeek':
case'day':
case'date':
this.hours(0);

case'hour':
this.minutes(0);

case'minute':
this.seconds(0);

case'second':
this.milliseconds(0);}













return'week'===units&&this.weekday(0),'isoWeek'===units&&this.isoWeekday(1),'quarter'===units&&this.month(3*_Mathfloor(this.month()/3)),this;
}

function endOf(units){return(
units=normalizeUnits(units),
void 0===units||'millisecond'===units)?
this:(


'date'===units&&(
units='day'),


this.startOf(units).add(1,'isoWeek'===units?'week':units).subtract(1,'ms'));
}

function valueOf(){
return this._d.valueOf()-6e4*(this._offset||0);
}

function unix(){
return _Mathfloor(this.valueOf()/1e3);
}

function toDate(){
return new Date(this.valueOf());
}

function toArray(){
var m=this;
return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];
}

function toObject(){
var m=this;
return{
years:m.year(),
months:m.month(),
date:m.date(),
hours:m.hours(),
minutes:m.minutes(),
seconds:m.seconds(),
milliseconds:m.milliseconds()};

}

function toJSON(){
return this.isValid()?this.toISOString():null;
}

function isValid$2(){
return isValid(this);
}

function parsingFlags(){
return extend({},getParsingFlags(this));
}

function invalidAt(){
return getParsingFlags(this).overflow;
}

function creationData(){
return{
input:this._i,
format:this._f,
locale:this._locale,
isUTC:this._isUTC,
strict:this._strict};

}









function addWeekYearFormatToken(token,getter){
addFormatToken(0,[token,token.length],0,getter);
}





























function getSetWeekYear(input){
return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);
}

function getSetISOWeekYear(input){
return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);
}

function getISOWeeksInYear(){
return weeksInYear(this.year(),1,4);
}

function getWeeksInYear(){
var weekInfo=this.localeData()._week;
return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);
}

function getSetWeekYearHelper(input,week,weekday,dow,doy){
var weeksTarget;return(
null==input?
weekOfYear(this,dow,doy).year:(

weeksTarget=weeksInYear(input,dow,doy),
week>weeksTarget&&(
week=weeksTarget),

setWeekAll.call(this,input,week,weekday,dow,doy)));

}

function setWeekAll(weekYear,week,weekday,dow,doy){
var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),
date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);




return this.year(date.getUTCFullYear()),this.month(date.getUTCMonth()),this.date(date.getUTCDate()),this;
}












function getSetQuarter(input){
return null==input?_Mathceil((this.month()+1)/3):this.month(3*(input-1)+this.month()%3);
}
































function getSetDayOfYear(input){
var dayOfYear=_Mathround((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;
return null==input?dayOfYear:this.add(input-dayOfYear,'d');
}


































































function parseMs(input,array){
array[MILLISECOND]=toInt(1e3*('0.'+input));
}











function getZoneAbbr(){
return this._isUTC?'UTC':'';
}

function getZoneName(){
return this._isUTC?'Coordinated Universal Time':'';
}















































































function createUnix(input){
return createLocal(1e3*input);
}

function createInZone(){
return createLocal.apply(null,arguments).parseZone();
}

function preParsePostFormat(string){
return string;
}


































function get$1(format,index,field,setter){var
locale=getLocale(),
utc=createUTC().set(setter,index);
return locale[field](utc,format);
}

function listMonthsImpl(format,index,field){







if(isNumber(format)&&(index=format,format=void 0),format=format||'',null!=index)
return get$1(format,index,field,'month');var


i,
out=[];
for(i=0;12>i;i++)
out[i]=get$1(format,i,field,'month');

return out;
}

function listWeekdaysImpl(localeSorted,format,index,field){
'boolean'==typeof localeSorted?(
isNumber(format)&&(
index=format,
format=void 0),


format=format||''):(

format=localeSorted,
index=format,
localeSorted=!1,

isNumber(format)&&(
index=format,
format=void 0),


format=format||'');


var locale=getLocale(),
shift=localeSorted?locale._week.dow:0;

if(null!=index)
return get$1(format,(index+shift)%7,field,'day');var


i,
out=[];
for(i=0;7>i;i++)
out[i]=get$1(format,(i+shift)%7,field,'day');

return out;
}

function listMonths(format,index){
return listMonthsImpl(format,index,'months');
}

function listMonthsShort(format,index){
return listMonthsImpl(format,index,'monthsShort');
}

function listWeekdays(localeSorted,format,index){
return listWeekdaysImpl(localeSorted,format,index,'weekdays');
}

function listWeekdaysShort(localeSorted,format,index){
return listWeekdaysImpl(localeSorted,format,index,'weekdaysShort');
}

function listWeekdaysMin(localeSorted,format,index){
return listWeekdaysImpl(localeSorted,format,index,'weekdaysMin');
}















function abs(){
var data=this._data;












return this._milliseconds=mathAbs(this._milliseconds),this._days=mathAbs(this._days),this._months=mathAbs(this._months),data.milliseconds=mathAbs(data.milliseconds),data.seconds=mathAbs(data.seconds),data.minutes=mathAbs(data.minutes),data.hours=mathAbs(data.hours),data.months=mathAbs(data.months),data.years=mathAbs(data.years),this;
}

function addSubtract$1(duration,input,value,direction){
var other=createDuration(input,value);





return duration._milliseconds+=direction*other._milliseconds,duration._days+=direction*other._days,duration._months+=direction*other._months,duration._bubble();
}

function add$1(input,value){
return addSubtract$1(this,input,value,1);
}

function subtract$1(input,value){
return addSubtract$1(this,input,value,-1);
}

function absCeil(number){return(
0>number?
_Mathfloor(number):

_Mathceil(number));

}

function bubble(){var




seconds,minutes,hours,years,monthsFromDays,milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data;































return 0<=milliseconds&&0<=days&&0<=months||0>=milliseconds&&0>=days&&0>=months||(milliseconds+=864e5*absCeil(monthsToDays(months)+days),days=0,months=0),data.milliseconds=milliseconds%1e3,seconds=absFloor(milliseconds/1e3),data.seconds=seconds%60,minutes=absFloor(seconds/60),data.minutes=minutes%60,hours=absFloor(minutes/60),data.hours=hours%24,days+=absFloor(hours/24),monthsFromDays=absFloor(daysToMonths(days)),months+=monthsFromDays,days-=absCeil(monthsToDays(monthsFromDays)),years=absFloor(months/12),months%=12,data.days=days,data.months=months,data.years=years,this;
}

function daysToMonths(days){
return 4800*days/146097;
}

function monthsToDays(months){
return 146097*months/4800;
}

function as(units){
if(!this.isValid())
return NaN;var

days,
months,
milliseconds=this._milliseconds;



if(units=normalizeUnits(units),'month'===units||'year'===units)


return days=this._days+milliseconds/864e5,months=this._months+daysToMonths(days),'month'===units?months:months/12;


switch(days=this._days+_Mathround(monthsToDays(this._months)),units){
case'week':
return days/7+milliseconds/6048e5;
case'day':
return days+milliseconds/864e5;
case'hour':
return 24*days+milliseconds/36e5;
case'minute':
return 1440*days+milliseconds/6e4;
case'second':
return 86400*days+milliseconds/1e3;

case'millisecond':
return _Mathfloor(864e5*days)+milliseconds;
default:
throw new Error('Unknown unit '+units);}


}

function valueOf$1(){return(
this.isValid()?


this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*toInt(this._months/12):NaN);
}

function makeAs(alias){
return function(){
return this.as(alias);
};
}










function clone$1(){
return createDuration(this);
}

function get$2(units){

return units=normalizeUnits(units),this.isValid()?this[units+'s']():NaN;
}

function makeGetter(name){
return function(){
return this.isValid()?this._data[name]:NaN;
};
}









function weeks(){
return absFloor(this.days()/7);
}










function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){
return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);
}

function relativeTime$1(posNegDuration,withoutSuffix,locale){var
duration=createDuration(posNegDuration).abs(),
seconds=round(duration.as('s')),
minutes=round(duration.as('m')),
hours=round(duration.as('h')),
days=round(duration.as('d')),
months=round(duration.as('M')),
years=round(duration.as('y')),

a=seconds<=thresholds.ss&&['s',seconds]||seconds<thresholds.s&&['ss',seconds]||1>=minutes&&['m']||minutes<thresholds.m&&['mm',minutes]||1>=hours&&['h']||hours<thresholds.h&&['hh',hours]||1>=days&&['d']||days<thresholds.d&&['dd',days]||1>=months&&['M']||months<thresholds.M&&['MM',months]||1>=years&&['y']||['yy',years];




return a[2]=withoutSuffix,a[3]=0<+posNegDuration,a[4]=locale,substituteTimeAgo.apply(null,a);
}

function getSetRelativeTimeRounding(roundingFunction){return(
void 0===roundingFunction?
round:

'function'==typeof roundingFunction&&(
round=roundingFunction,!0));



}

function getSetRelativeTimeThreshold(threshold,limit){return(
void 0!==thresholds[threshold]&&(


void 0===limit?
thresholds[threshold]:(

thresholds[threshold]=limit,
's'===threshold&&(
thresholds.ss=limit-1),!0)));


}

function humanize(withSuffix){
if(!this.isValid())
return this.localeData().invalidDate();var


locale=this.localeData(),
output=relativeTime$1(this,!withSuffix,locale);





return withSuffix&&(output=locale.pastFuture(+this,output)),locale.postformat(output);
}



function sign(x){
return(0<x)-(0>x)||+x;
}

function toISOString$1(){
if(!this.isValid())
return this.localeData().invalidDate();var





minutes,hours,years,seconds=abs$1(this._milliseconds)/1e3,days=abs$1(this._days),months=abs$1(this._months);

minutes=absFloor(seconds/60),
hours=absFloor(minutes/60),
seconds%=60,
minutes%=60,

years=absFloor(months/12),
months%=12;var

Y=years,
M=months,
D=days,
h=hours,
m=minutes,
s=seconds?seconds.toFixed(3).replace(/\.?0+$/,''):'',
total=this.asSeconds();

if(!total)
return'P0D';var


totalSign=0>total?'-':'',
ymSign=sign(this._months)===sign(total)?'':'-',
daysSign=sign(this._days)===sign(total)?'':'-',
hmsSign=sign(this._milliseconds)===sign(total)?'':'-';

return totalSign+'P'+(Y?ymSign+Y+'Y':'')+(M?ymSign+M+'M':'')+(D?daysSign+D+'D':'')+(h||m||s?'T':'')+(h?hmsSign+h+'H':'')+(m?hmsSign+m+'M':'')+(s?hmsSign+s+'S':'');
}var hookCallback,some,_Mathround=Math.round,_Mathabs=Math.abs,_Mathmin=Math.min,_Mathfloor=Math.floor,_Mathceil=Math.ceil;some=Array.prototype.some?Array.prototype.some:function(fun){for(var t=Object(this),len=t.length>>>0,i=0;i<len;i++)if(i in t&&fun.call(this,t[i],i,t))return!0;return!1};var momentProperties=hooks.momentProperties=[],updateInProgress=!1,deprecations={};hooks.suppressDeprecationWarnings=!1,hooks.deprecationHandler=null;var keys;keys=Object.keys?Object.keys:function(obj){var i,res=[];for(i in obj)hasOwnProp(obj,i)&&res.push(i);return res};var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'},defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'},defaultInvalidDate='Invalid date',defaultOrdinal='%d',defaultDayOfMonthOrdinalParse=/\d{1,2}/,defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',ss:'%d seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'},aliases={},priorities={},formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,formatFunctions={},formatTokenFunctions={},match1=/\d/,match2=/\d\d/,match3=/\d{3}/,match4=/\d{4}/,match6=/[+-]?\d{6}/,match1to2=/\d\d?/,match3to4=/\d\d\d\d?/,match5to6=/\d\d\d\d\d\d?/,match1to3=/\d{1,3}/,match1to4=/\d{1,4}/,match1to6=/[+-]?\d{1,6}/,matchUnsigned=/\d+/,matchSigned=/[+-]?\d+/,matchOffset=/Z|[+-]\d\d:?\d\d/gi,matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi,matchTimestamp=/[+-]?\d+(\.\d{1,3})?/,matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,regexes={},tokens={},YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6,WEEK=7,WEEKDAY=8;addFormatToken('Y',0,0,function(){var y=this.year();return 9999>=y?''+y:'+'+y}),addFormatToken(0,['YY',2],0,function(){return this.year()%100}),addFormatToken(0,['YYYY',4],0,'year'),addFormatToken(0,['YYYYY',5],0,'year'),addFormatToken(0,['YYYYYY',6,!0],0,'year'),addUnitAlias('year','y'),addUnitPriority('year',1),addRegexToken('Y',matchSigned),addRegexToken('YY',match1to2,match2),addRegexToken('YYYY',match1to4,match4),addRegexToken('YYYYY',match1to6,match6),addRegexToken('YYYYYY',match1to6,match6),addParseToken(['YYYYY','YYYYYY'],YEAR),addParseToken('YYYY',function(input,array){array[YEAR]=2===input.length?hooks.parseTwoDigitYear(input):toInt(input)}),addParseToken('YY',function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input)}),addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10)}),hooks.parseTwoDigitYear=function(input){return toInt(input)+(68<toInt(input)?1900:2e3)};var indexOf,getSetYear=makeGetSet('FullYear',!0);indexOf=Array.prototype.indexOf?Array.prototype.indexOf:function(o){var i;for(i=0;i<this.length;++i)if(this[i]===o)return i;return-1},addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1}),addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format)}),addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format)}),addUnitAlias('month','M'),addUnitPriority('month',8),addRegexToken('M',match1to2),addRegexToken('MM',match1to2,match2),addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict)}),addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict)}),addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1}),addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);null==month?getParsingFlags(config).invalidMonth=input:array[MONTH]=month});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,defaultLocaleMonths=['January','February','March','April','May','June','July','August','September','October','November','December'],defaultLocaleMonthsShort=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],defaultMonthsShortRegex=matchWord,defaultMonthsRegex=matchWord;addFormatToken('w',['ww',2],'wo','week'),addFormatToken('W',['WW',2],'Wo','isoWeek'),addUnitAlias('week','w'),addUnitAlias('isoWeek','W'),addUnitPriority('week',5),addUnitPriority('isoWeek',5),addRegexToken('w',match1to2),addRegexToken('ww',match1to2,match2),addRegexToken('W',match1to2),addRegexToken('WW',match1to2,match2),addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input)});var defaultLocaleWeek={dow:0,doy:6};addFormatToken('d',0,'do','day'),addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format)}),addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format)}),addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format)}),addFormatToken('e',0,0,'weekday'),addFormatToken('E',0,0,'isoWeekday'),addUnitAlias('day','d'),addUnitAlias('weekday','e'),addUnitAlias('isoWeekday','E'),addUnitPriority('day',11),addUnitPriority('weekday',11),addUnitPriority('isoWeekday',11),addRegexToken('d',match1to2),addRegexToken('e',match1to2),addRegexToken('E',match1to2),addRegexToken('dd',function(isStrict,locale){return locale.weekdaysMinRegex(isStrict)}),addRegexToken('ddd',function(isStrict,locale){return locale.weekdaysShortRegex(isStrict)}),addRegexToken('dddd',function(isStrict,locale){return locale.weekdaysRegex(isStrict)}),addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);null==weekday?getParsingFlags(config).invalidWeekday=input:week.d=weekday}),addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input)});var defaultLocaleWeekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],defaultLocaleWeekdaysShort=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],defaultLocaleWeekdaysMin=['Su','Mo','Tu','We','Th','Fr','Sa'],defaultWeekdaysRegex=matchWord,defaultWeekdaysShortRegex=matchWord,defaultWeekdaysMinRegex=matchWord;addFormatToken('H',['HH',2],0,'hour'),addFormatToken('h',['hh',2],0,hFormat),addFormatToken('k',['kk',2],0,kFormat),addFormatToken('hmm',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)}),addFormatToken('hmmss',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)}),addFormatToken('Hmm',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)}),addFormatToken('Hmmss',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)}),meridiem('a',!0),meridiem('A',!1),addUnitAlias('hour','h'),addUnitPriority('hour',13),addRegexToken('a',matchMeridiem),addRegexToken('A',matchMeridiem),addRegexToken('H',match1to2),addRegexToken('h',match1to2),addRegexToken('k',match1to2),addRegexToken('HH',match1to2,match2),addRegexToken('hh',match1to2,match2),addRegexToken('kk',match1to2,match2),addRegexToken('hmm',match3to4),addRegexToken('hmmss',match5to6),addRegexToken('Hmm',match3to4),addRegexToken('Hmmss',match5to6),addParseToken(['H','HH'],HOUR),addParseToken(['k','kk'],function(input,array,config){var kInput=toInt(input);array[HOUR]=24===kInput?0:kInput}),addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input),config._meridiem=input}),addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input),getParsingFlags(config).bigHour=!0}),addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos)),array[MINUTE]=toInt(input.substr(pos)),getParsingFlags(config).bigHour=!0}),addParseToken('hmmss',function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1)),array[MINUTE]=toInt(input.substr(pos1,2)),array[SECOND]=toInt(input.substr(pos2)),getParsingFlags(config).bigHour=!0}),addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos)),array[MINUTE]=toInt(input.substr(pos))}),addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1)),array[MINUTE]=toInt(input.substr(pos1,2)),array[SECOND]=toInt(input.substr(pos2))});var globalLocale,defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i,getSetHour=makeGetSet('Hours',!0),baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse},locales={},localeFamilies={},extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tzRegex=/Z|[+-]\d\d(?::?\d\d)?/,isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,!1],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,!1],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,!1],['YYYYDDD',/\d{7}/]],isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]],aspNetJsonRegex=/^\/?Date\((\-?\d+)/i,rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,obsOffsets={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};hooks.createFromInputFallback=deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''))}),hooks.ISO_8601=function(){},hooks.RFC_2822=function(){};var prototypeMin=deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);return this.isValid()&&other.isValid()?other<this?this:other:createInvalid()}),prototypeMax=deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);return this.isValid()&&other.isValid()?other>this?this:other:createInvalid()}),now=function(){return Date.now?Date.now():+new Date},ordering=['year','quarter','month','week','day','hour','minute','second','millisecond'];offset('Z',':'),offset('ZZ',''),addRegexToken('Z',matchShortOffset),addRegexToken('ZZ',matchShortOffset),addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=!0,config._tzm=offsetFromString(matchShortOffset,input)});var chunkOffset=/([\+\-]|\d\d)/gi;hooks.updateOffset=function(){};var aspNetRegex=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,isoRegex=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;createDuration.fn=Duration.prototype,createDuration.invalid=createInvalid$1;var add=createAdder(1,'add'),subtract=createAdder(-1,'subtract');hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ',hooks.defaultFormatUtc='YYYY-MM-DDTHH:mm:ss[Z]';var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){return void 0===key?this.localeData():this.locale(key)});addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100}),addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100}),addWeekYearFormatToken('gggg','weekYear'),addWeekYearFormatToken('ggggg','weekYear'),addWeekYearFormatToken('GGGG','isoWeekYear'),addWeekYearFormatToken('GGGGG','isoWeekYear'),addUnitAlias('weekYear','gg'),addUnitAlias('isoWeekYear','GG'),addUnitPriority('weekYear',1),addUnitPriority('isoWeekYear',1),addRegexToken('G',matchSigned),addRegexToken('g',matchSigned),addRegexToken('GG',match1to2,match2),addRegexToken('gg',match1to2,match2),addRegexToken('GGGG',match1to4,match4),addRegexToken('gggg',match1to4,match4),addRegexToken('GGGGG',match1to6,match6),addRegexToken('ggggg',match1to6,match6),addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input)}),addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input)}),addFormatToken('Q',0,'Qo','quarter'),addUnitAlias('quarter','Q'),addUnitPriority('quarter',7),addRegexToken('Q',match1),addParseToken('Q',function(input,array){array[MONTH]=3*(toInt(input)-1)}),addFormatToken('D',['DD',2],'Do','date'),addUnitAlias('date','D'),addUnitPriority('date',9),addRegexToken('D',match1to2),addRegexToken('DD',match1to2,match2),addRegexToken('Do',function(isStrict,locale){return isStrict?locale._dayOfMonthOrdinalParse||locale._ordinalParse:locale._dayOfMonthOrdinalParseLenient}),addParseToken(['D','DD'],DATE),addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0])});var getSetDayOfMonth=makeGetSet('Date',!0);addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear'),addUnitAlias('dayOfYear','DDD'),addUnitPriority('dayOfYear',4),addRegexToken('DDD',match1to3),addRegexToken('DDDD',match3),addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input)}),addFormatToken('m',['mm',2],0,'minute'),addUnitAlias('minute','m'),addUnitPriority('minute',14),addRegexToken('m',match1to2),addRegexToken('mm',match1to2,match2),addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',!1);addFormatToken('s',['ss',2],0,'second'),addUnitAlias('second','s'),addUnitPriority('second',15),addRegexToken('s',match1to2),addRegexToken('ss',match1to2,match2),addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',!1);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100)}),addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10)}),addFormatToken(0,['SSS',3],0,'millisecond'),addFormatToken(0,['SSSS',4],0,function(){return 10*this.millisecond()}),addFormatToken(0,['SSSSS',5],0,function(){return 100*this.millisecond()}),addFormatToken(0,['SSSSSS',6],0,function(){return 1e3*this.millisecond()}),addFormatToken(0,['SSSSSSS',7],0,function(){return 1e4*this.millisecond()}),addFormatToken(0,['SSSSSSSS',8],0,function(){return 1e5*this.millisecond()}),addFormatToken(0,['SSSSSSSSS',9],0,function(){return 1e6*this.millisecond()}),addUnitAlias('millisecond','ms'),addUnitPriority('millisecond',16),addRegexToken('S',match1to3,match1),addRegexToken('SS',match1to3,match2),addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';9>=token.length;token+='S')addRegexToken(token,matchUnsigned);for(token='S';9>=token.length;token+='S')addParseToken(token,parseMs);var getSetMillisecond=makeGetSet('Milliseconds',!1);addFormatToken('z',0,0,'zoneAbbr'),addFormatToken('zz',0,0,'zoneName');var proto=Moment.prototype;proto.add=add,proto.calendar=calendar$1,proto.clone=clone,proto.diff=diff,proto.endOf=endOf,proto.format=format,proto.from=from,proto.fromNow=fromNow,proto.to=to,proto.toNow=toNow,proto.get=stringGet,proto.invalidAt=invalidAt,proto.isAfter=isAfter,proto.isBefore=isBefore,proto.isBetween=isBetween,proto.isSame=isSame,proto.isSameOrAfter=isSameOrAfter,proto.isSameOrBefore=isSameOrBefore,proto.isValid=isValid$2,proto.lang=lang,proto.locale=locale,proto.localeData=localeData,proto.max=prototypeMax,proto.min=prototypeMin,proto.parsingFlags=parsingFlags,proto.set=stringSet,proto.startOf=startOf,proto.subtract=subtract,proto.toArray=toArray,proto.toObject=toObject,proto.toDate=toDate,proto.toISOString=toISOString,proto.inspect=inspect,proto.toJSON=toJSON,proto.toString=toString,proto.unix=unix,proto.valueOf=valueOf,proto.creationData=creationData,proto.year=getSetYear,proto.isLeapYear=getIsLeapYear,proto.weekYear=getSetWeekYear,proto.isoWeekYear=getSetISOWeekYear,proto.quarter=proto.quarters=getSetQuarter,proto.month=getSetMonth,proto.daysInMonth=getDaysInMonth,proto.week=proto.weeks=getSetWeek,proto.isoWeek=proto.isoWeeks=getSetISOWeek,proto.weeksInYear=getWeeksInYear,proto.isoWeeksInYear=getISOWeeksInYear,proto.date=getSetDayOfMonth,proto.day=proto.days=getSetDayOfWeek,proto.weekday=getSetLocaleDayOfWeek,proto.isoWeekday=getSetISODayOfWeek,proto.dayOfYear=getSetDayOfYear,proto.hour=proto.hours=getSetHour,proto.minute=proto.minutes=getSetMinute,proto.second=proto.seconds=getSetSecond,proto.millisecond=proto.milliseconds=getSetMillisecond,proto.utcOffset=getSetOffset,proto.utc=setOffsetToUTC,proto.local=setOffsetToLocal,proto.parseZone=setOffsetToParsedOffset,proto.hasAlignedHourOffset=hasAlignedHourOffset,proto.isDST=isDaylightSavingTime,proto.isLocal=isLocal,proto.isUtcOffset=isUtcOffset,proto.isUtc=isUtc,proto.isUTC=isUtc,proto.zoneAbbr=getZoneAbbr,proto.zoneName=getZoneName,proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth),proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth),proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear),proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',getSetZone),proto.isDSTShifted=deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',isDaylightSavingTimeShifted);var proto$1=Locale.prototype;proto$1.calendar=calendar,proto$1.longDateFormat=longDateFormat,proto$1.invalidDate=invalidDate,proto$1.ordinal=ordinal,proto$1.preparse=preParsePostFormat,proto$1.postformat=preParsePostFormat,proto$1.relativeTime=relativeTime,proto$1.pastFuture=pastFuture,proto$1.set=set,proto$1.months=localeMonths,proto$1.monthsShort=localeMonthsShort,proto$1.monthsParse=localeMonthsParse,proto$1.monthsRegex=monthsRegex,proto$1.monthsShortRegex=monthsShortRegex,proto$1.week=localeWeek,proto$1.firstDayOfYear=localeFirstDayOfYear,proto$1.firstDayOfWeek=localeFirstDayOfWeek,proto$1.weekdays=localeWeekdays,proto$1.weekdaysMin=localeWeekdaysMin,proto$1.weekdaysShort=localeWeekdaysShort,proto$1.weekdaysParse=localeWeekdaysParse,proto$1.weekdaysRegex=weekdaysRegex,proto$1.weekdaysShortRegex=weekdaysShortRegex,proto$1.weekdaysMinRegex=weekdaysMinRegex,proto$1.isPM=localeIsPM,proto$1.meridiem=localeMeridiem,getSetGlobalLocale('en',{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=1===toInt(number%100/10)?'th':1==b?'st':2==b?'nd':3==b?'rd':'th';return number+output}}),hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',getSetGlobalLocale),hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',getLocale);var mathAbs=_Mathabs,asMilliseconds=makeAs('ms'),asSeconds=makeAs('s'),asMinutes=makeAs('m'),asHours=makeAs('h'),asDays=makeAs('d'),asWeeks=makeAs('w'),asMonths=makeAs('M'),asYears=makeAs('y'),milliseconds=makeGetter('milliseconds'),seconds=makeGetter('seconds'),minutes=makeGetter('minutes'),hours=makeGetter('hours'),days=makeGetter('days'),months=makeGetter('months'),years=makeGetter('years'),round=_Mathround,thresholds={ss:44,s:45,m:45,h:22,d:26,M:11},abs$1=_Mathabs,

proto$2=Duration.prototype;



























































































return proto$2.isValid=isValid$1,proto$2.abs=abs,proto$2.add=add$1,proto$2.subtract=subtract$1,proto$2.as=as,proto$2.asMilliseconds=asMilliseconds,proto$2.asSeconds=asSeconds,proto$2.asMinutes=asMinutes,proto$2.asHours=asHours,proto$2.asDays=asDays,proto$2.asWeeks=asWeeks,proto$2.asMonths=asMonths,proto$2.asYears=asYears,proto$2.valueOf=valueOf$1,proto$2._bubble=bubble,proto$2.clone=clone$1,proto$2.get=get$2,proto$2.milliseconds=milliseconds,proto$2.seconds=seconds,proto$2.minutes=minutes,proto$2.hours=hours,proto$2.days=days,proto$2.weeks=weeks,proto$2.months=months,proto$2.years=years,proto$2.humanize=humanize,proto$2.toISOString=toISOString$1,proto$2.toString=toISOString$1,proto$2.toJSON=toISOString$1,proto$2.locale=locale,proto$2.localeData=localeData,proto$2.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',toISOString$1),proto$2.lang=lang,addFormatToken('X',0,0,'unix'),addFormatToken('x',0,0,'valueOf'),addRegexToken('x',matchSigned),addRegexToken('X',matchTimestamp),addParseToken('X',function(input,array,config){config._d=new Date(1e3*parseFloat(input,10))}),addParseToken('x',function(input,array,config){config._d=new Date(toInt(input))}),hooks.version='2.21.0',setHookCallback(createLocal),hooks.fn=proto,hooks.min=min,hooks.max=max,hooks.now=now,hooks.utc=createUTC,hooks.unix=createUnix,hooks.months=listMonths,hooks.isDate=isDate,hooks.locale=getSetGlobalLocale,hooks.invalid=createInvalid,hooks.duration=createDuration,hooks.isMoment=isMoment,hooks.weekdays=listWeekdays,hooks.parseZone=createInZone,hooks.localeData=getLocale,hooks.isDuration=isDuration,hooks.monthsShort=listMonthsShort,hooks.weekdaysMin=listWeekdaysMin,hooks.defineLocale=defineLocale,hooks.updateLocale=updateLocale,hooks.locales=listLocales,hooks.weekdaysShort=listWeekdaysShort,hooks.normalizeUnits=normalizeUnits,hooks.relativeTimeRounding=getSetRelativeTimeRounding,hooks.relativeTimeThreshold=getSetRelativeTimeThreshold,hooks.calendarFormat=getCalendarFormat,hooks.prototype=proto,hooks.HTML5_FMT={DATETIME_LOCAL:'YYYY-MM-DDTHH:mm',DATETIME_LOCAL_SECONDS:'YYYY-MM-DDTHH:mm:ss',DATETIME_LOCAL_MS:'YYYY-MM-DDTHH:mm:ss.SSS',DATE:'YYYY-MM-DD',TIME:'HH:mm',TIME_SECONDS:'HH:mm:ss',TIME_MS:'HH:mm:ss.SSS',WEEK:'YYYY-[W]WW',MONTH:'YYYY-MM'},hooks;
});