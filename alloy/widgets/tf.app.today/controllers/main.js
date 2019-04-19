var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='main',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.todayview=Ti.UI.createView(
{height:'100%',id:'todayview'}),

$.__views.todayview&&$.addTopLevelView($.__views.todayview),
$.__views.cardview=Alloy.createWidget('tf.app.cardview','widget',{id:'cardview',__parentSymbol:$.__views.todayview}),
$.__views.cardview.setParent($.__views.todayview),
$.__views.add=Alloy.createWidget('tf.app.today','add',{id:'add',__parentSymbol:$.__views.todayview}),
$.__views.add.setParent($.__views.todayview),
exports.destroy=function(){},




_.extend($,$.__views),


$.todayview.title='My Dashboard';var
Q=require('vendor/q'),
moment=require('alloy/moment'),
cus=require('services/current_user_service'),
lifecycle=require('/bootstrap/lifecycle'),

slideAndHide=Titanium.UI.createAnimation();
slideAndHide.duration=500,
slideAndHide.opacity=.1;var
matrix=Ti.UI.create2DMatrix(),

baselineMode=!1;

exports.setVisibleDimensions=function(w,h){
matrix=matrix.translate(w,0),
slideAndHide.transform=matrix,
$.cardview.setVisibleDimensions(w,h);
};var

_activeCards=[],

_addCard=function(card,id,opts,top){
var existing=_.find(_activeCards,function(c){
return c.id==id;
});
existing?(
$.cardview.updateCard(existing.card.getView(),card.getView()),
existing.card.cleanup(),
existing.card=card):(

top?
$.cardview.addTopCard(card.getView(),opts):

$.cardview.addCard(card.getView(),opts),

_activeCards.push({
id:id,
card:card}));


},
_removeCard=function(card,id){
card.cleanup&&card.cleanup(),
$.cardview.removeCard(card.getView(),slideAndHide),
_activeCards=_.filter(_activeCards,function(c){
return c.id!==id;
});
},
_removeOrphenCards=function(prefix,list){
_.forEach(_activeCards,function(ac){
if(0==ac.id.indexOf(prefix)){
var obj=_.find(list,function(o){
return 0==ac.id.indexOf(prefix+o.id);

});
obj||

_removeCard(ac.card,ac.id);

}
});
},

_init=function(){
Ti.App.addEventListener('tf:life.cycle.pause',_pause),
Ti.App.addEventListener('tf:life.cycle.resume',_resumed),
Ti.App.addEventListener('tf:life.cycle.loggedout',$.cleanup),
DISPATCHER.on('tf:notification.foreground',_handleNotification);
var v=$.todayview;
v.addEventListener('postlayout',function onLayout(){
v.removeEventListener('postlayout',onLayout);var
promises=[
_loadRx()],
toggles=cus.singleton().get('toggles');
toggles.enableRoutines&&'yes'===toggles.enableRoutines&&
promises.push(_loadRoutines()),

toggles.enableInbox&&'yes'===toggles.enableInbox&&
promises.push(_loadUnreadMessages()),

toggles.enablePoints&&'yes'===toggles.enablePoints&&
promises.push(_loadPoints()),

Q.all(promises).finally(_onLoaded);
});
},

_onLoaded=function(){
var toggles=cus.singleton().get('toggles');

require('push').enableBroadcast(!0),
baselineMode='yes'===toggles.showBaseline||'yes'===toggles.showControl,
$.add.show(!baselineMode),
baselineMode?







DISPATCHER.on('tf:toggles.loaded',_onToggles):(_handleStampCard(),_handleSpacer(),_handleCurrentUser(),_handleSpacer({height:150,separator:!1}));

},

_onToggles=function(){

var toggles=cus.singleton().get('toggles');
baselineMode&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl&&(
DISPATCHER.off('tf:toggles.loaded',_onToggles),

_handleRx(cus.singleton().get('rx')),
_onLoaded());

},

_loadRx=function(){
return require('services/rx_service').getCurrentRx().then(function(rx){
_handleRx(rx),
DISPATCHER.on('tf:rx.loaded',_handleRx);
});
},
_loadUnreadMessages=function(){

return DISPATCHER.on('tf:messages.unread.info',_handleUnreadMessagesInfo),require('services/messages_service').getMessages(!0,0);
},
_loadPoints=function(){

return DISPATCHER.on('tf:points.updated',_handlePoints),require('services/rewards_service').getPoints();
},
_loadRoutines=function(){
return require('services/routines_service').getRoutines().then(function(routines){


return DISPATCHER.on('tf:routines.loaded',_handleRoutines),DISPATCHER.on('tf:routines.dashboard.loaded',_handleRoutinesDashboard),_handleRoutines(routines);
});
},

