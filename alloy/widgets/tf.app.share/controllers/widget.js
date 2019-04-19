var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.share/'+s:
s.substring(0,index)+'/tf.app.share/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.share');




if(this.__widgetId='tf.app.share',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winShare=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,backgroundColor:'transparent',id:'winShare'}),

$.__views.winShare&&$.addTopLevelView($.__views.winShare),
$.__views.__alloyId188=Ti.UI.createView(
{opacity:.5,backgroundColor:'#022632',id:'__alloyId188'}),

$.__views.winShare.add($.__views.__alloyId188),
$.__views.share=Alloy.createWidget('tf.app.share','share',{id:'share',__parentSymbol:$.__views.winShare}),
$.__views.share.setParent($.__views.winShare),
_close?$.__views.share.on('close',_close):__defers['$.__views.share!close!_close']=!0,$.__views.sent=Alloy.createWidget('tf.app.share','sent',{id:'sent',__parentSymbol:$.__views.winShare}),
$.__views.sent.setParent($.__views.winShare),
_close?$.__views.sent.on('close',_close):__defers['$.__views.sent!close!_close']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var



sessionstart,
















































closeReason,guardians=require('services/guardians_service'),Q=require('vendor/q'),_showSpinner=function(){return Q.fcall(function(){return DISPATCHER.trigger('tf:progress.start',{message:'Loading...'}),!0})},_hideSpinner=function(){DISPATCHER.trigger('tf:progress.stop')},_error=function(error){LOGGER.debug('ERROR Loading guardians:'+JSON.stringify(error));var dialog=Ti.UI.createAlertDialog({cancel:0,buttonNames:['Ok'],message:'There was a problem loading your sharing information, please try again later.',title:'Uh Oh!'});dialog.addEventListener('click',function(e){_close()}),dialog.show()},_show=function(guardians){$.share.setGuardians(guardians),$.share.show()},_load=function(){_showSpinner().then(guardians.getCurrent).then(_show).catch(_error).finally(_hideSpinner)},_open=function(){$.winShare.addEventListener('open',function open(){!1,$.winShare.removeEventListener('open',open),_load(),trackSessionStart()}),require('ui/common/custom_window').openWindow($.winShare)},
_close=function(evt){
evt&&'progress-sent'===evt.type?(
$.sent.setTitle('Progress Sent!'),
$.sent.show(),
closeReason='created'):
evt&&'sharing-updated'===evt.type?(
DISPATCHER.trigger('tf:app.progress.share.updated'),
$.sent.setTitle('Sharing Updated!'),
$.sent.show(),
closeReason='updated'):
evt&&'error-updating'===evt.type?(

LOGGER.error('ERROR UPDATING - Reloading'),
_load()):(

require('ui/common/custom_window').closeWindow($.winShare),
trackSessionEnd(closeReason));

},

trackSessionStart=function(){
require('services/event_tracking_service').record('start-view-share-setup',{}),
sessionstart=new Date,
closeReason='cancelled';
},
trackSessionEnd=function(reason){
sessionstart&&
require('services/event_tracking_service').record('end-view-share-setup',{
reason:reason,
duration:Math.round((new Date().getTime()-sessionstart.getTime())/1e3)});


},

_init=function(){
DISPATCHER.on('tf:app.progress.share.setup',_open),
DISPATCHER.once('tf:logout',function cleanup(){
DISPATCHER.off('tf:app.progress.share.setup',_open);
}),
$.winShare.onBack=function(){
DISPATCHER.trigger('tf:share.back');

};
};

exports.init=_init,





__defers['$.__views.share!close!_close']&&$.__views.share.on('close',_close),__defers['$.__views.sent!close!_close']&&$.__views.sent.on('close',_close),



_.extend($,exports);
}

module.exports=Controller;