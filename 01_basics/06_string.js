const name = "Rahul Kumar";
const age = 23;

console.log(`Hello my name is ${name} and my age is ${age}`);

const newname = String(`Google`);

console.log(newname[0]);  // To print the character in 0th position

console.log(newname.length);  // To print the lenght of an string

console.log(newname.toUpperCase()); // To print string in uppercase

console.log(newname.charAt(2)); // To print the character in 2nd position

console.log(newname.indexOf('g'));  // To print the position of a character

console.log(newname.substring(1,3)); // To get specific characters in a string

console.log(newname.slice(-4, 2)); // To get the specific charater from -4 to 2 position means (Go in Goga)

const Name = "   Rahul   "
console.log(Name);
console.log(Name.trim()); // Use to remove spaces in a string

const url = "https://google.com/rahul%20kumar"
console.log(url.replace('%20','-'));

// String { "google" }
// ​
// 0: "g"
// ​
// 1: "o"
// ​
// 2: "o"
// ​
// 3: "g"
// ​
// 4: "l"
// ​
// 5: "e"
// ​
// length: 6
// ​
// <prototype>: String { "" }
// ​​
// anchor: function anchor()
// ​​
// at: function at()
// ​​
// big: function big()
// ​​
// blink: function blink()
// ​​
// bold: function bold()
// ​​
// charAt: function charAt()
// ​​
// charCodeAt: function charCodeAt()
// ​​
// codePointAt: function codePointAt()
// ​​
// concat: function concat()
// ​​
// constructor: function String()
// ​​
// endsWith: function endsWith()
// ​​
// fixed: function fixed()
// ​​
// fontcolor: function fontcolor()
// ​​
// fontsize: function fontsize()
// ​​
// includes: function includes()
// ​​
// indexOf: function indexOf()
// ​​
// italics: function italics()
// ​​
// lastIndexOf: function lastIndexOf()
// ​​
// length: 0
// ​​
// link: function link()
// ​​
// localeCompare: function localeCompare()
// ​​
// match: function match()
// ​​
// matchAll: function matchAll()
// ​​
// normalize: function normalize()
// ​​
// padEnd: function padEnd()
// ​​
// padStart: function padStart()
// ​​
// repeat: function repeat()
// ​​
// replace: function replace()
// ​​
// replaceAll: function replaceAll()
// ​​
// search: function search()
// ​​
// slice: function slice()
// ​​
// small: function small()
// ​​
// split: function split()
// ​​
// startsWith: function startsWith()
// ​​
// strike: function strike()
// ​​
// sub: function sub()
// ​​
// substr: function substr()
// ​​
// substring: function substring()
// ​​
// sup: function sup()
// ​​
// toLocaleLowerCase: function toLocaleLowerCase()
// ​​
// toLocaleUpperCase: function toLocaleUpperCase()
// ​​
// toLowerCase: function toLowerCase()
// ​​
// toString: function toString()
// ​​
// toUpperCase: function toUpperCase()
// ​​
// trim: function trim()
// ​​
// trimEnd: function trimEnd()
// ​​
// trimLeft: function trimStart()
// ​​
// trimRight: function trimEnd()
// ​​
// trimStart: function trimStart()
// ​​
// valueOf: function valueOf()
// ​​
// Symbol(Symbol.iterator): function Symbol.iterator()