_handleRx=function(rx){


if(rx&&rx.rxExercises){


var activityRxs=_.filter(rx.rxExercises,function(arx){
return'Activity'===arx.type;
});
0<activityRxs.length&&(

_removeOrphenCards('activity:',[activityRxs[0]]),
_handleActivity(activityRxs[0]));

}
},
_handleUnreadMessagesInfo=function(info){


LOGGER.debug('UNREAD MSG INFO:'+JSON.stringify(info));
},
_handlePoints=function(pts){




if(LOGGER.debug('POINTS INFO:'+JSON.stringify(pts)),lifecycle.isActive()){
var pointsLastActive=cus.singleton().get('pointsLastActive');
cus.save({pointsLastActive:pts}),
pointsLastActive||(
pointsLastActive={creditTotal:0,debitTotal:0}),(

pts.creditTotal!==pointsLastActive.creditTotal||pts.debitTotal!==pointsLastActive.debitTotal)&&
DISPATCHER.trigger('tf:points.update',{creditDelta:pts.creditTotal-pointsLastActive.creditTotal,debitDelta:pts.debitTotal-pointsLastActive.debitTotal});

}
},

_handleNotification=function(notification){

if(LOGGER.debug('GOT FOREGROUND NOTIFICATION : '+JSON.stringify(notification)),notification){var
handledCategories=['ROUTINE_REMINDER'],
foregroundActions=['ROUTINE_OPEN'];
if(!_.contains(handledCategories,notification.data.category))











require('services/messages_service').getMessages(!0,0);else if(LOGGER.debug('HANDLING CATEGORY['+notification.data.category+'] ACTION : '+notification.identifier+' - '+JSON.stringify(notification)),'ROUTINE_OPEN'===notification.identifier){var routineId=notification.data.routineId,date=moment(notification.data.date).toDate();LOGGER.debug('HANDLING ROUTINE_OPEN:'+routineId+' FOR DATE:'+notification.data.date),DISPATCHER.trigger('tf:routines.dashboard.open',{routineId:routineId,date:date})}

}
},

_handleRoutines=function(routines){

return require('services/routines_dashboard_service').getRoutinesDashboard(!0);
},

_handleRoutinesDashboard=function(){


},

sid=1,
_handleSpacer=function(opts){var


id='spacer:'+sid++,
card=Widget.createController('spacer',opts),
cardOpts={
borderColor:'transparent',
backgroundColor:'transparent'};

_addCard(card,id,cardOpts,!1);
},
_handleStampCard=function(){var

id='stamp:'+cus.singleton().id,
card=Widget.createController('stampCard'),
cardOpts={
borderColor:'transparent',
backgroundColor:'transparent'};

_addCard(card,id,cardOpts,!1);
},

_handleCurrentUser=function(){var
cu=cus.singleton(),
toggles=cu.get('toggles');
_removeOrphenCards('mood:',[cu]),
toggles.trackMood&&'yes'===toggles.trackMood&&
_showMoodCard();

},
_showMoodCard=function(){var
id='mood:'+cus.singleton().id,
existing=_.find(_activeCards,function(c){
return c.id==id;
});
if(!existing){var
card=Widget.createController('moodCard'),
cardOpts={
borderColor:'transparent'};

_addCard(card,id,cardOpts,!1);
}else
existing.card.refresh(!0);

},

_handleActivity=function(rxActivity){var
cu=cus.singleton(),
toggles=cu.get('toggles');
if('yes'===toggles.showBaseline)
_showTrialCard(rxActivity,{
mode:'baseline'});else

if('yes'===toggles.showControl)
_showTrialCard(rxActivity,{
mode:'control'});else

{var

id='activity:'+rxActivity.id+'-trial',
existing=_.find(_activeCards,function(c){
return c.id==id;
});
existing&&
_removeCard(existing.card,id),

_showActivitySummaryCard(rxActivity);
}
},

_showTrialCard=function(rxActivity,opts){var
card=Widget.createController('trialCard',{
rxActivity:rxActivity,
opts:opts}),

id='activity:'+rxActivity.id+'-trial';
card.setOnCompleted(function(){});
var cardOpts={};
_addCard(card,id,cardOpts,!0);
},
_showActivitySummaryCard=function(rxActivity){var
id='activity:'+rxActivity.id+'-summary',
existing=_.find(_activeCards,function(c){
return c.id==id;
});
if(!existing){var
actSummaryCard=Widget.createController('activitySummaryCard',{
rxActivity:rxActivity}),

cardOpts={
top:0,
left:0,
right:0,
borderColor:'transparent'};

_addCard(actSummaryCard,id,cardOpts,!0);
}else
existing.card.setActivity(rxActivity);

},

_pause=function(){},

_resumed=function(){},

removeEventListeners=function(){
Ti.App.removeEventListener('tf:life.cycle.pause',_pause),
Ti.App.removeEventListener('tf:life.cycle.resume',_resumed),
Ti.App.removeEventListener('tf:life.cycle.loggedout',$.cleanup),
DISPATCHER.off('tf:notification.foreground',_handleNotification),
DISPATCHER.off('tf:rx.loaded',_handleRx),
DISPATCHER.off('tf:messages.unread.info',_handleUnreadMessagesInfo),
DISPATCHER.off('tf:points.updated',_handlePoints),
DISPATCHER.off('tf:routines.loaded',_handleRoutines),
DISPATCHER.off('tf:routines.dashboard.loaded',_handleRoutinesDashboard);
};

$.cleanup=function(){
LOGGER.debug('TodayView cleanup'),

_.forEach(_activeCards,function(c){
c.card.cleanup&&c.card.cleanup();
}),
removeEventListeners(),

require('push').enableBroadcast(!1);
},

$.setWindow=function(win){
win.addEventListener('close',$.cleanup),
_init();
},









_.extend($,exports);
}

module.exports=Controller;