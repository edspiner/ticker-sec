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

function Controller(){var _Mathfloor=

















































Math.floor,Widget=new(require('/alloy/widget'))('tf.app.today');if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='stampCard',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.stampCard=Ti.UI.createView({height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'stampCard'}),$.__views.stampCard&&$.addTopLevelView($.__views.stampCard),exports.destroy=function(){},_.extend($,$.__views),'use strict';var current,stampSize,args=arguments[0]||{},cus=require('services/current_user_service'),animateButton=require('utils/ui').animateClick,margin=16,cols=2,_init=function(){DISPATCHER.on('tf:rx.loaded',_update),DISPATCHER.on('tf:routines.loaded',_update),DISPATCHER.on('tf:routines.dashboard.loaded',_update),375<Alloy.Globals.Style.Size.Width.pct100&&(cols=_Mathfloor(Alloy.Globals.Style.Size.Width.pct100/(375/2))),

stampSize=(Alloy.Globals.Style.Size.Width.pct100-(cols+1)*margin)/cols,
_update();
},

_affixStamps=function(stamps){
$.stampCard.removeAllChildren();
var
v,i=0;
_.forEach(stamps,function(s){
v=s.getView(),
v.left=i%cols*(stampSize+margin),
v.top=_Mathfloor(i/cols)*(stampSize+margin),
$.stampCard.add(v),
i++;
});
},

_update=function(){var


opts,cu=cus.singleton(),toggles=cu.get('toggles'),
stamps=[],


rx=cu.get('rx');
if(rx&&rx.rxPrograms){
var rxPrograms=require('services/rx_service').filterPrograms(cu.get('enableProgramThemeMode')?rx.themeRxPrograms:rx.rxPrograms,['VIDEO','DOCUMENT','REPORT']);
if(rxPrograms.length){

var dueItems=0;
_.forEach(rxPrograms,function(rxp){
rxp.dueItems.length&&(dueItems+=rxp.dueItems.length);
}),
opts={
width:stampSize,
height:stampSize,
iconClass:'tf-programs',
badge:0<dueItems,
title:'View Programs',
highlight:dueItems?dueItems+' items ready':'',
onClick:_showPrograms},

stamps.push(Widget.createController('stamp',opts));
}
}


if(toggles.enableRoutines&&'yes'===toggles.enableRoutines){var
routines=cu.get('routines'),
hasRoutines=routines&&routines.length,
dueRoutines=[];
if(hasRoutines){var
rdb=cu.get('routinesDashboard'),

filtered=_.filter(rdb,function(db){
return _.find(routines,function(r){
return r.id===db.id;
});
});
require('services/routines_dashboard_service').updateDashboardState(filtered),
dueRoutines=_.filter(filtered,function(r){
return!r.complete&&('overdue'===r.state||'active'===r.state);
});
}
opts={
width:stampSize,
height:stampSize,
iconClass:'tf-routines',
badge:!hasRoutines||0<dueRoutines.length,
title:hasRoutines?'View Routines':'Setup Routines',
highlight:dueRoutines.length?dueRoutines.length+' due now':'',
onClick:_showRoutines},

stamps.push(Widget.createController('stamp',opts));
}


rx&&rx.startDate<new Date().getTime()&&'yes'===toggles.showProgress&&
stamps.push(Widget.createController('stamp',{
width:stampSize,
height:stampSize,
iconClass:'tf-progress',
badge:!1,
title:'View Progress',
highlight:'',
onClick:_showProgress})),




toggles.showUserInfo&&'yes'===toggles.showUserInfo&&
stamps.push(Widget.createController('stamp',{
width:stampSize,
height:stampSize,
iconClass:'tf-settings',
badge:!0,
title:'Your Info',
highlight:'Complete your details',
onClick:_showUserSetup})),



_affixStamps(stamps);
},
_recordStampPress=function(stamp){
require('services/event_tracking_service').record('tap-stamp',{type:stamp});
},

_showPrograms=function(){
_recordStampPress('programs'),
DISPATCHER.trigger('tf:app.slideWindow.open',{
content:{
widget:'tf.app.today',
controller:'programsCard',
args:{}}});


},

_showRoutines=function(){
_recordStampPress('routines'),
DISPATCHER.trigger('tf:app.slideWindow.open',{
content:{
widget:'tf.app.today',
controller:'routinesCard',
args:{}}});


},

_showProgress=function(){
_recordStampPress('progress');
var win=Alloy.createWidget('tf.app.progress',{
closeOnBack:!0}).
main.getView();

require('ui/common/custom_window').openWindow(win);
},

_showUserSetup=function(){
_recordStampPress('user-setup');

var sessionstart=new Date;
require('services/event_tracking_service').record('start-user-setup',{}),

DISPATCHER.once('tf:userinfo.close',function uiClose(){
require('services/event_tracking_service').record('end-user-setup',{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});

var toggles=cus.singleton().get('toggles');


toggles.showUserInfo='no',
cus.save({
toggles:toggles}),

_update();
}),
DISPATCHER.trigger('tf:progress.start',{
message:'Loading...',
id:'update-user'}),

require('services/metric_service').getCurrent().then(function(metrics){var
cu=cus.singleton(),
toggles=cu.get('toggles'),
ui=Alloy.createWidget('tf.app.userinfo',{
hideGroupPage:'challenge'!==toggles.uxMode,
user:cu.get('user'),
metrics:metrics});

}).finally(function(){

DISPATCHER.trigger('tf:progress.stop',{
id:'update-user'});

});
};

_init(),

exports.refresh=_update,

exports.cleanup=function(){
DISPATCHER.off('tf:rx.loaded',_update),
DISPATCHER.off('tf:routines.loaded',_update),
DISPATCHER.off('tf:routines.dashboard.loaded',_update);
},









_.extend($,exports);
}

module.exports=Controller;