var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activityDetails/'+s:
s.substring(0,index)+'/tf.app.activityDetails/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activityDetails');




if(this.__widgetId='tf.app.activityDetails',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activityDetails',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.activityDetails=Ti.UI.createView(
{opacity:0,left:Alloy.Globals.Style.Size.Width.pct99,height:Alloy.Globals.Style.Size.Height.pct100,width:Alloy.Globals.Style.Size.Width.pct100,id:'activityDetails'}),

$.__views.activityDetails&&$.addTopLevelView($.__views.activityDetails),
$.__views.dialog=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,id:'dialog',layout:'vertical'}),

$.__views.activityDetails.add($.__views.dialog),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Log exercise details',showClose:!0,showBack:!0,id:'titlebar',__parentSymbol:$.__views.dialog}),
$.__views.titlebar.setParent($.__views.dialog),
_close?$.__views.titlebar.on('close',_close):__defers['$.__views.titlebar!close!_close']=!0,_back?$.__views.titlebar.on('back',_back):__defers['$.__views.titlebar!back!_back']=!0,$.__views.picker=Ti.UI.createView(
{width:'80%',height:Ti.UI.SIZE,top:-10,id:'picker',layout:'vertical'}),

$.__views.dialog.add($.__views.picker),
$.__views.__alloyId219=Ti.UI.createView(
{layout:'vertical',width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'__alloyId219'}),

$.__views.picker.add($.__views.__alloyId219),
$.__views.__alloyId220=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.DarkerSilver,top:15,text:'When did you start?',id:'__alloyId220'}),

$.__views.__alloyId219.add($.__views.__alloyId220),
$.__views.dayPicker=Ti.UI.createView(
{height:Ti.UI.SIZE,top:10,id:'dayPicker'}),

$.__views.__alloyId219.add($.__views.dayPicker),
$.__views.__alloyId221=Ti.UI.createView(
{height:Ti.UI.SIZE,left:40,right:40,layout:'vertical',id:'__alloyId221'}),

$.__views.dayPicker.add($.__views.__alloyId221),
$.__views.day=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,text:'Today',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'day'}),

$.__views.__alloyId221.add($.__views.day),
$.__views.date=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:14},color:Alloy.Globals.Style.Color.Silver,text:'23/04/2018',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'date'}),

$.__views.__alloyId221.add($.__views.date),
$.__views.back=Ti.UI.createView(
{width:50,height:50,left:0,id:'back'}),

$.__views.dayPicker.add($.__views.back),
$.__views.__alloyId222=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.DarkSkyBlue,text:'d',height:30,width:30,borderRadius:15,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,backgroundColor:Alloy.Globals.Style.Color.IceBlue,id:'__alloyId222'}),

$.__views.back.add($.__views.__alloyId222),
$.__views.forward=Ti.UI.createView(
{width:50,height:50,right:0,id:'forward'}),

$.__views.dayPicker.add($.__views.forward),
$.__views.forwardBtn=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:14},color:Alloy.Globals.Style.Color.DuckEggBlue,text:'e',height:30,width:30,borderRadius:15,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,backgroundColor:Alloy.Globals.Style.Color.IceBlue,id:'forwardBtn'}),

$.__views.forward.add($.__views.forwardBtn),
$.__views.timePicker=Ti.UI.createPicker(
{left:'10dp',right:'10dp',top:0,type:Ti.UI.PICKER_TYPE_TIME,width:Ti.UI.FILL,height:150,backgroundColor:'transparent',id:'timePicker'}),

$.__views.__alloyId219.add($.__views.timePicker),
$.__views.__alloyId223=Ti.UI.createView(
{layout:'vertical',width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'__alloyId223'}),

$.__views.picker.add($.__views.__alloyId223),
$.__views.__alloyId224=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.DarkerSilver,top:15,text:'... and for how long?',id:'__alloyId224'}),

$.__views.__alloyId223.add($.__views.__alloyId224),
$.__views.__alloyId225=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'__alloyId225'}),

$.__views.__alloyId223.add($.__views.__alloyId225),
$.__views.durationPicker=Ti.UI.createPicker(
{left:'10dp',right:'10dp',top:15,height:40,backgroundColor:'transparent',selectionIndicator:!0,width:135,borderColor:Alloy.Globals.Style.Color.BrandGrey,borderWidth:1,id:'durationPicker'}),

$.__views.__alloyId225.add($.__views.durationPicker),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:8,left:16,right:16,bottom:16,type:'primary',text:'Save exercise',enabled:!0,id:'button',__parentSymbol:$.__views.dialog}),
$.__views.button.setParent($.__views.dialog),
_add?$.__views.button.on('click',_add):__defers['$.__views.button!click!_add']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';












