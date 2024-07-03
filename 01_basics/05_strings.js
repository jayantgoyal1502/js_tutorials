const name = "jayant"
const repo = 14

// console.log(name+repo+" Value");

// console.log(`hello my name is ${name} and my repo count is ${repo}`);

const newName = new String('jay-agarwal')

// console.log(newName[0]);
// console.log(newName.__proto__);
// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(2));
// console.log(newName.indexOf('a'));

const newString = newName.substring(0,3)
// console.log(newString);

const anotherString = newName.slice(-11,3)
// console.log(anotherString);

const newStringOne = "   jayant     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://jay.com/jay%4agarwal"
// console.log(url.replace('%4','-'));

// console.log(url.includes('jay'));

console.log(newName.split('-'));