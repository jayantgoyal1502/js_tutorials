const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //it creates array in an array making dc_heros as 3rd element

// const newarray = marvel_heros.concat(dc_heros)
// console.log(newarray); // return in a new array

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //most preferred

const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //inside flat ,we give depth upto which we want array to be flat , we can use infinity if dont know depth
console.log(real_another_array);


console.log(Array.isArray("Jayant")) //false 
console.log(Array.from("Jayant")) //it makes an array out of jayant [ 'J', 'a', 'y', 'a', 'n', 't' ]
console.log(Array.from({name: "jayant"})); //it gives empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]