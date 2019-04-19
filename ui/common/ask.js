"use strict";var

BTN={
width:"50dp",
height:"30dp",
normalColor:"#00ffffff",
selectedColor:"#70ffffff",
borderColor:"#fff",
borderWidth:"1px",
borderRadius:Alloy.Globals.Style.Unit.unit4},


IND={
width:"20dp",
height:"20dp",
style:!1?Ti.UI.ActivityIndicatorStyle.PLAIN:Ti.UI.ActivityIndicatorStyle.PLAIN},


ASK={
width:Ti.UI.FILL,
height:Ti.UI.FILL,
title:"ASK",
font:{
fontSize:"11dp"},

color:"#fff",
normalColor:"#00ffffff",
selectedColor:"#70ffffff",
backgroundImage:"none",
zIndex:2},


ASKED={
width:Ti.UI.FILL,
height:Ti.UI.FILL,
title:"c",
font:{
fontFamily:"splinico",
fontSize:"16dp"},

backgroundColor:Alloy.Globals.Style.Color.LightBlue,
color:"#fff",
normalColor:"#00ffffff",
selectedColor:"#70ffffff",
backgroundImage:"none",
zIndex:1},


CustomButton=function(args){
args=_.extend(args,BTN);var

wrapper=Ti.UI.createView(args),
indicator=Ti.UI.createActivityIndicator(IND),
button=Ti.UI.createButton(ASK);
wrapper.add(indicator),
wrapper.add(button);

var animate=require("ui/animate");
animate.tactile(button);var

_markAsked=function(){
button.asked=!0,
button.applyProperties(ASKED);
},

_markUnAsked=function(){
button.asked=!1,
button.applyProperties(ASK);
};






















































































































return button.addEventListener("click",function(){if(!require("services/action_record_service").get("askShown")){var dialog=Ti.UI.createAlertDialog({cancel:0,buttonNames:[L("btn_cancel"),L("widget_future_best_match_btn_ask")],title:L("widget_future_ask_help_title"),message:L("widget_future_ask_help_message")});return dialog.addEventListener("click",function(e){1===e.index&&button.fireEvent("click",{})}),dialog.show(),void require("services/action_record_service").set("askShown",!0)}if(!button.asked){var executor=require("utils/executor"),funcs=[];funcs.push(function(){button.animate({opacity:0,duration:300},function(){indicator.show()})}),funcs.push(function(){var service=require("services/booking_service");if(button.booking&&!button.bookedByUser)return service.accept(button.booking.id,button.initiator.firstName).then(function(){Ti.App.fireEvent("carma:booking.changed",button.trip)});;var askeeType=button.trip.type.toUpperCase(),isAskeeRider="RIDE"===askeeType||"RIDER"===askeeType;if(button.askerType){var askerType=button.askerType.toUpperCase();isAskeeRider="DRIVE"===askerType||"DRIVER"===askerType}return LOGGER.info("[ASK] : Making "+(isAskeeRider?"ride offer":"ride request")),isAskeeRider?service.rideOffer(button.trip,button.groupingKey):service.rideRequest(button.trip,button.groupingKey)}),funcs.push(function(){_markAsked(),button.handleBooked&&button.handleBooked()}),executor(funcs).withProgress(!1).error(function(e){return e&&"request_already_exists"===e.errorCode?void _markAsked():void(_markUnAsked(),Ti.UI.createAlertDialog({title:L("error_title"),message:L("widget_future_ask_error")}).show())}).endWith(function(){button.asked&&Ti.App.fireEvent("carma:booking.changed",button.trip),button.animate({opacity:1,duration:300},function(){indicator.hide()})}).run()}}),wrapper.setData=function(data){if(button.asked=!1,button.trip=data.trip,button.askerType=data.askerType,button.groupingKey=data.groupingKey,button.booking=data.booking,button.handleBooked=data.handleBooked,button.booking&&"REQUESTED"===button.booking.state){var userId=require("services/resource_owner_service").singleton().get("userId");return button.initiator=button.booking[button.booking.initiator.toLowerCase()],button.bookedByUser=userId===button.initiator.userId,button.bookedByUser&&button.trip.effectiveTime===button.booking.bookingDate&&_markAsked(),void(button.opacity=1)}var service=require("services/booking_service");service.findByTrip(button.trip.id,!1).then(function(data){data&&data.rideBookings&&_.each(data.rideBookings,function(booking){"REQUESTED"===booking.state&&button.trip.effectiveTime===booking.bookingDate&&_markAsked()});;button.animate({opacity:1})})},wrapper;
};

exports.createView=function(args){
return new CustomButton(args);
};