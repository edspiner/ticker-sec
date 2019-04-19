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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='routine',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.routineContainer=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,layout:'vertical',id:'routineContainer'}),

$.__views.routineContainer&&$.addTopLevelView($.__views.routineContainer),
$.__views.__alloyId127=Ti.UI.createScrollView(
{layout:'vertical',id:'__alloyId127'}),

$.__views.routineContainer.add($.__views.__alloyId127),
$.__views.__alloyId128=Ti.UI.createView(
{top:15,layout:'vertical',width:Ti.UI.FILL,height:Ti.UI.SIZE,id:'__alloyId128'}),

$.__views.__alloyId127.add($.__views.__alloyId128),
$.__views.timePicker=Ti.UI.createPicker(
{left:'10dp',right:'10dp',top:0,type:Ti.UI.PICKER_TYPE_TIME,width:Ti.UI.FILL,height:150,backgroundColor:'transparent',bottom:15,id:'timePicker'}),

$.__views.__alloyId128.add($.__views.timePicker),
$.__views.__alloyId129=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId129'}),

$.__views.__alloyId128.add($.__views.__alloyId129),
$.__views.nameCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'nameCell'}),

$.__views.__alloyId127.add($.__views.nameCell),
$.__views.__alloyId130=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Name',id:'__alloyId130'}),

$.__views.nameCell.add($.__views.__alloyId130),
$.__views.__alloyId131=Ti.UI.createView(
{right:15,width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId131'}),

$.__views.nameCell.add($.__views.__alloyId131),
$.__views.name=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,height:30,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,width:Alloy.Globals.Style.Size.Width.pct55,id:'name',text:'something'}),

$.__views.__alloyId131.add($.__views.name),
$.__views.__alloyId132=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandGrey,text:Alloy.Globals.Style.RightString,left:10,id:'__alloyId132'}),

$.__views.__alloyId131.add($.__views.__alloyId132),
$.__views.__alloyId133=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId133'}),

$.__views.nameCell.add($.__views.__alloyId133),
$.__views.scheduleCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'scheduleCell'}),

$.__views.__alloyId127.add($.__views.scheduleCell),
$.__views.__alloyId134=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Schedule',id:'__alloyId134'}),

$.__views.scheduleCell.add($.__views.__alloyId134),
$.__views.__alloyId135=Ti.UI.createView(
{right:15,width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId135'}),

$.__views.scheduleCell.add($.__views.__alloyId135),
$.__views.schedule=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,height:30,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,width:Alloy.Globals.Style.Size.Width.pct55,id:'schedule',text:'something'}),

$.__views.__alloyId135.add($.__views.schedule),
$.__views.__alloyId136=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandGrey,text:Alloy.Globals.Style.RightString,left:10,id:'__alloyId136'}),

$.__views.__alloyId135.add($.__views.__alloyId136),
$.__views.__alloyId137=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId137'}),

$.__views.scheduleCell.add($.__views.__alloyId137),
$.__views.tasksCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'tasksCell'}),

$.__views.__alloyId127.add($.__views.tasksCell),
$.__views.__alloyId138=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Tasks',id:'__alloyId138'}),

$.__views.tasksCell.add($.__views.__alloyId138),
$.__views.__alloyId139=Ti.UI.createView(
{right:15,width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId139'}),

$.__views.tasksCell.add($.__views.__alloyId139),
$.__views.tasks=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,height:30,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,width:Alloy.Globals.Style.Size.Width.pct55,id:'tasks',text:'something'}),

$.__views.__alloyId139.add($.__views.tasks),
$.__views.__alloyId140=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandGrey,text:Alloy.Globals.Style.RightString,left:10,id:'__alloyId140'}),

$.__views.__alloyId139.add($.__views.__alloyId140),
$.__views.__alloyId141=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId141'}),

$.__views.tasksCell.add($.__views.__alloyId141),
$.__views.dueCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'dueCell'}),

$.__views.__alloyId127.add($.__views.dueCell),
$.__views.__alloyId142=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Remind me when due',id:'__alloyId142'}),

$.__views.dueCell.add($.__views.__alloyId142),
$.__views.dueSwitch=Alloy.createWidget('tf.app.routines','toggleSwitch',{right:15,id:'dueSwitch',__parentSymbol:$.__views.dueCell}),
$.__views.dueSwitch.setParent($.__views.dueCell),
$.__views.__alloyId143=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId143'}),

$.__views.dueCell.add($.__views.__alloyId143),
$.__views.pastDueCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'pastDueCell'}),

$.__views.__alloyId127.add($.__views.pastDueCell),
$.__views.__alloyId144=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Remind me if I forget',id:'__alloyId144'}),

$.__views.pastDueCell.add($.__views.__alloyId144),
$.__views.pastDueSwitch=Alloy.createWidget('tf.app.routines','toggleSwitch',{right:15,id:'pastDueSwitch',__parentSymbol:$.__views.pastDueCell}),
$.__views.pastDueSwitch.setParent($.__views.pastDueCell),
$.__views.__alloyId145=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId145'}),

