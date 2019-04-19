var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.main/'+s:
s.substring(0,index)+'/tf.app.main/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.main');




if(this.__widgetId='tf.app.main',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winMain=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',pinned:!0,exitOnClose:!1,id:'winMain'}),

$.__views.winMain&&$.addTopLevelView($.__views.winMain),
$.__views.main=Ti.UI.createView(
{opacity:0,id:'main'}),

$.__views.winMain.add($.__views.main),
$.__views.wrapper=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,id:'wrapper'}),

$.__views.main.add($.__views.wrapper),
$.__views.container=Ti.UI.createView(
{id:'container',layout:'vertical'}),

$.__views.wrapper.add($.__views.container),
$.__views.navbar=Alloy.createWidget('tf.app.navbar','widget',{id:'navbar',__parentSymbol:$.__views.container}),
$.__views.navbar.setParent($.__views.container),
$.__views.scrollableView=Alloy.createWidget('ti.ux.scrollableview','widget',{disableBounce:'true',hideUnderline:!0,pagingControlPosition:'hide',id:'scrollableView',__parentSymbol:$.__views.container}),
$.__views.scrollableView.setParent($.__views.container),
$.__views.toast=Alloy.createWidget('tf.app.toast','widget',{id:'toast',__parentSymbol:$.__views.wrapper}),
$.__views.toast.setParent($.__views.wrapper),
exports.destroy=function(){},




_.extend($,$.__views);var











nativeWidth,nativeHeight,cus=require('services/current_user_service'),dimension=require('platform/dimension'),firstInit=!0,widgetsInited=!1,showingTodayView=!1,showingMeditate=!1,

_init=function(){


nativeWidth=dimension.deviceWidthDp(),


nativeHeight=dimension.deviceHeightDp();var

titleHeight=0?40+dimension.statusBarHeightDp():40,
pagingHeight=10,
totalTitleHeight=titleHeight+pagingHeight;
nativeHeight-=totalTitleHeight,

initEventListeners(),

$.winMain.onBack=function(){

require('com.tickerfit.activity').sendAppToBackground();



},


$.scrollableView.scrollable.addEventListener('scrollend',function(e){
'scrollable'==e.source.id;



}),
$.navbar.setLeftAction('DRAWER','tf:app.drawer.open'),

'undefined'==typeof cus.singleton().get('user')?(


LOGGER.error('Waiting for user to load'),
DISPATCHER.once('tf:user.loaded',_initWidgets)):

_initWidgets();

},
_initWidgets=function(){


var drawer=Alloy.createWidget('tf.app.drawer');
drawer.init();
var slideWindow=Alloy.createWidget('tf.app.slideWindow');
slideWindow.init();
var inbox=Alloy.createWidget('tf.app.inbox');
inbox.init();
var activitylog=Alloy.createWidget('tf.app.activitylog');
activitylog.init();
var rewards=Alloy.createWidget('tf.app.rewards');
rewards.init();
var share=Alloy.createWidget('tf.app.share');
share.init();
var add=Alloy.createWidget('tf.app.add');
add.init();
var edit=Alloy.createWidget('tf.app.activityDetails');
edit.init(),
widgetsInited=!0,
_update();
},

initEventListeners=function(){

DISPATCHER.on('tf:main.title.update',updateTitle),
DISPATCHER.on('tf:toggles.loaded',_update),
DISPATCHER.on('tf:points.update',_handlePointsUpdate),
DISPATCHER.once('tf:logout',removeEventListeners);
},
removeEventListeners=function(){
DISPATCHER.off('tf:main.title.update',updateTitle),
DISPATCHER.off('tf:toggles.loaded',_update),
DISPATCHER.off('tf:points.update',_handlePointsUpdate);
},

_handlePointsUpdate=function(pts){var
toggles=cus.singleton().get('toggles')||{},
enablePoints='yes'===toggles.enablePoints,
baselineMode='yes'===toggles.showBaseline||'yes'===toggles.showControl;
if(enablePoints&&0<pts.creditDelta&&!baselineMode){var

rewardIconRect=$.navbar.rewards.rect,
bottomCenter={
x:rewardIconRect.width/2,
y:rewardIconRect.height-4};



bottomCenter.x*=Ti.Platform.displayCaps.logicalDensityFactor,
bottomCenter.y*=Ti.Platform.displayCaps.logicalDensityFactor;var


converted=$.navbar.rewards.convertPointToView(bottomCenter,$.winMain),
windowCoords={x:converted.x,y:converted.y};


windowCoords.x/=Ti.Platform.displayCaps.logicalDensityFactor,
windowCoords.y/=Ti.Platform.displayCaps.logicalDensityFactor,




$.toast.show('+'+pts.creditDelta,{
top:windowCoords.y,
center:{x:windowCoords.x}},
5e3);
}
},

