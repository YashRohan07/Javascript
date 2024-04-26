/*

There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators


*/

//Arithmetic Operators are used to perform arithmetic on numbers
let a = 3;
let x = (100 + 50) * a;
console.log(x);  //450


//Addition Assignment Operator (+=) adds a value to a variable
let y = 10;
y += 5;
console.log(y);  //15


//strings are compared alphabetically
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result);  //true

/*
JavaScript does not convert the strings to numbers when comparing them with the less than operator.
JavaScript compares character by character from left to right. It compares the first character of each string, then the second character.
The comparison starts with '2' from text1 and '5' from text2. Since '2' has a lower Unicode character code than '5', the comparison evaluates to true.
*/


//The + can also be used to add (concatenate) strings
let FirstName = "Yash";
let LastName = "Rohan";
let FullName = FirstName + " " + LastName;
console.log(FullName);  //Yash Rohan


//The += assignment operator can also be used to add (concatenate) strings
let mesg = "Bhai kon hai tu,";
mesg += "nam bata";
console.log(mesg);  //Bhai kon hai tu,nam bata


//Adding two numbers, will return the sum, but adding a number and a string will return a string
let b = 5 + 5;  //10
let c = "5" + 5;  //55
let d = "Hello" + 5;  //Hello5


//The Increment and Decrement Operators
let num = 5;

num++;  // Increment operator
let final1 = num;
console.log(final1); // Output: 6

num--;  // Decrement operator
let final2 = num;
console.log(final2); // Output: 5


//The exponentiation operator (**) raises the first operand to the power of the second operand
let Num = 5;
let Result = Num ** 2;
console.log(Result);  //25


//x ** y produces the same result as Math.pow(x,y)
let val = 5;
let z = Math.pow(val,2);
console.log(z);  //25


//The Exponentiation Assignment Operator raises a variable to the power of the operand
let expo = 10;
expo **= 2;
console.log(expo);  //100


//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
let precedence = (10 + 5) * 2 / 3 - 4;
console.log(precedence); // Output: 6



/*
The ??= operator is the nullish coalescing assignment operator.
It assigns the value on its right-hand side to the variable on its left-hand side only if the variable on the left-hand side is null or undefined.
If the variable on the left-hand side already has a value (even if it is false, like 0 or an empty string), it won't be reassigned.
*/

// If nb is currently undefined or null, set nb to 5.
let nb;
nb ??= 5;
console.log(nb); // Output: 5
// Since nb is initially undefined, it's set to 5.


let variable = null;
variable ??= "new value";
console.log(variable); // Output: "new value"


let text = "";  //Empty String
text ??= "Hello, World!";
console.log(text); // Output: ""





