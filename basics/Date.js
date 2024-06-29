//date and type
let mydate = new Date()
//console.log(mydate); //024-06-29T14:50:11.808Z

// console.log(mydate.toString()); //Sat Jun 29 2024 14:50:11 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString); //[Function: toDateString]
// console.log(mydate.toLocaleString()); //6/29/2024, 2:50:11 PM
// console.log(typeof mydate); //object

// let myCreateDate = new Date (2024, 06, 29) //for date
// console.log(myCreateDate);
//let myCreateDate = new Date (2024, 06, 29) //for date and time
//console.log(myCreateDate.toLocaleString());
//let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.getTime());
//console.log(date.now());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
newDate.toLocaleString('default', {
    weekday: "long"
})
