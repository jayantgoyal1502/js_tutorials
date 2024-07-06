const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
},0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price:2999
    },
    {
        itemName: "py",
        price:999
    },
    {
        itemName: "mobile dev",
        price:5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+ item.price ,0)
console.log(priceToPay);