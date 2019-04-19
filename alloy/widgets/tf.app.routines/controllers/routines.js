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

function Controller(){var _Mathround=






















































































































































Math.round,Widget=new(require('/alloy/widget'))('tf.app.routines');if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='routines',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};$.__views.routinesContainer=Ti.UI.createView({width:Alloy.Globals.Style.Size.Width.pct100,backgroundColor:Alloy.Globals.Style.Color.PaleGrey,id:'routinesContainer'}),$.__views.routinesContainer&&$.addTopLevelView($.__views.routinesContainer),$.__views.setup=Alloy.createWidget('tf.app.routines','setup',{top:16,left:16,right:16,id:'setup',__parentSymbol:$.__views.routinesContainer}),$.__views.setup.setParent($.__views.routinesContainer),$.__views.routineList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.routines',controller:'routine_cell'},opacity:0,height:Ti.UI.SIZE,padtop:24,padleft:16,padright:16,id:'routineList',__parentSymbol:$.__views.routinesContainer}),$.__views.routineList.setParent($.__views.routinesContainer),exports.destroy=function(){},_.extend($,$.__views),$.TAG='ROUTINES';var sessionstart,editsessionstart,routineView,state=Alloy.Globals.Nav.Routines.state,navigation=Alloy.Globals.Nav.Routines,args=arguments[0]||{},config=Alloy.Globals.Style.Widget.Routines,moment=require('alloy/moment'),Q=require('vendor/q'),cus=require('services/current_user_service'),donefirst=!1;_.defer(function(){routineView=Widget.createController('routine')});var reloadRoutines=function(){require('services/routines_service').getRoutines(!0)},deleteRoutine=function(routine){var deferred=Q.defer(),r=Widget.createModel('routine',{urlParams:{pid:cus.singleton().get('userId'),rid:routine.id},id:routine.id});return DISPATCHER.trigger('tf:progress.start',{id:'save-routine',message:'Deleting...'}),r.destroy().then(function(resp){deferred.resolve({}),reloadRoutines()}).catch(function(error){LOGGER.error('ERROR: '+JSON.stringify(error)),Alloy.Globals.alert('There was a problem deleting your routine.\n\nPlease try again.','Uh Oh!'),deferred.reject({})}).finally(function(result){DISPATCHER.trigger('tf:progress.stop',{id:'save-routine'})}),deferred.promise},validateRoutine=function(routine){return routine.name&&0<routine.name.length?routine.schedule&&0<routine.schedule.length?!!(routine.tasks&&0<routine.tasks.length)||(Alloy.Globals.alert('\nRoutine must contain at least 1 task.\n\nPlease add a task and try again.','Uh Oh!'),!1):(Alloy.Globals.alert('\nRoutine must be scheduled on at least 1 day.\n\nPlease update the schedule and try again.','Uh Oh!'),!1):(Alloy.Globals.alert('\nRoutine name must be set.\n\nPlease set a name and try again.','Uh Oh!'),!1)},upsertRoutine=function(routine){var deferred=Q.defer(),r=Widget.createModel('routine',{urlParams:{pid:cus.singleton().get('userId'),rid:routine.id}});return validateRoutine(routine)?(DISPATCHER.trigger('tf:progress.start',{id:'save-routine',message:'Updating...'}),r.save(routine).then(function(resp){deferred.resolve({}),reloadRoutines()}).catch(function(error){LOGGER.debug('ERROR: '+JSON.stringify(error)),error&&error.description&&-1<error.description.indexOf('already exists')?(Alloy.Globals.alert('\nA routine with this name already exists.\n\nPlease change the name and try again.','Uh Oh!'),deferred.reject({})):(Alloy.Globals.alert('\nThere was a problem saving your routine.\n\nPlease try again.','Uh Oh!'),deferred.reject({}))}).finally(function(result){DISPATCHER.trigger('tf:progress.stop',{id:'save-routine'})})):deferred.reject({}),deferred.promise},trackEditRoutineStart=function(){require('services/event_tracking_service').record('start-routine-edit',{}),editsessionstart=new Date},trackEditRoutineEnd=function(routine,reason){require('services/event_tracking_service').record('end-routine-edit',{routineId:routine.id,reason:reason,duration:_Mathround((new Date().getTime()-editsessionstart.getTime())/1e3)});

},
showRoutine=_.debounce(function(routine,enableDrawer){











function removeListeners(){
navigation.removeEventListener('nav.backstart',onBack),
navigation.removeEventListener('nav.bar.right.clicked',save);
}

function onBack(event){
event.tag===routineView.TAG&&(
$.routineList.hide(),
removeListeners(),
reloadRoutines(),
trackEditRoutineEnd(routine,reason));

}

function save(event){
event.tag===routineView.TAG&&


_.defer(function(){
var r=routineView.getRoutine();
r.delete?(
reason='deleted',
deleteRoutine(r).then(navigation.back)):(

reason=-1===routine.rowidx?'created':'updated',
upsertRoutine(r).then(navigation.back));

});

}trackEditRoutineStart();var reason='cancelled';routineView.setRoutine(_.clone(routine)),navigation.open(routineView,{title:-1===routine.rowidx?'Create Routine':'Edit Routine',drawerEnabled:enableDrawer,backEnabled:!enableDrawer,transition:'slideInFromRight',rightAction:'Save'}),
navigation.addEventListener('nav.backstart',onBack),
navigation.addEventListener('nav.bar.right.clicked',save);
},1e3,!0),

