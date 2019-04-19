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




if(this.__widgetId='tf.app.activityDetails',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='activityType',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.activityType=Ti.UI.createView(
{opacity:0,right:Alloy.Globals.Style.Size.Width.pct99,height:Alloy.Globals.Style.Size.Height.pct100,width:Alloy.Globals.Style.Size.Width.pct100,id:'activityType'}),

$.__views.activityType&&$.addTopLevelView($.__views.activityType),
$.__views.dialog=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,id:'dialog',layout:'vertical'}),

$.__views.activityType.add($.__views.dialog),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'Select Your Exercise',showClose:!0,showBack:!1,id:'titlebar',__parentSymbol:$.__views.dialog}),
$.__views.titlebar.setParent($.__views.dialog),
_close?$.__views.titlebar.on('close',_close):__defers['$.__views.titlebar!close!_close']=!0,$.__views.__alloyId226=Ti.UI.createView(
{top:24,left:16,right:16,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId226'}),

$.__views.dialog.add($.__views.__alloyId226),
$.__views.Walking=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Walking',__parentSymbol:$.__views.__alloyId226}),
$.__views.Walking.setParent($.__views.__alloyId226),
_select?$.__views.Walking.on('click',_select):__defers['$.__views.Walking!click!_select']=!0,$.__views.Running=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Running',__parentSymbol:$.__views.__alloyId226}),
$.__views.Running.setParent($.__views.__alloyId226),
_select?$.__views.Running.on('click',_select):__defers['$.__views.Running!click!_select']=!0,$.__views.Cycling=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Cycling',__parentSymbol:$.__views.__alloyId226}),
$.__views.Cycling.setParent($.__views.__alloyId226),
_select?$.__views.Cycling.on('click',_select):__defers['$.__views.Cycling!click!_select']=!0,$.__views.__alloyId227=Ti.UI.createView(
{top:24,left:16,right:16,height:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId227'}),

$.__views.dialog.add($.__views.__alloyId227),
$.__views.Gym=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Gym',__parentSymbol:$.__views.__alloyId227}),
$.__views.Gym.setParent($.__views.__alloyId227),
_select?$.__views.Gym.on('click',_select):__defers['$.__views.Gym!click!_select']=!0,$.__views.Cardio=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Cardio',__parentSymbol:$.__views.__alloyId227}),
$.__views.Cardio.setParent($.__views.__alloyId227),
_select?$.__views.Cardio.on('click',_select):__defers['$.__views.Cardio!click!_select']=!0,$.__views.Sport=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Sport',__parentSymbol:$.__views.__alloyId227}),
$.__views.Sport.setParent($.__views.__alloyId227),
_select?$.__views.Sport.on('click',_select):__defers['$.__views.Sport!click!_select']=!0,$.__views.__alloyId228=Ti.UI.createView(
{top:24,left:16,right:16,height:Ti.UI.SIZE,bottom:40,layout:'horizontal',id:'__alloyId228'}),

$.__views.dialog.add($.__views.__alloyId228),
$.__views.Swimming=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Swimming',__parentSymbol:$.__views.__alloyId228}),
$.__views.Swimming.setParent($.__views.__alloyId228),
_select?$.__views.Swimming.on('click',_select):__defers['$.__views.Swimming!click!_select']=!0,$.__views.Yoga=Alloy.createWidget('tf.app.activityDetails','exerciseButton',{width:'33%',id:'Yoga',__parentSymbol:$.__views.__alloyId228}),
$.__views.Yoga.setParent($.__views.__alloyId228),
_select?$.__views.Yoga.on('click',_select):__defers['$.__views.Yoga!click!_select']=!0,exports.destroy=function(){},




_.extend($,$.__views),


'use strict';var




fullActivity,Q=require('vendor/q'),initialised=!1,

_init=function(){
fullActivity={},
initialised||(
initialised=!0);
},

_close=function(){
resetBorders(),
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_select=function(item){
resetBorders(),
fullActivity.type=item.id,
_hide(function(){
$.trigger('change',{
type:'typeToDetails',
data:fullActivity,
source:$});

});
},

_show=function(activity){
$.activityType.animate({
opacity:1,
duration:200,
right:0},
function(){}),
fullActivity=activity,
0!==fullActivity.type&&(
$[fullActivity.type].button.borderWidth=3,
$[fullActivity.type].button.borderColor=Alloy.Globals.Style.Color.RedPink);

},

resetBorders=function(){
0!==fullActivity.type&&(
$[fullActivity.type].button.borderWidth=0,
$[fullActivity.type].button.borderColor='transparent');

},

_hide=function(callback){
$.activityType.animate({
opacity:0,
duration:200,
right:Alloy.Globals.Style.Size.Width.pct99},
function(){
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.titlebar!close!_close']&&$.__views.titlebar.on('close',_close),__defers['$.__views.Walking!click!_select']&&$.__views.Walking.on('click',_select),__defers['$.__views.Running!click!_select']&&$.__views.Running.on('click',_select),__defers['$.__views.Cycling!click!_select']&&$.__views.Cycling.on('click',_select),__defers['$.__views.Gym!click!_select']&&$.__views.Gym.on('click',_select),__defers['$.__views.Cardio!click!_select']&&$.__views.Cardio.on('click',_select),__defers['$.__views.Sport!click!_select']&&$.__views.Sport.on('click',_select),__defers['$.__views.Swimming!click!_select']&&$.__views.Swimming.on('click',_select),__defers['$.__views.Yoga!click!_select']&&$.__views.Yoga.on('click',_select),



_.extend($,exports);
}

module.exports=Controller;