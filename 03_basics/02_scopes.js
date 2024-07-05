// var c = 300
let a = 300 //this is global scope
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ",a); //this is block scope
}

console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); //30 //that's why we don't use var
