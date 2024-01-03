const accountId = 1445553;
// const is used when we want a fixed id which we cannot change or we dont wanted it to get changed.

let accountEmail = "hello@gmail.com";
var accountPassword = "12345";
let accountState;

// both let and var function same there is no difference between the two but the main problem with var is that it is unable to identify the scope so it is not a good practice to use var.

accountCity = "Uttar Pradesh";

/*
javascript is such a safe language that u can reserve a 
place for a varible without even specifying it's type
i.e const let or var
*/

//accountId = 2; // Not allowed

accountEmail = "heevsd@gmai.com";
accountPassword = "34567";
accountCity = "sorry";

console.log(accountId); // its is very heck of a job to again and again write console.log for different element insted we can use:

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* 
Preffer not to use var but why:
because of the issues in functional scope and block scope
*/
