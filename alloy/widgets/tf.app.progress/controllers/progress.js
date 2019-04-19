var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.progress/'+s:
s.substring(0,index)+'/tf.app.progress/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){








































































































































function createPanel(w,h,color){
var opts={
width:w,
height:h,
backgroundColor:color?color:'white'};

return Ti.UI.createView(opts);
}

function createSeperator(h){
var opts={
height:h};

return Ti.UI.createView(opts);
}

function createLabel(text,size,fontFamily){

return Ti.UI.createLabel({
text:text,
font:{
fontFamily:fontFamily?fontFamily:Alloy.CFG.fontNormal,
fontSize:size+'dp'},

color:Alloy.Globals.Style.Color.BattleshipGrey});

}

function createActivityBreakdownPanel(data){var
panelWidth=.9*width,
radius=panelWidth/4,
panel=createPanel(panelWidth+'dp',Ti.UI.SIZE),

numsections=2,
fontsize=radius/3,
iconColor=Alloy.Globals.Style.Color.BattleshipGrey,



steps=pc.createPieChart({
centerX:panelWidth/2,
centerY:radius+10,
radius:radius,
borderWidth:radius-radius*(data.performanceSteps/100),
fillColor:Alloy.Globals.Style.Color.DarkSkyBlue,
borderColor:'transparent',
progress:100/numsections,
progressColor:'#F4F4F4'});

panel.add(steps);

var sicon=Ti.UI.createLabel($.createStyle({
classes:['icon-steps'],
font:{
fontSize:fontsize+'dp'},

color:iconColor}));

sicon.left=panelWidth/2+radius/2-fontsize/2+'dp',
sicon.top=radius+10-fontsize/2+'dp',
panel.add(sicon);
var spl=createLabel(roundedToFixed(data.performanceSteps,1)+'%',.25*radius,Alloy.CFG.fontLight);

spl.applyProperties({
right:0,
width:radius+'dp',
height:2*radius+'dp',
top:'10dp',
textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER}),

panel.add(spl);


var time=pc.createPieChart({
centerX:panelWidth/2,
centerY:radius+10,
radius:radius,
borderWidth:radius-radius*(data.performanceTime/100),
fillColor:Alloy.Globals.Style.Color.RedPink,
borderColor:'transparent',
progress:100/numsections,
progressColor:'#F4F4F4'});


time.transform=Ti.UI.create2DMatrix().rotate(360/numsections),
panel.add(time);

var ticon=Ti.UI.createLabel($.createStyle({
classes:['icon-chrono'],
font:{
fontSize:fontsize+'dp'},

color:iconColor}));


ticon.left=panelWidth/2-radius/2-fontsize/2+'dp',
ticon.top=radius+10-fontsize/2+'dp',
panel.add(ticon);
var tpl=createLabel(roundedToFixed(data.performanceTime,1)+'%',.25*radius,Alloy.CFG.fontLight);

tpl.applyProperties({
left:0,
width:radius+'dp',
height:2*radius+'dp',
top:'10dp',
textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER}),

panel.add(tpl);var


shape=require('ui/shape'),
options={
width:4,
color:'#C4C4C4',
duration:0,
lineCap:!0,
opacity:1};

options.x1=panelWidth/2,
options.y1=radius+10,


options.x2=panelWidth/2,
options.y2=10,
panel.add(shape.createLine(options)),


options.x2=panelWidth/2,
options.y2=10+radius+radius,
panel.add(shape.createLine(options));


var foot=createLabel('BREAKDOWN',15,Alloy.CFG.fontLight);


return foot.top=2*radius+20+'dp',panel.add(foot),panel;
}

