// Arrow functions allow us to write shorter function syntax
// Don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always a constant value.


// Traditional Function (ES5)
var X = function(a, b) {
    return a * b;
};
console.log(X(2, 3)); // Output: 6


// Arrow Function (ES6) 
const Y = (a, b) => a * b;
console.log(Y(2, 3)); // Output: 6


// Using const for safer function expressions
const z = (a, b) => a + b;
console.log(z(4, 5)); // Output: 9


// Use curly braces and return keyword for multiple statements
const Z = (a, b) => {
    let result = a * b;
    return result;
};
console.log(Z(2, 3)); // Output: 6


// Arrow Function Returning a String
const xx = () => "Hello World!";
console.log(xx()); // Output: "Hello World!"


// Arrow Function with Parameters
const yy = (c) => "Hello " + c;
console.log(yy("Yash")); // Output: "Hello Yash"


// Arrow Function without Parentheses for Single Parameter
const zz = d => "Hello " + d;
console.log(zz("Rohan")); // Output: "Hello Rohan"


// Arrow Function with Multiple Parameters
const add = (a, b, c) => a + b + c;
console.log(add(1, 2, 3)); // Output: 6


// Arrow Function with Multiple Parameters for Multiplication
const mul = (a, b, c) => a * b * c;
console.log(mul(1, 2, 3)); // Output: 6


// Arrow Functions are not hoisted
try {
    console.log(notHoisted(2, 3)); // Throws ReferenceError
} catch(e) {
    console.log(e); // Output: ReferenceError: Cannot access 'notHoisted' before initialization
}
const notHoisted = (a, b) => a * b;
 

// Arrow Functions in Array Methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(f => f * f);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
