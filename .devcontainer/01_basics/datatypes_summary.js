//officially there are only two datatypes in JS
//Primitive
//7 types : String, Boolean, Symbol, bigInt, number, Null, undefined
//dynamic typed language
const number = 100
const scoreValue = 100.3
const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 34555657775868768687575n
//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "nagaraja", "doga"]
let myObj = {
    name : "Swati",
    age : "30"
}

const func = function(){
    console.log("function called");
}

console.log(typeof scoreValue);

//////////////////////////////////////////////////Memory

//Stack(primitive) and Heap(Non-primitive)

let myYoutubeName = "abcd"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "swati@yahoo.com",
    upi: "swati@ybl"
}

let userTwo = userOne
userTwo.email="swati@google"
console.log(userOne.email);
console.log(userTwo.email);




