// console.log("2" > 1);

//Comparing data of different types may give unexpected results. When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* the reason is that an eqaulity check == and comaprisons > < >= <= works differently
comparison converts null to a number, treating it as 0 that is why 
 null >= 0 is true and null > 0 false */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it is used to strictly check a value and its datatypes as well in javascript

console.log("2" === 2);
