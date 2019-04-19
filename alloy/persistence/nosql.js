"use strict";

var scule=require("vendor/scule"),
Q=require("vendor/q"),
SyncError=require("alloy/utils/sync_error");

function _getDBConnection(config){

try{
var collectionName=config.adapter.collectionName;return(
collectionName?


scule.factoryCollection("scule+titanium://"+collectionName,{
remoteBackup:config.adapter.remoteBackup}):null);

}catch(e){

return LOGGER.error("[NoSQL Storage] - failed to get db connection"),null;
}
}

function _capCollection(db,config){

if(config.adapter.hasOwnProperty("cappedSize")&&!(1>config.adapter.cappedSize)){



var cappedSize=config.adapter.cappedSize;

try{

db.count({},{},function(count){

count<=cappedSize||(



db.remove({},{$limit:count-cappedSize}),
db.commit());
});
}catch(e){
LOGGER.error("[NoSQL Storage] - failed to cap collection");
}}
}

function _upsertCollection(db,collection,options){



function insertCollection(){

LOGGER.debug("[NoSQL Storage] - start upserting collection...");

try{




for(var

modelJSON,collectionJSON=collection.toJSON(),idAttribute=collection.config.idAttribute||"id",i=0;i<collectionJSON.length;i++)modelJSON=collectionJSON[i],

!modelJSON.hasOwnProperty("_id")&&modelJSON.hasOwnProperty(idAttribute)&&(
modelJSON._id=modelJSON[idAttribute]),


LOGGER.debug("[NoSQL Storage] - upserting model with id: "+modelJSON._id),
db.save(modelJSON);


db.commit(),

deferred.resolve(collectionJSON);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save data locally"));
}

_capCollection(db,collection.config);
}var deferred=Q.defer(),

merge=options.hasOwnProperty("merge")?options.merge:collection.config.merge;








return merge?insertCollection():(LOGGER.debug("[NoSQL Storage] - delete previous storage before storing new collection"),db.clear(insertCollection)),deferred.promise;
}

function _upsertModel(db,model,options){









function insertModel(){

LOGGER.debug("[NoSQL Storage] - upserting model with id: "+modelJSON._id);

try{
db.save(modelJSON),
db.commit(),

deferred.resolve(modelJSON);
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"persistence_error","failed to save data locally"));
}

_capCollection(db,model.config);
}var deferred=Q.defer(),modelJSON=model.toJSON(),idAttribute=model.config.idAttribute||"id";!modelJSON.hasOwnProperty("_id")&&modelJSON.hasOwnProperty(idAttribute)&&(modelJSON._id=modelJSON[idAttribute]);

var merge=options.hasOwnProperty("merge")?options.merge:model.config.merge;








return merge?insertModel():(LOGGER.debug("[NoSQL Storage] - delete previous stored model before storing new model"),db.remove({_id:modelJSON._id},null,insertModel)),deferred.promise;
}

function _fetchCollection(db,collection,options){

var deferred=Q.defer();

try{

options.conditions=options.conditions||{},
options.conditions.$unset={_id:!0},

options.hasOwnProperty("query")?(

LOGGER.debug("[NoSQL Storage] - search collection by query"),

db.find(options.query,options.conditions,function(results){
deferred.resolve(results);
})):(


LOGGER.debug("[NoSQL Storage] - find all"),

db.find({},options.conditions,function(results){
deferred.resolve(results);
}));

}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"query_error","failed to query local data"));
}

return deferred.promise;
}

function _fetchModel(db,model,options){

var deferred=Q.defer();

try{




if(options.conditions=options.conditions||{},options.conditions.$unset={_id:!0},options.hasOwnProperty("query"))

LOGGER.debug("[NoSQL Storage] - find model by query, return the first match"),

db.find(options.query,options.conditions,function(results){
var result=results&&0<results.length?results[0]:null;
deferred.resolve(result);
});else
{

var idAttribute=model.config.idAttribute||"id",
id=model.get(idAttribute);

LOGGER.debug("[NoSQL Storage] - find model by id: "+id),

db.findOne(id,function(result){
result=_.clone(result),
result&&
delete result._id,

deferred.resolve(result);
});
}
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"query_error","failed to query local data"));
}

return deferred.promise;
}

function _removeCollection(db,collection,options){

var deferred=Q.defer();

try{

options.hasOwnProperty("query")?(

LOGGER.debug("[NoSQL Storage] - remove collection by query"),

db.remove(options.query,options.conditions,function(){
deferred.resolve();
})):(


LOGGER.debug("[NoSQL Storage] - clear collection"),

db.clear(function(){
deferred.resolve();
})),


db.commit();
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"query_error","failed to remove local data"));
}

return deferred.promise;
}

function _removeModel(db,model,options){

var deferred=Q.defer(),
query=options.query;

if(!query){

var idAttribute=model.config.idAttribute||"id",
id=model.get(idAttribute);

query={_id:id};
}

try{

db.remove(query,options.conditions,function(){
deferred.resolve();
}),

db.commit();
}catch(e){
LOGGER.error(e),
deferred.reject(SyncError.createErrorResponse(500,"query_error","failed to remove local data"));
}

return deferred.promise;
}

module.exports={

fetch:function(model,options){

var db=_getDBConnection(model.config);return(

db?



model.hasOwnProperty("models")?(
LOGGER.debug("[NoSQL Storage] - fetch collection"),
_fetchCollection(db,model,options)):(

LOGGER.debug("[NoSQL Storage] - fetch model"),
_fetchModel(db,model,options)):SyncError.createErrorPromise(500,"db_conn_fail","unable to get db connection."));

},

save:function(model,options){

var db=_getDBConnection(model.config);return(

db?



model.hasOwnProperty("models")?(
LOGGER.debug("[NoSQL Storage] - save collection"),
_upsertCollection(db,model,options)):(

LOGGER.debug("[NoSQL Storage] - save model"),
_upsertModel(db,model,options)):SyncError.createErrorPromise(500,"db_conn_fail","unable to get db connection."));

},

remove:function(model,options){

var db=_getDBConnection(model.config);return(

db?



model.hasOwnProperty("models")?(
LOGGER.debug("[NoSQL Storage] - remove collection"),
_removeCollection(db,model,options)):(

LOGGER.debug("[NoSQL Storage] - remove model"),
_removeModel(db,model,options)):SyncError.createErrorPromise(500,"db_conn_fail","unable to get db connection."));

}};