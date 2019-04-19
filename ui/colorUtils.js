"use strict";var

hexToRgb=function(hex){
var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result?{
r:parseInt(result[1],16),
g:parseInt(result[2],16),
b:parseInt(result[3],16)}:
null;
},

componentToHex=function(c){
var hex=c.toString(16);
return 1==hex.length?"0"+hex:hex;
},

rgbToHex=function(rgb){
return"#"+componentToHex(rgb[0])+componentToHex(rgb[1])+componentToHex(rgb[2]);
},

RGBtoHSV=function(color){
var r,g,b,h,s,v;
r=color[0],
g=color[1],
b=color[2];var
max=Math.max(r,g,b),
min=Math.min(r,g,b);

v=max;
var delta=max-min;
if(0!=max)s=delta/max;else


return s=0,h=-1,[h,s,void 0];







return h=r===max?(g-b)/delta:g===max?2+(b-r)/delta:4+(r-g)/delta,h*=60,0>h&&(h+=360),isNaN(h)&&(h=0),[h,s,v];
},

HSVtoRGB=function(color){var
i,
h,s,v,r,g,b,_Mathround=















































Math.round;if(h=color[0],s=color[1],v=color[2],0===s)return r=g=b=v,[r,g,b];h/=60,i=Math.floor(h);var f=h-i,p=v*(1-s),q=v*(1-s*f),t=v*(1-s*(1-f));return 0===i?(r=v,g=t,b=p):1===i?(r=q,g=v,b=p):2===i?(r=p,g=v,b=t):3===i?(r=p,g=q,b=v):4===i?(r=t,g=p,b=v):(r=v,g=p,b=q),[_Mathround(r),_Mathround(g),_Mathround(b)];
},

shadeBlendConvert=function(p,from,to){
if("number"!=typeof p||-1>p||1<p||"string"!=typeof from||"r"!=from[0]&&"#"!=from[0]||"string"!=typeof to&&"undefined"!=typeof to)return null;
this.sbcRip||(this.sbcRip=function(d){
var l=d.length,
RGB={};
if(9<l){

if(d=d.split(","),3>d.length||4<d.length)return null;
RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
}else{
if(8==l||6==l||4>l)return null;
6>l&&(d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(4<l?d[4]+""+d[4]:"")),
d=i(d.slice(1),16),RGB[0]=255&d>>16,RGB[1]=255&d>>8,RGB[2]=255&d,RGB[3]=9==l||5==l?r(1e4*((255&d>>24)/255))/1e4:-1;
}
return RGB;
});
var i=parseInt,
r=Math.round,
h=9<from.length,
h="string"==typeof to?!!(9<to.length)||!("c"!=to)&&!h:h,
b=0>p,
p=b?-1*p:p,
to=to&&"c"!=to?to:b?"#000000":"#FFFFFF",
f=sbcRip(from),
t=sbcRip(to);return(
f&&t?
h?"rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(0>f[3]&&0>t[3]?")":","+(-1<f[3]&&-1<t[3]?r(1e4*((t[3]-f[3])*p+f[3]))/1e4:0>t[3]?f[3]:t[3])+")"):"#"+(4294967296+16777216*(-1<f[3]&&-1<t[3]?r(255*((t[3]-f[3])*p+f[3])):-1<t[3]?r(255*t[3]):-1<f[3]?r(255*f[3]):255)+65536*r((t[0]-f[0])*p+f[0])+256*r((t[1]-f[1])*p+f[1])+r((t[2]-f[2])*p+f[2])).toString(16).slice(-1<f[3]||-1<t[3]?1:3):null);
};

module.exports={

hexToRgb:hexToRgb,
rgbToHex:rgbToHex,
RGBtoHSV:RGBtoHSV,
HSVtoRGB:HSVtoRGB,
shadeBlendConvert:shadeBlendConvert};