// any, unknown, never

let a:any;
a = true
a = "aljk"
a =123
a =[]
a={}
a= null
a = undefined
a = ()=>{}


let b:unknown;
b = 123
b ="fhfhd"
b = null
b = undefined
b = []
b = {}
b =()=>{}


let val:any
let val2:unknown
val = val2
let val3:[]
val3 = val
let val4:{}



let chal:unknown
let z:number = 5
// z = chal
// val = chal
// chal = chal
// val3 = chal


// Never type dont return anything although void return "undefine" when you console.log and never is used to throw a error

function throwError(error:string, code:number):never{
    throw new Error(error + code)
}

// console.log(throwError("Alfa",404))

// function check(...a:any, b:string,c:number){
//     console.log(a)
// }

// A rest parameter must be last in a parameter list.
// rest parameter are used to ather arguments into an array.
// A function can only have ine rest parameter

// console.log(check("my name is shehroz", " i love my parents","raste p dil jab aya ho manzil tak bhagna hota hai"))


// Spread parameter
// It is used in function call, array literal, object literal.
// sprading elements in merging arrays and create shallowing copies.

// let ar1 = [1,2,3,4]
// let arr2 = [5,6,7,8]

// let check = [...ar1 , ...arr2]
// console.log(check)

// Function overloading

// function signature

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:string, b:number):string;
function add(a:number, b:string):string;

function add(a:any, b:any):any{
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }else if(typeof a === "string" && typeof b === "string"){
        return a + b
    }else if(typeof a === "string" && typeof b === "number"){
        return a + b
    }else if(typeof a === "number" && typeof b === "string"){
        return a + b
    }

}

// console.log(add(2,5))
// console.log(add("Imran Khan ", " Love"))
// console.log(add("Imran khan ", 804))
// console.log(add(804 , "Na vo bagi na vo gaddar"))


// Another example this time little complex

function multiply(a:number, b:number):number;
function multiply(a:number, b:number, c:number):number;
function multiply(a:string , b:number):string


function multiply(a:any, b:any, c?:any):any{
    if(typeof a === "number" && typeof b === "number"){
        return a * b
    }else if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
        return a * b * c
    }else if(typeof a === "string" && typeof b === "number"){
        return a.repeat(b)
    }
}

// console.log(multiply(5,4))
// console.log(multiply(5,4,5))
// console.log(multiply("Na vo baghi na gaddar Qaidi no 804 \n ",3))



// Now making a real world senario example if we login with onlu email than it show login with google else if we use password as well then it show logign with facebook

function signup(a:string, b:string):string;
function signup(a:string,):string;


function signup(a: any, b?: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return "login with facebook";
    } else if (typeof a === "string") {
        return "login with google";
    }
}

// console.log(signup("shehrozhanif54"))
// console.log(signup("shehrozhanif54", "123456"))



// enum

enum day {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday = "friday",
    saturday = "saturday",
}

let check:day= day.monday
console.log(check)

function dayCheck(days:day){
  if(days === day.friday){
    console.log("chutti")
  }else if(days === day.monday){
    console.log("kaam")
  }
}


enum trafficLight {
    red,
    Green,
    Yellow,
}

function trafficSignal(signal:trafficLight){
    if(signal === trafficLight.red){
        console.log("!Stop")
    }else if(signal === trafficLight.Yellow){
        console.log("Are you ready to go")
    }else if(signal === trafficLight.Green){
        console.log("You can go now")
    }
}

// console.log(trafficSignal(trafficLight.Green))


type deal1 ={
    food:string,
    drink:string
}

// type deal2 = {
//     food:string
// }


// let shehrozOrder = {
//     food:"biryani",
//     drink:"Coke",
// }

// let husnaninOrder={
//     food:"qorma"
// }



// let serveOrderToShehroz:deal1 = husnaninOrder  // error occur because one property is missing

// let serveOrderToHasnain:deal2 = shehrozOrder   // these are stale object because its allow to add proprty



// const maxValue = 10;
// const randomNumber = Math.floor(Math.random()*10)+1;

// let isGuessCorrect = false  // Track the initial status false

// const guesses = [2,6,5,8,7]

// let index = 0  // initialization

// while(index<guesses.length){
//     const currentGuess = guesses[index]
//     console.log(`User guess ${currentGuess}`)

//     if(currentGuess === randomNumber){
//         console.log(`!Bingo the number is matach`)
//         isGuessCorrect = true
//         break;
//     }else if(currentGuess > randomNumber){
//         console.log(`Too high`)
//     }else{
//         console.log(`Less than random number`)
//     }

//     index++
// }

// if(!isGuessCorrect){
//     console.log("No more guesses left")
// }