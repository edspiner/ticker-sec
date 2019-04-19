var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dashboardView',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.dashboardView=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'dashboardView',layout:'vertical'}),

$.__views.dashboardView&&$.addTopLevelView($.__views.dashboardView),
$.__views.__alloyId115=Ti.UI.createView(
{height:64,width:Ti.UI.FILL,id:'__alloyId115'}),

$.__views.dashboardView.add($.__views.__alloyId115),
$.__views.title=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'title',layout:'horizontal'}),

$.__views.__alloyId115.add($.__views.title),
$.__views.__alloyId116=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:20},color:Alloy.Globals.Style.Color.LightBlue,text:'z',height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:10,id:'__alloyId116'}),

$.__views.title.add($.__views.__alloyId116),
$.__views.__alloyId117=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,text:'Today\u2019s Routines',id:'__alloyId117'}),

$.__views.title.add($.__views.__alloyId117),
$.__views.progress=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:Alloy.Globals.Style.Widget.Routines.ProgressFontSize},color:Alloy.Globals.Style.Color.RedPink,height:Ti.UI.SIZE,width:Ti.UI.SIZE,left:8,id:'progress'}),

$.__views.title.add($.__views.progress),
$.__views.__alloyId118=Ti.UI.createView(
{opacity:.6,bottom:0,height:1,width:Ti.UI.FILL,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,id:'__alloyId118'}),

$.__views.__alloyId115.add($.__views.__alloyId118),
$.__views.__alloyId119=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'__alloyId119'}),

$.__views.dashboardView.add($.__views.__alloyId119),
$.__views.setup=Alloy.createWidget('tf.app.routines','setup',{id:'setup',__parentSymbol:$.__views.__alloyId119}),
$.__views.setup.setParent($.__views.__alloyId119),
$.__views.routineList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.routines',controller:'dashboard_cell'},opacity:0,height:Ti.UI.SIZE,type:'simulated',id:'routineList',__parentSymbol:$.__views.__alloyId119}),
$.__views.routineList.setParent($.__views.__alloyId119),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},
cus=require('services/current_user_service'),
moment=require('alloy/moment'),
WTools=require('WidgetTools');

WTools.setTiProps(args,$.dashboardView);var

dashboard,
refreshTimeout,

updateRoutineDashboard=function(evt){

require('services/routines_dashboard_service').updateDashboardState(dashboard),
$.progress.text=require('services/routines_dashboard_service').getOverallProgress(dashboard)+'% complete',
$.routineList.update(),
evt&&evt.reload&&(

args.delayRefreshOnComplete?(
refreshTimeout&&clearTimeout(refreshTimeout),
refreshTimeout=setTimeout(function(){
require('services/routines_dashboard_service').refreshRoutinesDashboard();
},1e3)):

require('services/routines_dashboard_service').refreshRoutinesDashboard());


},

setDashboard=function(db){
var previous=dashboard;

dashboard=_.sortBy(db,function(r){



return r.dueAt||(r.dueAt=r.dueBy-1800000),r.dueAt;
}),
updateRoutineDashboard();
var sorted=dashboard;










if(args.showTop?(sorted=sortRoutines(dashboard),sorted.length>args.showTop&&(sorted=sorted.slice(0,args.showTop))):$.title.left=12,sorted.length)
$.setup.opacity=0,
$.setup.height=0,
$.progress.opacity=1;else
{
$.setup.opacity=1,
$.setup.height=Ti.UI.SIZE;var
routines=cus.singleton().get('routines'),
hasRoutines=routines&&routines.length,
title=hasRoutines?'No routines due today':'No routines setup',
message=hasRoutines?'You don\'t have any routines due today. Click "Manage" to create a new routine or update an existing one.':'Click "Manage" to setup your first routine';
$.setup.setTitle(title),
$.setup.setMessage(message),
$.progress.opacity=0;
}

$.routineList.setData(sorted),
_.forEach($.routineList.getTableViewRows(),function(row){
row.setDashboardViewId(args.id);
});
},

sortRoutines=function(dashboard){

var sorted=_.chain(dashboard).sortBy(function(r){
return r.distance;
}).sortBy(function(r){
return!0===r.complete;
}).value();
return sorted;
},

_routineClick=function(r){

},

_init=function(){
$.routineList.onClick(_routineClick),
$.setup.setIconActive(!1),
$.setup.hideAction(!0),
args.dashboard&&

setDashboard(args.dashboard),

DISPATCHER.on('tf:routines.dashboard.'+args.id+'.updated',updateRoutineDashboard);
};

_init();

var _onCompleted=function(){
LOGGER.error('NOOP');
};
exports.setOnCompleted=function(cb){
_onCompleted=cb;
},
exports.updateDashboard=setDashboard,

exports.cleanup=function(){
$.routineList.cleanup(),
DISPATCHER.off('tf:routines.dashboard.'+args.id+'.updated',updateRoutineDashboard);
},









_.extend($,exports);
}

module.exports=Controller;