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




if(this.__widgetId='tf.app.activitylog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activitylog',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createScrollView(
{layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.activityLists=Alloy.createWidget('tf.app.tableview','widget',{padtop:24,padbottom:24,left:16,right:16,opacity:100,rowType:{widget:'tf.app.activitylog',controller:'day_cell'},type:'simulated',id:'activityLists',__parentSymbol:$.__views.container}),
$.__views.activityLists.setParent($.__views.container),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='ACTIVITYLOG';var
Q=require('vendor/q'),
navigation=Alloy.Globals.Nav.ActivityLog,

currentScroll=6,
args=arguments[0]||{},

onNav=function(callback){
navigation.addEventListener('nav.transitionstart',function nav(){
navigation.removeEventListener('nav.transitionstart',nav),
callback();
});
},

setActivities=function(summaryData){

for(var tableData=[],i=7;0<i;i--){var
thisDay=require('/utils/date').getLongDayString(summaryData.data[i].start),
todaysData=summaryData.data[i].activitySummary||[{}];
tableData.push({dayLabel:thisDay,activity:todaysData});
}

$.activityLists.setData(tableData),

DISPATCHER.trigger('tf:progress.stop',{
id:'delete-activity'});

},

_showSpinner=function(){
return Q.fcall(function(){



return DISPATCHER.trigger('tf:progress.start',{message:'Loading...'}),!0;
});
},

_scroll=_.debounce(function(){!1;






},1,!1),

_hideSpinner=function(){
DISPATCHER.trigger('tf:progress.stop');
},

_loadActivities=function(){
return require('services/summary_service').getSummaryData().then(setActivities).catch(function(error){
LOGGER.error('Error loading exercises: '+error);
});
},

init=function(){
DISPATCHER.on('tf:summary.loaded',_loadActivities),
onNav(_loadActivities),
$.container.addEventListener('postlayout',_scroll);
};

init(),

$.cleanup=function(){
DISPATCHER.trigger('tf:app.drawer.select',{id:'dashboard'}),
DISPATCHER.off('tf:summary.loaded',_loadActivities),
$.activityLists.cleanup(),
$.container.removeEventListener('postlayout',_scroll);
},









_.extend($,exports);
}

module.exports=Controller;