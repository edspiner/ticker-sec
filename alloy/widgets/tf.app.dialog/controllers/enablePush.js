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




if(this.__widgetId='tf.app.dialog',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='enablePush',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.push=Ti.UI.createView(
{backgroundColor:'#fff',width:Alloy.Globals.Style.Size.Width.pct100,height:Alloy.Globals.Style.Size.Height.pct100,borderRadius:5,left:Alloy.Globals.Style.Size.Width.pct99,opacity:0,id:'push',layout:'vertical'}),

$.__views.push&&$.addTopLevelView($.__views.push),
$.__views.headerIcon=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:'headerIcon'}),

$.__views.push.add($.__views.headerIcon),
$.__views.background=Ti.UI.createView(
{width:140,height:140,borderRadius:70,backgroundColor:Alloy.Globals.Style.Color.LightBlue,opacity:.1,id:'background'}),

$.__views.headerIcon.add($.__views.background),
$.__views.__alloyId191=Ti.UI.createLabel(
{font:{fontFamily:'tickerfit',fontSize:80},color:Alloy.Globals.Style.Color.LightBlue,height:Ti.UI.SIZE,width:Ti.UI.SIZE,text:'5',textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'__alloyId191'}),

$.__views.headerIcon.add($.__views.__alloyId191),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:24},color:'#111',top:32,text:'Messages & Rewards',id:'title'}),

$.__views.push.add($.__views.title),
$.__views.description=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:14},color:Alloy.Globals.Style.Color.DarkerSilver,height:Ti.UI.SIZE,top:8,left:32,right:32,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:'description'}),

$.__views.push.add($.__views.description),
$.__views.button=Alloy.createWidget('tf.app.button','widget',{top:32,left:32,right:32,bottom:16,type:'primary',text:'Enable notifications',enabled:!0,id:'button',__parentSymbol:$.__views.push}),
$.__views.button.setParent($.__views.push),
_click?$.__views.button.on('click',_click):__defers['$.__views.button!click!_click']=!0,exports.destroy=function(){},




_.extend($,$.__views);var


args=arguments[0]||{},
working=!1,

_init=function(){
$.headerIcon.top=Alloy.Globals.Style.Size.Height.pct50-$.background.height-$.title.top,
$.description.text='We\u2019ll let you know when you receive messages or achieve your goals.\nBut first, let\u2019s enable notifications!';
},

_click=function(){
working||(
working=!0,
DISPATCHER.once('tf:push.registered',_done),
DISPATCHER.trigger('tf:register.push'));

},

_done=function(){
working=!1,
_hide(function(){
$.trigger('close',{
type:'device-syncing',
source:$});

});
},

_show=function(){
null==Ti.App.Properties.getString('PUSH_REQUESTED',null)?(







$.push.left=0,
$.push.animate({
opacity:1})):(DISPATCHER.trigger('tf:register.push'),$.trigger('close',{type:'device-syncing',source:$}));


},
_hide=function(callback){
$.push.animate({
opacity:0},
function(){
$.push.left=Alloy.Globals.Style.Size.Width.pct99,
callback&&callback();
});
};

_init(),

exports.show=_show,
exports.hide=_hide,





__defers['$.__views.button!click!_click']&&$.__views.button.on('click',_click),



_.extend($,exports);
}

module.exports=Controller;