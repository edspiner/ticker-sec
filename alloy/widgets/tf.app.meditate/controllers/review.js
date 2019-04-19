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




if(this.__widgetId='tf.app.meditate',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='review',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.review=Ti.UI.createView(
{left:Alloy.Globals.Style.Widget.Meditate.ViewWidth,width:Alloy.Globals.Style.Widget.Meditate.ViewWidth,height:Alloy.Globals.Style.Widget.Meditate.Height,backgroundGradient:{type:'linear',colors:['#0000','#9000'],startPoint:{x:'50%',y:0},endPoint:{x:'50%',y:'100%'},backFillStart:!1},id:'review'}),

$.__views.review&&$.addTopLevelView($.__views.review),
$.__views.picker=Ti.UI.createView(
{backgroundColor:'#9000',borderRadius:'5dp',width:'85%',height:'180dp',id:'picker',layout:'vertical'}),

$.__views.review.add($.__views.picker),
$.__views.__alloyId73=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'20dp'},color:'white',top:'15dp',text:'How are you feeling?',id:'__alloyId73'}),

$.__views.picker.add($.__views.__alloyId73),
$.__views.buttons=Ti.UI.createView(
{height:Ti.UI.SIZE,width:'95%',id:'buttons',layout:'horizontal'}),

$.__views.picker.add($.__views.buttons),
$.__views.happy=Ti.UI.createView(
{top:'30dp',width:'19.8%',height:Ti.UI.SIZE,id:'happy'}),

$.__views.buttons.add($.__views.happy),
rate?$.addListener($.__views.happy,'click',rate):__defers['$.__views.happy!click!rate']=!0,$.__views.__alloyId74=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:'40dp',width:'40dp',touchEnabled:!1,image:'/images/happy.svg',id:'__alloyId74'}),

$.__views.happy.add($.__views.__alloyId74),
$.__views.good=Ti.UI.createView(
{top:'30dp',width:'19.8%',height:Ti.UI.SIZE,id:'good'}),

$.__views.buttons.add($.__views.good),
rate?$.addListener($.__views.good,'click',rate):__defers['$.__views.good!click!rate']=!0,$.__views.__alloyId75=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:'40dp',width:'40dp',touchEnabled:!1,image:'/images/good.svg',id:'__alloyId75'}),

$.__views.good.add($.__views.__alloyId75),
$.__views.soso=Ti.UI.createView(
{top:'30dp',width:'19.8%',height:Ti.UI.SIZE,id:'soso'}),

$.__views.buttons.add($.__views.soso),
rate?$.addListener($.__views.soso,'click',rate):__defers['$.__views.soso!click!rate']=!0,$.__views.__alloyId76=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:'40dp',width:'40dp',touchEnabled:!1,image:'/images/soso.svg',id:'__alloyId76'}),

$.__views.soso.add($.__views.__alloyId76),
$.__views.notgood=Ti.UI.createView(
{top:'30dp',width:'19.8%',height:Ti.UI.SIZE,id:'notgood'}),

$.__views.buttons.add($.__views.notgood),
rate?$.addListener($.__views.notgood,'click',rate):__defers['$.__views.notgood!click!rate']=!0,$.__views.__alloyId77=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:'40dp',width:'40dp',touchEnabled:!1,image:'/images/notgood.svg',id:'__alloyId77'}),

$.__views.notgood.add($.__views.__alloyId77),
$.__views.sad=Ti.UI.createView(
{top:'30dp',width:'19.8%',height:Ti.UI.SIZE,id:'sad'}),

$.__views.buttons.add($.__views.sad),
rate?$.addListener($.__views.sad,'click',rate):__defers['$.__views.sad!click!rate']=!0,$.__views.__alloyId78=(require('com.geraudbourdin.svgview').createView||Ti.UI.createView)(
{height:'40dp',width:'40dp',touchEnabled:!1,image:'/images/sad.svg',id:'__alloyId78'}),

$.__views.sad.add($.__views.__alloyId78),
$.__views.again=Ti.UI.createView(
{top:'30dp',id:'again'}),

