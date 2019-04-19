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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='task',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.taskContainer=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,layout:'vertical',id:'taskContainer'}),

$.__views.taskContainer&&$.addTopLevelView($.__views.taskContainer),
$.__views.__alloyId153=Ti.UI.createScrollView(
{layout:'vertical',id:'__alloyId153'}),

$.__views.taskContainer.add($.__views.__alloyId153),
$.__views.nameCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'nameCell'}),

$.__views.__alloyId153.add($.__views.nameCell),
$.__views.__alloyId154=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Name',id:'__alloyId154'}),

$.__views.nameCell.add($.__views.__alloyId154),
$.__views.__alloyId155=Ti.UI.createView(
{right:15,width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId155'}),

$.__views.nameCell.add($.__views.__alloyId155),
$.__views.name=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,height:30,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,width:Alloy.Globals.Style.Size.Width.pct55,id:'name',text:'something'}),

$.__views.__alloyId155.add($.__views.name),
$.__views.__alloyId156=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandGrey,text:Alloy.Globals.Style.RightString,left:10,id:'__alloyId156'}),

$.__views.__alloyId155.add($.__views.__alloyId156),
$.__views.__alloyId157=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId157'}),

$.__views.nameCell.add($.__views.__alloyId157),
$.__views.categoryCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',id:'categoryCell'}),

$.__views.__alloyId153.add($.__views.categoryCell),
$.__views.__alloyId158=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontSemiBold,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,text:'Category',id:'__alloyId158'}),

$.__views.categoryCell.add($.__views.__alloyId158),
$.__views.__alloyId159=Ti.UI.createView(
{right:15,width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId159'}),

$.__views.categoryCell.add($.__views.__alloyId159),
$.__views.category=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,height:30,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,width:Alloy.Globals.Style.Size.Width.pct55,id:'category',text:'something'}),

$.__views.__alloyId159.add($.__views.category),
$.__views.__alloyId160=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandGrey,text:Alloy.Globals.Style.RightString,left:10,id:'__alloyId160'}),

$.__views.__alloyId159.add($.__views.__alloyId160),
$.__views.__alloyId161=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId161'}),

$.__views.categoryCell.add($.__views.__alloyId161),
$.__views.deleteCell=Ti.UI.createView(
{height:50,backgroundColor:'#fff',top:70,bottom:50,id:'deleteCell'}),

$.__views.__alloyId153.add($.__views.deleteCell),
$.__views.__alloyId162=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,top:0,id:'__alloyId162'}),

$.__views.deleteCell.add($.__views.__alloyId162),
$.__views.__alloyId163=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:18},color:Alloy.Globals.Style.Color.BrandPinkDark,height:30,text:'Delete',id:'__alloyId163'}),

$.__views.deleteCell.add($.__views.__alloyId163),
$.__views.__alloyId164=Ti.UI.createView(
{left:10,right:10,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,bottom:0,id:'__alloyId164'}),

$.__views.deleteCell.add($.__views.__alloyId164),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='TASK';var








task,
textEditView,state=Alloy.Globals.Nav.Routines.state,animateButton=require('utils/ui').animateClick,navigation=Alloy.Globals.Nav.Routines,config=Alloy.Globals.Style.Widget.Routines,Q=require('vendor/q');
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
backEnabled:!0});

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
backEnabled:!0});

},1e3,!0),

getTask=function(){
return task;
},

setTask=function(t){
task=t,
$.updateViews({
"#name":{
text:task.name?task.name:'Tap to set...',
font:{
fontFamily:task.name?Alloy.CFG.fontNormal:Alloy.CFG.fontLightItalic}},


"#category":{
text:task.category?task.category.charAt(0).toUpperCase()+task.category.slice(1).toLowerCase():'Tap to set...',
font:{
fontFamily:task.category?Alloy.CFG.fontNormal:Alloy.CFG.fontLightItalic}},


"#deleteCell":{
visible:!!task.id}});


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
editText('Name','Name e.g. \'Take my meds\' ...',task.name,function(data){
task.name=data,
setTask(task);
});
});
}),

$.categoryCell.addEventListener('click',function(){
animateCell($.categoryCell,function(){var
list=[],
categories=['EXERCISE','MEDICATION','MINDFULNESS','MEALS','OTHER'];
_.forEach(categories,function(c){
list.push({
text:c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),
selected:task.category&&task.category===c,
value:c});

}),
editList('Add Category',list,!1,!0,function(list){
task.category=null,
_.forEach(list,function(item){
item.selected&&(
task.category=item.value);

}),
setTask(task);
});
});
}),

$.deleteCell.addEventListener('click',function(){
animateCell($.deleteCell,function(){var
msg='\nAre you sure you want to permanently delete this task?\n\nNOTE: All routines that contain this task will be updated',
dialog=Ti.UI.createAlertDialog({
buttonNames:['Yes','No'],
message:msg,
title:'Delete Task',
persistent:!0,
canceledOnTouchOutside:!1});

dialog.addEventListener('click',function dlgClick(e){
0==e.index&&(
task.delete=!0,

navigation.fireEvent('nav.bar.right.clicked',{
tag:$.TAG}));


}),
dialog.show();
});
}),

exports.setTask=setTask,
exports.getTask=getTask,
$.cleanup=function(){},









_.extend($,exports);
}

module.exports=Controller;