for(var item,currentDate,Q=require('vendor/q'),initialised=!1,moment=require('alloy/moment'),du=require('utils/date'),rows=[],interval=5,defaultMins=30,i=0;300>i;i+=interval)
rows.push(Ti.UI.createPickerRow({title:i+' mins',value:i}));

$.durationPicker.add(rows);var

doneDate=!1,
doneTime=!1,
doneDuration=!1,
doingDuration=!1;

$.timePicker.addEventListener('change',function(e){



if(doingDuration||doneTime||(doneTime=!0),!0){

var day=new Date(currentDate.getTime());
day.setHours($.timePicker.value.getHours(),$.timePicker.value.getMinutes(),$.timePicker.value.getSeconds(),$.timePicker.value.getMilliseconds()),
$.timePicker.value=day;
}
});

var initialDateTime;
$.durationPicker.addEventListener('change',function(e){
doingDuration=!0,
doneDuration=!0,
doneTime||doneDate||0!=item.startTime||(
currentDate=new Date(initialDateTime.getTime()-6e4*e.row.value),
$.timePicker.value=currentDate,
updateDatePicker()),

setTimeout(function(){
doingDuration=!1;
},500);
});var

initPickers=function(){
doingDuration=!0,
currentDate=0<item.startTime?new Date(item.startTime):new Date,
initialDateTime=currentDate,
$.timePicker.value=currentDate;
var initialDuration=0<item.activeTime?item.activeTime:defaultMins;
$.durationPicker.setSelectedRow(0,Math.round(initialDuration/interval),!1),
updateDatePicker(),
setTimeout(function(){
doneDate=!1,
doneTime=!1,
doneDuration=!1,
doingDuration=!1;
},500);
},

updateDatePicker=function(){
var day=du.getLongDayString(currentDate);

$.forwardBtn.color='Today'===day?Alloy.Globals.Style.Color.DuckEggBlue:

Alloy.Globals.Style.Color.DarkSkyBlue,

$.day.text=day,
$.date.text=du.getDateString(currentDate);
},

_backDay=function(){
doneDate=!0,
$.back.animate({
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.8}),

autoreverse:!0},
function(){
currentDate=moment($.timePicker.value).add(-1,'days').toDate(),
$.timePicker.value=currentDate,
updateDatePicker();
});
},

_forwardDay=function(){
var day=du.getLongDayString(currentDate);
'Today'!==day&&(
doneDate=!0,
$.forward.animate({
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.8}),

autoreverse:!0},
function(){
currentDate=moment($.timePicker.value).add(1,'days').toDate(),
$.timePicker.value=currentDate,
updateDatePicker();
}));

},

_showSpinner=function(){
return Q.fcall(function(){




return DISPATCHER.trigger('tf:progress.start',{id:'edit-activity',message:'Saving...'}),!0;
});
},

_init=function(){
initialised||(
initialised=!0,
$.back.addEventListener('touchstart',_backDay),
$.forward.addEventListener('touchstart',_forwardDay));
},

_close=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_back=function(){
_hide(function(){
$.trigger('change',{
type:'detailsToType',
data:{
sourceActivityId:item.sourceActivityId,
type:item.type,
startTime:$.timePicker.value,
activeTime:60*$.durationPicker.getSelectedRow(0).value},

source:$});

});
},

_add=function(){
_showSpinner().then(function(){
_hide(function(){
$.trigger('close',{
type:'exercise-recorded',
params:{
type:item.type,
startTime:$.timePicker.value,
activeTime:60*$.durationPicker.getSelectedRow(0).value},

source:$});

});
});
},

_show=function(i){
item=i,
$.titlebar.setTitle('Log '+item.type+' Details'),
initPickers(),
$.activityDetails.animate({
opacity:1,
duration:200,
left:0});

},

_hide=function(callback){
$.activityDetails.animate({
opacity:0,
duration:200,
left:Alloy.Globals.Style.Size.Width.pct99},
function(){
callback&&callback();
});
},

_open=function(){
$.activityDetails.addEventListener('open',function open(){!1,

$.activityDetails.removeEventListener('open',open),
_show();
}),
require('ui/common/custom_window').openWindow($.activityDetails);
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.titlebar!close!_close']&&$.__views.titlebar.on('close',_close),__defers['$.__views.titlebar!back!_back']&&$.__views.titlebar.on('back',_back),__defers['$.__views.button!click!_add']&&$.__views.button.on('click',_add),



_.extend($,exports);
}

module.exports=Controller;