var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.today/'+s:
s.substring(0,index)+'/tf.app.today/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.today');




if(this.__widgetId='tf.app.today',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='routinesCard',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.routinesCard=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'routinesCard'}),

$.__views.routinesCard&&$.addTopLevelView($.__views.routinesCard),
$.__views.innerCard=Ti.UI.createView(
{bottom:5,height:Ti.UI.SIZE,id:'innerCard',layout:'vertical'}),

$.__views.routinesCard.add($.__views.innerCard),
$.__views.cardDashboardView=Alloy.createWidget('tf.app.routines','dashboardView',{showTop:1,delayRefreshOnComplete:!0,id:'cardDashboardView',__parentSymbol:$.__views.innerCard}),
$.__views.cardDashboardView.setParent($.__views.innerCard),
$.__views.actions=Ti.UI.createView(
{left:24,right:24,height:Ti.UI.SIZE,id:'actions',layout:'horizontal'}),

$.__views.innerCard.add($.__views.actions),
$.__views.__alloyId93=Ti.UI.createView(
{width:'49.95%',height:Ti.UI.SIZE,id:'__alloyId93'}),

$.__views.actions.add($.__views.__alloyId93),
$.__views.btnManage=Alloy.createWidget('tf.app.button','widget',{type:'tertiary',text:'Manage',right:5,top:10,bottom:24,id:'btnManage',__parentSymbol:$.__views.__alloyId93}),
$.__views.btnManage.setParent($.__views.__alloyId93),
manage?$.__views.btnManage.on('click',manage):__defers['$.__views.btnManage!click!manage']=!0,$.__views.__alloyId94=Ti.UI.createView(
{width:'49.95%',height:Ti.UI.SIZE,id:'__alloyId94'}),

$.__views.actions.add($.__views.__alloyId94),
$.__views.btnViewAll=Alloy.createWidget('tf.app.button','widget',{left:5,type:'secondary',text:'View all',top:10,bottom:24,id:'btnViewAll',__parentSymbol:$.__views.__alloyId94}),
$.__views.btnViewAll.setParent($.__views.__alloyId94),
viewAll?$.__views.btnViewAll.on('click',viewAll):__defers['$.__views.btnViewAll!click!viewAll']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var




dashboard,args=arguments[0]||{},cus=require('services/current_user_service'),

setDashboard=function(db){
dashboard=db,
$.cardDashboardView.updateDashboard(dashboard);
},

_handleOpen=function(evt){var

routineId=evt.routineId,
found=_.find(dashboard,function(d){
return d.id==routineId;
});
found&&
LOGGER.debug('SET CURRENT OPEN: '+found.id);



},

viewAll=function(evt){
_openRoutinesView(!1),
setTimeout(function(){
DISPATCHER.trigger('tf:app.slideWindow.close');
},500);
},

manage=function(evt){
_openRoutinesView(!0),
setTimeout(function(){
DISPATCHER.trigger('tf:app.slideWindow.close');
},500);
},

_openRoutinesView=function(manage){
var win=Alloy.createWidget('tf.app.routines',{
closeOnBack:!0,
manage:manage}).
main.getView();

require('ui/common/custom_window').openWindow(win);
},

_updateDashboard=function(){var
cu=cus.singleton(),
routines=cu.get('routines'),
rdb=cu.get('routinesDashboard'),

db=_.filter(rdb,function(db){
return _.find(routines,function(r){
return r.id===db.id;
});
});
setDashboard(db);
},

_init=function(){
_updateDashboard(),
DISPATCHER.on('tf:routines.loaded',_updateDashboard),
DISPATCHER.on('tf:routines.dashboard.loaded',_updateDashboard),
DISPATCHER.on('tf:routines.dashboard.open',_handleOpen);
};

_init();

var _onCompleted=function(){
LOGGER.error('NOOP');
};
exports.setOnCompleted=function(cb){
_onCompleted=cb;
},
exports.getCurrent=function(){
return current;
},

exports.updateDashboard=setDashboard,

exports.cleanup=function(){
DISPATCHER.off('tf:routines.loaded',_updateDashboard),
DISPATCHER.off('tf:routines.dashboard.loaded',_updateDashboard),
DISPATCHER.off('tf:routines.dashboard.open',_handleOpen);
},





__defers['$.__views.btnManage!click!manage']&&$.__views.btnManage.on('click',manage),__defers['$.__views.btnViewAll!click!viewAll']&&$.__views.btnViewAll.on('click',viewAll),



_.extend($,exports);
}

module.exports=Controller;