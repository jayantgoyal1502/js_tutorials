const userEmail = "my@gmail.com"

// if ([]) {
//     console.log("got user email");
// } else {
//     console.log("don't have user email");
// }

//falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0" ,'false'," ", [], {}, function(){}

// if (userEmail.length ===0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length ===0){
//     console.log("object is empty");
// }


//Nullish Coalescing Operator (??) :null undefined

let val1;
// val1 =5 ?? 10
// val1 = null??10
// val1 = undefined ?? 15
val1 = null??10??15

// console.log(val1);

//Ternary oprator

// condition ? true:false

// const price = 100
// price>80 ? console.log("don't buy") : console.log("buy");