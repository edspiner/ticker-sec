"use strict";

function createErrorDialog(title,message){

return Ti.UI.createAlertDialog({
title:title||L("form_validation_error_popup_title"),
message:message||L("form_validation_error_popup_message")});

}

module.exports={

show:function(title,message){

var dialog=createErrorDialog(title,message);
dialog.show();
}};