function createBreakdownPanel(kpct,kcol,apct,acol,dpct,dcol){var _Mathsin=






























Math.sin,_Mathcos=Math.cos,_MathPI=Math.PI,panelWidth=.9*width,radius=panelWidth/4,panel=createPanel(panelWidth+'dp',Ti.UI.SIZE),numsections=3,fontsize=radius/3,iconColor='#C4C4C4',knowledge=pc.createPieChart({centerX:panelWidth/2,centerY:radius+10,radius:radius,borderWidth:radius-radius*(kpct/100),fillColor:kcol,borderColor:'transparent',progress:100/numsections,progressColor:'#F4F4F4'});panel.add(knowledge);var kicon=Ti.UI.createLabel($.createStyle({classes:['icon-knowledge'],font:{fontSize:fontsize+'dp'},color:iconColor}));kicon.left=panelWidth/2+radius/2*_Mathcos(30*_MathPI/180)-fontsize/2+'dp',kicon.top=radius+10-fontsize/2-radius/2*_Mathsin(30*_MathPI/180)+'dp',
panel.add(kicon);


var activity=pc.createPieChart({
centerX:panelWidth/2,
centerY:radius+10,
radius:radius,
borderWidth:radius-radius*(apct/100),
fillColor:acol,
borderColor:'transparent',
progress:100/numsections,
progressColor:'#F4F4F4'});


activity.transform=Ti.UI.create2DMatrix().rotate(360/numsections),
panel.add(activity);

var aicon=Ti.UI.createLabel($.createStyle({
classes:['icon-activity'],
font:{
fontSize:fontsize+'dp'},

color:iconColor}));

aicon.left=panelWidth/2-fontsize/2+'dp',
aicon.top=radius+10+radius/2-fontsize/2+'dp',
panel.add(aicon);


var discovery=pc.createPieChart({
centerX:panelWidth/2,
centerY:radius+10,
radius:radius,
borderWidth:radius-radius*(dpct/100),
fillColor:dcol,
borderColor:'transparent',
progress:100/numsections,
progressColor:'#F4F4F4'});


discovery.transform=Ti.UI.create2DMatrix().rotate(720/numsections),
panel.add(discovery);

var dicon=Ti.UI.createLabel($.createStyle({
classes:['icon-discovery'],
font:{
fontSize:fontsize+'dp'},

color:iconColor}));

dicon.left=panelWidth/2-radius/2*_Mathcos(30*_MathPI/180)-fontsize/2+'dp',
dicon.top=radius+10-fontsize/2-radius/2*_Mathsin(30*_MathPI/180)+'dp',
panel.add(dicon);var


shape=require('ui/shape'),
options={
width:4,
color:'#C4C4C4',
duration:0,
lineCap:!0,
opacity:1};

options.x1=panelWidth/2,
options.y1=radius+10,


options.x2=panelWidth/2,
options.y2=10,
panel.add(shape.createLine(options)),


options.x2=panelWidth/2+radius*_Mathcos(30*_MathPI/180),
options.y2=10+radius+radius*_Mathsin(30*_MathPI/180),
panel.add(shape.createLine(options)),


options.x2=panelWidth/2-radius*_Mathcos(30*_MathPI/180),
options.y2=10+radius+radius*_Mathsin(30*_MathPI/180),
panel.add(shape.createLine(options));


var foot=createLabel('BREAKDOWN',15,Alloy.CFG.fontLight);


return foot.top=2*radius+20+'dp',panel.add(foot),panel;
}

function roundedToFixed(_float,_digits){
var rounder=Math.pow(10,_digits);
return(_Mathround(_float*rounder)/rounder).toFixed(_digits);
}

function createTimeSummaryPanel(data){var
panelWidth=width-32,
panel=createPanel(panelWidth+'dp','140dp','transparent'),
padding=10,
tilewidth=(panelWidth-2*padding)/3,

value=roundedToFixed(data.totalQual/60,1),
icon='icon-chrono',
t1=createSummaryTile(tilewidth,'Total','Hours',value,icon);
t1.left='0dp',
panel.add(t1),


value=_Mathround(data.avgQual),
icon='icon-chrono';
var t2=createSummaryTile(tilewidth,'Average','Mins',value,icon);
t2.left=tilewidth+padding+'dp',
panel.add(t2),

value=roundedToFixed(data.timeGoalSuccessRate,0)+'%',
icon='icon-performance';
var t3=createSummaryTile(tilewidth,'% Days','Goal Met',value,icon);



return t3.left=2*(tilewidth+padding)+'dp',panel.add(t3),panel;
}

