// We may have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed.

// Old way of assigning array items to variables
const fruits = ['apple', 'banana', 'cherry'];
const appleOld = fruits[0];
const bananaOld = fruits[1];
const cherryOld = fruits[2];
console.log(appleOld, bananaOld, cherryOld); // Output: apple banana cherry


// New way of assigning array items to variables with destructuring
const [apple, banana, cherry] = fruits;
console.log(apple, banana, cherry); // Output: apple banana cherry


// If we only want the apple and cherry, we can simply leave out the banana but keep the comma
const [fruit1, , fruit3] = fruits;
console.log(fruit1, fruit3); // Output: apple cherry


// Object Destructuring:
// Create an Object
const person = {
    firstName: "Yash",
    lastName: "Rohan",
    age: 23,
    eyeColor: "Black"
};
let { firstName, age } = person; // Destructuring Assignment
console.log(firstName, age); // Output: Yash 23


// Array Destructuring:
// Create an Array
const animals = ["Dog", "Cat", "Elephant", "Giraffe"];

let [animal1, animal2] = animals; // Destructuring Assignment
console.log(animal1, animal2); // Output: Dog Cat


// Destructuring comes in handy when a function returns an array
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}
const [sum, difference, product, quotient] = calculate(10, 5);
console.log(sum, difference, product, quotient); // Output: 15 5 50 2


// Here is the old way of using an object inside a function
const car = {
    brand: 'Tesla',
    model: 'Model S',
    type: 'electric',
    year: 2022,
    color: 'blue'
}
CarDescription(car);

function CarDescription(car) {
    const message = 'My ' + car.type + ' car is a ' + car.color + ' ' + car.brand + ' ' + car.model + '.';
    console.log(message); // Output: My electric car is a blue Tesla Model S.
}


// Here is the new way of using an object inside a function with Destructuring
newCarDescription(car);

function newCarDescription({ type, color, brand, model }) {
    const message = 'My ' + type + ' car is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message); // Output: My electric car is a blue Tesla Model S.
}


// We can even destructure deeply nested objects by referencing the nested object 
// then using a colon and curly braces to again destructure the items needed from the nested object
const carDetails = {
    brand: 'Tesla',
    model: 'Model X',
    type: 'electric',
    year: 2023,
    color: 'white',
    registration: {
        city: 'San Francisco',
        state: 'California',
        country: 'USA'
    }
}

NestedDestructuring(carDetails);

function NestedDestructuring({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log(message); // Output: My Model X is registered in California.
}
