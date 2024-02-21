//Conditional Statements
const num = Number(0);

console.log(num);

if (!num) {
  console.log("The number is 0");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is positive");
}

const color = "white";
switch (color) {
  case "green":
    console.log("Color is green");
    break;
  case "red":
    console.log("Color is red");
    break;
  default:
    console.log("Color is not red or green");
    break;
}