$.__views.pastDueCell.add($.__views.__alloyId145),
$.__views.deleteCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',top:40,bottom:50,id:'deleteCell'}),

$.__views.__alloyId127.add($.__views.deleteCell),
$.__views.__alloyId146=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,top:0,id:'__alloyId146'}),

$.__views.deleteCell.add($.__views.__alloyId146),
$.__views.__alloyId147=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandPinkDark,height:30,text:'Delete',id:'__alloyId147'}),

$.__views.deleteCell.add($.__views.__alloyId147),
$.__views.__alloyId148=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId148'}),

$.__views.deleteCell.add($.__views.__alloyId148),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='ROUTINE';var









routine,
tasks,

taskView,state=Alloy.Globals.Nav.Routines.state,animateButton=require('utils/ui').animateClick,navigation=Alloy.Globals.Nav.Routines,config=Alloy.Globals.Style.Widget.Routines,moment=require('alloy/moment'),Q=require('vendor/q'),cus=require('services/current_user_service');
_.defer(function(){
taskView=Widget.createController('task');
});

var textEditView;
_.defer(function(){
textEditView=Widget.createController('textEdit');
});
var listEditView;
_.defer(function(){
listEditView=Widget.createController('listEdit');
});var
editText=_.debounce(function(name,placeholder,value,callback){
textEditView.setDoneCallback(callback),
textEditView.setText(value),
textEditView.setPlaceholder(placeholder),
navigation.open(textEditView,{
title:name,
backEnabled:!0,
transition:'slideInFromRight'});

},1e3,!0),

editList=_.debounce(function(name,values,multiselect,sort,callback,addCallback,editCallback){
listEditView.setDoneCallback(callback),
listEditView.setAddCallback(addCallback),
listEditView.setEditCallback(editCallback),
listEditView.setMultiSelect(multiselect),
listEditView.setSorted(sort),
listEditView.setList(values),
navigation.open(listEditView,{
title:name,
backEnabled:!0,
transition:'slideInFromRight'});

},1e3,!0),

getTaskList=function(tasks){
var list=[];









return _.forEach(tasks,function(t){list.push({text:t.name,selected:void 0!==_.find(routine.tasks,function(task){return task.id===t.id}),value:t})}),list;
},

getRoutine=function(){
return routine;
},
setRoutine=function(r){
routine=r,
routine.tasks=routine.tasks||[];

var sched=[];
_.forEach(routine.schedule,function(s){
sched.push(s.charAt(0).toUpperCase()+s.slice(1,3).toLowerCase());
});
var tasks=[];
_.forEach(routine.tasks,function(t){
tasks.push(t.name);
}),
$.updateViews({
"#timePicker":{
value:moment(routine.startTime,['h:m a','H:m']).toDate()},

"#name":{
text:routine.name?routine.name:'Tap to set...',
font:{
fontFamily:routine.name?Alloy.CFG.fontNormal:Alloy.CFG.fontLightItalic}},


"#schedule":{
text:sched.length?sched.join(' '):'Tap to set...',
font:{
fontFamily:sched.length?Alloy.CFG.fontNormal:Alloy.CFG.fontLightItalic}},


"#tasks":{
text:tasks.length?tasks.join(', '):'Tap to set...',
font:{
fontFamily:tasks.length?Alloy.CFG.fontNormal:Alloy.CFG.fontLightItalic}},


"#deleteCell":{
visible:!!(0<=routine.rowidx)}}),


$.dueSwitch.setToggle(routine.reminderAtStartTime),
$.pastDueSwitch.setToggle(routine.reminderAtCompletionTime);
},

showTask=_.debounce(function(task){







function removeListeners(){
navigation.removeEventListener('nav.backstart',onBack),
navigation.removeEventListener('nav.bar.right.clicked',save);
}
function onBack(event){
event.tag===taskView.TAG&&(
removeListeners(),
listEditView.setList(getTaskList(tasks)));

}
function save(event){
event.tag===taskView.TAG&&




_.defer(function(){
var t=taskView.getTask();
t.delete?
deleteTask(t).then(navigation.back):

upsertTask(t).then(navigation.back);

});

}taskView.setTask(_.clone(task)),navigation.open(taskView,{title:task.id?'Edit Task':'Create Task',backEnabled:!0,rightAction:'Save',transition:'slideInFromRight'}),
navigation.addEventListener('nav.backstart',onBack),
navigation.addEventListener('nav.bar.right.clicked',save);
},1e3,!0),

