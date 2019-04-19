var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.dialog/'+s:
s.substring(0,index)+'/tf.app.dialog/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.dialog');




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.winDialog=(require('/ui/common/custom_window').createWindow||Ti.UI.createWindow)(
{orientationModes:[Ti.UI.PORTRAIT],navBarHidden:!0,fullscreen:'true',exitOnClose:!1,id:'winDialog'}),

$.__views.winDialog&&$.addTopLevelView($.__views.winDialog),
$.__views.overlay=Ti.UI.createView(
{opacity:.5,backgroundColor:'#022632',id:'overlay'}),

$.__views.winDialog.add($.__views.overlay),
$.__views.welcomeBack=Alloy.createWidget('tf.app.dialog','welcomeBack',{id:'welcomeBack',__parentSymbol:$.__views.winDialog}),
$.__views.welcomeBack.setParent($.__views.winDialog),
_close?$.__views.welcomeBack.on('close',_close):__defers['$.__views.welcomeBack!close!_close']=!0,$.__views.showWelcome=Alloy.createWidget('tf.app.dialog','showWelcome',{id:'showWelcome',__parentSymbol:$.__views.winDialog}),
$.__views.showWelcome.setParent($.__views.winDialog),
_close?$.__views.showWelcome.on('close',_close):__defers['$.__views.showWelcome!close!_close']=!0,$.__views.done=Alloy.createWidget('tf.app.dialog','done',{id:'done',__parentSymbol:$.__views.winDialog}),
$.__views.done.setParent($.__views.winDialog),
_close?$.__views.done.on('close',_close):__defers['$.__views.done!close!_close']=!0,$.__views.enablePush=Alloy.createWidget('tf.app.dialog','enablePush',{id:'enablePush',__parentSymbol:$.__views.winDialog}),
$.__views.enablePush.setParent($.__views.winDialog),
_close?$.__views.enablePush.on('close',_close):__defers['$.__views.enablePush!close!_close']=!0,$.__views.deviceSyncing=Alloy.createWidget('tf.app.dialog','deviceSyncing',{id:'deviceSyncing',__parentSymbol:$.__views.winDialog}),
$.__views.deviceSyncing.setParent($.__views.winDialog),
_close?$.__views.deviceSyncing.on('close',_close):__defers['$.__views.deviceSyncing!close!_close']=!0,$.__views.mobileSyncing=Alloy.createWidget('tf.app.dialog','mobileSyncing',{id:'mobileSyncing',__parentSymbol:$.__views.winDialog}),
$.__views.mobileSyncing.setParent($.__views.winDialog),
_close?$.__views.mobileSyncing.on('close',_close):__defers['$.__views.mobileSyncing!close!_close']=!0,$.__views.fitbitSyncing=Alloy.createWidget('tf.app.dialog','fitbitSyncing',{id:'fitbitSyncing',__parentSymbol:$.__views.winDialog}),
$.__views.fitbitSyncing.setParent($.__views.winDialog),
_close?$.__views.fitbitSyncing.on('close',_close):__defers['$.__views.fitbitSyncing!close!_close']=!0,$.__views.linkFitbit=Alloy.createWidget('tf.app.dialog','linkFitbit',{id:'linkFitbit',__parentSymbol:$.__views.winDialog}),
$.__views.linkFitbit.setParent($.__views.winDialog),
_close?$.__views.linkFitbit.on('close',_close):__defers['$.__views.linkFitbit!close!_close']=!0,$.__views.linkFitbitActivity=Alloy.createWidget('tf.app.dialog','linkFitbitActivity',{id:'linkFitbitActivity',__parentSymbol:$.__views.winDialog}),
$.__views.linkFitbitActivity.setParent($.__views.winDialog),
_close?$.__views.linkFitbitActivity.on('close',_close):__defers['$.__views.linkFitbitActivity!close!_close']=!0,$.__views.syncFitbit=Alloy.createWidget('tf.app.dialog','syncFitbit',{id:'syncFitbit',__parentSymbol:$.__views.winDialog}),
$.__views.syncFitbit.setParent($.__views.winDialog),
_close?$.__views.syncFitbit.on('close',_close):__defers['$.__views.syncFitbit!close!_close']=!0,$.__views.enableTracking=Alloy.createWidget('tf.app.dialog','enableTracking',{id:'enableTracking',__parentSymbol:$.__views.winDialog}),
$.__views.enableTracking.setParent($.__views.winDialog),
_close?$.__views.enableTracking.on('close',_close):__defers['$.__views.enableTracking!close!_close']=!0,$.__views.rewardRedeemed=Alloy.createWidget('tf.app.dialog','rewardRedeemed',{id:'rewardRedeemed',__parentSymbol:$.__views.winDialog}),
$.__views.rewardRedeemed.setParent($.__views.winDialog),
_close?$.__views.rewardRedeemed.on('close',_close):__defers['$.__views.rewardRedeemed!close!_close']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

