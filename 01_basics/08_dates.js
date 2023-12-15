const mydate = new Date();

console.log(mydate);                  // 2023-12-15T02:35:53.463Z
console.log(mydate.toDateString());  // Fri Dec 15 2023
console.log(mydate.toISOString());   // 2023-12-15T02:35:53.463Z
console.log(mydate.toJSON());       // 2023-12-15T02:37:47.118Z
console.log(mydate.toLocaleDateString()); // 12/15/2023
console.log(mydate.toLocaleString());  // 12/15/2023, 2:39:17 AM
console.log(mydate.toLocaleTimeString()); // 2:39:51 AM
console.log(mydate.toString());      // Fri Dec 15 2023 02:40:36 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toTimeString());  // 02:41:48 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toUTCString());   // Fri, 15 Dec 2023 02:42:34 GMT