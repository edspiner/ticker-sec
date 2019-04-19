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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='enableTracking',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.enable=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'enable',layout:'vertical'}),

$.__views.enable&&$.addTopLevelView($.__views.enable),
$.__views.__alloyId192=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:50,id:'__alloyId192'}),

$.__views.enable.add($.__views.__alloyId192),
$.__views.__alloyId193=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.LightBlue,opacity:.1,id:'__alloyId193'}),

$.__views.__alloyId192.add($.__views.__alloyId193),
$.__views.__alloyId194=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.LightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'>',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId194'}),

$.__views.__alloyId192.add($.__views.__alloyId194),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Mobile syncing disabled',showClose:!1,showBack:!1,id:'titlebar',__parentSymbol:$.__views.enable}),
$.__views.titlebar.setParent($.__views.enable),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:5,left:24,right:24,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'Mobile syncing is currently disabled. Please enable mobile syncing to update your activity!',id:'description'}),

$.__views.enable.add($.__views.description),
$.__views.notNow=Ti.UI.createView(
{height:48,left:16,right:16,id:'notNow'}),

$.__views.enable.add($.__views.notNow),
_notNow?$.addListener($.__views.notNow,'click',_notNow):__defers['$.__views.notNow!click!_notNow']=!0,$.__views.__alloyId195=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.RedPink,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'Not Now',id:'__alloyId195'}),

$.__views.notNow.add($.__views.__alloyId195),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:16,left:16,right:16,bottom:16,type:'primary',text:'Enable mobile syncing...',enabled:!0,id:'button',__parentSymbol:$.__views.enable}),
$.__views.button.setParent($.__views.enable),
_track?$.__views.button.on('click',_track):__defers['$.__views.button!click!_track']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
},

_notNow=function(){
$.notNow.animate({
autoreverse:!0,
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.9})},

function(){
_done();
});
},

_track=function(){
_done(),
require('tickerfit/tracking').enablePassiveTracking(!0);
},

_done=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_show=function(){
$.enable.left=void 0,
$.enable.animate({
opacity:1,
duration:80});

},
_hide=function(callback){
$.enable.animate({
opacity:0,
duration:80},
function(){
$.enable.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.notNow!click!_notNow']&&$.addListener($.__views.notNow,'click',_notNow),__defers['$.__views.button!click!_track']&&$.__views.button.on('click',_track),



_.extend($,exports);
}

module.exports=Controller;