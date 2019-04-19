"use strict";

exports.createLabel=function(args){

var label=Ti.UI.createLabel(args);











return label.addEventListener("touchstart",function(){label.animate({autoreverse:!0,duration:50,transform:Ti.UI.create2DMatrix({scale:.7})})}),label;
};