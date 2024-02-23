// Loops
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do while loop
i = 0;
do {
    console.log(i);
    i++;
} while (i === 0)

// For of 
let arr = [1, 2, 3, 4];

for (let number of arr) {
    console.log(number);
}

// For in
let person = {
    name: 'John',
    age: 30
}

for (let key in person) {
    console.log(key, person[key]);
}