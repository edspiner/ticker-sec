"use strict";

var CustomTextField=function(args){var

params=_.clone(args),
textfield=Ti.UI.createTextField(params);

textfield.isErrorState=!1,

textfield.showError=function(message){

textfield.isErrorState=!0,

textfield.applyProperties({
value:message,
color:Alloy.Globals.Style.Color.PinkRed,
passwordMask:!1});

};

var resetField=function(){
var paramsCopy=_.clone(params);
paramsCopy.passwordMask=textfield.passwordMask,
textfield.applyProperties(paramsCopy);
};






























return textfield.clearError=function(){textfield.isErrorState&&(textfield.value="",resetField(),textfield.isErrorState=!1)},0?textfield.addEventListener("click",textfield.clearError):textfield.addEventListener("singletap",textfield.clearError),textfield.addEventListener("focus",textfield.clearError),textfield.addEventListener("blur",function(){textfield.isErrorState||resetField()}),textfield;
};

exports.createTextField=function(args){
return new CustomTextField(args);
};