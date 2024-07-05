// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "tony stark"
// console.log(tinderUser);

const user2 = {
    email: "name@google.com",
    fullName : {
        username : {
            firstname: "tony",
            lastname : "stark"
        }
    }
}

// console.log(user2.fullName.username.lastname);

const obj1 = {
    1: "a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2) //{} it is added optionally but is a gud practice
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} //most used method , spread
// console.log(obj3);


// console.log(Object.keys(tinderUser)); // [ 'id', 'name' ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'tony stark' ] ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'tony stark' ]


//*****************************object destructuring*****************************
const course = {
    coursename : "js tutorial",
    price: "1000",
    instructor: "hitesh"
}

// course.instructor //instead of writing this again and again , we use below method

// const {instructor} = course
// console.log(instructor);

// const {instructor : tutor} = course
// console.log(tutor);

// **************************** api ************************************************
// {
//     "name":"jayant",
//     "course":"js"
// }

// [
//     {},
//     {},
//     {}
// ]