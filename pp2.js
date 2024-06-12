//Basic Object in TypeScript
let person = {
    name: "shehroz"
};
// Accessing that object
console.log(person["name"]);
// Define basic Object in TypeScript
let person2 = {
    name: "Shah"
};
console.log(person2.name);
//Define a Basic object in typeScript
let person3 = {
    name: "Shaka",
    age: 25,
    address: "GaliNo420"
};
// Acessing their properties
console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
// Modifying their properties
person3.age = 18;
console.log(person3.age);
let user1 = {
    name: "Sherry",
    age: 25,
    hasPet: true
};
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
console.log(add(5, 5));
console.log(sub(10, 5));
// Type Literal
//Specific and predefined value that are acceptable
let drinkSize;
drinkSize = "Large";
let shirt = {
    Tshirt: "Small"
};
//Union Type
// Allow a variable o hold values of multiple types
let mixBage;
mixBage = 123;
mixBage = "packket";
let picnic = {
    batBall: true,
    chips: "rakhli",
    caps: 5,
    biryani: false,
    money: 15000,
    chaiPatti: "Rakhli"
};
// Sp this is how we execute
//Array and their properties
let fruit = ["apple", "banana", "orange"];
console.log("Fruit length ", fruit.length);
console.log("At zero index", fruit[0]);
fruit[3] = "Peach";
console.log(fruit);
//Array Methods
// .Push, .Pop , .Shift, .UnShift
let color = ["Red", "Green", "White", "balck", "blue"];
color.push("Pink"); //.push Method add a element at the end of an Array
console.log(color);
color.pop(); // Remove the element from last Array
console.log(color);
color.shift(); // Remove the first Element
console.log(color);
color.unshift("Pink"); // Add a new element at the start of an Array
console.log(color);
let library = [
    { title: "Azaadi", author: "jj thomson", isbn: "9856548" },
    { title: "Gulami na Manzoor", author: "Shehroz", isbn: "25648666" }
];
console.log("Before Push \n", library);
console.log("After Push");
library.push({
    title: "Khoon ka badla khoon",
    author: "Chandrachoo Chaterji",
    isbn: "6598235"
});
console.log(library);
//Finding a book by author name
let findbook = library.find(book => book.author === "Shehroz"); //Use .find Method 
console.log(findbook);
let findbook2 = library.find(book => book.isbn === "6598235");
console.log(findbook2);
//Assignment
//Basic Array Operation
//Question No 1:
// Create an Array called fruits that contains the name of four different fruits.Perform the foloowing Operations:
//Add a new fruit to the end of an Array.
//Remove the first fruit from the Array.
//Add a new fruit to the beginning of an Array.
//Find the index of a fruit and remove that fruit using that index.
let array = ["lichi", "Kinno", "Peach", "Avacardo"];
//Add a new fruit to the end of an Array
array.push("Anaar");
console.log(array, "Add to the end of an Array");
//Remove the first fruit of an Array
array.shift();
console.log(array, "Remove the First Element of an Array");
//Add a new Fruit the beginning of An Array
array.unshift("AnanNas");
console.log(array, "Add to the Start of an Array");
//Find the Index of a fruit 
let findIndex = array.indexOf("Peach");
console.log("Index of a Fruit is ", findIndex);
// Remove that fruit using that index
// we know index is 2 that we appli .splice Method
let removeFruit = array.splice(2, 1);
console.log(array, "Remove peach from an Array");
//Quesyion No 2:
//Matrix is remeaining
// Working with Multidimentional Arrays
//Define a 3x3 matrix of numbers as a multidimentional array.Write functions to:
// . Print the Diagonal elements of the matrix.
// . Calculate the sum of all elements in the matrix.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
/*
.matrix[i][i] accesses the element at the ith row and the ith column of the matrix.
.In a 3x3 matrix, the main diagonal elements are at positions (0,0), (1,1), and (2,2).
.console.log(matrix[i][i]) prints the diagonal element to the console.

*/
function printDiagonalElements(matrix) {
    console.log("Diagonal Elements:");
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
/*
First Iteration (i = 0):

matrix[0][0] is 1.
The function prints 1.
Second Iteration (i = 1):
 
matrix[1][1] is 5.
The function prints 5.
Third Iteration (i = 2):

matrix[2][2] is 9.
The function prints 9.
So, the output of the function will be:

*/
// Calling the function
printDiagonalElements(matrix);
function calculateSumOfElements(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
// Calling the function and printing the result
let sum = calculateSumOfElements(matrix);
console.log("Sum of all elements in the matrix:", sum);
let library2 = [
    { author: "JamnaDas Marfatiya", title: "Wifi me Lag gayi aag", publishedYear: 2005 },
    { author: "Dhiru bhai", title: "Laga chunni me daag", publishedYear: 2000 }
];
//Filter books published after 2000
let filter = library2.filter(books => books.publishedYear > 2000);
console.log(filter);
let specificYear = library2.find(books => books.publishedYear === 2000);
console.log(specificYear);
//Question No 4
//Using Array Methods
//Create an Array of numbers.Using array methods,perform the following task:
//Crate a new Array with a square of each number.
//Filter out all number greater than 50
//Use the reduce Method to find the sum of all numbers in the array.
let arrayOfNumber = [1, 2, 3];
//Square of Number
let square = arrayOfNumber.map(arrayOfNumber => arrayOfNumber * 2);
console.log(arrayOfNumber, "Origanl Array");
console.log(square, "Square Of Number");
//Filter Number > 50
let greaterArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let filterNumber = greaterArray.filter(greaterArray => greaterArray > 50);
console.log(filterNumber, " Numbers greater than 50");
//Sum of ALL Number
let total = arrayOfNumber.reduce((sum, total) => total + sum, 0);
console.log("Sum of all number in a array is ", total);
let students = [
    { name: "shehroz", id: 1, grades: [80, 90, 80] },
    { name: "Aladdin", id: 2, grades: [70, 85, 80] },
    { name: "Taimoor", id: 3, grades: [85, 95, 60] },
];
let averageGrade = (students) => {
    students.forEach(student => {
        let total = student.grades.reduce((sum, total) => total + sum, 0);
        let averageGrade = total / student.grades.length;
        student.averageGrade = averageGrade;
    });
};
console.log(averageGrade(students));
console.log(students);
// Tuple
// A fix collection of Element that might be different type
let shirtSize = ["Medium", 42];
//size  number
let coffeOrder = ["Capachino", "Medium"];
console.log(shirtSize);
console.log(coffeOrder);
//Enums
var coffeeType;
(function (coffeeType) {
    coffeeType[coffeeType["expresso"] = 0] = "expresso";
    coffeeType[coffeeType["late"] = 1] = "late";
    coffeeType[coffeeType["cappucciono"] = 2] = "cappucciono";
    coffeeType[coffeeType["Americano"] = 3] = "Americano";
})(coffeeType || (coffeeType = {}));
let myCoffe = coffeeType.cappucciono;
console.log(myCoffe);
export {};
