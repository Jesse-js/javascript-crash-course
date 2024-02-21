//Scope

//1. Global Scope
const myNum = 100;

const showNumber = () => console.log(myNum);
showNumber();

//2. Function Scope
let x = 10;
const showName = (name) => {
    let x = 1;
    console.log(name + ' ' + x);
}
showName('John');
console.log(x); // displays an error
//3. Block Scope
if (true) {
    let x = 1;
    console.log(x); // does not display an error
}
//console.log(x); // displays an error

//4. Module Scope