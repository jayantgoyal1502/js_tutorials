const user = {
    username: "jayant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "jay"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "jayant"
//     console.log(this.username);
// }
// one()

// const one = () => {
//     console.log(this);
// }
// one()

//********************************* arrow functions ****************************

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

const addTwo = (num1,num2) => (num1+num2) //this is called implicit return

console.log(addTwo(3,4))
