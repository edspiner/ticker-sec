var Alloy=require('/alloy'),
Backbone=Alloy.Backbone,
_=Alloy._;


function WPATH(s){var
index=s.lastIndexOf('/'),
path=-1===index?
'tf.app.combobox/'+s:
s.substring(0,index)+'/tf.app.combobox/'+s.substring(index+1);

return 0===path.indexOf('/')?path:'/'+path;
}

function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){
var Widget=new(require('/alloy/widget'))('tf.app.combobox');




if(this.__widgetId='tf.app.combobox',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='widget',this.args=arguments[0]||{},arguments[0])var
__parentSymbol=__processArg(arguments[0],'__parentSymbol'),
$model=__processArg(arguments[0],'$model'),
__itemTemplate=__processArg(arguments[0],'__itemTemplate');var

$=this,
exports={},
__defers={};








$.__views.field=Ti.UI.createView(
{id:'field'}),

$.__views.field&&$.addTopLevelView($.__views.field),

exports.destroy=function(){},




_.extend($,$.__views);var







defaults={
editable:!1,
rightButtonMode:Ti.UI.INPUT_BUTTONMODE_ALWAYS},

dimensions=['left','top','right','bottom','center','width','height'],
properties=['choices','id','parentView'],


args=_.defaults(arguments[0],defaults);






































































if(1?_.extend($.field,_.omit(args,properties)):(_.extend($.field,_.chain(args).omit(properties).value()),_.extend($.container,_.pick(args,dimensions)),_.extend($.dropButton,args.dropButton),$.field.rightButton=$.dropButton),exports.init=function(parentView){$.parentView=parentView||Alloy.Globals.mainWindow},Object.defineProperty($,'id',{get:function(){return $._id},set:function(id){if($._id=id,!1)$.field.value=$._id&&$._choices&&$._choices[$._id]?$._choices[$._id].title:'';else if($.picker){var i,rows=[],count=-1,selected=-1;for(i in $.choices)count++,$._id==i&&(selected=count);-1!=selected&&$.picker.setSelectedRow(0,selected,!0)}}}),Object.defineProperty($,'choices',{get:function(){return $._choices},set:function(choices){$._choices=choices,1?($.picker&&$.field.remove($.picker),$.picker=null,CreatePicker()):$.field.value=$._id&&$._choices&&$._choices[$._id]?$._choices[$._id].title:''}}),!1){
function ComboBoxClick(event){

if(!$.debounce&&$.choices){
$.debounce=!0;



var pickerView=Alloy.createWidget('tf.app.combobox','pickerview',{
choices:$.choices,
id:$.id,
title:$.field.hintText,
parentField:$.field,
parentView:$.parentView});

pickerView.on('change',function(e){
$.id=e.id,

$.trigger('change',{
source:$,
type:'change',
value:e.value,
id:e.id});

}),
pickerView.on('done',function(e){
$.debounce=!1;
}),
pickerView.open(),
$.trigger('show',{
source:$,
type:'show'});

}
}
}else{
function CreatePicker(){


$.picker=Ti.UI.createPicker({
left:0,
top:0,
width:Ti.UI.FILL,
height:Ti.UI.FILL}),



$._choices&&_.keys($._choices).length||(
$._choices={
dg:{
title:$.field.hintText||'Choose...'}});





var
i,


row,rows=[],count=-1,selected=-1;
for(i in $.choices)
$.choices[i].id=i,
row=Ti.UI.createPickerRow($.choices[i]),
rows.push(row),

count++,
$.id==i&&(
selected=count);


$.picker.add(rows),

-1!=selected&&$.picker.setSelectedRow(0,selected,!0),

$.picker.addEventListener('change',function(event){

var selectedRow=$.picker.getSelectedRow(0);
$.id=selectedRow.id,
$.trigger('change',{
source:$,
type:'change',
value:selectedRow.title,
id:selectedRow.id});

}),

$.field.add($.picker);
}
}









_.extend($,exports);
}

module.exports=Controller;