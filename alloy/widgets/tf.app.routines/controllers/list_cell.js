var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.routines/'+s:
s.substring(0,index)+'/tf.app.routines/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.routines');




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='list_cell',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.row=Ti.UI.createTableViewRow(
{backgroundColor:'#eee',height:Ti.UI.SIZE,font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},layout:'Absolute',top:0,left:0,id:'row'}),

$.__views.row&&$.addTopLevelView($.__views.row),
$.__views.container=Ti.UI.createView(
{top:0,height:50,id:'container'}),

$.__views.row.add($.__views.container),
$.__views.new_item=Ti.UI.createView(
{opacity:0,id:'new_item'}),

$.__views.container.add($.__views.new_item),
cancelBubble?$.addListener($.__views.new_item,'click',cancelBubble):__defers['$.__views.new_item!click!cancelBubble']=!0,$.__views.add=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:'40'},color:Alloy.Globals.Style.Color.BrandGreyDark,text:Alloy.Globals.Style.AddString,id:'add'}),

$.__views.new_item.add($.__views.add),
$.__views.item=Ti.UI.createView(
{id:'item'}),

$.__views.container.add($.__views.item),
$.__views.options=Ti.UI.createView(
{right:0,width:65,height:Ti.UI.FILL,id:'options',layout:'horizontal'}),

$.__views.item.add($.__views.options),
$.__views.edit=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:16},color:'#fff',width:'100%',height:Ti.UI.FILL,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,backgroundColor:Alloy.Globals.Style.Color.BrandBlue,id:'edit',text:'Edit'}),

$.__views.options.add($.__views.edit),
$.__views.content=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,backgroundColor:'#fff',id:'content'}),

$.__views.item.add($.__views.content),
$.__views.title=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontNormal,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,left:15,textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:'title',text:'A Title'}),

$.__views.content.add($.__views.title),
$.__views.selected=Ti.UI.createLabel(
{font:{fontFamily:'flaticon',fontSize:20},color:Alloy.Globals.Style.Color.BrandPink,text:Alloy.Globals.Style.TickString,right:15,opacity:0,id:'selected'}),

$.__views.content.add($.__views.selected),
$.__views.__alloyId126=Ti.UI.createView(
{height:.5,bottom:1,left:10,right:10,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,id:'__alloyId126'}),

$.__views.content.add($.__views.__alloyId126),
exports.destroy=function(){},




_.extend($,$.__views);var





item,args=arguments[0]||{},animateButton=require('utils/ui').animateClick,
options=!1,

setItem=function(i){
i?(
item=i,
$.updateViews({
"#title":{
text:item.text},

"#selected":{
opacity:item.selected?1:0}})):(




$.container.height=75,
$.item.top=75,
$.item.opacity=0,
$.new_item.opacity=1);

},

update=function(){
item&&setItem(item);
};

setItem(args.item);var

cancelBubble=function(evt){
'add'!==evt.source.id&&(
evt.cancelBubble=!0);

},

animateCell=function(view,callback){
view.animate({
backgroundColor:'#eee',
duration:100,
autoreverse:!0},
callback);
};

exports.options=function(){
return options;
},

exports.showOptions=function(){
options=!0,
$.content.animate({
left:-65,
duration:100});

},

exports.hideOptions=function(){
options=!1,
$.content.animate({
left:0,
duration:100});

},

exports.animateClick=function(callback){

item?


options?
animateButton($.edit,$.edit.color,!0,callback):

animateCell($.content,callback):animateButton($.add,$.add.color,!0,callback);


},

exports.getItem=function(){
return item;
},

exports.update=update,





__defers['$.__views.new_item!click!cancelBubble']&&$.addListener($.__views.new_item,'click',cancelBubble),



_.extend($,exports);
}

module.exports=Controller;