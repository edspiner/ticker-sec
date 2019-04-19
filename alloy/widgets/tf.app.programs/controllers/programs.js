var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.programs/'+s:
s.substring(0,index)+'/tf.app.programs/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.programs');




if(this.__widgetId='tf.app.programs',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='programs',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.programs=Ti.UI.createView(
{layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,id:'programs'}),

$.__views.programs&&$.addTopLevelView($.__views.programs),
$.__views.programList=Alloy.createWidget('tf.app.tableview','widget',{padleft:16,padright:16,padtop:16,padbottom:40,rowType:{widget:'tf.app.programs',controller:'program_cell'},id:'programList',__parentSymbol:$.__views.programs}),
$.__views.programList.setParent($.__views.programs),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='PROGRAMS';var





sessionstart,
























































selected,navigation=Alloy.Globals.Nav.Programs,cus=require('services/current_user_service'),args=arguments[0]||{},donefirst=!1,setPrograms=function(rxPrograms){if(!donefirst&&args.selectedProgramId){donefirst=!0;var selected=_.find(rxPrograms,function(rxp){return rxp.program.id===args.selectedProgramId});if(selected)return void showProgram(selected,!args.closeOnBack)}donefirst||trackSessionStart();var sorted=_.chain(rxPrograms).sortBy(function(p){return p.program.title}).sortBy(function(p){var incomplete=_.find(p.program.items,function(i){return!i.done});return incomplete?0:1}).sortBy(function(p){var viewable=_.find(p.program.items,function(i){return i.viewable&&!i.done});return viewable?0:1}).sortBy(function(p){var sticky=_.find(p.program.items,function(i){return i.sticky&&i.due});return sticky?0:1}).sortBy(function(p){return-p.dueItems.length}).value();$.programList.setData(sorted),donefirst=!0},onNav=function(callback){navigation.addEventListener('nav.transitionstart',function nav(){navigation.removeEventListener('nav.transitionstart',nav),callback()})},updatePrograms=function(){var cu=cus.singleton(),toggles=cu.get('toggles'),rx=cu.get('rx');if(rx&&rx.rxPrograms){var rxPrograms=require('services/rx_service').filterPrograms(cu.get('enableProgramThemeMode')?rx.themeRxPrograms:rx.rxPrograms,['VIDEO','DOCUMENT','REPORT']);setPrograms(rxPrograms)}},
showProgram=_.debounce(function(rxProgram,enableDrawer){









function removeListeners(){
navigation.removeEventListener('nav.backstart',onBack);
}

function onBack(event){
event.tag===programView.TAG&&(
$.programList.hide(),
removeListeners(),
programView.cleanup(),
args.closeOnBack&&args.selectedProgramId?


DISPATCHER.trigger('tf:app.window.current.close',{force:!0}):(

!args.closeOnBack&&
DISPATCHER.trigger('tf:app.drawer.select',{id:'programs'}),

onNav(updatePrograms)));


}var programView=Widget.createController('program',{rxProgram:rxProgram});enableDrawer&&(selected=programView),navigation.open(programView,{title:rxProgram.program.title,drawerEnabled:enableDrawer,backEnabled:!enableDrawer,transition:'slideInFromRight'}),programView.init(),
navigation.addEventListener('nav.backstart',onBack);
},500,!0),

trackSessionStart=function(){
require('services/event_tracking_service').record('start-view-programs',{}),
sessionstart=new Date;
},
trackSessionEnd=function(){
sessionstart&&
require('services/event_tracking_service').record('end-view-programs',{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});


},

init=function(){
args.rxPrograms?
setPrograms(args.rxPrograms):

onNav(updatePrograms),

$.programList.onClick(showProgram),
DISPATCHER.on('tf:rx.loaded',updatePrograms);
};

init(),

$.cleanup=function(){
trackSessionEnd(),
selected&&selected.cleanup(),
$.programList.cleanup(),
DISPATCHER.off('tf:rx.loaded',updatePrograms),
LOGGER.debug('IN CLEANUP PROGRAMS'),
DISPATCHER.trigger('tf:programs.close',{});
},









_.extend($,exports);
}

module.exports=Controller;