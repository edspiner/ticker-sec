var

model,
collection,Alloy=require("/alloy"),_=require("/alloy/underscore")._;

"use strict",

exports.definition={
config:{
adapter:{
type:"restapi"}},


extendCollection:function(Collection){
























































































return _.extend(Collection.prototype,{url:function(){var url=require("tickerfit/url").ACHIEVEMENTS+"?page="+this.page+"&size="+this.perPage;return this.types&&(url=url+"&type="+this.types.join(",")),this.fromDate&&(url=url+"&fromDate="+this.fromDate),this.toDate&&(url=url+"&toDate="+this.toDate),url},initialize:function(){_.bindAll(this,"parse","url","pageInfo","nextPage","previousPage"),"undefined"!=typeof options||(options={}),this.page=0,"undefined"!=typeof this.perPage||(this.perPage=100)},fetch:function(options){"undefined"!=typeof options||(options={pid:this.pid}),options.pid&&(this.pid=options.pid),this.trigger("fetching");var self=this,success=options.success;return options.success=function(resp){self.trigger("fetched"),success&&success(self,resp)},Backbone.Collection.prototype.fetch.call(this,options)},parse:function(resp){return this.page=resp.number,this.perPage=resp.size,this.total=resp.totalElements,resp.content},pageInfo:function(){var info={total:this.total,page:this.page,perPage:this.perPage,pages:Math.ceil(this.total/this.perPage),prev:!1,next:!1},max=Math.min(this.total,this.page*this.perPage);return this.total==this.pages*this.perPage&&(max=this.total),info.range=[(this.page-1)*this.perPage+1,max],0<this.page&&(info.prev=this.page),this.page<info.pages-1&&(info.next=this.page+1),info},nextPage:function(){return!!this.pageInfo().next&&(++this.page,this.fetch())},previousPage:function(){return!!this.pageInfo().prev&&(--this.page,this.fetch())}}),Collection;
}},


model=Alloy.M("achievements",exports.definition,[]),

collection=Alloy.C("achievements",exports.definition,model),

exports.Model=model,
exports.Collection=collection;