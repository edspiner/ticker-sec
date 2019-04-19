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




if(this.__widgetId='tf.app.routines',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='listEdit',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};







$.__views.editList=Ti.UI.createView(
{width:Alloy.Globals.Style.Size.Width.pct100,backgroundColor:'#EEE',id:'editList'}),

$.__views.editList&&$.addTopLevelView($.__views.editList),
$.__views.__alloyId121=Ti.UI.createView(
{height:Ti.UI.SIZE,id:'__alloyId121'}),

$.__views.editList.add($.__views.__alloyId121),
$.__views.__alloyId122=Ti.UI.createView(
{left:0,right:0,height:.5,backgroundColor:Alloy.Globals.Style.Color.BrandGreyTransparent,top:0,id:'__alloyId122'}),

$.__views.__alloyId121.add($.__views.__alloyId122),
$.__views.noitems=Ti.UI.createView(
{top:0,opacity:0,height:200,backgroundColor:'#EEE',id:'noitems'}),

$.__views.__alloyId121.add($.__views.noitems),
$.__views.box=Ti.UI.createView(
{top:'8dp',bottom:'8dp',left:'8dp',right:'8dp',backgroundColor:'#DADADA',id:'box'}),

$.__views.noitems.add($.__views.box),
$.__views.frame=Ti.UI.createView(
{top:0,left:'0.5dp',right:'0.5dp',bottom:'1dp',backgroundColor:'white',id:'frame'}),

$.__views.box.add($.__views.frame),
$.__views.content=Ti.UI.createView(
{id:'content'}),

$.__views.frame.add($.__views.content),
$.__views.__alloyId123=Ti.UI.createView(
{height:Ti.UI.SIZE,layout:'vertical',id:'__alloyId123'}),

$.__views.content.add($.__views.__alloyId123),
$.__views.__alloyId124=Ti.UI.createLabel(
{font:{fontFamily:'activities',fontSize:50},color:Alloy.Globals.Style.Color.BrandPink,text:Alloy.Globals.Style.RoutineSetupString,id:'__alloyId124'}),

$.__views.__alloyId123.add($.__views.__alloyId124),
$.__views.__alloyId125=Ti.UI.createLabel(
{font:{fontFamily:Alloy.CFG.fontLightItalic,fontSize:18},color:Alloy.Globals.Style.Color.BrandGreyDark,top:20,left:10,right:10,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,text:'You have no tasks setup yet.\n\nSimply tap \'+\' below to create your first!',id:'__alloyId125'}),

$.__views.__alloyId123.add($.__views.__alloyId125),
$.__views.list=Ti.UI.createTableView(
{backgroundColor:'transparent',top:0,left:0,width:Ti.UI.FILL,height:Ti.UI.FILL,pullBackgroundColor:Alloy.Globals.Style.Color.BrandBlue,showVerticalScrollIndicator:!1,opacity:0,separatorStyle:Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE,id:'list'}),

$.__views.__alloyId121.add($.__views.list),
exports.destroy=function(){},




_.extend($,$.__views),


$.TAG='EDITLIST';var





list,callback,addCallback,editCallback,multiselect,sorted,args=arguments[0]||{},navigation=args.navigation||Alloy.Globals.Nav.Routines,
listTableView_data=[],

setMultiSelect=function(ms){
multiselect=ms;
},
setSorted=function(s){
sorted=s;
},
setList=function(l){



list=sorted?_.sortBy(l,function(item){
return item.text;
}):

l,


listTableView_data=[];


for(var
cell,listTableView_rows=[],i=0;i<list.length;i++)cell=Widget.createController('list_cell',{
item:list[i]}),

listTableView_data.push(cell),
listTableView_rows.push(cell.getView());



if($.list.top=0,$.noitems.opacity=0,addCallback){
list.length?(
$.list.top=0,
$.noitems.opacity=0):(


$.list.top=200,
$.noitems.opacity=1);


var cell=Widget.createController('list_cell',{});
listTableView_data.push(cell),
listTableView_rows.push(cell.getView());
}

$.list.setData(listTableView_rows);

var tableview_animation=Ti.UI.createAnimation({
opacity:1,
duration:500,
curve:Titanium.UI.ANIMATION_CURVE_EASE_OUT});

$.list.animate(tableview_animation);
},

disableClick=!1;

$.list.addEventListener('click',function(e){
!disableClick&&
0<=e.index&&(
$.list.touchEnabled=!1,
listTableView_data[e.index].options()?























'edit'===e.source.id?
editCallback&&
listTableView_data[e.index].animateClick(function(){
listTableView_data[e.index].hideOptions(),
editCallback(listTableView_data[e.index].getItem());
}):


listTableView_data[e.index].hideOptions():listTableView_data[e.index].animateClick(function(){var item=listTableView_data[e.index].getItem();if(item){if(item.selected=!item.selected,!multiselect)for(var i=0;i<listTableView_data.length;i++)if(i!==e.index){var li=listTableView_data[i].getItem();li.selected&&(li.selected=!1,listTableView_data[i].update())}listTableView_data[e.index].update()}else addCallback&&addCallback()}),


setTimeout(function(){
$.list.touchEnabled=!0;
},100));


});

var swipeEnabled=!1;!1,























$.list.addEventListener('longpress',function(e){
if(swipeEnabled&&(
disableClick=!0,
setTimeout(function(){
disableClick=!1;
},500),
e.row&&listTableView_data[e.index].getItem()))
if(listTableView_data[e.index].options())
listTableView_data[e.index].hideOptions();else
{
listTableView_data[e.index].showOptions();
for(var j=0;j<listTableView_data.length;j++)
e.index!=j&&
listTableView_data[j].hideOptions();


}


});var

setDoneCallback=function(cb){
callback=cb;
},
setAddCallback=function(cb){
addCallback=cb;
},
setEditCallback=function(cb){
editCallback=cb,
swipeEnabled=void 0!==cb;
};

navigation.addEventListener('nav.backstart',function focusText(event){
event.tag===$.TAG&&
callback&&
callback(list);


}),

exports.setList=setList,
exports.setMultiSelect=setMultiSelect,
exports.setSorted=setSorted,
exports.setDoneCallback=setDoneCallback,
exports.setAddCallback=setAddCallback,
exports.setEditCallback=setEditCallback,









_.extend($,exports);
}

module.exports=Controller;