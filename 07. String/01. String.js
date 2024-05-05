/*
A JavaScript string is zero or more characters written inside quotes
Strings are for storing text
Strings are immutable: Strings cannot be changed, only replaced.

*/

//You can use single or double quotes
let firstName = "Yash";
let lastName = 'Rohan';
console.log(firstName + " " + lastName);


//You can use quotes inside a string,and they don't match the quotes surrounding the string
let string1 = "It's alright";
let string2 = "He is called 'Virat'";
let string3 = 'He is called "Dhoni"';


//Templates are strings enclosed in backticks (`Yash Rohan`).
let Name = `He's known as "Rohan"`; //Templates allow single and double quotes inside a string


//Escape Characters: \' inserts a single quote in a string
let text1 = 'It\'s alright.';   //It's alright.


//Escape Characters: \" inserts a double quote in a string
let text2 = "We are \"AIUBIAN\" from Bangladesh.";  //We are "AIUBIAN" from Bangladesh.


//Escape Characters: \\ inserts a backslash in a string
let text3 = "The character \\ is called backslash.";  //The character \ is called backslash.


//Templates allow multiline strings
let Text = 
`
  This is Yash.
  This is Rohan.
  Hehehe....
`;
console.log(Text);
/*
This is Yash.
This is Rohan.
Hehehe....
*/


// JavaScript strings are primitive values, created from literals
let a = "Yash";

// Strings can also be defined as objects with the keyword new
let b = new String("Rohan");

/*
Do not create Strings objects.
The new keyword complicates the code and slows down execution speed.
*/

// When using the == operator, x and y are equal
// When using the === operator, x and y are not equal
// Comparing two JavaScript objects always returns false.

let x = new String("John");
let y = new String("John");

console.log(x === y); // Output: false - because x and y are different objects in memory
console.log(x == y); // Output: false - because even though they hold the same value, they are different objects


// Example comparing primitive and object string types
let z = "John"; // Primitive string
console.log(x == z); // Output: true - when comparing primitive and object types, JS automatically converts objects to primitives for comparison, hence they are equal
console.log(x === z); // Output: false - because they are of different types

