"use strict";

var RatingStars=function(args){



for(var

star,view=Ti.UI.createView(args),i=0;5>i;i++)star=Ti.UI.createLabel({
font:args.font,
text:args.text,
color:"#ccc"}),


view.add(star);















return view.setRating=function(rating){var ratingInStars=Math.round(5*rating);if(!(1>ratingInStars))for(var i=0;i<ratingInStars;i++)this.children[i].color=Alloy.Globals.Style.Color.Yellow},view;
};

exports.createView=function(args){
return new RatingStars(args);
};