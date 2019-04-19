var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.add/'+s:
s.substring(0,index)+'/tf.app.add/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.add');




if(this.__widgetId='tf.app.add',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winAdd=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,backgroundColor:'transparent',id:'winAdd'}),

$.__views.winAdd&&$.addTopLevelView($.__views.winAdd),
$.__views.__alloyId218=Ti.UI.createView(
{opacity:.5,backgroundColor:'#022632',id:'__alloyId218'}),

$.__views.winAdd.add($.__views.__alloyId218),
$.__views.add=Alloy.createWidget('tf.app.add','add',{id:'add',__parentSymbol:$.__views.winAdd}),
$.__views.add.setParent($.__views.winAdd),
_close?$.__views.add.on('close',_close):__defers['$.__views.add!close!_close']=!0,$.__views.congrats=Alloy.createWidget('tf.app.add','congrats',{id:'congrats',__parentSymbol:$.__views.winAdd}),
$.__views.congrats.setParent($.__views.winAdd),
_close?$.__views.congrats.on('close',_close):__defers['$.__views.congrats!close!_close']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

Q=require('vendor/q'),

_show=function(purpose){
'add'===purpose?
$.add.show():
'congrats'==purpose&&
$.congrats.show();

},

_open=function(purpose){
$.winAdd.addEventListener('open',function open(){!1,



$.winAdd.removeEventListener('open',open),
_show(purpose);
}),
require('ui/common/custom_window').openWindow($.winAdd);
},

_upload=function(evt){
if('exercise-recorded'===evt.type)
try{
require('tickerfit/tracking').recordSelfReportedActivity(evt.params,!1).then(function(){
_open('congrats');
}).catch(function(e){
_error(e);
});
}catch(e){
_error(e);
}

},

_close=function(evt){
evt&&'view-activities'===evt.type?(
DISPATCHER.trigger('tf:app.window.current.close',{force:!0}),
DISPATCHER.trigger('tf:app.activitylog.open')):

DISPATCHER.trigger('tf:app.window.current.close',{force:!0});

},

_error=function(e){
$.winAdd.close(),
LOGGER.error(e.message||'No error message');var
errorMessage=e.message||'There was a problem saving your exercise, please try again later.',
dialog=Ti.UI.createAlertDialog({
cancel:0,
buttonNames:['Ok'],
message:errorMessage,
title:'Uh Oh!'}).
show();
},

_init=function(){
DISPATCHER.on('tf:app.add.click',_open),
DISPATCHER.on('tf:app.add.close',_close),
DISPATCHER.on('tf:app.add.upload',_upload),
DISPATCHER.once('tf:logout',function cleanup(){
DISPATCHER.off('tf:app.add.click',_open),
DISPATCHER.off('tf:app.add.close',_close),
DISPATCHER.off('tf:app.add.upload',_upload);
}),
$.winAdd.onBack=function(){
DISPATCHER.trigger('tf:app.add.back');

};
};

exports.init=_init,





__defers['$.__views.add!close!_close']&&$.__views.add.on('close',_close),__defers['$.__views.congrats!close!_close']&&$.__views.congrats.on('close',_close),



_.extend($,exports);
}

module.exports=Controller;