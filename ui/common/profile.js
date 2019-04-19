"use strict";var

_ONLINE_THRESHOLD=18e5,
_RECENT_ONLINE_THRESHOLD=72e5,

Profile=function(args){var
image=args.image,
lastKnownLication=args.lastKnownLication,

status=function(lastKnownLocation){
if(!lastKnownLocation||!lastKnownLocation.timestamp)
return"#bebebe";

var diff=new Date().getTime()-lastKnownLocation.timestamp;return(
diff<_ONLINE_THRESHOLD?
"#b1ec11":

diff<_RECENT_ONLINE_THRESHOLD?
"#f4dd5e":


"#bebebe");
},

view=Ti.UI.createView(_.extend({
width:"42dp",
height:"42dp"},
args)),

imageView=Ti.UI.createImageView({
top:"0dp",
left:"2dp",
width:"40dp",
height:"40dp",
borderColor:"#fff",
borderWidth:1});

view.add(imageView);

var statusView=Ti.UI.createView({
bottom:"0dp",
left:"0dp",
width:"10dp",
height:"10dp",
borderRadius:Alloy.Globals.Style.Unit.unit5,
borderColor:"#fff",
borderWidth:".5dp",
zIndex:99});



















return view.add(statusView),view.setUser=function(user){user.hideStatus?view.remove(statusView):statusView.backgroundColor=status(user.lastKnownLocation),imageView.image=require("utils/photoURL").toURL(user.photoUrl,{width:50,height:50}),user.disableProfile||imageView.addEventListener("click",function(){Ti.App.fireEvent("carma:profile.open",user)})},view;
};

exports.createView=function(args){
return new Profile(args);
};