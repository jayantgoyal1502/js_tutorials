// Dates

// let myDate = new Date()
// console.log(myDate); //2024-07-04T12:39:52.655Z
// console.log(myDate.toString()); //Thu Jul 04 2024 12:39:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu Jul 04 2024
// console.log(myDate.toISOString()); //2024-07-04T12:39:52.655Z
// console.log(myDate.toJSON()); //2024-07-04T12:39:52.655Z
// console.log(myDate.toLocaleDateString()); //7/4/2024
// console.log(myDate.toLocaleString()); //7/4/2024, 12:39:52 PM

// console.log(typeof myDate); //object

// let newDate = new Date(2024,0,1)
// console.log(newDate.toDateString()); //Mon Jan 01 2024 . it means months start from 0 index here

// let newDate = new Date(2024,0,1,5,3)
// console.log(newDate.toLocaleString()); //1/1/2024, 5:03:00 AM

// let newDate = new Date("01-13-2024")
// console.log(newDate.toLocaleString()); //1/13/2024, 12:00:00 AM . in MM-DD-YYYY format

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);

// // console.log(newDate.getTime());

// console.log(Date.now()); //milliseconds

// console.log(Math.floor(Date.now()/1000)); //seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); // +1 because month start from 0 index
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));