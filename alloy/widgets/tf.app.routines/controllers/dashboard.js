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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='dashboard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.dashboard=Ti.UI.createScrollView(
{layout:'vertical',backgroundColor:Alloy.Globals.Style.Color.PaleGrey,width:Alloy.Globals.Style.Size.Width.pct100,height:Ti.UI.FILL,scrollType:'vertical',id:'dashboard'}),

$.__views.dashboard&&$.addTopLevelView($.__views.dashboard),
$.__views.dashboardView=Alloy.createWidget('tf.app.routines','dashboardView',{backgroundColor:'#fff',left:16,right:16,top:16,bottom:40,id:'dashboardView',__parentSymbol:$.__views.dashboard}),
$.__views.dashboardView.setParent($.__views.dashboard),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='DASHBOARD';var





dashboard,


sessionstart,args=arguments[0]||{},cus=require('services/current_user_service'),moment=require('alloy/moment'),navigation=Alloy.Globals.Nav.Routines,donefirst=!1,

setDashboard=function(db){return(
dashboard=db,
!donefirst&&args.manage?(
_manage(void 0,!args.closeOnBack),void(
donefirst=!0)):void(


!donefirst&&trackSessionStart(),
$.dashboardView.updateDashboard(dashboard),
donefirst=!0));
},

onNav=function(callback){
navigation.addEventListener('nav.transitionstart',function nav(){
navigation.removeEventListener('nav.transitionstart',nav),
callback();
});
},

_updateDashboard=function(){var
cu=cus.singleton(),
routines=cu.get('routines'),
rdb=cu.get('routinesDashboard'),


filtered=_.filter(rdb,function(db){
return _.find(routines,function(r){
return r.id===db.id;
});
});
setDashboard(filtered);
},

_manage=function(e,enableDrawer){










function removeListeners(){
navigation.removeEventListener('nav.backstart',onBack);
}

function onBack(event){
event.tag===manageView.TAG&&(
removeListeners(),
manageView.cleanup(),
args.closeOnBack&&args.manage?


DISPATCHER.trigger('tf:app.window.current.close',{force:!0}):

onNav(_updateDashboard));


}if(!(e&&e.tag!==$.TAG)){var manageView=Widget.createController('routines');navigation.open(manageView,{title:'Manage Routines',drawerEnabled:enableDrawer,backEnabled:!enableDrawer,transition:'slideInFromRight',rightAction:'Add new'}),
navigation.addEventListener('nav.backstart',onBack)}
},

trackSessionStart=function(){
require('services/event_tracking_service').record('start-view-routine-dashboard',{}),
sessionstart=new Date;
},
trackSessionEnd=function(){
sessionstart&&
require('services/event_tracking_service').record('end-view-routine-dashboard',{
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});


},

init=function(){
args.dashboard?
setDashboard(args.dashboard):

onNav(_updateDashboard),

navigation.addEventListener('nav.bar.right.clicked',_manage),
DISPATCHER.on('tf:routines.dashboard.loaded',_updateDashboard);
};

init(),

$.cleanup=function(){
trackSessionEnd(),
$.dashboardView.cleanup(),
navigation.removeEventListener('nav.bar.right.clicked',_manage),
DISPATCHER.off('tf:routines.dashboard.loaded',_updateDashboard),

LOGGER.debug('IN CLEANUP ROUTINE DASHBOARD'),
DISPATCHER.trigger('tf:routines.close',{});
},









_.extend($,exports);
}

module.exports=Controller;