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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='done',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.done=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'done',layout:'vertical'}),

$.__views.done&&$.addTopLevelView($.__views.done),
$.__views.iconContainer=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'iconContainer'}),

$.__views.done.add($.__views.iconContainer),
$.__views.background=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.KiwiGreen,opacity:.1,id:'background'}),

$.__views.iconContainer.add($.__views.background),
$.__views.__alloyId190=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:72},color:Alloy.Globals.Style.Color.KiwiGreen,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'h',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId190'}),

$.__views.iconContainer.add($.__views.__alloyId190),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:32,id:'title'}),

$.__views.done.add($.__views.title),
$.__views.message=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:8,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'message'}),

$.__views.done.add($.__views.message),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:64,left:32,right:32,type:'primary',text:'Finish setup',enabled:!0,id:'button',__parentSymbol:$.__views.done}),
$.__views.button.setParent($.__views.done),
_continue?$.__views.button.on('click',_continue):__defers['$.__views.button!click!_continue']=!0,exports.destroy=function(){},




_.extend($,$.__views);var




data,args=arguments[0]||{},

_init=function(){
$.iconContainer.top=Alloy.Globals.Style.Size.Height.pct50-$.background.height-$.title.top,
$.message.text='You\u2019re all setup and ready to go!',
$.title.text='All done!';
},

_continue=function(){
data&&data.callback&&data.callback(),
_hide(function(){
$.trigger('close',{
type:'close',
source:$});

});
},

_show=function(d){
data=d,
$.done.left=0,
$.done.animate({
opacity:1});

},
_hide=function(callback){
$.done.animate({
opacity:0},
function(){
$.done.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.button!click!_continue']&&$.__views.button.on('click',_continue),



_.extend($,exports);
}

module.exports=Controller;