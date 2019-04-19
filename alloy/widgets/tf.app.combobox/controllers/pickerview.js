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






























































function PickerButtonClick(event){
if('done'===event.source.id){

var selectedRow=$.picker.getSelectedRow(0);
$.trigger('change',{
source:$,
type:'change',
value:selectedRow.title,
id:selectedRow.id});

}


$.trigger('done',{
source:$,
type:'done'}),

Alloy.isTablet?






$.popover.hide({
animated:!0}):($.pickerview.animate({bottom:-dimension.deviceHeightDp(),duration:500}),$.parentView.remove($.pickerview));


}var Widget=new(require('/alloy/widget'))('tf.app.combobox');if(this.__widgetId='tf.app.combobox',require('/alloy/controllers/BaseController').apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath='pickerview',this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],'__parentSymbol'),$model=__processArg(arguments[0],'$model'),__itemTemplate=__processArg(arguments[0],'__itemTemplate');var $=this,exports={},__defers={};exports.destroy=function(){},_.extend($,$.__views);var choices=arguments[0].choices,id=arguments[0].id;$.title=arguments[0].title,$.parentField=arguments[0].parentField,$.parentView=arguments[0].parentView;var i,dimension=require('platform/dimension'),rows=[],count=-1,selected=-1;for(i in choices)choices[i].id=i,rows.push(Ti.UI.createPickerRow(choices[i])),id&&(count++,id===i&&(selected=count));$.picker.add(rows),Alloy.isTablet?($.popover.title=$.title,$.popover.rightNavButton=$.done,$.popover.leftNavButton=$.cancel,$.popover.width=.5*dimension.deviceHeightDp()):$.pickerview.bottom=-dimension.deviceHeightDp(),-1!=selected&&$.picker.setSelectedRow(0,selected,!0),

exports.open=function(choices,id){
Alloy.isTablet?






$.popover.show({
animated:!0,
view:$.parentField}):($.parentView.add($.pickerview),$.pickerview.animate({bottom:0,duration:500})),


$.picker.selectionIndicator=!0;
},









_.extend($,exports);
}

module.exports=Controller;