$.__views.picker.add($.__views.again),
$.__views.__alloyId79=Ti.UI.createView(
{width:Ti.UI.SIZE,layout:'horizontal',id:'__alloyId79'}),

$.__views.again.add($.__views.__alloyId79),
$.__views.__alloyId80=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:'13dp'},color:Alloy.Globals.Style.Color.BrandGrey,text:'Don\'t ask again:',id:'__alloyId80'}),

$.__views.__alloyId79.add($.__views.__alloyId80),
$.__views.checkContainer=Ti.UI.createView(
{left:'10dp',width:'30dp',height:'30dp',id:'checkContainer'}),

$.__views.__alloyId79.add($.__views.checkContainer),
toggleAgain?$.addListener($.__views.checkContainer,'click',toggleAgain):__defers['$.__views.checkContainer!click!toggleAgain']=!0,$.__views.check=Ti.UI.createView(
{height:'15dp',width:'15dp',borderColor:Alloy.Globals.Style.Color.BrandGrey,borderRadius:'3dp',touchEnabled:!1,id:'check'}),

$.__views.checkContainer.add($.__views.check),
$.__views.checked=Ti.UI.createView(
{height:'11dp',width:'11dp',backgroundColor:'transparent',borderRadius:'2dp',touchEnabled:!1,id:'checked'}),

$.__views.check.add($.__views.checked),
exports.destroy=function(){},




_.extend($,$.__views);var


path,


main,
callback,

playtalk,
timer,

isPreReview,screenView=$.review,title='',

cus=require('services/current_user_service');


$.init=function(Main,Playtalk,Timer){
main=Main,
playtalk=Playtalk,
timer=Timer,
isPreReview=playtalk||timer,
title=(isPreReview?'Before':'After')+title;
};var

showRating,
dontShowAgain;

$.start=function(Path,onComplete){
DISPATCHER.trigger('tf:main.home.hide'),
$.checked.backgroundColor='transparent',
path=Path,
callback=onComplete,

path.review=path.review||{};var
toggles=cus.singleton().get('toggles'),
trackMood=toggles.trackMood&&'yes'===toggles.trackMood;
showRating=trackMood&&'disabled'!==Ti.App.Properties.getString('meditate.showReview')&&'disabled'!==path.review.showRating,
dontShowAgain=!1,

showRating?
main.show(screenView,title):(

path.review.showRating='disabled',
next());

},

$.end=function(){
showRating&&
main.hide(screenView);

};var

rate=function(e){
var id=e.source.id;
e.source.animate({
autoreverse:!0,
duration:50,
transform:Ti.UI.create2DMatrix({
scale:.7})},

function(e){
var rating;
'happy'===id?
rating=5:
'good'===id?
rating=4:
'soso'===id?
rating=3:
'notgood'===id?
rating=2:
'sad'===id&&(
rating=1),

path.review.showRating=dontShowAgain?'disabled':'enabled',
isPreReview?
path.review.preRating=rating:

path.review.postRating=rating,


next();
});
},
toggleAgain=function(e){
dontShowAgain=!dontShowAgain,
$.checked.backgroundColor=dontShowAgain?'#fff':'transparent';
},
next=function(){

isPreReview?
path.listen?
playtalk.start(path):

timer.start(path):


main.finish(path),


callback&&callback(path),
$.end();
};

$.cleanup=function(){},





__defers['$.__views.happy!click!rate']&&$.addListener($.__views.happy,'click',rate),__defers['$.__views.good!click!rate']&&$.addListener($.__views.good,'click',rate),__defers['$.__views.soso!click!rate']&&$.addListener($.__views.soso,'click',rate),__defers['$.__views.notgood!click!rate']&&$.addListener($.__views.notgood,'click',rate),__defers['$.__views.sad!click!rate']&&$.addListener($.__views.sad,'click',rate),__defers['$.__views.checkContainer!click!toggleAgain']&&$.addListener($.__views.checkContainer,'click',toggleAgain),



_.extend($,exports);
}

module.exports=Controller;