

var Matrix2D=function(){
this.matrix=Ti.UI.create2DMatrix();
};

function uc(dp){return 0?

dp:dp*Alloy.Globals.SCREEN_DENSITY;
}

Matrix2D.prototype.translate=Matrix2D.prototype.t=function(x,y){

return this.matrix=this.matrix.translate(uc(x),uc(y)),this;
},

Matrix2D.prototype.scale=Matrix2D.prototype.s=function(factor){

return this.matrix=this.matrix.scale(factor),this;
},

Matrix2D.prototype.rotate=Matrix2D.prototype.r=function(angle,toAngle){

return this.matrix=this.matrix.rotate(angle,toAngle),this;
},

Matrix2D.i=Matrix2D.identity=function(){
return new Matrix2D;
},

module.exports=Matrix2D;