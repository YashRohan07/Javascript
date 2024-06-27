//Array.from()
// The Array.from() method can create an array from any iterable object, such as a string

// Create an Array from a String:
const stringToArray = Array.from("ABCDEFG");
console.log(stringToArray); // Outputs: ['A', 'B', 'C', 'D', 'E', 'F', 'G']



//Array keys()
//The keys() method returns an Array Iterator object with the keys of an array

//Create an Array Iterator object, containing the keys of the array:
const fruit = ["Banana", "Orange", "Apple", "Mango"];

// Use the keys() method to get an Array Iterator object containing the indexes of the array
const keysIterator = fruits.keys();

// Initialize an empty string to store the result
let result = "";

for (let index of keysIterator) {
  // 'index' is the current index in the iteration

  // Add the current index to the result string, followed by a line break for readability
  result += `Index: ${index}<br>`;
}

// Display the result in an HTML element with the id "demo"
document.getElementById("demo").innerHTML = result;

/*
Index: 0
Index: 1
Index: 2
Index: 3
*/



//Array find()
//The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of ) the first element that is larger than 18:
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first); // Outputs: 25

/*
The myFunction function is defined to take three arguments:
value: The current element being processed in the array (numbers).
index: The index of the current element being processed.
array: The array (numbers) find() was called upon.
*/



//Array findIndex()
//The findIndex() method returns the index of the first array element that passes a test function.

//This example finds the index of the first element that is larger than 18:
const Numbers = [4, 9, 16, 25, 29];
let First = Numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(First); // Outputs: 3



//Array entries()

//Create an Array Iterator, and then iterate over the key/value pairs:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Array Iterator object that contains key/value pairs for each item in the 'fruits' array
const fruitIterator = fruits.entries();

// Get a reference to the HTML element where we will display the results
const demoElement = document.getElementById("demo");

// Iterate over the key/value pairs in the Array Iterator
for (let entry of fruitIterator) {
  // 'entry' is an array where entry[0] is the index and entry[1] is the fruit name

  // Create a string that represents the key/value pair in a readable format
  let displayText = `Index: ${entry[0]}, Value: ${entry[1]}`;

  // Append the displayText to the 'demo' element in the HTML document
  demoElement.innerHTML += displayText + "<br>";
}

/*
The entries() method does not change the original array.
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

In the example above, we iterate over these key/value pairs and display them in the HTML document.
*/





//The .map() method allows to run a function on each item in the array, returning a new array as the result.

//Generate a list of items from an array:
const myArray = ['apple', 'banana', 'orange'];

// Use the .map() method to create a new array where each item in 'myArray' 
// is transformed into a <p> HTML element string
const myList = myArray.map((item) => {

  // For each item in the array, return a string that represents a <p> element
  // The content of the <p> element is the value of 'item'
  return `<p>${item}</p>`;
});

console.log(myList);  // [ '<p>apple</p>', '<p>banana</p>', '<p>orange</p>' ]

// The .map() method returns a new array, 'myList', where each item has been transformed
// 'myList' now contains: [ '<p>apple</p>', '<p>banana</p>', '<p>orange</p>' ]