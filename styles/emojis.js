"use strict";

exports.getUnicode=function(emoji){return(

"US"===emoji?
"\uD83C\uDDFA\uD83C\uDDF8":
"EU"===emoji?
"\uD83C\uDDEA\uD83C\uDDFA":
"Dev"===emoji?
"\uD83E\uDD16":
"Test"===emoji?
"\uD83D\uDD2C":
"Sandbox"===emoji?
"\u23F3":
"Wave"===emoji?
"\uD83D\uDC4B":

"");

};