const name = "Rahul Kumar";
const age = 23;

console.log(`Hello my name is ${name} and my age is ${age}`);

const newname = String(`Goga`);

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
