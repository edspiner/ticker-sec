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




if(this.__widgetId='tf.app.chart',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='barChart',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.barChart=Ti.UI.createView(
{layout:'vertical',id:'barChart'}),

$.__views.barChart&&$.addTopLevelView($.__views.barChart),
$.__views.heading=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.BattleshipGrey,height:20,id:'heading'}),

$.__views.barChart.add($.__views.heading),
$.__views.chart=Ti.UI.createView(
{top:5,left:4,width:Ti.UI.FILL,id:'chart'}),

$.__views.barChart.add($.__views.chart),
$.__views.__alloyId112=Ti.UI.createView(
{width:27,left:0,id:'__alloyId112'}),

$.__views.chart.add($.__views.__alloyId112),
$.__views.lTop=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.BattleshipGrey,top:0,right:0,id:'lTop',text:100}),

$.__views.__alloyId112.add($.__views.lTop),
$.__views.lBottom=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.BattleshipGrey,bottom:0,right:0,id:'lBottom',text:'%'}),

$.__views.__alloyId112.add($.__views.lBottom),
$.__views.__alloyId113=Ti.UI.createView(
{left:31,right:4,height:25,id:'__alloyId113'}),

$.__views.barChart.add($.__views.__alloyId113),
$.__views.lLeft=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.BattleshipGrey,left:0,id:'lLeft'}),

$.__views.__alloyId113.add($.__views.lLeft),
$.__views.lRight=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:15},color:Alloy.Globals.Style.Color.BattleshipGrey,right:0,id:'lRight'}),

$.__views.__alloyId113.add($.__views.lRight),
$.__views.__alloyId114=Ti.UI.createView(
{id:'__alloyId114'}),

$.__views.__alloyId113.add($.__views.__alloyId114),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0],
WTools=require('WidgetTools'),
lifecycle=require('bootstrap/lifecycle');

if(!0){
var winId=args.winId||lifecycle.getCurrentWindowId();
LOGGER.debug('CREATING BAR CHART['+args.id+'] on Window:'+winId);
}
var chartArgs=args.chart||{};
WTools.setTiProps(args,$.barChart);var

headerHeight=25,
footerHeight=25;
$.chart.height=args.height-(headerHeight+footerHeight),


$.chart.addEventListener('postlayout',function postlayout(){
$.chart.removeEventListener('postlayout',postlayout),
chartWidth=$.chart.rect.width;
});var

chartWidth,



barWidth,padding=2,legendWidth=27,

getBackgroundColor=function(active){return(
active?
chartArgs.activeBackground||'#E4E4E4':
chartArgs.inActiveBackground?
chartArgs.inActiveBackground||'#F4F4F4':void 0);

},
getBarColor=function(){
return chartArgs.barColor||Alloy.Globals.Style.Color.BrandProgress;
},
getNoDataColor=function(){
return chartArgs.noDataColor||'#FFFFFF';
},

_setData=function(data){
barWidth=(chartWidth-legendWidth)/data.length;
for(var
bar,i=0;i<data.length;i++)bar=data[i],
$.chart.add(Widget.createController('bar',{
left:i*barWidth+legendWidth,
width:barWidth-2*padding,
backgroundColor:getBackgroundColor(bar.active),
value:bar.nodata?100:bar.value,
barColor:bar.nodata?getNoDataColor():99<bar.value?Alloy.Globals.Style.Color.KiwiGreen:getBarColor(),
barPadding:bar.nodata?padding:0}).
getView());

},

_setXAxisLabels=function(left,right){
$.lLeft.text=left,
$.lRight.text=right;
};

exports.setHeading=function(txt){
$.heading.text=txt;
},
exports.setData=_setData,
exports.setXAxisLabels=_setXAxisLabels,









_.extend($,exports);
}

module.exports=Controller;