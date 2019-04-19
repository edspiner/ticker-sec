"use strict";

var FieldsRoller=function(fieldLinks){

var _linkFields=function(fieldLinks){

fieldLinks.forEach(function(link){

var from=link.from,
to=link.to,
action=link.action||"focus",
next=link.next;

from.addEventListener("return",function(){return(

next?void
next():void



to[action]());
});
});
};

fieldLinks&&



_linkFields(_.isArray(fieldLinks)?fieldLinks:[fieldLinks]);
};

module.exports=FieldsRoller;