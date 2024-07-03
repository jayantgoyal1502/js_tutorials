// primitive datatypes

// 7 types: String ,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 3745647467447644n

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["ironman", "captain america" , "thor"]

let myObj = {
    name: "jayant",
    age: 21
}

const myFunction = function(){
    console.log("hello world");
}