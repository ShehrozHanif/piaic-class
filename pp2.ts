//Basic Object in TypeScript
let person = {
    name:"shehroz"
}
// Accessing that object
console.log(person["name"])



// Define basic Object in TypeScript
let person2 :{name:string}={
    name:"Shah"
}
console.log(person2.name)


//Define a Basic object in typeScript
let person3 :{name:string, age:number, address:any}={
    name:"Shaka",
    age:25,
    address:"GaliNo420"
}

// Acessing their properties
console.log(person3.name);
console.log(person3.age);
console.log(person3.address)


// Modifying their properties
person3.age = 18
console.log(person3.age)

//but like this you can't add new property


//Type Aliyas
// Make big object in small one

type user={
    name:string,
    age:number,
    hasPet:boolean
}

let user1:user ={
    name:"Sherry",
    age:25,
    hasPet:true
}

//Another exapmle
type Operations = (a:number,b:number)=>number;
let add:Operations = (a,b)=>a+b
let sub :Operations =(a,b)=>a-b

console.log(add(5,5))
console.log(sub(10,5))


// Type Literal
//Specific and predefined value that are acceptable
let drinkSize: "Small"|"Medium"|"Large"
drinkSize = "Large"

type size={
    Tshirt:"Small"|"Medium"|"Large"
}

let shirt:size={
    Tshirt:"Small"
}


//Union Type
// Allow a variable o hold values of multiple types

let mixBage : string|number
mixBage = 123
mixBage = "packket"


// type Intersection
type accessories={
     batBall:boolean,
     chips:string,
     caps:number
}

type foodItem = {
    biryani:boolean,
    chaiPatti:string,
    money:number
}

let picnic:accessories&foodItem={
    batBall:true,
    chips:"rakhli",
    caps:5,
    biryani:false,
    money:15000,
    chaiPatti:"Rakhli"
}



// Sp this is how we execute


//Array and their properties

let fruit = ["apple","banana","orange"]
console.log("Fruit length ", fruit.length)
console.log("At zero index", fruit[0])
fruit[3] = "Peach"
console.log(fruit)



//Array Methods
// .Push, .Pop , .Shift, .UnShift
let color:String[] =["Red","Green","White","balck","blue"]
color.push("Pink") //.push Method add a element at the end of an Array
console.log(color)
color.pop() // Remove the element from last Array
console.log(color)
color.shift() // Remove the first Element
console.log(color)
color.unshift("Pink") // Add a new element at the start of an Array
console.log(color)



//Multidimentional Array








//Working with Objects and Array

type book={
    title:string,
    author:string,
    isbn:string
}

let library:book[]=[
    {title:"Azaadi", author:"jj thomson", isbn:"9856548"},
    {title:"Gulami na Manzoor", author:"Shehroz", isbn:"25648666"}
]

console.log("Before Push \n",library)

console.log("After Push")
library.push({
    title:"Khoon ka badla khoon",
    author:"Chandrachoo Chaterji",
    isbn:"6598235"
})
console.log(library)



//Finding a book by author name
let findbook = library.find(book=>book.author==="Shehroz")  //Use .find Method 
console.log(findbook)
let findbook2 = library.find(book=>book.isbn==="6598235")
console.log(findbook2)


//Assignment
//Basic Array Operation
//Question No 1:
// Create an Array called fruits that contains the name of four different fruits.Perform the foloowing Operations:
//Add a new fruit to the end of an Array.
//Remove the first fruit from the Array.
//Add a new fruit to the beginning of an Array.
//Find the index of a fruit and remove that fruit using that index.

let array:string[]=["lichi","Kinno","Peach","Avacardo"]

//Add a new fruit to the end of an Array
array.push("Anaar")
console.log(array, "Add to the end of an Array")

//Remove the first fruit of an Array
array.shift()
console.log(array, "Remove the First Element of an Array")

//Add a new Fruit the beginning of An Array
array.unshift("AnanNas")
console.log(array, "Add to the Start of an Array")

//Find the Index of a fruit 
let findIndex = array.indexOf("Peach")
console.log("Index of a Fruit is ",findIndex)

// Remove that fruit using that index
// we know index is 2 that we appli .splice Method

let removeFruit = array.splice(2,1)
console.log(array, "Remove peach from an Array")



//Quesyion No 2:
//Matrix is remeaining

// Working with Multidimentional Arrays
//Define a 3x3 matrix of numbers as a multidimentional array.Write functions to:

