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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='rewardRedeemed',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.redeemed=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'redeemed'}),

$.__views.redeemed&&$.addTopLevelView($.__views.redeemed),
$.__views.backgroundImage=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:320,id:'backgroundImage',image:'/images/congrats-background.svg'}),

$.__views.redeemed.add($.__views.backgroundImage),
$.__views.__alloyId206=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId206'}),

$.__views.redeemed.add($.__views.__alloyId206),
$.__views.__alloyId207=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:50,id:'__alloyId207'}),

$.__views.__alloyId206.add($.__views.__alloyId207),
$.__views.star=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{width:76,height:88,id:'star',image:'/images/star.svg'}),

$.__views.__alloyId207.add($.__views.star),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'A Title!',showClose:!1,showBack:!1,id:'titlebar',__parentSymbol:$.__views.__alloyId206}),
$.__views.titlebar.setParent($.__views.__alloyId206),
$.__views.subtitle=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:'#88999F',text:'{{NICKNAME}} has been notified',id:'subtitle'}),

$.__views.__alloyId206.add($.__views.subtitle),
$.__views.reward=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontBold,fontSize:18},color:Alloy.Globals.Style.Color.TwilightBlue,width:'90%',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,top:32,id:'reward'}),

$.__views.__alloyId206.add($.__views.reward),
$.__views.points=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.BattleshipGrey,top:4,id:'points'}),

$.__views.__alloyId206.add($.__views.points),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:16,right:16,bottom:16,type:'primary',text:'Continue',enabled:!0,id:'button',__parentSymbol:$.__views.__alloyId206}),
$.__views.button.setParent($.__views.__alloyId206),
_done?$.__views.button.on('click',_done):__defers['$.__views.button!click!_done']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
_setTitle('Woo, reward redeemed!');
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
_show=function(data){
$.subtitle.text=$.subtitle.text.replace('{{NICKNAME}}',data.nickname),
$.reward.text=data.name,
$.points.text=data.amount+' points',
$.redeemed.left=void 0,
$.redeemed.animate({
opacity:1,
duration:80});

},
_hide=function(callback){
$.redeemed.animate({
opacity:0,
duration:80},
function(){
$.redeemed.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.button!click!_done']&&$.__views.button.on('click',_done),



_.extend($,exports);
}

module.exports=Controller;