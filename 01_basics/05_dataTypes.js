
// Primitive DataType

// 7 DataTypes: Number, String, Boolean, null, undefined, Symbol, BigInt

const value = 100;   // Number
const val = 10.9;    // Number
const str = "Rahul"; // String
const bool = true;   // Boolean
const nul = null;    // null
//Returned dataType of null is object

let undef;           // undefined

const sybl = Symbol("9234") // Symbol
const syl  = Symbol("9234")
console.log(sybl === syl); // output will be false
// Because symbol represents unique charater or number ever they are same

const bigNumber = 987654323567987654234n; // BigInt



// Reference or Non primitive DataType

// Array, Objects, Functions

// Array
const arr = ["java", "Python", "Javascript", "go"];
//Returened datatype is object

// Objects
const myobj = {
    name: "Rahul",
    age: 23
}

// Function
const fun = function(){              
    console.log("Function has been created!");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive)
// Uses call by value method means it will give the copy of an value

let user = "Rahul";          // string value
let usr = user;             // assinging user to usr in Stack memory
let changeuser = "Kumar";   
console.log(user);          // After changing the parameter "Rahul" to "Kumar",
                            // It will not change the original parameter.
console.log(changeuser);    // Changed parameter.


// Heap memory (Non Primitive)
// Uses call by reference method means it will give or change the original value.

let obj = {                    // object parameter
    name: "Kumar",
    age: 23
}

let newobj = obj;             // assinging obj to newobj in heap memory.

newobj.name = "Rahul";       //  Changing the parameter "Kumar" to "Rahul"

console.log(obj.name);       //  It will change the original value also.
console.log(newobj.name);


// Javascript is a dynamically typed language. Because data type will automatically 
// assigned at the time of compilation or code execution.