function createStepSummaryPanel(data){var
panelWidth=width-32,
panel=createPanel(panelWidth+'dp','140dp','transparent'),
padding=10,
tilewidth=(panelWidth-2*padding)/3,

value=9999<data.totalSteps?roundedToFixed(data.totalSteps/1e3,1)+'k':data.totalSteps,
icon='icon-steps',
t1=createSummaryTile(tilewidth,'Step','Total',value,icon);
t1.left='0dp',
panel.add(t1),

value=9999<data.avgSteps?roundedToFixed(data.avgSteps/1e3,1)+'k':data.avgSteps,
icon='icon-steps';
var t2=createSummaryTile(tilewidth,'Daily','Average',value,icon);
t2.left=tilewidth+padding+'dp',
panel.add(t2),

value=roundedToFixed(data.stepGoalSuccessRate,0)+'%',
icon='icon-performance';
var t3=createSummaryTile(tilewidth,'% Days','Goal Met',value,icon);



return t3.left=2*(tilewidth+padding)+'dp',panel.add(t3),panel;
}

function createSummaryTile(width,title1,title2,value,iconname){var
t=createPanel(width+'dp',Ti.UI.FILL),
label=createLabel(title1,15,Alloy.CFG.fontNormal);
label.top=10,
t.add(label),
label=createLabel(title2,15,Alloy.CFG.fontNormal),
label.top=27,
t.add(label),
label=createLabel(value,22,Alloy.CFG.fontMedium),
label.color=Alloy.Globals.Style.Color.TwilightBlue,
label.top=55,
t.add(label);
var ticon=Ti.UI.createLabel($.createStyle({
classes:[iconname],
font:{
fontSize:30},

color:Alloy.Globals.Style.Color.LightBlue}));



return ticon.top='93dp',t.add(ticon),t;
}






function draw(data){























function getBarData(data,timemode){


for(var bar,barData=[],i=0;i<data.programTotalWeeks;i++)
bar={active:i===data.programWeek-1},
barData.push(bar),
i<data.activity.length?(
idx=i,
data.activity.length>data.programTotalWeeks&&(

idx=data.activity.length-data.programTotalWeeks+i),


bar.value=timemode?data.activity[idx].percentComplete:

data.activity[idx].percentCompleteSteps):


bar.nodata=!0;


return barData;
}var progress=$.container;$.weekChart.setProgress(100*(data.programDay/(7*data.programTotalWeeks))),$.weekChart.setText(data.programWeek),$.weekChart.setSubText('of '+data.programTotalWeeks),$.dayChart.setProgress(100*(data.dayInCurrentWeek/7)),$.dayChart.setText(data.dayInCurrentWeek),$.dayChart.setSubText('of w'+data.programWeek),$.overallChart.setProgress(data.overallPerformance),$.overallChart.setText(data.overallPerformance+'%'),$.overallChart.setSubText(ratePerformance(data.overallPerformance));var dataStartWeek=data.programWeek>data.programTotalWeeks?data.programWeek-data.programTotalWeeks+1:1;$.moodChart.setMoods(dataStartWeek,data.programTotalWeeks,data.moodDataStartDate,data.moodData);var
left='w'+(data.activity.length>data.programTotalWeeks?data.activity.length-data.programTotalWeeks+1:'1'),
right=data.activity.length>data.programTotalWeeks?data.activity.length:data.programTotalWeeks;

if(0<data.timeBias){
$.exerciseGoalLabel.text='Exercise - ('+data.currentDailyTimeGoal+'mins/day)',
$.exerciseChart.setHeading('Performance by week'),
$.exerciseChart.setXAxisLabels(left,right),
$.exerciseChart.setData(getBarData(data,!0));
var actsum=createTimeSummaryPanel(data,!0);
$.exerciseStats.removeAllChildren(),
$.exerciseStats.add(actsum);
}else
$.exercise.height=0;


if(0<data.stepBias){
$.stepGoalLabel.text='Steps - ('+data.currentDailyStepGoal+'/day)',
$.stepChart.setHeading('Performance by week'),
$.stepChart.setXAxisLabels(left,right),
$.stepChart.setData(getBarData(data,!1));
var actsum=createStepSummaryPanel(data,!1);
$.stepStats.removeAllChildren(),
$.stepStats.add(actsum);
}else
$.steps.height=0;







































animation.fadeIn($.container,100);
}

