
function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

function addTwoNum(num1,num2){
    console.log(num1+num2);
}

// addTwoNum(3,4)
// addTwoNum(3,"4")
// addTwoNum(3,null)
// addTwoNum("3",4)
// addTwoNum("3","4")

// const result = addTwoNum(3,4)
// console.log(result); //undefined //it means above function is just doing console and not returning anything

function addTwoNum(num1,num2){
    // let result = num1 + num2
    // return result 
    return num1+num2 //we can directly return 
}
// const result = addTwoNum(3,5)
// console.log(result); //8 //another way to write functions , in this , it is returning something, so result got 8 value

function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username");
        return
    } // we can use if statement to check, if undefined hua toh directly return 
    return `${username} just logged in`
}
// console.log(loginUserMessage("jayant"))
console.log(loginUserMessage()) //undefined aayega