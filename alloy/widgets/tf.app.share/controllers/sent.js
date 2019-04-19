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




if(this.__widgetId='tf.app.share',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='sent',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.sent=Ti.UI.createView(
{backgroundColor:'#fff',width:'80%',height:Ti.UI.SIZE,borderRadius:5,opacity:0,left:Alloy.Globals.Style.Size.Width.pct99,id:'sent',layout:'vertical'}),

$.__views.sent&&$.addTopLevelView($.__views.sent),
$.__views.__alloyId185=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,top:50,id:'__alloyId185'}),

$.__views.sent.add($.__views.__alloyId185),
$.__views.__alloyId186=Ti.UI.createView(
{width:82,height:82,borderRadius:41,backgroundColor:Alloy.Globals.Style.Color.KiwiGreen,opacity:.1,id:'__alloyId186'}),

$.__views.__alloyId185.add($.__views.__alloyId186),
$.__views.__alloyId187=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:40},color:Alloy.Globals.Style.Color.KiwiGreen,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'h',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId187'}),

$.__views.__alloyId185.add($.__views.__alloyId187),
$.__views.titlebar=Alloy.createWidget('tf.app.dialog','titleBar',{top:12,title:'A Title!',showClose:!1,showBack:!1,id:'titlebar',__parentSymbol:$.__views.sent}),
$.__views.titlebar.setParent($.__views.sent),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:5,left:24,right:24,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'description'}),

$.__views.sent.add($.__views.description),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:16,right:16,bottom:16,type:'primary',text:'Continue',enabled:!0,id:'button',__parentSymbol:$.__views.sent}),
$.__views.button.setParent($.__views.sent),
_done?$.__views.button.on('click',_done):__defers['$.__views.button!click!_done']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},

_init=function(){
var cus=require('services/current_user_service');
$.description.text='Great job on the effort you\'re putting in '+cus.singleton().get('user').firstname+'!',
args.title&&_setTitle(args.title);
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
_show=function(){
$.sent.left=void 0,
$.sent.animate({
opacity:1,
duration:200});

},
_hide=function(callback){
$.sent.animate({
opacity:0,
duration:200},
function(){
$.sent.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.setTitle=_setTitle,
exports.show=_show,
exports.hide=_hide,





__defers['$.__views.button!click!_done']&&$.__views.button.on('click',_done),



_.extend($,exports);
}

module.exports=Controller;