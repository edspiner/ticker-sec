var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.chart/'+s:
s.substring(0,index)+'/tf.app.chart/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.chart');




if(this.__widgetId='tf.app.chart',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='circleChart',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.circleChart=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'circleChart'}),

$.__views.circleChart&&$.addTopLevelView($.__views.circleChart),
$.__views.main=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontThin,fontSize:50},color:'#111',id:'main'}),

$.__views.circleChart.add($.__views.main),
$.__views.sub=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.BattleshipGrey,id:'sub'}),

$.__views.circleChart.add($.__views.sub),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0],
WTools=require('WidgetTools'),
lifecycle=require('bootstrap/lifecycle');

if(!0){
var winId=args.winId||lifecycle.getCurrentWindowId();
LOGGER.debug('CREATING CIRCLE CHART['+args.id+'] on Window:'+winId),


args.winId||
$.circleChart.addEventListener('postlayout',function setWinId(){
$.circleChart.removeEventListener('postlayout',setWinId),
winId=lifecycle.getCurrentWindowId(),
LOGGER.debug('UPDATING CIRCLE CHART['+args.id+'] setting Window on layout:'+winId);
});

}

WTools.setTiProps(args,$.circleChart);

var chart=require('ui/common/custom_pie_chart').createPieChart(args.chart).getController();
$.sub.top=.65*(2*args.chart.radius),

$.main.color=args.chart.progressColor,

$.circleChart.add(chart.getView()),

args.textFont&&(
$.main.font=args.textFont),


exports.setProgressColor=function(color,redraw,animate){
chart.setProgressColor(color,redraw,animate);
},
exports.setBorderColor=function(color){
chart.setBorderColor(color);
},

exports.setProgress=function(progress,animate,callback){
lifecycle.isActive()&&(lifecycle.getCurrentWindowId()===winId||'loading'===lifecycle.getCurrentWindowId())?

chart.setProgress(progress,animate,callback):(

callback&&callback({success:!1}),

LOGGER.debug('NOT UPDATING CIRCLE CHART['+args.id+'] PROGRESS AS NOT IN FOREGROUND - Active:'+lifecycle.isActive()+' CurWin:'+lifecycle.getCurrentWindowId()));

},
exports.setText=function(txt){
$.main.text=txt;
},
exports.setSubText=function(txt){
$.sub.text=txt;
},
exports.cleanup=function(){
chart.cleanup(),
chart=null;
},









_.extend($,exports);
}

module.exports=Controller;