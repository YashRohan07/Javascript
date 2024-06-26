//The ... operator expands an iterable (like an array) into more elements
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// Combining multiple arrays into one
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year); // Output: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


// The spread operator can be used to expand an iterable into more arguments for function calls
const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(maxValue); // Output: 87


// Merging two arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // Output: [1, 2, 3, 4, 5, 6]


// The spread operator is often used in combination with destructuring.
// Assign the first and second items from an array to variables and put the rest in a separate array
const numberArray = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numberArray;
console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6]



// We can use the spread operator with objects too
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
};

// Merging two objects, properties from the latter object will overwrite those from the former if they have the same key
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);
// Output: { brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021 }


// Cloning an object using the spread operator
const clonedVehicle = { ...myVehicle };
console.log(clonedVehicle);
// Output: { brand: 'Ford', model: 'Mustang', color: 'red' }


// Adding new properties to an existing object
const Owner = { ...myVehicle, owner: 'Yash' };
console.log(Owner);
// Output: { brand: 'Ford', model: 'Mustang', color: 'red', owner: 'Yash' }

