/*
Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript:


Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope

Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

Variables declared with the var have Global Scope.
Variables declared with the var keyword can NOT have block scope



## What is Good?
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.

## What is Not Good?
var does not have to be declared.
var is hoisted.
var binds to this.

## Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp


*/

//x, y, and z are undeclared variables. They are automatically declared when first used.
x = 5;
y = 5;
z = x + y;
console.log(z);


//Declared variables:
var x;
let y;

x = 6;
y = 6;
let z = x + y;

console.log(z); 



//You can also assign a value to the variable when you declare it
let CarName = "BMW";

//You can declare many variables in one statement
let person = "Yash", carName = "BMW", price = 2000;


//constant values cannot be changed.
const car = 3;
const bike = 3;
let total = car + bike;  //The variable total is declared with let keyword. So The value total can be changed.



//If you re-declare a JavaScript variable declared with var, it will not lose its value
var Bike = "Pulsar";
var Bike;  //The variable Bike will still have the value "Pulsar" after the execution of these statements

/*
You cannot re-declare a variable declared with let or const. This will not work
let BikeName = "Yamaha";
let BikeName;
*/



//Variables declared inside a { } block cannot be accessed from outside the block
{
    let x = 2;
}
// x can NOT be used here


//Variables declared with var inside a { } block can be accessed from outside the block
{
    var x = 2;
}
// x CAN be used here


//Variables defined with let can not be redeclared
let x = "John Doe";
let x = 0;

//Variables defined with var can be redeclared
var x = "John Doe";
var x = 0;


//Redeclaring a variable inside a block will also redeclare the variable outside the block
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2


//Redeclaring a variable inside a block will not redeclare the variable outside the block
let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10


//Redeclaring a variable with var is allowed anywhere in a program
var x = 2;
// Now x is 2
var x = 3;
// Now x is 3


//With let, redeclaring a variable in the same block is NOT allowed
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}


//Redeclaring a variable with let, in another block, is allowed
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}



//Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared
carName = "Volvo";
var carName;  


//Variables defined with let are also hoisted to the top of the block, but not initialized.
//Meaning: Using a let variable before it is declared will result in a ReferenceError
carName = "Saab";
let carName = "Volvo";


//A variable defined with the const keyword cannot be reassigned
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


//const variables must be assigned a value when they are declared
const PI = 3.14159265359;  //Correct

const PI;
PI = 3.14159265359;  //Incorrect



//You can change the elements of a constant array
const cars = ["Saab", "Volvo", "BMW"];  // You can create a constant array

cars[0] = "Toyota"; // You can change an element

cars.push("Audi"); // You can add an element



//But you can NOT reassign the array
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR



//You can change the properties of a constant object
const car = {type:"Fiat", model:"500", color:"white"}; // You can create a const object

car.color = "red";  // You can change a property

car.owner = "Johnson";  // You can add a property



//But you can NOT reassign the object
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR



//Declaring a variable with const is similar to let for Block Scope.
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}
// Here x is 10



//Redeclaring an existing var or let variable to const, in the same scope, is not allowed
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}



//Reassigning an existing const variable, in the same scope, is not allowed
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}



//Redeclaring a variable with const, in another scope, or in another block, is allowed
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}



//Variables defined with const are also hoisted to the top, but not initialized.
//Using a const variable before it is declared will result in a ReferenceError
alert (carName);
const carName = "Volvo";