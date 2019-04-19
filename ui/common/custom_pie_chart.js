"use strict";

var shape=require("ui/shape");

function createSegment(radius,borderWidth,fillColor,borderColor,degrees){
360<degrees&&(degrees=360);
var segment;
if(90>=degrees)
segment=createSegmentUnder90(radius,borderWidth,fillColor,borderColor,degrees);else







if(segment=shape.createCircle({x:radius,y:radius,radius:radius,color:"transparent"}),180>=degrees){
var part=createSegmentUnder90(radius,borderWidth,fillColor,borderColor,degrees-90);
part.transform=Titanium.UI.create2DMatrix().rotate(90),
segment.add(create90Segment(radius,borderWidth,fillColor,borderColor,degrees)),
segment.add(part);
}else if(270>=degrees){
var part=createSegmentUnder90(radius,borderWidth,fillColor,borderColor,degrees-180);
part.transform=Titanium.UI.create2DMatrix().rotate(180),
segment.add(create180Segment(radius,borderWidth,fillColor,borderColor,degrees)),
segment.add(part);
}else if(360>=degrees){
var part=createSegmentUnder90(radius,borderWidth,fillColor,borderColor,degrees-270);
part.transform=Titanium.UI.create2DMatrix().rotate(270),
segment.add(create180Segment(radius,borderWidth,fillColor,borderColor,degrees)),
segment.add(create270Segment(radius,borderWidth,fillColor,borderColor,degrees)),
segment.add(part);
}

if(0<degrees){var
startButt=shape.createCircle({
x:radius,
y:borderWidth/2,
radius:borderWidth/2,
color:borderColor}),

endButt=Ti.UI.createView({});
endButt.add(shape.createCircle({
x:radius,
y:borderWidth/2,
radius:borderWidth/2,
color:borderColor})),


endButt.transform=Titanium.UI.create2DMatrix().rotate(degrees),

segment.add(startButt),
90>=degrees&&
segment.add(endButt),

segment.add(shape.createCircle({
x:radius,
y:borderWidth/2,
radius:borderWidth/4.5,
color:"#4fff"})),

90<degrees&&
segment.add(endButt);

}
return segment;
}

function create90Segment(radius,borderWidth,fillColor,borderColor,degrees){var
arc90=shape.createCircle({
x:0,
y:radius,
radius:radius,
color:fillColor,
borderColor:borderColor,
borderWidth:borderWidth}),

maskOpts={
width:radius,
height:radius,
top:0,
left:radius},

arcmask=Ti.UI.createView(maskOpts);

return arcmask.add(arc90),arcmask;
}
function create180Segment(radius,borderWidth,fillColor,borderColor,degrees){var
arc180=shape.createCircle({
x:0,
y:radius,
radius:radius,
color:fillColor,
borderColor:borderColor,
borderWidth:borderWidth}),

maskOpts={
width:radius,
height:2*radius,
top:0,
left:radius},

arcmask=Ti.UI.createView(maskOpts);

return arcmask.add(arc180),arcmask;
}
function create270Segment(radius,borderWidth,fillColor,borderColor,degrees){var
arc270=shape.createCircle({
x:radius,
y:0,
radius:radius,
color:fillColor,
borderColor:borderColor,
borderWidth:borderWidth}),

maskOpts={
width:radius,
height:radius,
top:radius,
left:0},

arcmask=Ti.UI.createView(maskOpts);

return arcmask.add(arc270),arcmask;
}
function createSegmentUnder90(radius,borderWidth,fillColor,borderColor,degrees){var

rotatecontainer=Ti.UI.createView({
backgroundColor:"transparent",
top:0,
left:-radius,
width:2*radius,
height:2*radius}),


arc90=shape.createCircle({
x:0,
y:radius,
radius:radius,
color:fillColor,
borderColor:borderColor,
borderWidth:borderWidth}),

maskOpts={
width:radius,
height:radius,
top:0,
left:radius},

arcmask=Ti.UI.createView(maskOpts);

arcmask.add(arc90),

rotatecontainer.add(arcmask),

rotatecontainer.transform=Titanium.UI.create2DMatrix().rotate(degrees-90);
var segmask=Ti.UI.createView(maskOpts);

segmask.add(rotatecontainer);

var segment=Ti.UI.createView({});

return segment.add(segmask),segment;
}

