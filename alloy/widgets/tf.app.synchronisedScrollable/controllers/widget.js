var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.synchronisedScrollable/'+s:
s.substring(0,index)+'/tf.app.synchronisedScrollable/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.synchronisedScrollable');




if(this.__widgetId='tf.app.synchronisedScrollable',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createView(
{height:Ti.UI.SIZE,bottom:16,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container);
var __alloyId235=[];
$.__views.syncScrollable=Ti.UI.createScrollableView(
{cacheSize:7,views:__alloyId235,id:'syncScrollable',showPagingControl:!1,disableBounce:!0}),

$.__views.container.add($.__views.syncScrollable),
_scroll?$.addListener($.__views.syncScrollable,'scroll',_scroll):__defers['$.__views.syncScrollable!scroll!_scroll']=!0,_scrollEnd?$.addListener($.__views.syncScrollable,'scrollEnd',_scrollEnd):__defers['$.__views.syncScrollable!scrollEnd!_scrollEnd']=!0,$.__views.backward=Ti.UI.createView(
{left:0,width:50,height:60,opacity:0,id:'backward'}),

$.__views.container.add($.__views.backward),
_backward?$.addListener($.__views.backward,'touchstart',_backward):__defers['$.__views.backward!touchstart!_backward']=!0,$.__views.backwardIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:21},color:Alloy.Globals.Style.Color.LightBlue,text:'d',width:Ti.UI.SIZE,id:'backwardIcon'}),

$.__views.backward.add($.__views.backwardIcon),
$.__views.forward=Ti.UI.createView(
{right:0,width:50,height:60,opacity:0,id:'forward'}),

$.__views.container.add($.__views.forward),
_forward?$.addListener($.__views.forward,'touchstart',_forward):__defers['$.__views.forward!touchstart!_forward']=!0,$.__views.forwardIcon=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:21},color:Alloy.Globals.Style.Color.LightBlue,text:'e',width:Ti.UI.SIZE,id:'forwardIcon'}),

$.__views.forward.add($.__views.forwardIcon),
$.__views.fastForward=Ti.UI.createView(
{right:-8,borderRadius:8,width:44,height:36,opacity:0,backgroundColor:'#E3F5FB',bottom:0,id:'fastForward',layout:'horizontal'}),

$.__views.fastForward&&$.addTopLevelView($.__views.fastForward),
_fastForward?$.addListener($.__views.fastForward,'touchstart',_fastForward):__defers['$.__views.fastForward!touchstart!_fastForward']=!0,$.__views.__alloyId236=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.LightBlue,text:'e',width:Ti.UI.SIZE,height:Ti.UI.FILL,left:6,id:'__alloyId236'}),

$.__views.fastForward.add($.__views.__alloyId236),
$.__views.__alloyId237=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:16},color:Alloy.Globals.Style.Color.LightBlue,text:'e',width:Ti.UI.SIZE,height:Ti.UI.FILL,left:-9,id:'__alloyId237'}),

$.__views.fastForward.add($.__views.__alloyId237),
exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
WTools=require('WidgetTools'),
animateButton=require('utils/ui').animateClick;

WTools.setTiProps(args,$.syncScrollable),

$.syncScrollable.disableBounce=args.disableBounce;var



current,
next,


currentPage,scrollSyncId=args.scrollSyncId,scrollCount=0,pages=[],first=!0,

_init=function(){
DISPATCHER.on('tf:app.synchronisedScrollable.scrollend',_syncScrollEnd),
DISPATCHER.on('tf:app.synchronisedScrollable.scrollToId',_syncScrollToId);
},

_syncScrollEnd=function(e){
scrollSyncId&&e.scrollSyncId&&e.scrollSyncId===scrollSyncId&&!e.simulated&&(

LOGGER.debug('SET PAGE ON SYNCED SCROLLEND syncId:'+scrollSyncId+' ['+args.pageType.args.type+'] page:'+e.pageidx),
exports.setPage(e.pageidx,!0));

},

_syncScrollToId=function(e){
if(scrollSyncId&&e.scrollSyncId&&e.scrollSyncId===scrollSyncId){
var page=_.find(pages,function(p){
return p.getId()===e.id;
});
page&&(

LOGGER.debug('SET PAGE - syncId:'+scrollSyncId+' ['+args.pageType.args.type+'] page:'+e.pageidx),
exports.setPage(page.getPageIdx(),args.pageType.args.type!==e.type));

}
},

_scroll=function(e){var _Mathabs=





Math.abs;if(1==scrollCount++)return current=e.currentPage,void(next=current+(e.currentPageAsFloat>e.currentPage?1:-1));var nextOpacity=1*_Mathabs(e.currentPageAsFloat-current),
currentOpacity=1-Math.min(1.5*_Mathabs(e.currentPageAsFloat-current),1);
0<=current&&current<$.syncScrollable.views.length&&(
$.syncScrollable.views[current].opacity=currentOpacity),

0<=next&&next<$.syncScrollable.views.length&&(
$.syncScrollable.views[next].opacity=nextOpacity);

},