// . Print the Diagonal elements of the matrix.
// . Calculate the sum of all elements in the matrix.

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/*
.matrix[i][i] accesses the element at the ith row and the ith column of the matrix.
.In a 3x3 matrix, the main diagonal elements are at positions (0,0), (1,1), and (2,2).
.console.log(matrix[i][i]) prints the diagonal element to the console.

*/
function printDiagonalElements(matrix: number[][]): void {
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




function calculateSumOfElements(matrix: number[][]): number {
    let sum: number = 0;
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


/*
First Outer Loop Iteration (i = 0):

First Inner Loop Iteration (j = 0):
matrix[0][0] is 1.
sum becomes 0 + 1 = 1.
Second Inner Loop Iteration (j = 1):
matrix[0][1] is 2.
sum becomes 1 + 2 = 3.
Third Inner Loop Iteration (j = 2):
matrix[0][2] is 3.
sum becomes 3 + 3 = 6.
Second Outer Loop Iteration (i = 1):

First Inner Loop Iteration (j = 0):
matrix[1][0] is 4.
sum becomes 6 + 4 = 10.
Second Inner Loop Iteration (j = 1):
matrix[1][1] is 5.
sum becomes 10 + 5 = 15.
Third Inner Loop Iteration (j = 2):
matrix[1][2] is 6.
sum becomes 15 + 6 = 21.
Third Outer Loop Iteration (i = 2):

First Inner Loop Iteration (j = 0):
matrix[2][0] is 7.
sum becomes 21 + 7 = 28.
Second Inner Loop Iteration (j = 1):
matrix[2][1] is 8.
sum becomes 28 + 8 = 36.
Third Inner Loop Iteration (j = 2):
matrix[2][2] is 9.
sum becomes 36 + 9 = 45.
So, the sum of all elements in the matrix is 45
 */


//Question No 3:
//Filtering and Searching in Array of Objects
//Given an Array of Objects where each object represent a book with properties like author, title, yearPublished, write function too:
//Filter books published after 2000
//Search for books by a specific year

type books = {
    author:string,
    title:string,
    publishedYear:number
}

let library2:books[]=[
    {author:"JamnaDas Marfatiya",title:"Wifi me Lag gayi aag",publishedYear:2005},
    {author:"Dhiru bhai",title:"Laga chunni me daag",publishedYear:2000}
]

//Filter books published after 2000
let filter = library2.filter(books => books.publishedYear>2000)
console.log(filter)

let specificYear = library2.find(books=>books.publishedYear === 2000)
console.log(specificYear)


//Question No 4
//Using Array Methods
//Create an Array of numbers.Using array methods,perform the following task:
//Crate a new Array with a square of each number.
//Filter out all number greater than 50
//Use the reduce Method to find the sum of all numbers in the array.


let arrayOfNumber:number[] = [1,2,3]
//Square of Number
let square = arrayOfNumber.map(arrayOfNumber=>arrayOfNumber*2)
console.log(arrayOfNumber, "Origanl Array")
console.log(square,"Square Of Number")

//Filter Number > 50
let greaterArray:number[] = [10,20,30,40,50,60,70,80,90,100]
let filterNumber = greaterArray.filter(greaterArray => greaterArray>50)
console.log(filterNumber," Numbers greater than 50")


//Sum of ALL Number
let total = arrayOfNumber.reduce((sum,total)=>total + sum,0 )
console.log("Sum of all number in a array is ",total)



//Question No 5
//Working with Nested Array and Objects
//Consider an Array of Object where each object represent a student.Each student object has a name,id, and an array of grades.Write a function that
// calculate the average grade for each student and adds it as new property averageGrade to each student object.

//Define the array of Student Objects and implemnt the function


type student={
    name:string,
    id:number,
    grades:number[]
    averageGrade?:number
}

let students:student[] =[
    {name:"shehroz", id:1, grades:[80,90,80]},
    {name:"Aladdin", id:2, grades:[70,85,80]},
    {name:"Taimoor", id:3, grades:[85,95,60]},
]

let averageGrade = (students:student[])=>{
    students.forEach(student=> {
        let total = student.grades.reduce((sum,total)=> total + sum, 0);
        let averageGrade = total / student.grades.length;
        student.averageGrade =averageGrade

    });
}

console.log(averageGrade(students))
console.log(students)


// Tuple
// A fix collection of Element that might be different type
let shirtSize:[string , number] = ["Medium",42]
                                 //size  number

let coffeOrder:[string,string]=["Capachino","Medium"]                                 

console.log(shirtSize)
console.log(coffeOrder)


//Enums
enum coffeeType {
   expresso,
   late,
   cappucciono,
   Americano,
}

let myCoffe:coffeeType = coffeeType.cappucciono
console.log(myCoffe)