// function findFeb29(currentyear:number):number{
//     while(true){
//         if(currentyear % 4 === 0 && currentyear % 100 !==0 || currentyear % 400 === 0){
//             const isfeb29 = new Date(currentyear,1,29).getDate()===0;
//             if(isfeb29){
//                 return (currentyear);
//             }
//         }
//         currentyear++;
//     };
// };
// const feb29 = findFeb29(2029)
// console.log(feb29)
// import inquirer from "inquirer"
// const input = await inquirer.prompt({
//     name:"",
//     type: 
// })
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 2));
let car1 = {
    name: "Corolla",
    modelYear: 2024,
    color: "Red Wine",
    HP: "2200 Cc",
    carType: "Automatic",
    isPowerSterring: true
};
// console.log(car1.name)
let drinks = "sheesha";
// type intersection
// 24 May 2024
// 1. Introdduction to slice and splice methods
// Slice Method 
// . Used to create a duplicate of an array or a portion of it.
// . Does not modify the orignal array.
// . syntax: array.slice(start,end)
// . Example:
let fruit = ["apple", "lichi", "kiwi", "mango"];
let copi = fruit.slice(1, 2); // It include the element from Starting point and then add the 2nd element before the end index 
// console.log(copi)
//  Splice Method 
// . Used to add or remove elements from an array.
// . Modifes the orignal Array
// . Syntax: array.splice(star,deleteCount, item1, item2)
// . Exapmle:
let fruits = ["Apple", "mango", "banana", "apricot"];
// console.log(fruits,"Before deleting the element")
fruits.splice(1, 3); // first we delete the element using this method
// console.log(fruits,"After deleting the element")
// Now we add the element in this array using the same method
fruits.splice(1, 0, "Balooshai", "aloocha");
// console.log(fruits,"After adding an element")
// 2. Explanation of slice and splice:
// . slice:
//   . Create a shallow copy of a portion of an array.
//   . Parameters
//     . start:Index at which to start extraction
//     . end:Index at which to end extraction(not included in the result).
//   . Example to create duplicate array:
let vegetables = ["onion", "potato", "tomato", "lady finger"];
let duplicateArray = vegetables.slice(0, 3);
// console.log(duplicateArray,"Copy array") // output varify the parameters point
// console.log(vegetables,"Orignal Array") // see Orignal array remain same.
// . splice
//    . Changes the content of an array by removing or replacing existing elements and / or adding new elements.
//    . Parameters:
//       . start:Index at which to start changing the array.
//       . deleteCount:Number of element to remove.
//       . item1, item2,...Elements to add to the array.
//    . Example to replace and add elements:
let friends = ["Hasnain", "Akash", "Nabeel", "Akbar"];
// console.log(friends,"Before replacing and adding")
// Now we replace akash and add yazdani
friends.splice(1, 1, "Yazdani");
// console.log(friends,"After replacing and adding")
//4. Tuples in typeScript:
//    . Tuples allow you to express an array with a fixed number of elements whose types are known. Or in other words, tuples are used to restrict
//       data type.
//    . Example:
let profile = ["Shehroz Hanif", 25, "Ai Engineer"]; // in this variable we allow only type like [string,string,number] if we add
//                                                                    more than this value than it show us a error.This is called tuple.
console.log(profile);
//5. For-loop and conditional Statements:
//   . For-loop example:
// for(let i= 0; i < 3; i++ ){
//     console.log("nono")
// }
// for(let i=0; i<=10; i++){
//     console.log(i)
// }
// For a 10 seconds countdown
for (let i = 10; i >= 1; i--) {
    console.log("Countdown", i);
}
// Now we make table with loop 
// let num = 3
// for(let i =1; i<=10; i++){
//     console.log(num + "x" + i + "="+(num*i) )
// }
// Task with Arrays:
// .Removing the first element and replacing an element.
let froot = ["mango", "banana", "kinno", "lichi"];
let findIndex = froot.indexOf("mango");
console.log(findIndex);
froot.splice(0, 1, "mausombi");
console.log(froot);
// Implementing  find, and filter methods in array operations.:
let students = [
    {
        name: "Shehroz",
        age: 25,
        qualification: "Phd in A.i"
    },
    {
        name: "Akash",
        age: 26,
        qualification: "Bachlors"
    },
    {
        name: "HUSNAIN",
        age: 28,
        qualification: "Master's"
    },
];
// Use filter method let suppose we have to find student by name
// let findStd = students.find(students=>students.name === "Shehroz")
// console.log(findStd)
// // now we have to filter by age
// let filterStd = students.filter(students =>students.age === 28)
// console.log(filterStd)
console.log(students[1].name);
export {};
// let user = await inquirer.prompt([
//     {
//         name:"input1",
//         type:"number",
//         message:"Please Select the first number",
//     },
//     {
//         name:"Operator",
//         type:"list",
//         message:"Please Select the Operator",
//         choices:["Add","Subtract","Mul","Division"]
//     },
//     {
//         name:"input2",
//         type:"number",
//         message:"Please Select the Second number",
//     },
// ])
// if(user.Operator === "Add"){
//     console.log(user.input1 + user.input2)
// }else if(user.Operator === "Subtract"){
//     console.log(user.input1 - user.input2)
// }else if(user.Operator === "Mul"){
//     console.log(user.input1 * user.input2)
// }else if(user.Operator === "Division"){
//     if(user.input1 === 0){
//         console.log("cannot divide by zero")
//     }else{
//      console.log(user.input1 / user.input2)
//     }
// }
