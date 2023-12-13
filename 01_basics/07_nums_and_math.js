const score = 400;

const balance = new Number(200);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const value = 9432.7890;
console.log(value.toPrecision(5));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(4.6 ));
console.log(Math.min(2,9,7,5,2,6,9));
console.log(Math.max(9,7,5,2,1,8,9));
console.log((Math.random()*10) + 1);
console.log(Math.round((Math.random()*10) + 1));

// important 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);