function createPieChart(x,y,radius,borderWidth,fillColor,borderColor){var
bufferScale=1.5,
piechart=shape.createCircle({
x:x,
y:y,
radius:radius,
color:"transparent"}),


border=shape.createCircle({
x:radius,
y:radius,
radius:radius,
color:"transparent",
borderColor:borderColor,
borderWidth:borderWidth});


return piechart.add(border),{
container:piechart,
border:border};

}

function setProgressColor(chart,progress,color,animate,fromColor){
function drawSegment(radius,borderWidth,fillColor,progressColor,angle){var
v=createSegment(radius,borderWidth,fillColor,progressColor,angle),
postlayout=function(){

if(v.removeEventListener("postlayout",postlayout),animate){
var duration=200;
v.animate({opacity:1,duration:duration},function(){
chart.chart.progress&&chart.chart.container.remove(chart.chart.progress),
chart.chart.progress=v;
}),
chart.chart.container.animate({
duration:duration,
transform:Ti.UI.create2DMatrix({
scale:.98}),

autoreverse:!0});

}
};
v.addEventListener("postlayout",postlayout),
animate?
v.opacity=0:(

chart.chart.progress&&chart.chart.container.remove(chart.chart.progress),
chart.chart.progress=v),

chart.chart.container.add(v);
}
drawSegment(chart.radius,chart.borderWidth,chart.fillColor,color,360*progress/100);
}
function setProgress(chart,fromProgress,toProgress,animate,callback){
function drawSegment(radius,borderWidth,fillColor,progressColor,angle,cb,fadeIn){var
v=createSegment(radius,borderWidth,fillColor,progressColor,angle),
postlayout=function(){
v.removeEventListener("postlayout",postlayout),
fadeIn?
v.animate({opacity:1,
transform:Ti.UI.create2DMatrix({
scale:1}).
rotate(-45,0),
duration:200},
function(){
cb&&cb({success:!0});
}):

cb&&cb({success:!0});

};
v.addEventListener("postlayout",postlayout),
chart.chart.progress&&chart.chart.container.remove(chart.chart.progress),
chart.chart.progress=v,
fadeIn&&(
v.opacity=0,
v.transform=Ti.UI.create2DMatrix({
scale:.85})),


chart.chart.container.add(v);
}
if(!1){




function draw(success){
done?









callback&&callback(success):(growing?prog+=inc:prog-=inc,growing&&prog<toProgress||!growing&&prog>toProgress?drawSegment(chart.radius,chart.borderWidth,chart.fillColor,chart.progressColor,360*prog/100,draw):(prog=toProgress,done=!0,drawSegment(chart.radius,chart.borderWidth,chart.fillColor,chart.progressColor,360*prog/100,draw)));

}var growing=toProgress>=fromProgress,prog=fromProgress,done=!1,inc=!1?1:1;
draw();
}else
drawSegment(chart.radius,chart.borderWidth,chart.fillColor,chart.progressColor,360*toProgress/100,callback,animate);

}

var CustomPieChart=function(args){
args=args||{};
var self=this;














































return this.centerX=args.centerX,this.centerY=args.centerY,this.fillColor=args.fillColor,this.borderColor=args.borderColor,this.progressColor=args.progressColor,this.radius=args.radius,this.borderWidth=args.borderWidth,this.progress=args.progress||0,this.chart=createPieChart(this.centerX,this.centerY,this.radius,this.borderWidth,this.fillColor,this.borderColor),this.setProgress=function(progress,animate,callback){if(progress!=this.progress){0>progress&&(progress=0);var fromProgress=this.progress;animate?setTimeout(function(){setProgress(self,fromProgress,progress,animate,callback)},250):setProgress(self,fromProgress,progress,animate,callback),this.progress=progress}else callback&&callback({cancelled:!1})},this.setProgress(this.progress),this.getView=function(){return self.chart.container},this.setProgressColor=function(color,redraw,animate){redraw&&setProgressColor(self,self.progress,color,animate,this.progressColor),this.progressColor=color},this.setBorderColor=function(color){this.chart.border.borderColor=color,this.borderColor=color},this.chart.container.getController=function(){return self},this;
};

exports.cleanup=function(){},
exports.createPieChart=function(args){
return new CustomPieChart(args).getView();
};