"use strict";

module.exports={

isIOS7Plus:function(){

if(!1){

var version=Ti.Platform.version.split("."),
major=parseInt(version[0],10);

if(7<=major)
return!0;

}

return!1;
}};