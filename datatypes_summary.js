/* Primitive :-  they are call by value datatypes
string, number, boolean, null, undefined, symbol(specially used to make a value unique, BigInt)

Refference type or non premitive :- here the reffrence is allocated in the memory
Array, objects, functions

Is javascript dynamically typed or statically typed ?
*/

const score = 100;
const value = true;
const scoreValue = 100.3;
const Temp = null;
let userEmail;

/* so by this expamle we can see that js is a dynamically typed language as we
dont have to define that what type of dataype is written in the varibale like in above
example we dont have to specify that the above varible is a number or a boolean.

NOTE(EXTRA): js also have a brother which is typescript in which we have to statically define 
the datatype for eg:- const score:Number = 100

in js we dont have the the float value like other language so the third 
example will also be treated as a number 

HOW TO DECLARE A SYMBOLE...*/

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

/* apart from the fact that the vales defined in the symbol are same then too
the result would be false because they both are unique

Gist of Arrays and other non premitive datatypes:-
*/

//ARRAY
const heros = ["ironman", "superman", "christanbale"];

//OBJECTS
let myObj = {
  name: "rudraksh",
  age: 22,
};

//FUNCTIONS
// there are many ways to define a function in js but we will use variable methord as of now

const myFunction = function () {
  console.log("Hello World");
};