Q=require('vendor/q'),
cus=require('services/current_user_service'),

open=!1,
_show=function(evt){
evt&&(
'link-fitbit'===evt.type?
$.linkFitbit.show():
'link-fitbit-activity'===evt.type?
$.linkFitbitActivity.show():
'sync-fitbit'===evt.type?
$.syncFitbit.show():
'enable-tracking'===evt.type?
$.enableTracking.show():
'show-welcome'===evt.type?(
$.overlay.backgroundColor='#FFF',
$.overlay.opacity=1,
$.showWelcome.show()):
'show-welcome-back'===evt.type?
$.welcomeBack.show():
'enable-push'===evt.type?
$.enablePush.show():
'device-syncing'===evt.type?
$.deviceSyncing.show():
'mobile-syncing'===evt.type?
$.mobileSyncing.show(evt.data):
'fitbit-syncing'===evt.type?
$.fitbitSyncing.show(evt.data):
'done'===evt.type?
$.done.show(evt.data):
'reward-redeemed'===evt.type&&
$.rewardRedeemed.show(evt.data));

},

_open=function(evt){
open?











LOGGER.warn('Cannot open dialog ['+evt.type+'] as modal dialog already open!'):(open=!0,$.winDialog.addEventListener('open',function open(){!1,$.winDialog.removeEventListener('open',open),_show(evt)}),require('ui/common/custom_window').openWindow($.winDialog));

},

_close=function(evt){
evt&&'close'!==evt.type?
_show(evt):(

require('ui/common/custom_window').closeWindow($.winDialog),
open=!1,
$.overlay.backgroundColor='#022632',
$.overlay.opacity=.5);

},

_init=function(){
DISPATCHER.on('tf:app.dialog.show',_open),
DISPATCHER.once('tf:logout',function cleanup(){
DISPATCHER.off('tf:app.dialog.show',_open);
}),
$.winDialog.onBack=function(){
DISPATCHER.trigger('tf:app.dialog.back');

};
};

exports.init=_init,





__defers['$.__views.welcomeBack!close!_close']&&$.__views.welcomeBack.on('close',_close),__defers['$.__views.showWelcome!close!_close']&&$.__views.showWelcome.on('close',_close),__defers['$.__views.done!close!_close']&&$.__views.done.on('close',_close),__defers['$.__views.enablePush!close!_close']&&$.__views.enablePush.on('close',_close),__defers['$.__views.deviceSyncing!close!_close']&&$.__views.deviceSyncing.on('close',_close),__defers['$.__views.mobileSyncing!close!_close']&&$.__views.mobileSyncing.on('close',_close),__defers['$.__views.fitbitSyncing!close!_close']&&$.__views.fitbitSyncing.on('close',_close),__defers['$.__views.linkFitbit!close!_close']&&$.__views.linkFitbit.on('close',_close),__defers['$.__views.linkFitbitActivity!close!_close']&&$.__views.linkFitbitActivity.on('close',_close),__defers['$.__views.syncFitbit!close!_close']&&$.__views.syncFitbit.on('close',_close),__defers['$.__views.enableTracking!close!_close']&&$.__views.enableTracking.on('close',_close),__defers['$.__views.rewardRedeemed!close!_close']&&$.__views.rewardRedeemed.on('close',_close),



_.extend($,exports);
}

module.exports=Controller;