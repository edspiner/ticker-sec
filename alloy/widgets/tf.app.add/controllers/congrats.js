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




if(this.__widgetId='tf.app.add',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='congrats',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.congrats=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,opacity:0,left:Alloy.Globals.Style.Size.Width.pct99,id:'congrats'}),

$.__views.congrats&&$.addTopLevelView($.__views.congrats),
$.__views.backgroundImage=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:320,id:'backgroundImage',image:'/images/congrats-background.svg'}),

$.__views.congrats.add($.__views.backgroundImage),
$.__views.__alloyId216=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId216'}),

$.__views.congrats.add($.__views.__alloyId216),
$.__views.__alloyId217=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:50,id:'__alloyId217'}),

$.__views.__alloyId216.add($.__views.__alloyId217),
$.__views.star=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:76,height:88,id:'star',image:'/images/star.svg'}),

$.__views.__alloyId217.add($.__views.star),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'A Title!',showClose:!1,showBack:!1,id:'titlebar',__parentSymbol:$.__views.__alloyId216}),
$.__views.titlebar.setParent($.__views.__alloyId216),
$.__views.viewActivitiesButton=Alloy.createWidget('tf.app.button','widget',{top:32,left:16,right:16,bottom:12,type:'secondary',text:'View Activity Review',enabled:!0,id:'viewActivitiesButton',__parentSymbol:$.__views.__alloyId216}),
$.__views.viewActivitiesButton.setParent($.__views.__alloyId216),
_viewActivities?$.__views.viewActivitiesButton.on('click',_viewActivities):__defers['$.__views.viewActivitiesButton!click!_viewActivities']=!0,$.__views.doneButton=Alloy.createWidget('tf.app.button','widget',{left:16,right:16,bottom:24,type:'primary',text:'Continue',enabled:!0,id:'doneButton',__parentSymbol:$.__views.__alloyId216}),
$.__views.doneButton.setParent($.__views.__alloyId216),
_done?$.__views.doneButton.on('click',_done):__defers['$.__views.doneButton!click!_done']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
_setTitle('Woo, Great job '+cus.singleton().get('user').firstname+'!');
},

_setTitle=function(title){
$.titlebar.setTitle(title);
},

_done=function(){
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_viewActivities=function(){
_hide(function(){
$.trigger('close',{
type:'view-activities',
source:$});

});
},

_show=function(){
$.congrats.left=void 0,
$.congrats.animate({
opacity:1,
duration:200});

},

_hide=function(callback){
$.congrats.animate({
opacity:0,
duration:200},
function(){
$.congrats.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.setTitle=_setTitle,
exports.show=_show,
exports.hide=_hide,





__defers['$.__views.viewActivitiesButton!click!_viewActivities']&&$.__views.viewActivitiesButton.on('click',_viewActivities),__defers['$.__views.doneButton!click!_done']&&$.__views.doneButton.on('click',_done),



_.extend($,exports);
}

module.exports=Controller;