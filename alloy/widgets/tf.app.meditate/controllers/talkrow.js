var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.meditate/'+s:
s.substring(0,index)+'/tf.app.meditate/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.meditate');




if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='talkrow',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.container=Ti.UI.createTableViewRow(
{backgroundColor:'transparent',height:'75dp',font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'container'}),

$.__views.container&&$.addTopLevelView($.__views.container),
$.__views.item=Ti.UI.createView(
{height:'65dp',width:'100%',backgroundColor:'#1000',id:'item'}),

$.__views.container.add($.__views.item),
$.__views.suggested_view=Ti.UI.createView(
{backgroundGradient:{type:'linear',startPoint:{x:'-50%',y:'50%'},endPoint:{x:'100%',y:'50%'},colors:[{color:'#0fff',offset:0},{color:Alloy.Globals.Style.Color.BrandBlueUltraTransparent,offset:1}]},opacity:0,id:'suggested_view'}),

$.__views.item.add($.__views.suggested_view),
$.__views.thumb=Ti.UI.createView(
{left:'10dp',width:'50dp',height:'50dp',borderRadius:'25dp',touchEnabled:!1,id:'thumb'}),

$.__views.item.add($.__views.thumb),
$.__views.canvas=Ti.UI.createScrollView(
{width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,contentWidth:'auto',contentHeight:'auto',scrollingEnabled:!1,scrollType:'horizontal',id:'canvas'}),

$.__views.thumb.add($.__views.canvas),
$.__views.thumbnail_imageview=Ti.UI.createImageView(
{height:'50dp',preventDefaultImage:!0,opacity:.75,id:'thumbnail_imageview'}),

$.__views.canvas.add($.__views.thumbnail_imageview),
loadHandler?$.addListener($.__views.thumbnail_imageview,'load',loadHandler):__defers['$.__views.thumbnail_imageview!load!loadHandler']=!0,noImage?$.addListener($.__views.thumbnail_imageview,'error',noImage):__defers['$.__views.thumbnail_imageview!error!noImage']=!0,$.__views.act=Ti.UI.createActivityIndicator(
{height:Ti.UI.FILL,width:Ti.UI.FILL,backgroundColor:'#d999',color:'#fff',font:{fontFamily:Alloy.CFG.fontBold,fontSize:'12dp'},zIndex:999,style:Titanium.UI.ActivityIndicatorStyle.DARK,id:'act'}),

$.__views.thumb.add($.__views.act),
$.__views.title_label=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'16dp'},color:'#ffffff',left:'75dp',right:'45dp',id:'title_label',text:'A Title'}),

$.__views.item.add($.__views.title_label),
$.__views.viewed_view=Ti.UI.createView(
{backgroundGradient:{type:'linear',startPoint:{x:'0%',y:'50%'},endPoint:{x:'100%',y:'50%'},colors:[{color:'#0000',offset:0},{color:'#2000',offset:1}]},opacity:0,id:'viewed_view'}),

$.__views.item.add($.__views.viewed_view),
$.__views.viewed_label=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:'15dp'},color:'#fff',text:Alloy.Globals.Style.TickString,right:'19dp',id:'viewed_label'}),

$.__views.viewed_view.add($.__views.viewed_label),
$.__views.overlay_view=Ti.UI.createView(
{height:'65dp',backgroundColor:'#5fff',opacity:0,id:'overlay_view'}),

$.__views.item.add($.__views.overlay_view),
exports.destroy=function(){},




_.extend($,$.__views),


$.act.show();var
loadHandler=function(){
$.thumbnail_imageview.removeEventListener('load',loadHandler),
$.thumbnail_imageview.removeEventListener('error',noImage),


setTimeout(function(){
$.act.hide();
},100);
},

noImage=function(e){
$.thumbnail_imageview.removeEventListener('load',loadHandler),
$.thumbnail_imageview.removeEventListener('error',noImage),
$.thumb.backgroundColor='#2fff',
$.act.hide();
},

animate=!1,
cleanup=function(){
DISPATCHER.off('tf:selecttalk.done',cleanup),
animate=!1;
},

flash=function(){
animate&&
$.suggested_view.animate({
opacity:1,
autoreverse:!0,
duration:1500},
flash);

};

exports.animateSuggested=function(){
DISPATCHER.on('tf:selecttalk.done',cleanup),
animate=!0,
flash();
},

exports.animateClick=function(callback){
$.overlay_view.animate({
opacity:1,
autoreverse:!0,
duration:100},
callback);
},

exports.setViewed=function(viewed){

$.viewed_view.opacity=viewed?1:

0;

},





__defers['$.__views.thumbnail_imageview!load!loadHandler']&&$.addListener($.__views.thumbnail_imageview,'load',loadHandler),__defers['$.__views.thumbnail_imageview!error!noImage']&&$.addListener($.__views.thumbnail_imageview,'error',noImage),



_.extend($,exports);
}

module.exports=Controller;