deleteTask=function(task){var
deferred=Q.defer(),
t=Widget.createModel('task',{
urlParams:{
pid:cus.singleton().get('userId'),
tid:task.id},

id:task.id});
























return DISPATCHER.trigger('tf:progress.start',{id:'save-task',message:'Deleting...'}),t.destroy().then(function(resp){deferred.resolve({});for(var i=0;i<tasks.length;i++)if(tasks[i].id===task.id){tasks.splice(i,1);break}listEditView.setList(getTaskList(tasks))}).catch(function(error){LOGGER.error('ERROR: '+JSON.stringify(error)),Alloy.Globals.alert('There was a problem deleting your task.\n\nPlease try again.','Uh Oh!'),deferred.reject({})}).finally(function(result){DISPATCHER.trigger('tf:progress.stop',{id:'save-task'})}),deferred.promise;
},

validateTask=function(task){return(
task.name&&0<task.name.length?!!(



task.category&&0<task.category.length)||(
Alloy.Globals.alert('\nA task must be assigned a task category.\n\nPlease set a category and try again.','Uh Oh!'),!1):(Alloy.Globals.alert('\nTask name must be set.\n\nPlease set a name and try again.','Uh Oh!'),!1));



},

upsertTask=function(task){var
deferred=Q.defer(),
t=Widget.createModel('task',{
urlParams:{
pid:cus.singleton().get('userId'),
tid:task.id}});
















































return validateTask(task)?(DISPATCHER.trigger('tf:progress.start',{id:'save-task',message:'Updating...'}),t.save(task).then(function(resp){if(deferred.resolve({}),!task.id)tasks.splice(tasks.length,0,resp),routine.tasks.splice(routine.tasks.length,0,resp);else{for(var i=0;i<tasks.length;i++)if(tasks[i].id===task.id){tasks[i]=resp;break}for(var i=0;i<routine.tasks.length;i++)if(routine.tasks[i].id===task.id){routine.tasks[i]=resp;break}}listEditView.setList(getTaskList(tasks))}).catch(function(error){LOGGER.debug('ERROR: '+JSON.stringify(error)),error&&error.description&&-1<error.description.indexOf('already exists')?(Alloy.Globals.alert('\nA task with this name already exists.\n\nPlease change the name and try again.','Uh Oh!'),deferred.reject({})):(Alloy.Globals.alert('\nThere was a problem saving your task.\n\nPlease try again.','Uh Oh!'),deferred.reject({}))}).finally(function(result){DISPATCHER.trigger('tf:progress.stop',{id:'save-task'})})):deferred.reject({}),deferred.promise;
},

animateCell=function(view,callback){
view.animate({
backgroundColor:'#2000',
duration:100,
autoreverse:!0},
callback);
};

$.nameCell.addEventListener('click',function(){
animateCell($.nameCell,function(){
editText('Name','Name e.g. \'Morning\' ...',routine.name,function(data){
routine.name=data,
setRoutine(routine);
});
});
}),

$.scheduleCell.addEventListener('click',function(){
animateCell($.scheduleCell,function(){var
list=[],
days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
_.forEach(days,function(day){
list.push({
text:day.charAt(0).toUpperCase()+day.slice(1),
selected:routine.schedule&&-1<routine.schedule.indexOf(day),
value:day});

}),
editList('Add Schedule',list,!0,!1,function(list){
var schedule=[];
_.forEach(list,function(item){
item.selected&&
schedule.push(item.value);

}),
routine.schedule=schedule,
setRoutine(routine);
});
});
}),

$.tasksCell.addEventListener('click',function(){
animateCell($.tasksCell,function(){
DISPATCHER.trigger('tf:progress.start',{
id:'load-tasks',
message:'Loading...'}),

require('services/tasks_service').getTasks().then(function(ts){
tasks=ts,
editList('Add Tasks',getTaskList(tasks),!0,!0,function(list){
var tasks=[];
_.forEach(list,function(item){
item.selected&&
tasks.push(item.value);

}),
routine.tasks=tasks,
setRoutine(routine);
},function addCallback(){
var newTask={};
showTask(newTask);
},function editCallback(item){
showTask(item.value);
});
}).finally(function(){
DISPATCHER.trigger('tf:progress.stop',{
id:'load-tasks'});

});
});
}),

$.timePicker.addEventListener('change',function(e){
routine&&(
routine.startTime=moment($.timePicker.value).format('HH:mm'));

}),

$.dueSwitch.setCallback(function(val){
routine.reminderAtStartTime=val;
}),

$.pastDueSwitch.setCallback(function(val){
routine.reminderAtCompletionTime=val;
}),

$.deleteCell.addEventListener('click',function(){
animateCell($.deleteCell,function(){var
msg='\nAre you sure you want to permanently delete this routine?',
dialog=Ti.UI.createAlertDialog({
buttonNames:['Yes','No'],
message:msg,
title:'Delete Routine',
persistent:!0,
canceledOnTouchOutside:!1});

dialog.addEventListener('click',function dlgClick(e){
0==e.index&&(
routine.delete=!0,

navigation.fireEvent('nav.bar.right.clicked',{
tag:$.TAG}));


}),
dialog.show();
});
}),

exports.setRoutine=setRoutine,
exports.getRoutine=getRoutine,

$.cleanup=function(){},









_.extend($,exports);
}

module.exports=Controller;