// any, unknown, never
let a;
a = true;
a = "aljk";
a = 123;
a = [];
a = {};
a = null;
a = undefined;
a = () => { };
let b;
b = 123;
b = "fhfhd";
b = null;
b = undefined;
b = [];
b = {};
b = () => { };
let val;
let val2;
val = val2;
let val3;
val3 = val;
let val4;
let chal;
let z = 5;
// z = chal
// val = chal
// chal = chal
// val3 = chal
// Never type dont return anything although void return "undefine" when you console.log and never is used to throw a error
function throwError(error, code) {
    throw new Error(error + code);
}
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return a + b;
    }
}
function multiply(a, b, c) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    else if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return a * b * c;
    }
    else if (typeof a === "string" && typeof b === "number") {
        return a.repeat(b);
    }
}
function signup(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return "login with facebook";
    }
    else if (typeof a === "string") {
        return "login with google";
    }
}
// console.log(signup("shehrozhanif54"))
// console.log(signup("shehrozhanif54", "123456"))
// enum
var day;
(function (day) {
    day[day["sunday"] = 0] = "sunday";
    day[day["monday"] = 1] = "monday";
    day[day["tuesday"] = 2] = "tuesday";
    day[day["wednesday"] = 3] = "wednesday";
    day[day["thursday"] = 4] = "thursday";
    day["friday"] = "friday";
    day["saturday"] = "saturday";
})(day || (day = {}));
let check = day.monday;
console.log(check);
function dayCheck(days) {
    if (days === day.friday) {
        console.log("chutti");
    }
    else if (days === day.monday) {
        console.log("kaam");
    }
}
var trafficLight;
(function (trafficLight) {
    trafficLight[trafficLight["red"] = 0] = "red";
    trafficLight[trafficLight["Green"] = 1] = "Green";
    trafficLight[trafficLight["Yellow"] = 2] = "Yellow";
})(trafficLight || (trafficLight = {}));
function trafficSignal(signal) {
    if (signal === trafficLight.red) {
        console.log("!Stop");
    }
    else if (signal === trafficLight.Yellow) {
        console.log("Are you ready to go");
    }
    else if (signal === trafficLight.Green) {
        console.log("You can go now");
    }
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
const maxValue = 10;
const randomNumber = Math.floor(Math.random() * 10) + 1;
let isGuessCorrect = false; // Track the initial status false
const guesses = [2, 6, 5, 8, 7];
let index = 0; // initialization
while (index < guesses.length) {
    const currentGuess = guesses[index];
    console.log(`User guess ${currentGuess}`);
    if (currentGuess === randomNumber) {
        console.log(`!Bingo the number is matach`);
        isGuessCorrect = true;
        break;
    }
    else if (currentGuess > randomNumber) {
        console.log(`Too high`);
    }
    else {
        console.log(`Less than random number`);
    }
    index++;
}
if (!isGuessCorrect) {
    console.log("No more guesses left");
}
export {};