donefirst=!1,
_scrollEnd=function(e,simulated){
var currentScrollCount=scrollCount;

simulated||(

scrollCount=0);





var scrolling=1<currentScrollCount||simulated;

if(!scrolling)

return void LOGGER.debug('IGNORING SCROLLEND['+args.pageType.args.type+'] page:'+currentPage+' simulated:'+simulated+' scrollCount:'+currentScrollCount);

var prevPage=currentPage;
currentPage=e?e.currentPage:$.syncScrollable.currentPage,
LOGGER.debug('ON SCROLLEND['+args.pageType.args.type+'] page:'+currentPage+' simulated:'+simulated+' scrollCount:'+currentScrollCount),
DISPATCHER.trigger('tf:app.synchronisedScrollable.scrollend',{id:pages[currentPage].getId(),pageidx:currentPage,scrollSyncId:scrollSyncId,simulated:simulated}),
donefirst&&prevPage!=currentPage&&
require('services/event_tracking_service').record('scroll-view',{id:scrollSyncId,type:args.pageType.args.type,page:currentPage}),

donefirst=!0;
},

_forward=function(e){
animateButton($.forwardIcon,$.forwardIcon.color,.8,function(){
exports.setPage(currentPage+1),
require('services/event_tracking_service').record('scroll-view',{id:scrollSyncId,type:args.pageType.args.type,page:currentPage,button:'forward'});
});
},
_fastForward=function(e){
animateButton($.fastForward,$.fastForward.color,.8,function(){
exports.setPage(pages.length-1),
require('services/event_tracking_service').record('scroll-view',{id:scrollSyncId,type:args.pageType.args.type,page:currentPage,button:'fast-forward'});
});
},
_backward=function(e){
animateButton($.backwardIcon,$.backwardIcon.color,.8,function(){
exports.setPage(currentPage-1),
require('services/event_tracking_service').record('scroll-view',{id:scrollSyncId,type:args.pageType.args.type,page:currentPage,button:'backward'});
});
},

_setViews=function(views){
$.syncScrollable.setViews(views);
};

_init(),

exports.setPage=function(num,direct){

if(LOGGER.debug('SETTING PAGE['+args.pageType.args.type+'] current:'+currentPage+' page:'+num+' direct:'+direct+' first:'+first),0<=num&&num<pages.length){

if(currentPage=num,!first&&!direct){
var view=$.syncScrollable.getViews()[num];
$.syncScrollable.scrollToView(view);
}else
$.syncScrollable.views[num].opacity=1,


$.syncScrollable.setCurrentPage(num),
first&&

_scrollEnd({currentPage:num},!0);


$.backward.opacity=0===num?0:1,
$.forward.opacity=num===pages.length-1?0:1,
$.fastForward.opacity=num<pages.length-2?1:0,
first=!1;
}
},

exports.setData=function(data){
if(data.length===pages.length){

for(var i=0;i<data.length;i++)
data[i].pageidx=i,
pages[i].setData(data[i]);

LOGGER.debug('UPDATING PAGES['+args.pageType.args.type+'] currentPage:'+currentPage),

_scrollEnd({currentPage:currentPage},!0);
}else{

_.forEach(pages,function(page){
page.cleanup&&page.cleanup();
}),
pages=[];
var views=[];
if(data.length)
for(var i=0;i<data.length;i++){
data[i].pageidx=i;var
wargs=_.extend({},args.pageType.args,data[i]),
page=Widget.createWidget(args.pageType.widget,args.pageType.controller||'widget',wargs);
pages.push(page),
views.push(page.getView());
}

_setViews(views);

var p=pages[pages.length-1];
exports.setPage(p.getPageIdx(),!0);
}
},

exports.cleanup=function(){
DISPATCHER.off('tf:app.synchronisedScrollable.scrollend',_syncScrollEnd),
DISPATCHER.off('tf:app.synchronisedScrollable.scrollToId',_syncScrollToId);
},





__defers['$.__views.syncScrollable!scroll!_scroll']&&$.addListener($.__views.syncScrollable,'scroll',_scroll),__defers['$.__views.syncScrollable!scrollEnd!_scrollEnd']&&$.addListener($.__views.syncScrollable,'scrollEnd',_scrollEnd),__defers['$.__views.backward!touchstart!_backward']&&$.addListener($.__views.backward,'touchstart',_backward),__defers['$.__views.forward!touchstart!_forward']&&$.addListener($.__views.forward,'touchstart',_forward),__defers['$.__views.fastForward!touchstart!_fastForward']&&$.addListener($.__views.fastForward,'touchstart',_fastForward),



_.extend($,exports);
}

module.exports=Controller;