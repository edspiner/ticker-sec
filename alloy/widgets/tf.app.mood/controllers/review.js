var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.mood/'+s:
s.substring(0,index)+'/tf.app.mood/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.mood');




if(this.__widgetId='tf.app.mood',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='review',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.review=Ti.UI.createView(
{height:Ti.UI.SIZE,backgroundColor:'#F8FAFB',id:'review'}),

$.__views.review&&$.addTopLevelView($.__views.review),
$.__views.closed=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'closed'}),

$.__views.review.add($.__views.closed),
_open?$.addListener($.__views.closed,'touchstart',_open):__defers['$.__views.closed!touchstart!_open']=!0,$.__views.show=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.RedPink,height:36,text:'Show mood review',id:'show'}),

$.__views.closed.add($.__views.show),
$.__views.opened=Ti.UI.createView(
{height:0,backgroundColor:'#F8FAFB',opacity:0,id:'opened',layout:'vertical'}),

$.__views.review.add($.__views.opened),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontMedium,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,height:40,text:'So far today you\u2019ve felt\u2026',id:'title'}),

$.__views.opened.add($.__views.title),
_close?$.addListener($.__views.title,'touchstart',_close):__defers['$.__views.title!touchstart!_close']=!0,$.__views.moodList=Alloy.createWidget('tf.app.tableview','widget',{rowType:{widget:'tf.app.mood',controller:'mood_cell'},opacity:0,height:Ti.UI.SIZE,type:'simulated',id:'moodList',__parentSymbol:$.__views.opened}),
$.__views.moodList.setParent($.__views.opened),
$.__views.hide=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.RedPink,height:36,text:'Hide mood review',id:'hide'}),

$.__views.opened.add($.__views.hide),
_close?$.addListener($.__views.hide,'touchstart',_close):__defers['$.__views.hide!touchstart!_close']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools'),
du=require('utils/date'),

open=!1;

WTools.setTiProps(args,$.review);var

_init=function(){},

_loadMoodData=function(start,end){
return require('services/metric_service').query('Mood',start.getTime(),end.getTime());
},

_update=function(callback){
if(open){var
date=new Date,
data=[];
_loadMoodData(du.getStartOfDay(date),date).then(function(moods){
data=moods;
}).catch(function(error){}).finally(function(){
$.moodList.setData(data),
data.length?(
$.opened.height=76+36*data.length,
$.opened.animate({opacity:1,duration:150})):

_close(),

callback&&callback();
});
}
},

_open=function(){
open=!0,
$.closed.backgroundColor=Alloy.Globals.Style.Color.SilverTwo,
_update(function(){
$.closed.backgroundColor='#F8FAFB';
}),
require('services/event_tracking_service').record('show-mood-review',{});
},

_close=function(){
open=!1,
$.opened.height=0,
$.opened.opacity=0,
require('services/event_tracking_service').record('hide-mood-review',{});
},

showing=!1,
_show=function(show){
show!==showing&&(
showing=show,
$.review.height=showing?Ti.UI.SIZE:0,
!showing&&_close(),
_update());

};

_init(),

exports.show=_show,
exports.update=_update,





__defers['$.__views.closed!touchstart!_open']&&$.addListener($.__views.closed,'touchstart',_open),__defers['$.__views.title!touchstart!_close']&&$.addListener($.__views.title,'touchstart',_close),__defers['$.__views.hide!touchstart!_close']&&$.addListener($.__views.hide,'touchstart',_close),



_.extend($,exports);
}

module.exports=Controller;