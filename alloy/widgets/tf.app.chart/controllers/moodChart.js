var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.chart/'+s:
s.substring(0,index)+'/tf.app.chart/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){












































































function getDayString(dow){
var weekday=Array(7);







return weekday[0]='S',weekday[1]='M',weekday[2]='T',weekday[3]='W',weekday[4]='T',weekday[5]='F',weekday[6]='S',weekday[dow];
}var Widget=new(require('/alloy/widget'))('tf.app.chart');if(this.__widgetId='tf.app.chart',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='moodChart',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.moodChart=Ti.UI.createView({layout:'vertical',height:Ti.UI.SIZE,id:'moodChart'}),$.__views.moodChart&&$.addTopLevelView($.__views.moodChart),_postLayout?$.addListener($.__views.moodChart,'postlayout',_postLayout):__defers['$.__views.moodChart!postlayout!_postLayout']=!0,$.__views.labels=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'labels',layout:'horizontal'}),$.__views.moodChart.add($.__views.labels),$.__views.icons=Ti.UI.createView({layout:'vertical',height:Ti.UI.SIZE,id:'icons'}),$.__views.moodChart.add($.__views.icons),exports.destroy=function(){},_.extend($,$.__views);var args=arguments[0],WTools=require('WidgetTools'),lifecycle=require('bootstrap/lifecycle');if(!0){var winId=args.winId||lifecycle.getCurrentWindowId();LOGGER.debug('CREATING BAR CHART['+args.id+'] on Window:'+winId)}var chartArgs=args.chart||{};WTools.setTiProps(args,$.moodChart);var chartWidth,onChartWidth,_postLayout=function(){chartWidth=$.moodChart.rect.width,onChartWidth&&onChartWidth()},startOfDay=function(date){return new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0)},
createCalendar=function(startDate,days){


for(var startOfDay,cal={},i=0;i<days;i++)
startOfDay=new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+i,0,0,0,0),
cal[startOfDay.getTime()]={value:-1};

return cal;
},

_setMoods=function(startWeek,totalWeeks,startDate,moodData){
chartWidth?
_update(startWeek,totalWeeks,startDate,moodData):

onChartWidth=function(){
_update(startWeek,totalWeeks,startDate,moodData);
};

},

_update=function(startWeek,totalWeeks,startDate,moodData){var

days=7*totalWeeks,
minDate=startOfDay(startDate),
data=createCalendar(startDate,days),
moods=[];
if(moodData&&0<moodData.length){
var sorted=_.sortBy(moodData,function(m){
return m.timestamp;
});
_.forEach(sorted,function(m){
var date=new Date(m.timestamp);
date.getTime()>=minDate.getTime()&&(
data[new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0).getTime()].value=m.value1);

});
}
var days=[];
for(var property in data)
data.hasOwnProperty(property)&&
days.push({date:new Date(parseInt(property,10)),data:data[property]});


days=_.sortBy(days,function(d){
return d.date.getTime();
});var



mood,border,label,ylabel,spacer,first=!0,firstRow=!0,
today=startOfDay(new Date),

moodBoxSize=(chartWidth-32-25)/7,

labelProps={
width:moodBoxSize,
height:Ti.UI.SIZE,
textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
font:{
fontFamily:Alloy.CFG.fontMedium,
fontSize:13},

color:Alloy.Globals.Style.Color.BattleshipGrey},

yLabelProps={
width:25,
height:Ti.UI.SIZE,
right:2,
textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,

font:{
fontFamily:Alloy.CFG.fontMedium,
fontSize:13},

color:Alloy.Globals.Style.Color.BattleshipGrey};

$.labels.removeAllChildren(),
$.icons.removeAllChildren();

for(var
row,i=0;i<totalWeeks;i++){row=Ti.UI.createView({width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal'}),
firstRow?


$.labels.add(Ti.UI.createLabel(yLabelProps)):row.top=-1,

ylabel=Ti.UI.createLabel(yLabelProps),
ylabel.text='w'+(i+startWeek),
row.add(ylabel);
for(var j=0;7>j;j++)
firstRow&&(
label=Ti.UI.createLabel(labelProps),
!first&&(
label.left=-1),

label.text=getDayString(days[7*i+j].date.getDay()),
$.labels.add(label)),

selected=days[7*i+j].date.getTime()===today.getTime(),
future=days[7*i+j].date.getTime()>today.getTime(),
mood=Alloy.createWidget('tf.app.mood','moodBox',{
mood:future?-2:days[7*i+j].data.value,
selected:selected,
width:moodBoxSize,
height:moodBoxSize}),

first?


first=!1:mood.getView().left=-1,

row.add(mood.getView());


firstRow=!1,
first=!0,
$.icons.add(row);
}

};

exports.setMoods=_setMoods,





__defers['$.__views.moodChart!postlayout!_postLayout']&&$.addListener($.__views.moodChart,'postlayout',_postLayout),



_.extend($,exports);
}

module.exports=Controller;