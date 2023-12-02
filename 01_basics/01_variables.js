const accountId = 14453;               // const values can't be changed
let accountEmail = "rahul@gmail.com"; // let values can be changed 
var accountPassword = "1234";         // var values can be changed
accountCity = "Ranchi";
let accountState; // undefined variable

// accountId = 2 // not allowed

accountEmail = "htc@gmail.com"; 
accountPassword = "456";
accountCity = "bihar";

console.log(accountId);

/*

prefer not to use var

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 
// table is used to represent more than one output in a form of table