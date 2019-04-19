"use strict";

module.exports={
collection:require("vendor/scule").factoryCollection("scule+titanium://logs",{
remoteBackup:!1}),


findAll:function(query){
var deferred=require("vendor/q").defer();
try{
this.collection.find(query,{
$sort:{
timestamp:-1}},

function(data){
deferred.resolve(data);
});
}catch(e){
console.error(e),
deferred.reject(e);
}
return deferred.promise;
},

save:function(value){
try{
var now=new Date().getTime();

this.collection.save({
timestamp:now,
level:value.level,
message:value.message});


var count=this.collection.count({});
this.collection.remove({},{
$limit:count-1500}),


console.log(this.collection.count({}));
}catch(e){
console.error(e);
}
},

deleteAll:function(query){
try{
this.collection.remove(query);
}catch(e){
console.error(e);
}
}};