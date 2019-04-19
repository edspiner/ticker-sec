var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activitySummary/'+s:
s.substring(0,index)+'/tf.app.activitySummary/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activitySummary');




if(this.__widgetId='tf.app.activitySummary',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='sync',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.sync=Ti.UI.createView(
{width:Ti.UI.SIZE,id:'sync',layout:'horizontal'}),

$.__views.sync&&$.addTopLevelView($.__views.sync),
_click?$.addListener($.__views.sync,'touchstart',_click):__defers['$.__views.sync!touchstart!_click']=!0,$.__views.warning=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:11},color:Alloy.Globals.Style.Color.PinkRed,width:Ti.UI.SIZE,text:'S',height:Ti.UI.FILL,verticalAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,id:'warning'}),

$.__views.sync.add($.__views.warning),
$.__views.lastSync=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:11},color:Alloy.Globals.Style.Color.BattleshipGrey,width:Ti.UI.SIZE,height:Ti.UI.FILL,verticalAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,id:'lastSync'}),

$.__views.sync.add($.__views.lastSync),
$.__views.syncing=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:11},color:Alloy.Globals.Style.Color.Silver,width:Ti.UI.SIZE,text:'y',height:Ti.UI.FILL,verticalAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,id:'syncing'}),

$.__views.sync.add($.__views.syncing),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
moment=require('alloy/moment'),
du=require('utils/date'),
cus=require('services/current_user_service'),

WTools=require('WidgetTools');
WTools.setTiProps(args,$.sync);var
































dialogType,animate=!1,doneOne=!1,lastSyncFailed=!1,_init=function(){var timer,_onSync=function(state){timer&&clearTimeout(timer),state.syncing?lastSyncFailed=!1:(lastSyncFailed=!state.success,lastSyncFailed&&(timer=setTimeout(function(){lastSyncFailed=!1,_updateSyncState()},1e4))),_updateSyncState()};DISPATCHER.on('tf:toggles.loaded',_updateSyncState),DISPATCHER.on('tf:tracking.fitbit.state.updated',_updateSyncState),DISPATCHER.on('tf:activity.data.sync',_onSync),DISPATCHER.once('tf:logout',function cleanup(){DISPATCHER.off('tf:toggles.loaded',_updateSyncState),DISPATCHER.off('tf:tracking.fitbit.state.updated',_updateSyncState),DISPATCHER.off('tf:activity.data.sync',_onSync)})},
_click=function(){
dialogType&&
DISPATCHER.trigger('tf:app.dialog.show',{type:dialogType});

},


syncTransform=Ti.UI.create2DMatrix().rotate(-10),

syncAnimation=Ti.UI.createAnimation({
transform:syncTransform,
duration:50}),

updateAnimation=function(){
syncTransform=syncTransform.rotate(-10),
syncAnimation.transform=syncTransform,

animate?(
doneOne=!0,
$.syncing.animate(syncAnimation)):(

doneOne=!1,
$.syncing.transform=void 0);

};
syncAnimation.addEventListener('complete',updateAnimation);var

setText=function(text,dType,warning,syncing){
var alreadyAnimating=animate&&doneOne;




















if(animate=!0===syncing,$.updateViews({"#sync":{opacity:0},"#lastSync":{left:warning?4:0,text:text,color:warning?Alloy.Globals.Style.Color.PinkRed:Alloy.Globals.Style.Color.BattleshipGrey},"#warning":{width:warning?Ti.UI.SIZE:0},"#syncing":{left:syncing?4:0,width:syncing?Ti.UI.SIZE:0}}),$.sync.animate({opacity:1,duration:50}),syncing&&!alreadyAnimating)
if(!0){var
rotation=Ti.UI.create2DMatrix().rotate(0,-360),
animation=Ti.UI.createAnimation({duration:1e3,repeat:30,transform:rotation});
doneOne=!0,
$.syncing.animate(animation);
}else
$.syncing.animate(syncAnimation);


dialogType=dType;
},

getLastSyncString=function(date,outofdate){
return'Last recorded activity '+du.getLongDayString(date)+' at '+du.getTimeString(date);
},

_updateSyncState=function(){var
cu=cus.singleton(),

trackingEnabled=cu.get('enablePassiveTracking'),

fitbitRequired=cu.get('forceFitbit'),
fitbitLinked=cu.get('enableFitbit')&&require('tickerfit/tracking').isFitbitLinked();

if(fitbitRequired){

if(!require('tickerfit/tracking').isFitbitLinked())

setText('Fitbit account not linked','link-fitbit',!0);else
if(!require('tickerfit/tracking').isFitbitActivityEnabled())

setText('Fitbit activity data not available','link-fitbit-activity',!0);else
if(require('tickerfit/tracking').isFitbitSyncing())
setText('Syncing activity data',void 0,!1,!0);else
{
var lastFitbitActivityTime=require('tickerfit/tracking').getLastFitbitActivityStopTime();
!lastFitbitActivityTime||moment(new Date(lastFitbitActivityTime)).add(1,'hours').isBefore()?
setText(getLastSyncString(lastFitbitActivityTime,!0),'sync-fitbit',!0):

setText(getLastSyncString(lastFitbitActivityTime,!1),void 0,!1);

}}else
if(fitbitLinked&&require('tickerfit/tracking').isFitbitActivityEnabled()){

if(require('tickerfit/tracking').isFitbitSyncing()||require('tickerfit/tracking').isSyncing())
setText('Syncing activity data',void 0,!1,!0);else
if(lastSyncFailed)
setText('Problem syncing activity - check connectivity',void 0,!0);else
{var
lastFitbitActivityTime=require('tickerfit/tracking').getLastFitbitActivityStopTime(),
lastActivityTime=require('tickerfit/tracking').getLastActivityStopTime(),
latestActivityTime=Math.max(lastFitbitActivityTime,lastActivityTime);

latestActivityTime?
!lastFitbitActivityTime||moment(new Date(lastFitbitActivityTime)).add(1,'hours').isBefore()?
setText(getLastSyncString(latestActivityTime,!0),'sync-fitbit',!0):

setText(getLastSyncString(latestActivityTime),void 0,!1):


setText('No activity recorded yet',void 0,!1);

}}else


if(!trackingEnabled)
setText('Mobile syncing disabled','enable-tracking',!0);else
if(require('tickerfit/tracking').isSyncing())
setText('Syncing activity data',void 0,!1,!0);else
if(lastSyncFailed)
setText('Problem syncing activity - check connectivity',void 0,!0);else
{
var lastActivityTime=require('tickerfit/tracking').getLastActivityStopTime();
lastActivityTime?
setText(getLastSyncString(new Date(lastActivityTime)),void 0,!1):

setText('No activity recorded yet',void 0,!1);

}

};

_init(),

exports.update=_updateSyncState,





__defers['$.__views.sync!touchstart!_click']&&$.addListener($.__views.sync,'touchstart',_click),



_.extend($,exports);
}

module.exports=Controller;