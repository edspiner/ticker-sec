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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='syncFitbit',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.sync=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'sync',layout:'vertical'}),

$.__views.sync&&$.addTopLevelView($.__views.sync),
$.__views.__alloyId208=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:50,id:'__alloyId208'}),

$.__views.sync.add($.__views.__alloyId208),
$.__views.__alloyId209=Ti.UI.createView(
{width:82,height:82,borderRadius:41,id:'__alloyId209'}),

$.__views.__alloyId208.add($.__views.__alloyId209),
$.__views.__alloyId210=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.Silver,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'y',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId210'}),

$.__views.__alloyId208.add($.__views.__alloyId210),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Activity Sync Needed',showClose:!1,showBack:!1,id:'titlebar',__parentSymbol:$.__views.sync}),
$.__views.titlebar.setParent($.__views.sync),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:5,left:24,right:24,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'Your Fitbit has not synced with your phone in a while. Please open the Fitbit app to sync your tracker and we will update your activity!',id:'description'}),

$.__views.sync.add($.__views.description),
$.__views.openFitbit=Ti.UI.createView(
{height:48,left:16,right:16,id:'openFitbit'}),

$.__views.sync.add($.__views.openFitbit),
_openFitbit?$.addListener($.__views.openFitbit,'click',_openFitbit):__defers['$.__views.openFitbit!click!_openFitbit']=!0,$.__views.__alloyId211=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.RedPink,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'Open Fitbit app',id:'__alloyId211'}),

$.__views.openFitbit.add($.__views.__alloyId211),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:16,left:16,right:16,bottom:16,type:'primary',text:'Continue without syncing',enabled:!0,id:'button',__parentSymbol:$.__views.sync}),
$.__views.button.setParent($.__views.sync),
_done?$.__views.button.on('click',_done):__defers['$.__views.button!click!_done']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var

args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
},

_openFitbit=function(){
$.openFitbit.animate({
autoreverse:!0,
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.9})},

function(){
Ti.Platform.openURL('fitbit://tracker'),
_done();
});
},

_done=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_show=function(){
$.sync.left=void 0,
$.sync.animate({
opacity:1,
duration:80});

},
_hide=function(callback){
$.sync.animate({
opacity:0,
duration:80},
function(){
$.sync.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.openFitbit!click!_openFitbit']&&$.addListener($.__views.openFitbit,'click',_openFitbit),__defers['$.__views.button!click!_done']&&$.__views.button.on('click',_done),



_.extend($,exports);
}

module.exports=Controller;