"use strict"
function encrypt() {
const message = document.getElementById("msg").value.toLowerCase();
let foo = document.getElementById("shift").value.toLowerCase();
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var output = "";
message.length>foo.length ? foo = foo.repeat(message.length) : foo = foo;
for (let i=0; i<message.length; i++) {
if (alphabet.includes(message[i].toLowerCase())) {output += alphabet[(alphabet.indexOf(message[i])+alphabet.indexOf(foo[i]))%26]} else {output += message[i]}};
document.getElementById("output").innerHTML = output.toUpperCase()};