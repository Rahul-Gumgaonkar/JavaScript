const name = "rahul";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rahul-hc-com");
console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const str = "Mozilla";

// console.log(str.substr(1, 2));
// Expected output: "oz"

// console.log(str.substr(2));
// Expected output: "zilla"

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace("%20", "-"));

// console.log(url.includes("sundar")); // gives true if present or false if not.

console.log(gameName.split("-"));
