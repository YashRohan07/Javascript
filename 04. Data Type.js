/*

JavaScript variable can hold any type of data.
All JavaScript numbers are stored in a 64-bit floating-point format.

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object


The Object Datatype
The object data type can contain:
1. An object
2. An array
3. A date


Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).

*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//JavaScript evaluates expressions from left to right
let output1 = 16 + 4 + "Volvo";  // 20Volvo   JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
let output2 = "Volvo" + 16 + 4;  // Volvo164   since the first operand is a string, all operands are treated as strings.
  

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types
let a;       // Now x is undefined
a = 5;       // Now x is a Number
a = "John";  // Now x is a String


//Strings are written with quotes. You can use single or double quotes
let carName1 = "Volvo";
let carName2 = 'Volvo';


//You can use quotes inside a string, as long as they don't match the quotes surrounding the string

let answer1 = "It's alright"; // Single quote inside double quotes

let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes

let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes



//JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let Number = BigInt("123456789012345678901234567890");


//Booleans can only have two values: true or false
let X = 5;
let Y = 5;
let Z = 6;
console.log(X == Y)  // Returns true
console.log(X == Z)  // Returns false


//JavaScript arrays are written with square brackets. Array items are separated by commas.
const car = ["Saab", "Volvo", "BMW"];


//JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.
const Person = {firstName:"Yash", lastName:"Rohan", age:23};


//The typeof operator returns the type of a variable or an expression
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"



let Bike;    // Value is undefined, type is undefined

//Any variable can be emptied, by setting the value to undefined. The type will also be undefined
car = undefined;    // Value is undefined, type is undefined

//An empty value has nothing to do with undefined. An empty string has both a legal value and a type.
let Car = "";    // The value is "", the typeof is "string"


//Extra large or extra small numbers can be written with scientific (exponential) notation
let Num1 = 123e5;  // This is equivalent to 123 * 10^5 = 12300000
let Num2 = 123e-5; // This is equivalent to 123 * 10^(-5) = 0.00123



//All JavaScript numbers are stored as decimal numbers (floating point).
//Numbers can be written with, or without decimals

let x1 = 34.00; // With decimals
console.log(x1); //34

let x2 = 34; // Without decimals
console.log(x2);  //34