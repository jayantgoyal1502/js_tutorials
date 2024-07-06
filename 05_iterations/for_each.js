//for each loop

const coding = ["js","cpp","ruby","python"]

// coding.forEach(element => {
//     console.log(element);
// });

// coding.forEach( function(element){
//     console.log(element);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) =>{
//     console.log(item ,index, arr);
// })

const myCoding = [
    {
        languagename: "javascript",
        languageFileName: "js"
    },
    {
        languagename: "java",
        languageFileName: "java"
    },
    {
        languagename: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename);
})