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




if(this.__widgetId='tf.app.add',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='add',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.add=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,opacity:0,id:'add',layout:'vertical'}),

$.__views.add&&$.addTopLevelView($.__views.add),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Quick Add',showClose:!0,showBack:!1,titleLeft:20,id:'titlebar',__parentSymbol:$.__views.add}),
$.__views.titlebar.setParent($.__views.add),
_close?$.__views.titlebar.on('close',_close):__defers['$.__views.titlebar!close!_close']=!0,$.__views.underline=Ti.UI.createView(
{top:4,height:1,left:16,right:16,backgroundColor:Alloy.Globals.Style.Color.SilverTwo,opacity:.6,id:'underline'}),

$.__views.add.add($.__views.underline),
$.__views.addList=Alloy.createWidget('tf.app.tableview','widget',{top:0,rowType:{widget:'tf.app.add',controller:'add_cell'},opacity:1,height:0,id:'addList',__parentSymbol:$.__views.add}),
$.__views.addList.setParent($.__views.add),
exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

Q=require('vendor/q'),
cus=require('services/current_user_service'),

items=[{type:'EXERCISE',enabled:!0,title:'Log your exercise',description:'Record what you\'ve been doing'},{type:'ROUTINE',enabled:!1,title:'Create new routine',description:'Setup a new routine for your day'},{type:'SHARESETUP',enabled:!1,title:'Setup sharing',description:'Setup who can view your progress'}],

_init=function(items){
$.addList.onClick(_click);
},

_setItems=function(items){var
toggles=cus.singleton().get('toggles'),
enableRoutines=toggles&&'yes'===toggles.enableRoutines,
shareProgress=toggles&&'yes'===toggles.shareProgress;
_.find(items,function(i){return(
'ROUTINE'===i.type&&(
i.enabled=enableRoutines,!0));



}),
_.find(items,function(i){return(
'SHARESETUP'===i.type&&(
i.enabled=shareProgress,!0));



});

var filtered=_.filter(items,function(i){
return i.enabled;
});
$.addList.setHeight(90*filtered.length),
$.addList.setData(filtered);
},

_click=function(item){

if(require('services/event_tracking_service').record('tap-quick-add-'+item.type.toLowerCase(),{}),'EXERCISE'===item.type)
_close(),
DISPATCHER.trigger('tf:app.activityDetails.click',{
sourceActivityId:0,
type:0,
startTime:0,
activeTime:0});else

if('ROUTINE'===item.type){
_close();
var win=Alloy.createWidget('tf.app.routines',{
closeOnBack:!0,
manage:!0}).
main.getView();

require('ui/common/custom_window').openWindow(win);
}else'SHARESETUP'===item.type&&(
_close(),
DISPATCHER.trigger('tf:app.progress.share.setup'));

},

_back=function(evt){
'cancel'===evt.type?
_show():
'progress-sent'===evt.type&&
$.trigger('close',{
type:evt.type,
source:$});


},
_close=function(evt){
_hide(),
$.trigger('close',{
type:evt&&evt.type||'close',
source:$});

},

_show=function(){
_setItems(items),
$.add.animate({
opacity:1,
duration:200});

},
_hide=function(callback){
$.add.animate({
opacity:0,
duration:200},
function(){
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.titlebar!close!_close']&&$.__views.titlebar.on('close',_close),



_.extend($,exports);
}

module.exports=Controller;