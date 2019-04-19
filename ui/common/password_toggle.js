"use strict";

var PasswordToggle=function($container,$password,$toggle,$ticker){var

_isPasswordShown=!1,

_togglePassword=function(){

if(!$password.isErrorState){



var password=$password.value;

_isPasswordShown?(
$toggle.backgroundColor="transparent",
$ticker.visible=!1,
$password.passwordMask=!0):(

$toggle.backgroundColor="#fff",
$ticker.visible=!0,1?








$password.passwordMask=!1:($password.value="",$password.applyProperties({passwordMask:!1,value:password}))),




$password.setSelection(password.length,password.length),


_isPasswordShown=!_isPasswordShown}
};!1?


$container.addEventListener("singletap",_togglePassword):

$container.addEventListener("click",_togglePassword);

};

module.exports=PasswordToggle;