var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'ti.ux.pagingcontrol/'+s:
s.substring(0,index)+'/ti.ux.pagingcontrol/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('ti.ux.pagingcontrol');




if(this.__widgetId='ti.ux.pagingcontrol',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.view=Ti.UI.createView(
{height:9,zIndex:999,width:Ti.UI.SIZE,id:'view'}),

$.__views.view&&$.addTopLevelView($.__views.view),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0],
WTools=require('WidgetTools'),

dots={
active:0,
total:0,
views:[]};


WTools.setTiProps(args,$.view),

$.linkScrollableView=function(scrollable){

if(!scrollable||!scrollable.views)

return void Ti.API.warning('WARNING: ti.ux.pagingcontrol.linkScrollableView(): scrollable not found or does not contain views');


$.view.removeAllChildren();var
countViews=scrollable.views.length,
views=[];
if(1<countViews){

for(var i=0;i<countViews;i++)
views.push(Alloy.createWidget('ti.ux.pagingcontrol','dot',{
left:8*i}).
getView()),
$.view.add(views[i]),
views[i].deactivate();


dots.views=views,
dots.total=countViews,

countViews&&$.setActiveDot(0);
}
},

$.setActiveDot=function(index){
dots.views[index]&&(
dots.views[dots.active].deactivate(),
dots.views[index].activate(),
dots.active=index);

},









_.extend($,exports);
}

module.exports=Controller;