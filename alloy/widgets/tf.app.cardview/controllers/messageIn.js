var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.cardview/'+s:
s.substring(0,index)+'/tf.app.cardview/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.cardview');




if(this.__widgetId='tf.app.cardview',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='messageIn',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.messageIn=Ti.UI.createView(
{height:Ti.UI.SIZE,width:Ti.UI.FILL,id:'messageIn'}),

$.__views.messageIn&&$.addTopLevelView($.__views.messageIn),
$.__views.icon=Ti.UI.createView(
{height:'40dp',width:'40dp',borderRadius:'20dp',backgroundColor:'#EF96BA',left:'7.5dp',id:'icon'}),

$.__views.messageIn.add($.__views.icon),
$.__views.heart=Ti.UI.createLabel(
{font:{fontFamily:'heart',fontSize:'30dp'},color:'#fff',text:'a',top:'10dp',id:'heart'}),

$.__views.icon.add($.__views.heart),
$.__views.msgCaret=Ti.UI.createView(
{backgroundColor:'#8BD8F2',height:'20dp',width:'20dp',borderRadius:'3dp',left:'55dp',id:'msgCaret'}),

$.__views.messageIn.add($.__views.msgCaret),
$.__views.msgMain=Ti.UI.createView(
{backgroundColor:'#8BD8F2',height:Ti.UI.SIZE,width:Ti.UI.FILL,left:'60dp',borderRadius:'10dp',id:'msgMain'}),

$.__views.messageIn.add($.__views.msgMain),
$.__views.msg=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLight,fontSize:'16dp'},color:'#111',top:'10dp',bottom:'10dp',left:'10dp',right:'10dp',height:Ti.UI.SIZE,touchEnabled:!1,id:'msg'}),

$.__views.msgMain.add($.__views.msg),
exports.destroy=function(){},




_.extend($,$.__views);


var args=arguments[0]||{};

$.msgCaret.transform=Ti.UI.create2DMatrix({
rotate:45}),


exports.setMessage=function(message){
$.msg.setText(message);
},

args.message&&
exports.setMessage(args.message),


exports.onClick=function(callback){
$.msgMain.addEventListener('click',callback);
},









_.extend($,exports);
}

module.exports=Controller;