showMeditate=function(show){
if(show&&!showingMeditate){
if(!$.meditate){
var w=Alloy.createWidget('tf.app.meditate');
w.init(nativeWidth,nativeHeight,!1),
$.meditate=w.getMain(),
$.meditate.setWindow($.winMain,!0);
}

$.scrollableView.addView($.meditate.getView(),!0);
}else!show&&showingMeditate&&

$.scrollableView.removeView($.meditate.getView());

showingMeditate=show;
},

showTodayView=function(show){
if(show&&!showingTodayView){

if(!$.todayview){
var w=Alloy.createWidget('tf.app.today');
w.init(nativeWidth,nativeHeight,!1),
$.todayview=w.getMain(),
$.todayview.setWindow($.winMain);
}
$.scrollableView.addView($.todayview.getView(),!0);
}else!show&&showingTodayView&&

$.scrollableView.removeView($.todayview.getView());

showingTodayView=show;
},

_update=function(){
if(widgetsInited){
var toggles=cus.singleton().get('toggles');
toggles&&!toggles.defaults&&
_updateUX(toggles)}

},

_updateUX=function(toggles){
LOGGER.error('IN UPDATE UX');
var page=0;

$.winMain.keepScreenOn=!1,



require('bootstrap/whitelabel').reset(),
_setTheme(toggles.uxMode),

'meditate'===toggles.uxMode?(

$.winMain.keepScreenOn=!0,



showTodayView(!1),
showMeditate(!0)):(



IS_TICKERFIT&&'HSE'===toggles.branding?
require('bootstrap/whitelabel').configure('HSE'):
IS_HACKA&&
require('bootstrap/whitelabel').configure('HACKA'),

showMeditate(!1),
showTodayView(!0)),


firstInit&&(
$.main.animate({
opacity:1,
duration:1e3}),


$.scrollableView.setPage(page),
firstInit=!1),


'meditate'===toggles.uxMode?
updateTitle():

$.navbar.showTitleImage(!0),


'yes'===toggles.enablePoints&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl&&'meditate'!==toggles.uxMode?
$.navbar.setMidRightAction('REWARDS','tf:app.rewards.open'):

$.navbar.setMidRightAction(),


'yes'===toggles.enableInbox&&'yes'!==toggles.showBaseline&&'yes'!==toggles.showControl&&'meditate'!==toggles.uxMode?
$.navbar.setRightAction('INBOX','tf:app.inbox.open'):

$.navbar.setRightAction();

},

_setTheme=function(mode){
if('meditate'===mode){
$.navbar.setTitleColor('white'),
$.navbar.setLeftActionColor('white'),
$.main.backgroundImage='/images/blur-pebbles.png';
var gradient={
type:'linear',
colors:[Alloy.Globals.Style.Color.BrandBlueTransparent,Alloy.Globals.Style.Color.BrandPinkTransparent],
startPoint:{
x:0,
y:0},

endPoint:{
x:'100%',
y:'100%'},

backFillStart:!1};

$.wrapper.setBackgroundGradient(gradient),
$.scrollableView.underlineTop.backgroundColor='#5fff';




}else
$.navbar.setTitleColor(Alloy.Globals.Style.Color.TwilightBlue),
$.navbar.setLeftActionColor(Alloy.Globals.Style.Color.DrawerMenu),
$.main.backgroundImage=void 0,
$.wrapper.backgroundGradient&&
$.wrapper.setBackgroundGradient({}),

$.main.backgroundColor='#fff',
$.scrollableView.underlineTop.backgroundColor=Alloy.Globals.Style.Color.SilverTwo;

},

updateTitle=function(){
0<$.scrollableView.scrollable.views.length&&
$.navbar.setTitle($.scrollableView.scrollable.views[$.scrollableView.scrollable.currentPage].title);

};

_init(),









_.extend($,exports);
}

module.exports=Controller;