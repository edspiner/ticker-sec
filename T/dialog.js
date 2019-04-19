

function parseDict(dict){
return{
cancel:_.indexOf(dict,_.findWhere(dict,{cancel:!0})),
preferred:_.indexOf(dict,_.findWhere(dict,{preferred:!0})),
destructive:_.indexOf(dict,_.findWhere(dict,{destructive:!0}))};

}

function onClickDict(e,dict,dialog){

!0===e.cancel||

null!=dict&&_.isObject(dict[+e.index])&&_.isFunction(dict[+e.index].callback)&&
dict[+e.index].callback.call(dialog,e);

}

function dialogAlert(title,message,callback,ext){
_.isEmpty(title)&&(
title=Ti.App.name);


var dialog=Ti.UI.createAlertDialog(_.extend({
title:title,
message:message,
ok:'OK'},
ext));






return _.isFunction(callback)&&dialog.addEventListener('click',callback),dialog.show(),dialog;
}
exports.alert=dialogAlert;

function dialogConfirm(title,message,dict,ext){
var dialog=Ti.UI.createAlertDialog(_.extend(parseDict(dict),{
buttonNames:_.pluck(dict,'title'),
title:title,
message:message},
ext));






return dialog.addEventListener('click',function(e){onClickDict(e,dict,dialog)}),dialog.show(),dialog;
}
exports.confirm=dialogConfirm;

function dialogOption(title,dict,ext){
var pdict=parseDict(dict);
-1!==pdict.cancel&&
dict.splice(pdict.cancel,1);


var dialog=Ti.UI.createOptionDialog(_.extend(pdict,{
options:_.pluck(dict,'title'),
title:title},
ext));






return dialog.addEventListener('click',function(e){onClickDict(e,dict,dialog)}),dialog.show(),dialog;
}
exports.option=dialogOption;

function confirmYes(title,message,callback,buttonTitle){
return dialogConfirm(title,message,[{
title:L('cancel','Cancel'),
cancel:!0},
{
title:buttonTitle||L('yes','Yes'),
callback:callback,
preferred:!0}]);

}
exports.confirmYes=confirmYes;

function dialogPrompt(title,message,dict,ext){
if(!1)

return dialogConfirm(title,message,dict,_.extend({
style:Ti.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT},
ext));return 0?void 0:(


_.each(dict,function(d){
!0===d.cancel||null==d.callback||(
d._origCallback=d.callback,
d.callback=function(e){
_.extend(e,{text:this.androidView.value}),
d._origCallback.call(this,e);
});
}),

dialogConfirm(title,message,dict,_.extend({
androidView:Ti.UI.createTextField({
value:ext?ext.value:''})},

ext)));

}
exports.prompt=dialogPrompt;

function dialogCheckbox(title,message,options,values,dict,ext){
if(!1)


return Ti.API.error('Dialog: Dialog.checkbox is not supported yet on iOS'),!1;
if(!0){var

container=Ti.UI.createView({
width:Ti.UI.FILL,
height:Ti.UI.SIZE}),


inner_container=Ti.UI.createView({
width:Ti.UI.FILL,
height:Ti.UI.SIZE,
top:_.isEmpty(message)?20:0,
bottom:_.isEmpty(dict)?24:0,
left:24,
right:24,
layout:'vertical'});




















































return values=values||[],_.each(options,function(item){var value=_.isObject(item)?item.value:item,title=_.isObject(item)?item.title:item,item_container=Ti.UI.createView({width:Ti.UI.FILL,height:48});item_container.input=Ti.UI.createSwitch({style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,value:!!(0<=values.indexOf(value)),width:Ti.UI.SIZE,left:0}),item_container.add(item_container.input),item_container.add(Ti.UI.createLabel(_.extend({left:36,width:Ti.UI.FILL},_.isObject(title)?title:{text:title}))),item_container.value=value,inner_container.add(item_container)}),container.add(inner_container),_.each(dict,function(d){!0===d.cancel||null==d.callback||(d._origCallback=d.callback,d.callback=function(e){var values=[];_.each(inner_container.children,function(item){!0==item.input.getValue()&&values.push(item.value)}),_.extend(e,{values:values}),d._origCallback.call(this,e)})}),dialogConfirm(title,message,dict,_.extend({
androidView:container},
_.omit(ext,'androidView')));
}
}
exports.checkbox=dialogCheckbox;