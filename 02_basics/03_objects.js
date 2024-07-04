// singleton
/*jb hm literals ki tarah declare krte hai toh singleton nhi bnta hai.
constructor se bnega toh yes singleton bnega */

//object literals

const mySym = Symbol("key1")

const user1 = {
    name: "jayant",
    age:21,
    email: "jayant@google.com",
    isLoggedin: false,
    lastLogindays: ["Monday","Wednesday"],
    [mySym] : "myKey1"
}

// console.log(user1.name);
// console.log(user1["name"]); //this method of accessing in objects is more preferred than above one
// console.log(user1[mySym]); // symbol should be decleared in [] in objects else

// user1.email = "jayant@hehe.com"
// console.log(user1["email"]);

// Object.freeze(user1) // no change in object can be done
// user1.email = "jayant@microsoft.com"
// console.log(user1["email"]); 


user1.greeting = function(){
    console.log("Hello user1");
}

console.log(user1.greeting()); //Hello user1
console.log(user1.greeting); // [Function (anonymous)]

user1.greeting2 = function(){
    console.log(`Hello user1, ${this.name}`);
}

console.log(user1.greeting2());
console.log(user1.greeting2);