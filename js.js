let age = 15;
console.log(age);

let age = 12;
console.log(age);
// let can not be overriden, can not be changed

// if you want a variable that can be overiden you have to use write

var age = 15;
console.log(age);

var age = 12;
console.log(age);

// HOISTING

name = 'Kristine';
console.log(name);
// variables are looked at first in the code, in this case var is hoisted to the top of the code
var name;
// but the following do not t¿get hoist
console.log(age);
var age = 15;
// Assign your variables and declare them at the very top
var age = 15;
console.log(age);
