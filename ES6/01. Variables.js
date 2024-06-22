//In ES6, there are 3 ways of defining variables: var, let, and const.

// The var keyword declares a variable with function scope or globally scoped if declared outside a function.
// If you use var outside of a function, it belongs to the global scope.
// If you use var inside of a function, it belongs to that function.
// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
// var has a function scope, not a block scope.

var a = 10;  // Here a is 10
{
  var a = 2;
  // inside this block, var does not have block scope, It overwrites the previous value of 'a'
  // Here a is 2
}
// Outside the block, the value of 'a' remains overwritten, Here 'a' is 2



// The let keyword declares a variable with block scope
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let b = 10; // Here b is 10
{
  let b = 2;
  // This b is scoped to this block and does not affect the outer b
  // Here b is 2
}
// Outside the block, the outer b is still the original value
// Here b is 10



// The const keyword declares a constant with block scope

const c = 10; // Here c is 10
{
  const c = 2;
  // This c is scoped to this block and does not affect the outer c
  // Here c is 2
  // You cannot reassign a value to c within the same scope
}
// Outside the block, the outer c is still the original value
// Here c is 10


/*
The keyword const does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of a constant array
- Change the properties of a constant object
*/

// Example 1: Reassigning a constant value
const x = 10;
console.log(x); // Output: 10

// x = 20; // Uncommenting this line will cause an error: "Assignment to constant variable."

// Example 2: Reassigning a constant array
const arr = [1, 2, 3];
console.log(arr); // Output: [1, 2, 3]

// arr = [4, 5, 6]; // Uncommenting this line will cause an error: "Assignment to constant variable."

// But you CAN change the elements of the array
arr[0] = 10;
arr.push(4);
console.log(arr); // Output: [10, 2, 3, 4]

// Example 3: Reassigning a constant object
const obj = { name: "Yash", age: 23 };
console.log(obj); // Output: { name: "Yash", age: 23 }

// obj = { name: "Rohan", age: 25 }; // Uncommenting this line will cause an error: "Assignment to constant variable."

// But you CAN change the properties of the object
obj.name = "Virat";
obj.age = 25;
console.log(obj); // Output: { name: "Virat", age: 25 }

// Summary:
// const prevents reassignment of the variable itself but allows modification of the contents of arrays and objects.




// var example
function varExample() {
  var d = 1;
  if (true) {
    var d = 2; // same variable!
    console.log(d); // 2
  }
  console.log(d); // 2
}
varExample();

// let example
function letExample() {
  let e = 1;
  if (true) {
    let e = 2; // different variable
    console.log(e); // 2
  }
  console.log(e); // 1
}
letExample();

// const example
function constExample() {
  const f = 1;
  if (true) {
    const f = 2; // different variable
    console.log(f); // 2
  }
  console.log(f); // 1
}
constExample();
