// Recursvie function
function factorial(n:number):number{
    if(n===0){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5))

function countDown(num:number){
    if(num <= 0){
        console.log("Done!")
        return;
    }
    console.log(num)
    countDown(num-1)
    
}

countDown(5)


// Nested function

function outerFunction(){
    let innerFunction = function(){
        console.log("Hello i am from inside!")
    }
    innerFunction()
}
outerFunction()


//Callback function

function processUserInput(Callback:(name:string)=>void){
    let name = "Shehroz"
    Callback(name)
}

processUserInput(function(name:string){
    console.log("Hello ", name)
})


// Timeout
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, );

// using inquirer make a self check quiz

import inquirer from "inquirer";
// let input = await inquirer.prompt([
//     {
//         name:"user",
//         type:"input",
//         message:"What is the capital of france?"
//     }
// ])

// function quiz(question:string, answer:string){
//     if(input.user.toLowerCase() === answer.toLowerCase()){
//         console.log("Your answer is Correct!")
//     }
//     else{
//         console.log("Your answer is wrong")
//     }
// }

// let check = quiz("What is the capital of france","paris")

//HomeWork Assignment 226
   
/* Create a function named called calculateProduct that take two parameter, multuilpes them together, and return the result*/
function calculateProduct(num1:number, num2:number){
    console.log(num1 * num2)
}
// calculateProduct(5,10)

// Question No 2
/* Using default parameter. Define a function that takes two parameters: named and greeting, where greeting has a default value of "Hello".
The function should return a greeting message. */

function greeting(name:string,greet:string="Hello"){
    return greet +" "+ name
}
// console.log(greeting("Shehroz"))


//Arrow Function Conversion
/* Convert the foolowing traditional function into an arrow function: function add(num1:number, num2:number){
    return a + b;
} */

let add = (a:number, b:number)=>{
    return a + b
}

let addition = add(5,5)
console.log(addition)



//Implementing a rest Parameter 
/*Write a function SumAll that use a rest parameter to take any number of arguments and return their sum */

function SumAll(...rest:number[]){
    return rest.reduce((total,sum)=>total+sum,0)
}

// console.log(SumAll(5,6,7,9))




// Function that returning another function
/* Question No 5: Create a function Multiplier that takes a number as an argument and return another function.The return function should take single number
as it's argument and return the product and the argument of the function */

  
function multiplier(fantor:number):(num:number)=>number{
    return function(num:number){
        return fantor * num
    }
}

// let check = multiplier(5)
// console.log(check(5))



// Recursive Faction Factorial
/* Question No 6: Write a Recursive function to calculate the factorial the of a number.The factorial of a number n is the product of all
positives integers less than or equal to n.For example the factorial of 5 (5!) is 5*4*3*2*1=120.     */


function factoriall(num:number):number{
    if(num === 0){
        return 1
    }
    return num*factoriall(num-1)
    
}

console.log(factoriall(5))


// Nested Function-Scoping
/* Question No 7: Write a function that contains two nested function.The outer function should accept a parameter x, and its nested functions should
increament and the triple x. The outer function should return the result of the tripled value after incrementing.  */

function implementedValue(num:number){
    function increament(n1:number){
        return n1+1
    }

    function triple(n2:number){
        return n2 *3
    }

    let increament_1 = increament(num);
    let triple_final=triple(increament_1)

    return triple_final
}

// console.log(implementedValue(5))


// Anonymous function and Callbacks
/* Question NO 8: Create an anonymous function that takes an Array of numbers and a Callback function.The anonymous function should apply
the Callback function to each element of the array and return a new array with the result. */

let numbers = [1,2,3]
let anonymousFunction = (arr:number[],callback:(x:number)=>number):number[]=>{
    return arr.map(callback);

};
let doubleNummbers = anonymousFunction(numbers, (x)=>x*2);

console.log(doubleNummbers)


// Another function

let arr = [2,4,6]

let callback =(x:number):number=>{
    return x*2
} 

let result = arr.map(callback)

console.log(result)



//SetTime Out()
/* Question no 9: Use setTImeout within a function to simulate a delay in processing(eg; retrieving data from database).The function shold accept a callback
and invoke it after 2 Seconds of delay */

// console.log("Retrieving Data")
// setTimeout(() => {
//     console.log("Data recieve After 2 Seconds")
// }, 2000);