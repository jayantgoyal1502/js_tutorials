//if
// const isLoggedIn = true
// const temp = 41

// if(temp==="41"){
//     console.log("executed");
// }else{
//     console.log("temp is greater than 50");
// }
// <,>,<=,>=,==,!=,===,!==

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000
// if(balance>500)console.log("test");

// if (balance<500) {
//     console.log("less than 500");
// }else if (balance<750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedin && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}