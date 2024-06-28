// JavaScript modules allow you to break up your code into separate files for better organization and maintainability.

// For the Export Part //
// You can export a function, class, or variable from any file.
// There are two types of exports: Named and Default.
// You can have multiple named exports in a file.
// Named exports can be done in two ways: In-line individually or all at once at the bottom.
// You can only have one default export per file.
// Default exports are typically used for the main function or class of the module.

// Assume that we have a file named person.js for Named export

// In-line individually:
export const name = "Yash"; 
export const age = 23;     

// All at once at the bottom:
const name = "Yash"; 
const age = 23;     
export { name, age }; 


// Assume that we have a file named message.js for default export

const message = () => {
    const name = "Rohan";
    const age = 20;
    return name + ' is ' + age + ' years old.';
};
export default message; 



// For the Import Part //
// You can import modules into a file in two ways, based on whether they are named exports or default exports.

// Named exports must be destructured using curly braces.
// Import named exports from the file person.js:
import { name, age } from "./person.js"; 


// Default exports do not require curly braces and can be named anything upon import.
// Import a default export from the file message.js:
import message from "./message.js"; 


// Now you can use the imported modules in your code:
console.log(name); // Output: Yash
console.log(age);  // Output: 23
console.log(message()); // Output: Rohan is 20 years old.