function ratePerformance(pct){return(
20>pct?
'Low':

40>pct?
'Fair':

60>pct?
'Good':

80>pct?
'Very good':

100>=pct?
'Excellent':void 0);

}var _Mathround=Math.round,Widget=new(require('/alloy/widget'))('tf.app.progress');if(this.__widgetId='tf.app.progress',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='progress',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.progress=Ti.UI.createScrollView({backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Ti.UI.FILL,contentHeight:'auto',height:'100%',id:'progress'}),$.__views.progress&&$.addTopLevelView($.__views.progress),$.__views.container=Ti.UI.createView({layout:'vertical',height:Ti.UI.SIZE,opacity:0,id:'container'}),$.__views.progress.add($.__views.container),$.__views.overallProgress=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,top:16,id:'overallProgress',layout:'vertical'}),$.__views.container.add($.__views.overallProgress),$.__views.__alloyId4=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:20},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,text:'Summary',id:'__alloyId4'}),$.__views.overallProgress.add($.__views.__alloyId4),$.__views.__alloyId5=Ti.UI.createView({height:Ti.UI.SIZE,id:'__alloyId5'}),$.__views.overallProgress.add($.__views.__alloyId5),$.__views.__alloyId6=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,bottom:Alloy.Globals.Style.Widget.Progress.Chart.OverallLabelBottom,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'Activity',id:'__alloyId6'}),$.__views.__alloyId5.add($.__views.__alloyId6),$.__views.overallChart=Alloy.createWidget('tf.app.chart','circleChart',{top:6,textFont:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Progress.Chart.FontSizeLarge},chart:{centerX:Alloy.Globals.Style.Widget.Progress.Chart.Radius,centerY:Alloy.Globals.Style.Widget.Progress.Chart.Radius,radius:Alloy.Globals.Style.Widget.Progress.Chart.Radius,borderWidth:10,fillColor:'transparent',borderColor:Alloy.Globals.Style.Color.PaleGrey,progressColor:Alloy.Globals.Style.Color.RedPink},id:'overallChart',__parentSymbol:$.__views.__alloyId5}),$.__views.overallChart.setParent($.__views.__alloyId5),$.__views.weekAndDay=Ti.UI.createView({height:Ti.UI.SIZE,id:'weekAndDay'}),$.__views.overallProgress.add($.__views.weekAndDay),$.__views.week=Ti.UI.createView({height:Ti.UI.SIZE,left:'5%',width:'45%',id:'week'}),$.__views.weekAndDay.add($.__views.week),$.__views.__alloyId7=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,top:0,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'Week',id:'__alloyId7'}),$.__views.week.add($.__views.__alloyId7),$.__views.weekChart=Alloy.createWidget('tf.app.chart','circleChart',{top:24,bottom:16,textFont:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Progress.Chart.FontSizeSmall},chart:{centerX:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,centerY:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,radius:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,borderWidth:8,fillColor:'transparent',borderColor:Alloy.Globals.Style.Color.PaleGrey,progressColor:Alloy.Globals.Style.Color.KiwiGreen},id:'weekChart',__parentSymbol:$.__views.week}),$.__views.weekChart.setParent($.__views.week),$.__views.day=Ti.UI.createView({height:Ti.UI.SIZE,right:'5%',width:'45%',id:'day'}),$.__views.weekAndDay.add($.__views.day),$.__views.__alloyId8=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.TwilightBlue,top:0,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,height:Ti.UI.SIZE,width:Ti.UI.FILL,text:'Day',id:'__alloyId8'}),$.__views.day.add($.__views.__alloyId8),$.__views.dayChart=Alloy.createWidget('tf.app.chart','circleChart',{top:24,bottom:16,textFont:{fontFamily:Alloy.CFG.fontNormal,fontSize:Alloy.Globals.Style.Widget.Progress.Chart.FontSizeSmall},chart:{centerX:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,centerY:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,radius:Alloy.Globals.Style.Widget.Progress.Chart.RadiusSmall,borderWidth:8,fillColor:'transparent',borderColor:Alloy.Globals.Style.Color.PaleGrey,progressColor:Alloy.Globals.Style.Color.KiwiGreen},id:'dayChart',__parentSymbol:$.__views.day}),$.__views.dayChart.setParent($.__views.day),$.__views.exercise=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,top:16,id:'exercise',layout:'vertical'}),$.__views.container.add($.__views.exercise),$.__views.exerciseGoalLabel=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:20},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,text:'Exercise goal',id:'exerciseGoalLabel'}),$.__views.exercise.add($.__views.exerciseGoalLabel),$.__views.exerciseGoal=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,id:'exerciseGoal'}),$.__views.exercise.add($.__views.exerciseGoal),$.__views.exerciseChart=Alloy.createWidget('tf.app.chart','barChart',{top:10,bottom:8,height:150,chart:{barColor:Alloy.Globals.Style.Color.RedPink,noDataColor:'#FFFFFF',inActiveBackground:Alloy.Globals.Style.Color.PaleGrey,activeBackground:Alloy.Globals.Style.Color.SilverTwo},id:'exerciseChart',__parentSymbol:$.__views.exerciseGoal}),$.__views.exerciseChart.setParent($.__views.exerciseGoal),$.__views.exerciseStats=Ti.UI.createView({left:16,right:16,backgroundColor:'transparent',height:Ti.UI.SIZE,top:10,id:'exerciseStats'}),$.__views.container.add($.__views.exerciseStats),$.__views.steps=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,top:16,id:'steps',layout:'vertical'}),$.__views.container.add($.__views.steps),$.__views.stepGoalLabel=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:20},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,text:'Step goal',id:'stepGoalLabel'}),$.__views.steps.add($.__views.stepGoalLabel),$.__views.stepGoal=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,id:'stepGoal'}),$.__views.steps.add($.__views.stepGoal),$.__views.stepChart=Alloy.createWidget('tf.app.chart','barChart',{top:10,bottom:8,height:150,chart:{barColor:Alloy.Globals.Style.Color.DarkSkyBlue,noDataColor:'#FFFFFF',inActiveBackground:Alloy.Globals.Style.Color.PaleGrey,activeBackground:Alloy.Globals.Style.Color.SilverTwo},id:'stepChart',__parentSymbol:$.__views.stepGoal}),$.__views.stepChart.setParent($.__views.stepGoal),$.__views.stepStats=Ti.UI.createView({left:16,right:16,backgroundColor:'transparent',height:Ti.UI.SIZE,top:10,id:'stepStats'}),$.__views.container.add($.__views.stepStats),$.__views.moodReview=Ti.UI.createView({left:16,right:16,backgroundColor:'white',height:Ti.UI.SIZE,top:16,id:'moodReview',layout:'vertical'}),$.__views.container.add($.__views.moodReview),$.__views.__alloyId9=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:20},color:Alloy.Globals.Style.Color.TwilightBlue,top:16,text:'Frame of Mind',id:'__alloyId9'}),$.__views.moodReview.add($.__views.__alloyId9),$.__views.moodChart=Alloy.createWidget('tf.app.chart','moodChart',{top:10,bottom:16,id:'moodChart',__parentSymbol:$.__views.moodReview}),$.__views.moodChart.setParent($.__views.moodReview),$.__views.__alloyId10=Ti.UI.createLabel({font:{fontFamily:Alloy.CFG.fontBold,fontSize:20},color:'#111',top:16,id:'__alloyId10'}),$.__views.container.add($.__views.__alloyId10),exports.destroy=function(){},_.extend($,$.__views),$.progress.title='My Progress';var Q=require('vendor/q'),animation=require('alloy/animation'),cus=require('services/current_user_service'),pc=require('ui/common/custom_pie_chart'),width=Alloy.Globals.Style.Widget.Progress.Width,height=Alloy.Globals.Style.Widget.Progress.Height;;var current=null;;var




























