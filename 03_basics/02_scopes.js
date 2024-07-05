// var c = 300
let a = 300 //this is global scope
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a); //this is block scope
}

// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); //30 //that's why we don't use var


function one(){
    const username = "jayant"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    // two()
}
// one()

if(true){
    const username = "jayant"
    if(username === "jayant"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// console.log(addOne(5)) // it will run fine
function addOne(num){
    return num+1
}


// console.log(addTwo(5)) // this will throw error because excecuted above declaration in this syntax. this thing is called hoisting
const addTwo = function(num){
    return num+2
}