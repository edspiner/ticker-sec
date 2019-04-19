"use strict";

var StringValidator=require("validator/string_validator");

module.exports={

checkCustomTextFieldsEmpty:function(fields){



for(var isEmpty=!1,i=0;i<fields.length;i++){

var field=fields[i],
fieldValue=field.value;

StringValidator.isEmpty(fieldValue)&&(
field.showError(field.hintText),
isEmpty=!0);

}

return isEmpty;
}};