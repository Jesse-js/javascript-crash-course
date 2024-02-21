// Functions

function greet(name) {
    console.log('Good afternoom, ' + name + '!');
}

greet('Jessé');

function add(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;
const addFive = num => num + 5;

let result = arrowSum(5, 7);
console.log(result);

console.log(addFive(result));
