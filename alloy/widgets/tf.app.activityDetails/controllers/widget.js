var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.activityDetails/'+s:
s.substring(0,index)+'/tf.app.activityDetails/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.activityDetails');




if(this.__widgetId='tf.app.activityDetails',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winEdit=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,backgroundColor:'transparent',id:'winEdit'}),

$.__views.winEdit&&$.addTopLevelView($.__views.winEdit),
$.__views.__alloyId230=Ti.UI.createView(
{opacity:.5,backgroundColor:'#022632',id:'__alloyId230'}),

$.__views.winEdit.add($.__views.__alloyId230),
$.__views.activityDetails=Alloy.createWidget('tf.app.activityDetails','activityDetails',{id:'activityDetails',__parentSymbol:$.__views.winEdit}),
$.__views.activityDetails.setParent($.__views.winEdit),
_close?$.__views.activityDetails.on('close',_close):__defers['$.__views.activityDetails!close!_close']=!0,_swapScreens?$.__views.activityDetails.on('change',_swapScreens):__defers['$.__views.activityDetails!change!_swapScreens']=!0,$.__views.activityType=Alloy.createWidget('tf.app.activityDetails','activityType',{id:'activityType',__parentSymbol:$.__views.winEdit}),
$.__views.activityType.setParent($.__views.winEdit),
_close?$.__views.activityType.on('close',_close):__defers['$.__views.activityType!close!_close']=!0,_swapScreens?$.__views.activityType.on('change',_swapScreens):__defers['$.__views.activityType!change!_swapScreens']=!0,$.__views.deleteModal=Alloy.createWidget('tf.app.activityDetails','delete',{id:'deleteModal',__parentSymbol:$.__views.winEdit}),
$.__views.deleteModal.setParent($.__views.winEdit),
_close?$.__views.deleteModal.on('close',_close):__defers['$.__views.deleteModal!close!_close']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var



editParameters,Q=require('vendor/q'),

_show=function(params){
editParameters=params,
'delete'===params.function?
$.deleteModal.show():
'edit'===params.function?
$.activityDetails.show(params.data):

$.activityType.show(params);

},

_open=function(item){
$.winEdit.addEventListener('open',function open(){!1,



$.winEdit.removeEventListener('open',open),
_show(item);
}),
require('ui/common/custom_window').openWindow($.winEdit);
},

_close=function(evt){
evt&&'delete'===evt.type?
DISPATCHER.trigger('tf:app.activitylog.delete',editParameters):
evt&&'exercise-recorded'===evt.type&&(
'edit'===editParameters.function?(
editParameters.data.type=evt.params.type,
editParameters.data.startTime=evt.params.startTime,
editParameters.data.activeTime=evt.params.activeTime,
DISPATCHER.trigger('tf:app.activitylog.edit',editParameters)):

DISPATCHER.trigger('tf:app.add.upload',evt)),


DISPATCHER.trigger('tf:progress.stop',{
id:'edit-activity'}),

$.winEdit.close();
},

_swapScreens=function(evt){
evt&&'typeToDetails'===evt.type?
$.activityDetails.show(evt.data):
evt&&'detailsToType'===evt.type&&
$.activityType.show(evt.data);

},

_init=function(){
DISPATCHER.on('tf:app.activityDetails.click',_open),
DISPATCHER.once('tf:logout',function cleanup(){
DISPATCHER.off('tf:app.activityDetails.click',_open);
});
};

exports.init=_init,





__defers['$.__views.activityDetails!close!_close']&&$.__views.activityDetails.on('close',_close),__defers['$.__views.activityDetails!change!_swapScreens']&&$.__views.activityDetails.on('change',_swapScreens),__defers['$.__views.activityType!close!_close']&&$.__views.activityType.on('close',_close),__defers['$.__views.activityType!change!_swapScreens']&&$.__views.activityType.on('change',_swapScreens),__defers['$.__views.deleteModal!close!_close']&&$.__views.deleteModal.on('close',_close),



_.extend($,exports);
}

module.exports=Controller;