// Immediately Invoked Function Expressions (IIFE)


(function random(){
    //it is named IIFE
    console.log(`DB CONNECTED`);
})(); //this is known as immediate execution , we dont have to do random()
// always add a semicolon ; in the end
//iife is used to avoid pollution from global scope
// we can also use this in arrow functions

( () => {
    console.log(`DB CONNECTED TWO`);
})();

//we can also pass variables in it
( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("jayant");