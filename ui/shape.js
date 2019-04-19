var empty={};
function mixin(target,source){
var name,s,i;
for(name in source)
source.hasOwnProperty(name)&&(
s=source[name],
name in target&&(target[name]===s||name in empty&&empty[name]===s)||(
target[name]=s));



return target;
}

function extend(obj,props){
obj||(
obj={});

for(var i=1,l=arguments.length;i<l;i++)
mixin(obj,arguments[i]);

return obj;
}var

length=function(options){
return Math.sqrt((options.x2-options.x1)*(options.x2-options.x1)+(options.y2-options.y1)*(options.y2-options.y1))+(options.lineCap?options.width:0);
},

radians=function(options){
return Math.atan2(options.y2-options.y1,options.x2-options.x1);
},

degrees=function(options){
return 180*radians(options)/Math.PI;
},

createLine=function(args){var _Mathsin=

























Math.sin,_Mathcos=Math.cos,options=extend({x1:0,y1:0,x2:0,y2:0,width:2,color:'#000',duration:0,lineCap:!1,opacity:1},args||{}),lineOpts={width:length(options),height:options.width,opacity:options.opacity},halfWidth=options.width/2,dX=0,dY=0;options.lineCap&&(dX-=_Mathcos(radians(options))*halfWidth,dY+=_Mathsin(radians(options))*halfWidth),0?(





dX+=_Mathsin(radians(options))*halfWidth,
dY+=_Mathcos(radians(options))*halfWidth,
lineOpts.anchorPoint={
x:0,
y:0}):(dX-=length(options)/2-_Mathcos(radians(options))*(length(options)/2),dY=dY+halfWidth-_Mathsin(radians(options))*(length(options)/2)),


lineOpts.left=options.x1+dX,
lineOpts.top=options.y1-dY,

options.lineCap?(
lineOpts.borderWidth=halfWidth,
lineOpts.borderColor=options.color,
lineOpts.borderRadius=halfWidth):

lineOpts.backgroundColor=options.color;


var line=Ti.UI.createView(lineOpts);










return line.getButtonCoords=function(num){for(var offset=length(options)/(num+1),coords=[],i=1;i<=num;i++)coords.push([options.x1+_Mathcos(radians(options))*(offset*i),options.y1+_Mathsin(radians(options))*(offset*i)]);return coords},line.transform=Titanium.UI.create2DMatrix().rotate(degrees(options)),line;
},

createCircle=function(args){
var lineOpts={
width:2*args.radius,
height:2*args.radius,
opacity:args.opacity,
borderRadius:args.radius};

args.borderColor?(
lineOpts.borderColor=args.borderColor,
lineOpts.borderWidth=args.borderWidth,
lineOpts.backgroundColor=args.color):

'transparent'==args.color||args.isTransparent?(
lineOpts.backgroundColor=args.color,
lineOpts.borderWidth=0):(

lineOpts.borderWidth=args.radius,
lineOpts.borderColor=args.color),!1,









lineOpts.left=args.x-args.radius,
lineOpts.top=args.y-args.radius;
var circle=Ti.UI.createView(lineOpts);
return circle;
};

exports.createLine=createLine,
exports.createCircle=createCircle;