progressData,_startSpinner=function(){return Q.fcall(function(){return DISPATCHER.trigger('tf:progress.start',{message:'Updating...',id:'progress-data',delay:100}),!0})},_stopSpinner=function(){DISPATCHER.trigger('tf:progress.stop',{id:'progress-data'})},_loadProgressData=function(){return Widget.createModel('progress',{urlParams:{pid:cus.singleton().get('userId'),utcOffset:-new Date().getTimezoneOffset()}}).fetch()},_loadMoodData=function(start,end){return require('services/metric_service').query('Mood',start.getTime(),end.getTime())},

_progressLoaded=function(progress){var
defer=Q.defer(),

update=function(){
_.defer(function(){
_updateProgress(),
defer.resolve({});
});
};


progressData=progress;

var toggles=cus.singleton().get('toggles');
if(toggles.trackMood){

var end=new Date(progressData.programStartDate);
end.setDate(end.getDate()+7*Math.max(progressData.programWeek,progressData.programTotalWeeks));
var start=new Date(end.getTime());
start.setDate(end.getDate()-7*progressData.programTotalWeeks),
_loadMoodData(start,end).then(function(moods){
progressData.moodData=moods,
progressData.moodDataStartDate=start;
}).finally(update);
}else
update();


return defer.promise;
},

