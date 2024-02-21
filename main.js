//Type conversion
console.log(typeof (2 + '3'));
console.log('4' - '10');
console.log('4' + '10');
console.log('4' * '10');
console.log('4' / '10');
console.log(5 - undefined);
console.log('João' - null);


let age = "18";
console.log(typeof age);
age = Number(age);
console.log(typeof age);

console.log(Number('5'));
console.log(parseInt('5'));
console.log(parseFloat('5.5'));
console.log(String('5.5'));
console.log((1025).toString());
console.log(Boolean(0)); // null, undefined, 0, '', NaN return false, everything else return true
