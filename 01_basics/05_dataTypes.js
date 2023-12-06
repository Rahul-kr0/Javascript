
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