_progressError=function(err){
var a=Titanium.UI.createAlertDialog({
title:'Uh ohh!',
buttonNames:['Ok'],
message:'Unable to retrieve progress at this time.\n\nNote: This can happen if you do not have any active goals.\n\nPlease try again later or contact support@innerstrength.health if the problem persists.'});

a.addEventListener('click',function(e){

}),
a.show();
},
_update=function(){
_startSpinner().then(_loadProgressData).then(_progressLoaded).catch(_progressError).finally(_stopSpinner);
},

weekday=Array(7);
weekday[0]='Sunday',
weekday[1]='Monday',
weekday[2]='Tuesday',
weekday[3]='Wednesday',
weekday[4]='Thursday',
weekday[5]='Friday',
weekday[6]='Saturday';var






























































































































































sessionstart,










lastUpdate,getProgramDate=function(programStartDate,week,day){var d=new Date(programStartDate);return d.setDate(d.getDate()+7*(week-1)+(day-1)),d},_updateProgress=function(){var programWeeks=progressData.programTotalWeeks,programWeek=progressData.programWeek;if(1>progressData.programDay){var a=Titanium.UI.createAlertDialog({title:'Program not started',buttonNames:['Ok'],message:'You cannot view your progress at this time.\n\nYour program will begin in '+(1-progressData.programDay)+' day'+(0>progressData.programDay?'s':'')+'.\n\nPlease try again then.'});return a.addEventListener('click',function(e){}),void a.show()}var perfTime=0,perfSteps=0;progressData.performanceSteps,progressData.performanceTime,progressData.totalSteps=0,progressData.totalMins=0,progressData.totalQual=0,progressData.avgSteps=0,progressData.avgMins=0,progressData.avgQual=0,progressData.bestDateSteps=new Date(progressData.programStartDate),progressData.bestDayStepCount=0,progressData.bestDatetime=new Date(progressData.programStartDate),progressData.bestDayQualTime=0,progressData.totalPrescribedDays=0,progressData.totalDaysStepGoalAchieved=0,progressData.totalDaysTimeGoalAchieved=0,progressData.stepGoalSuccessRate=0,progressData.timeGoalSuccessRate=0,progressData.bestDayForSteps='',progressData.worstDayForSteps='',progressData.firstWeek=1==progressData.activity.length,progressData.newTimeRecord=!1,progressData.newStepRecord=!1,progressData.dayInCurrentWeek=(progressData.programDay-1)%7+1;for(var currentActivity,beststepsdaytally=[0,0,0,0,0,0,0],worststepsdaytally=[0,0,0,0,0,0,0],i=0;i<progressData.activity.length;i++)beststepsdaytally[getProgramDate(progressData.programStartDate,progressData.activity[i].week,progressData.activity[i].stepsBestDay).getDay()]++,worststepsdaytally[getProgramDate(progressData.programStartDate,progressData.activity[i].week,progressData.activity[i].stepsWorstDay).getDay()]++,perfTime+=progressData.activity[i].percentComplete,progressData.performanceTime=perfTime/(i+1),perfSteps+=progressData.activity[i].percentCompleteSteps,progressData.performanceSteps=perfSteps/(i+1),progressData.totalSteps+=progressData.activity[i].steps,progressData.totalMins+=_Mathround(progressData.activity[i].activeTime/60),progressData.totalQual+=_Mathround(progressData.activity[i].qualifyingTime/60),progressData.totalPrescribedDays+=progressData.activity[i].prescribedDays,progressData.totalDaysStepGoalAchieved+=progressData.activity[i].stepGoalAchievedDays,progressData.totalDaysTimeGoalAchieved+=progressData.activity[i].timeGoalAchievedDays,progressData.activity[i].bestDaySteps>progressData.bestDayStepCount&&(progressData.bestDayStepCount=progressData.activity[i].bestDaySteps,progressData.bestDateSteps=getProgramDate(progressData.programStartDate,progressData.activity[i].week,progressData.activity[i].stepsBestDay),progressData.activity[i].week===progressData.programWeek&&(progressData.newStepRecord=!0)),_Mathround(progressData.activity[i].bestDayTime/60)>=progressData.bestDayQualTime&&(progressData.bestDayQualTime=_Mathround(progressData.activity[i].bestDayTime/60),progressData.bestDateTime=getProgramDate(progressData.programStartDate,progressData.activity[i].week,progressData.activity[i].stepsBestDay),progressData.activity[i].week===progressData.programWeek&&(progressData.newTimeRecord=!0)),currentActivity=progressData.activity[i];if(currentActivity&&(progressData.currentDailyStepGoal=_Mathround(currentActivity.prescribedSteps/currentActivity.prescribedDays),progressData.currentDailyTimeGoal=_Mathround(currentActivity.prescribedTime/(60*currentActivity.prescribedDays))),progressData.avgSteps=_Mathround(progressData.totalSteps/progressData.programDay),progressData.avgMins=_Mathround(progressData.totalMins/progressData.programDay),progressData.avgQual=_Mathround(progressData.totalQual/progressData.programDay),progressData.stepGoalSuccessRate=_Mathround(100*(progressData.totalDaysStepGoalAchieved/progressData.totalPrescribedDays)),progressData.timeGoalSuccessRate=_Mathround(100*(progressData.totalDaysTimeGoalAchieved/progressData.totalPrescribedDays)),2<progressData.programWeek)for(var best=0,worst=0,j=0;7>i;i++)beststepsdaytally[j]>best?progressData.bestDayForSteps=weekday[j]:beststepsdaytally[j]===best&&(progressData.bestDayForSteps=''),worststepsdaytally[j]>worst?progressData.worstDayForSteps=weekday[j]:worststepsdaytally[j]===worst&&(progressData.worstDayForSteps='');progressData.stepBias=void 0===progressData.stepBias?1:progressData.stepBias,progressData.timeBias=void 0===progressData.timeBias?1:progressData.timeBias,progressData.activityPerformance=_Mathround((progressData.performanceSteps*progressData.stepBias+progressData.performanceTime*progressData.timeBias)/(progressData.stepBias+progressData.timeBias)),progressData.overallPerformance=progressData.activityPerformance,draw(progressData)},trackSessionStart=function(){require('services/event_tracking_service').record('start-view-progress',{}),sessionstart=new Date},trackSessionEnd=function(){require('services/event_tracking_service').record('end-view-progress',{duration:_Mathround((new Date().getTime()-sessionstart.getTime())/1e3)})},
update=function(){
var now=new Date;

!lastUpdate||lastUpdate.getTime()+1e4<now.getTime()?(
lastUpdate=now,
_update(),
$.container.opacity=0):

$.container.opacity=1;

},

_active=!1,
_setActive=function(active){
active!=_active&&(
active?(
_active=!0,
update(),
trackSessionStart()):(

_active=!1,
trackSessionEnd()));


},

_pause=function(){
lastUpdate=!1;
},
_resume=function(){
_active&&
update();

},
_loggedOut=function(){
_setActive(!1);
},

initEventListeners=function(){
Ti.App.addEventListener('tf:life.cycle.pause',_pause),
Ti.App.addEventListener('tf:life.cycle.resume',_resume),
Ti.App.addEventListener('tf:life.cycle.loggedout',_loggedOut);
};
initEventListeners(),

exports.cleanup=function(){
trackSessionEnd(),
Ti.App.removeEventListener('tf:life.cycle.pause',_pause),
Ti.App.removeEventListener('tf:life.cycle.resume',_resume),
Ti.App.removeEventListener('tf:life.cycle.loggedout',_loggedOut);
},
exports.setActive=_setActive,









_.extend($,exports);
}

module.exports=Controller;