setRoutines=function(routines){

if(config.routines=routines,!donefirst)

if(donefirst=!0,args.create)
_create();else
if(args.selectedRoutineId){
var selected=_.find(routines,function(r){
return r.id===args.selectedRoutineId;
});
if(selected)

return void showRoutine(selected,!args.closeOnBack);

}

if(routines.length){

$.routineList.setTop(0),
$.setup.opacity=0;


var sorted=_.sortBy(routines,function(r){
return moment(r.startTime,['h:m a','H:m']).toDate();
});
$.routineList.setData(sorted);
}else

$.routineList.setTop(400),
$.setup.opacity=1;

},

_updateRoutines=function(){var

cu=cus.singleton(),
routines=cu.get('routines');
setRoutines(routines);
},

onNav=function(callback){
navigation.addEventListener('nav.transitionstart',function nav(e){

navigation.removeEventListener('nav.transitionstart',nav),
callback();
});
},

_routineClick=function(r){
r.activeToggled?

upsertRoutine(r):

showRoutine(r);

},

init=function(){
trackSessionStart(),
config.routines?
setRoutines(config.routines):

onNav(_updateRoutines),

DISPATCHER.on('tf:routines.loaded',_updateRoutines),
$.routineList.onClick(_routineClick),
$.setup.setOnClick(_create),
navigation.addEventListener('nav.bar.right.clicked',_create);
},
_create=function(e){
if(!(e&&e.tag!==$.TAG)){
var routine={
rowidx:-1,
startTime:moment(new Date).format('HH:mm'),
duration:'PT30M',
reminderAtStartTime:!0,
reminderAtCompletionTime:!0,
active:!0,
schedule:['monday','tuesday','wednesday','thursday','friday','saturday','sunday']};

showRoutine(routine)}
},

trackSessionStart=function(){
require('services/event_tracking_service').record('start-routine-setup',{}),
sessionstart=new Date;
},
trackSessionEnd=function(){
require('services/event_tracking_service').record('end-routine-setup',{
duration:_Mathround((new Date().getTime()-sessionstart.getTime())/1e3)});

};

init(),

$.cleanup=function(){
trackSessionEnd(),
LOGGER.error('IN CLEANUP ROUTINES...'),
navigation.removeEventListener('nav.bar.right.clicked',_create),
DISPATCHER.off('tf:routines.loaded',_updateRoutines),
$.routineList.cleanup(),
DISPATCHER.trigger('tf:routines.close',{});
},









_.extend($,exports);
}

module.exports=Controller;