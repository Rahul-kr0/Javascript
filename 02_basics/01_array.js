const myarr = [0, 1, 2, 3, 4, 5];

const myarr2 = new Array(1, 2, 3, 4, 5);
console.log(myarr[0]);

// Array methods

myarr.push(9); // To add value in last
myarr.pop();   // To delete last value
myarr.unshift(8); // To add value in first
myarr.shift();  // To remove value from first
console.log(myarr.includes(9)); // To find the vale exists in a array or not
console.log(myarr.indexOf(4)); // To find the index of an element in an array

const newarr = myarr.join(); // It changes the array into string
console.log(typeof newarr);

console.log(myarr.slice(1,3)); // To get the range of the value

console.log(myarr.splice(1,3)); // To get the exact value from an array
console.log(myarr);
