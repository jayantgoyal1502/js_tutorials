// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls , cryptography , network call
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()   //resolve ek method hai aur isse yha likhna pdega only then ye .then se connect hoga
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })



// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then( () => {
//     console.log("Async 2 resolved");
// }) //iss syntax me hamne ek hi part me sb kr dia instead of two parts like before


// const promiseThree = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         resolve({username : "jayant", email: "jayant@example.com"})
//     }, 1000);
// })

// promiseThree.then( (user)=>{
//     console.log(user);
// })



// const promiseFour = new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username : "jayant", password: "123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then( (username)=> {
//     console.log(username);
// })
// .catch( (error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is either resolved or rejected");
// })



// const promiseFive = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username : "javascript", password: "123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// } 
    
//async await errors ko handle ni kr pata so we have to wrap it in try-catch block too
//so the above code becomes

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// both syntax are good .then .catch wala bhi aur try catch vala bhi
// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// } 

//above code is totally correct but we are getting Promise { <pending> } as output
//this is because its being converted to json const data = response.json() here
// so we have to add an await here too and it will work

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//above code in .then .catch syntax would be
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

// getAllUsers()