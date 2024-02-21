//Operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x++); //increment
console.log(x--); //decrement
console.log(++x); //increment
console.log(--x); //decrement

//Comparison operators
console.log(x == y); //false
console.log(x === y); //false
console.log(x != y); //true
console.log(x !== y); //true
console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false

//Logical operators
const isValidNumber = x > 80 || -80 > y;
console.log(isValidNumber);

const isValid = false;
console.log(!isValid);

//Concatenation
const name = "John";
const surname = "Doe";
console.log(name + " " + surname);

//Ternary operator
const age = 8;
const message = age >= 18 ? "You can drive" : "You can't drive";
console.log(message);
