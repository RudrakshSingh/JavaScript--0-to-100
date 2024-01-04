//let score = 33;
//let score = "33abc";
//let score = null;
let score = undefined;

//console.log(typeof score);
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/* when we use a number if we explicitly convert the given 
parameter in number it will give number only eg:- "33" => 33

when we use a string and apply the same functionality on the string
it will convert the string to the type of number that is js will treat 
that string as a number but the value saved in that variable will be NaN.

if we use true or false the output will be 1 or 0. */

let isLoggedIn = "Rudraksh";

let booleanisLoggedIn = Boolean(isLoggedIn);
//console.log(booleanisLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "rudraksh" => true

let someNumber = 33;

let ConvertString = String(someNumber);
// console.log(ConvertString);
// console.log(typeof ConvertString);

// ******************************* Operations ***********************************

let value = 5;
let negValue = -value;
//console.log(negValue);

// concatination

let str1 = "hello";
let str2 = " sorry";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

/* in the last and 2nd last operations we have seen that tha ouptputs
are different this is because of the conventions of the ecma script */

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
