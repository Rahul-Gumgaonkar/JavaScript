const accountNumber = 12345;
let num1 = 12;
var num2 = 15;

// Prefer not to use var because of issue in block scope and functional scope.

if (true) {
  let num1 = 15;
  console.log(num1);
  num1 = 25;
  console.log(num1);
}
console.log(num1);

if (true) {
  var num2 = 16;
  console.log(num2);
  num2 = 26;
  console.log(num2);
}
console.log(num2);

console.table([accountNumber, num1, num2]);

console.log(typeof num1);
