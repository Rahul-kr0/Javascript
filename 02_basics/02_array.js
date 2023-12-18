let arr = ["Raul", "Kumar", "Arun", "Kumar", "Shiva", "Kumar"];
let arr1 = ["Luv", "Kumar", "Kush", "Kumar"];

const newarr = arr.concat(arr1);  // Add two srings in one by concat
console.log(newarr);

let arr3 = ["User1", "User2", "User3"];
const allarr = [...arr, ...arr1, ...arr3]; // Spread is used to add two or more array in one
console.log(allarr);

let arr4 = [1, 3, 4, 5, [4, 6, 7, 8], 9, [10, 11, [12, 13, 14], 18], 19];
console.log(arr4.flat());   // flat in array is used to spread a single sub-Array

console.log(Array.isArray("Rahul")); // To check the elements are in array or not
console.log(Array.from("Rahul"));    // Used to convert the elements in array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // To merge different elements in a single array
