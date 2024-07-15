//<----------------Object literal-------------------->
// const user = {
//     username : "jayant",
//     loginCount : 8 ,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got user details");
//         console.log(`Username: ${this.username}`);
//     }
// }

// console.log(user.getUserDetails()); // Username: jayant


// const user = {
//     username : "jayant",
//     loginCount : 8 ,
//     signedIn : true,

//     getUserDetails : function(){
//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());
 /* {
    username: 'jayant',
    loginCount: 8,
    signedIn: true,
    getUserDetails: [Function: getUserDetails]
  } */

//<---------------------constructor function------------------->

// const promiseOne = new Promise()
// const date = new Date()     // new is the constructor function

function User(username,loginCount,isLoggedIn) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  return this
}

// const userOne = User("jayant",12,true)
// const userTwo = User("Jay",11,false)
// console.log(userOne); // this will print userTwo instead of userOne because userTwo will overwrite its values

const userOne = new User("jayant",12,true)
const userTwo = new User("Jay",11,false)
console.log(userOne); // constructor function is used so no overwriite issues

//when we use new keyword , firstly new object is created which is called instance
//constructor function is called bcoz of new keyword
//in 3rd step, all the arguments we have written are injected in this keyword