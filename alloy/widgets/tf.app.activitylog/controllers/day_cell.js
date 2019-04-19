var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitylog/'+s:
s.substring(0,index)+'/tf.app.activitylog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activitylog');




if(this.__widgetId='tf.app.activitylog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='day_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'transparent',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{top:24,width:Ti.UI.FILL,height:Ti.UI.SIZE,layout:'vertical',font:{fontFamily:'tickerfit'},id:'container'}),

$.__views.row.add($.__views.container),
$.__views.header=Ti.UI.createView(
{height:48,backgroundColor:'#f8fafb',id:'header'}),

$.__views.container.add($.__views.header),
$.__views.day=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#65767c',left:24,id:'day'}),

$.__views.header.add($.__views.day),
$.__views.activityList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.activitylog',controller:'activity_cell'},scrollable:!0,allowsSelection:!0,height:Ti.UI.SIZE,type:'simulated',id:'activityList',__parentSymbol:$.__views.container}),
$.__views.activityList.setParent($.__views.container),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var







item,cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,args=arguments[0]||{},ROWHEIGHT=84,
setItem=function(i){
item=i,
$.day.setText(item.dayLabel);
var todaysActivities=[];
for(var nextType in item.activity)
item.activity[nextType].hasOwnProperty('activityData')&&(
todaysActivities=todaysActivities.concat(item.activity[nextType].activityData));


todaysActivities.length?


todaysActivities.sort(function(a,b){
var keyA=new Date(a.endTime),
keyB=new Date(b.endTime);
return keyA<keyB?-1:keyA>keyB?1:0;
}):todaysActivities=[{type:'empty'}],


$.activityList.setData(todaysActivities),

$.updateViews({
"#day":{
text:item.dayLabel}});


},

update=function(){
item&&setItem(item);
};
setItem(args.data),


exports.onClick=function(callback){
callback(!0);
},

exports.getData=function(){
return item;
},

exports.getContainer=function(){
return $.container;
},









_.extend($,exports);
}

module.exports=Controller;