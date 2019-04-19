var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.meditate/'+s:
s.substring(0,index)+'/tf.app.meditate/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.meditate');




if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='selecttalk',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.selecttalk=Ti.UI.createView(
{left:Alloy.Globals.Style.Widget.Meditate.ViewWidth,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,id:'selecttalk'}),

$.__views.selecttalk&&$.addTopLevelView($.__views.selecttalk),
$.__views.tableview=Ti.UI.createTableView(
{backgroundColor:'transparent',top:'15dp',left:0,width:Ti.UI.FILL,height:Ti.UI.FILL,showVerticalScrollIndicator:!1,opacity:0,separatorStyle:Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE,id:'tableview'}),

$.__views.selecttalk.add($.__views.tableview),
$.__views.activity_indicator=Ti.UI.createActivityIndicator(
{height:Ti.UI.FILL,width:Ti.UI.FILL,backgroundColor:'#d999',color:'#fff',font:{fontFamily:Alloy.CFG.fontBold,fontSize:'12dp'},zIndex:999,style:Ti.UI.ActivityIndicatorStyle.DARK,id:'activity_indicator'}),

$.__views.selecttalk.add($.__views.activity_indicator),
exports.destroy=function(){},




_.extend($,$.__views);var


path,


main,
selecttime,
playtalk,screenView=$.selecttalk,
title='Select',

tableView_data=[],
programItems=[];

$.activity_indicator.show(),


$.init=function(Main,Selecttime,Playtalk){
main=Main,
selecttime=Selecttime,
playtalk=Playtalk;
};
var _cancel=function(){
path.cancelled=!0,
path.cancelState='selecttalk',
main.finish(path),
$.end();
};
$.start=function(Path){
DISPATCHER.trigger('tf:main.home.show'),
DISPATCHER.on('tf:main.home.click',_cancel),
path=Path,
main.show(screenView,title),
path.rxProgram&&
setProgram();

},

$.end=function(){
DISPATCHER.trigger('tf:selecttalk.done'),
DISPATCHER.off('tf:main.home.click',_cancel),
main.hide(screenView);
};var

next=function(item){

path.selecttalk={
item:item},

path.meditate?
selecttime.start(path):

playtalk.start(path),


$.end();
},

setProgram=function(){
tableView_data=[],
programItems=[];

























for(var
item,tableView_rows=[],program=path.rxProgram.program,progress=path.rxProgram.progress,doneSuggested=!1,isCompleted=function(piId){for(var i=0;i<progress.length;i++)if(progress[i].programItemId===piId){if(progress[i].completed)return!0;break}return!1},isSuggested=function(piId){return!doneSuggested&&(isCompleted(piId)||(doneSuggested=!0),doneSuggested)},suggestedIndex=-1,enabledIndex=-1,i=0;i<program.items.length;i++)


if(item=program.items[i],'AUDIO'===item.content.type&&item.enabled){++
enabledIndex;var
cell=Widget.createController('talkrow'),
suggested=isSuggested(item.id),
cellSettings={
"#title_label":{
text:item.content.title},

"#thumbnail_imageview":{
height:'50dp',
image:require('bootstrap/env').getApiURL()+'/rest/content/'+item.content.id+'/thumbnail'},

"#viewed_view":{
opacity:isCompleted(item.id)?1:0}};





suggested&&(
cell.animateSuggested(),
suggestedIndex=enabledIndex),

cell.updateViews(cellSettings),
tableView_data.push(cell),
tableView_rows.push(cell.getView()),
programItems.push(item);
}

$.tableview.setData(tableView_rows),
-1!=suggestedIndex&&
$.tableview.scrollToIndex(suggestedIndex),

$.activity_indicator.hide();
var tableview_animation=Ti.UI.createAnimation({
opacity:1,
duration:500,
curve:Titanium.UI.ANIMATION_CURVE_EASE_OUT});

$.tableview.animate(tableview_animation);
};




$.tableview.addEventListener('click',function(e){
$.tableview.touchEnabled=!1,
tableView_data[e.index].animateClick(function(){var
idx=e.index,
item=programItems[idx];
next(item),
setTimeout(function(){
$.tableview.touchEnabled=!0;
},500);
});
}),

$.cleanup=function(){},









_.extend($,exports);
}

module.exports=Controller;