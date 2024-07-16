// let myName = "jayant     "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jayant = function(){
    console.log(`jayant is present in all objects`);
}

// heroPower.hitesh()
// myHeros.jayant()

//inheritance
const User = {
    name : "chai",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = User



//modern syntax
Object.setPrototypeOf(teachingSupport,teacher)


let anotherUsername = "jay             "
String.prototype.trueLength = function(){
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"jayant          ".trueLength()
"coke".trueLength()