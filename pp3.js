//While loop
// Repeated checking where you continue to do something until the codition is met.
let trainArriveInMinutes = 10;
// while(trainArriveInMinutes>0){
//     console.log(`Train arrive in ${trainArriveInMinutes} minutes`)
//     trainArriveInMinutes--
// }
let bussArrive = 5;
// do{
//     console.log("looking for buss...")
//     bussArrive--
// }while(bussArrive>0)
// function checkBusArrival(){
//     bussArrive--;
//     if(bussArrive !=0){
//         return("Waiting for buss.....")
//     }else{
//         return false
//     }
// }
// do{
//  let response = checkBusArrival()
//  console.log(response)   
// }while(bussArrive > 0);
// function trainArrive(){
//     trainArriveInMinutes--
//     if(trainArriveInMinutes !=0){
//         return "Waiting for buss...."
//     }else{
//         return "Buss Arrive"
//     }
// }
// do{
//     let response2 =trainArrive()
//     console.log(response2)
// }while(trainArriveInMinutes>0)
/// For Loop
for (let i = 0; i < 5; i++) {
    // console.log(`Watering Plant ${i+1}`)
}
//For in loop
//In loop use for Object
let person = { name: "Alice", age: 25, city: "Bambada" };
for (let key in person) {
    console.log(`${key}:${person[key]}`);
}
// of loop used in Array
let flavours = ["Pan", "Kiwi", "Dejavoo", "Dunhill"];
for (let flavour of flavours) {
    console.log(flavour);
}
// HomeWork Assignment
//Question No 1: Create an Array of your favourite movies.Write a function that uses a for-of loop to print each movie to the console
let favouriteMovie = ["Avengers", "Iron MAN", "Fast&Furious", "Evil Dead"];
for (let movie of favouriteMovie) {
    console.log(movie);
}
//Question No 2: Given An object Representing a car with properties like make model and year , write a function that uses a for-in loop to
// print each property name and its value
// let car:any = {
//     make:"Civic",
//     model:"Rs-Twin Turbo",
//     year:2025
// }
// function response3(car:{[key:string]:string|number}){
//     for(let key in car){
//         console.log(`${key}:${car[key]}`)
//     }
// }
// response3(car)
let car = {
    make: "Corolla",
    model: "RS-Turbo",
    year: 2025
};
function result(car) {
    for (let key in car) {
        console.log(`${key}:${car[key]}`);
    }
}
// result(car)
// Question No 3: // Write a function that uses a for-loop to print the numbers from 1 to 100. However for numbers divisible by 3, print fizz
//instead of the number, and for the number divisible by 5 (and not 3), print "buzz".For numbers  divisible by both 3  and 5, print "fizzbuzz"
function fizz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i, "fizz");
        }
        if (i % 5 === 0) {
            console.log(i, "buzz");
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, "Fizzbuzz");
        }
    }
}
// fizz()
// Practicing Do-while loop
//Question No 4 : Create a function that simulates a simple guessing game. This function should generate a random between 1 to 10 and then prompt
// the user to guess the number.Use do-while to keep asking them to guess again until they get it right.
function randomNumber(userInput) {
    let number;
    let attempt = 0;
    do {
        number = Math.floor(Math.random() * 10) + 1;
        attempt++;
        if (userInput === number) {
            console.log("Apki Qismat Khul gai");
            return attempt;
        }
        else {
            console.log("try again");
        }
    } while (true);
}
// let input = await inquirer.prompt([
//     {
//         name:"Guessgame",
//         type:"number",
//         message:"Apni Qismat Aazmae:\n 1 se 10 tak koi bhi number lagaen:"
//     }
// ])
// let a = Math.floor( Math.random()*10+1)
// console.log(a)
// if(input.Guessgame === a){
//     console.log("Apki qismat khul gai")
// }else{
//     console.log("Try again!")
// }
// 
// async function guessGame() {
//     let input = inquirer.prompt([
//         {
//             name:"Guessgame",
//             type:"number",
//             message:"Please Enter a number"
//         }
//     ])
//         let number:number
//         let attempt = 0
//         do{
//             number = Math.floor(Math.random()*10)+1
//             attempt++;
//             if(input.Guessgame === number){
//                 console.log("Apki Qismat Khul gai")
//                 return attempt;
//             }else{
//                 console.log("try again")
//             }
//         }while(true)
// }
// let check2 = guessGame(7)
// console.log(`It took ${check2} attempts`)
// While loop for a Countdown
//Question no 5 : Write a function that takes a number as an argument and counts down to zero usng a while loop,printing each number to the console.
function countDown(number) {
    let countDown = number;
    while (countDown > 0) {
        console.log("CountDown", countDown);
        countDown--;
    }
}
let check3 = countDown(10);
console.log(check3);
export {};
