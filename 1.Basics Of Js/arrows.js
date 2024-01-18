const user = {
  username: "Rahul",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this.user);

// function chai() {
//   let username = "rahul";
//   console.log(this.username);
//   // console.log(this);
// }

// chai();

// we can not use this keywoard in function
// const chai = function () {
//   let username = "rahul";
//   console.log(this.username);
// };

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "hitesh" }); // Returning the object

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();
