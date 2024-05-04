/*
A car is an object. A car has properties like weight and color, and methods like start and stop
The name:values pairs in JavaScript objects are called properties
JavaScript objects are containers for named values called properties.


Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.
A method is a function stored as a property.

*/


//Objects are variables too. But objects can contain many values.
//This code assigns many values (Fiat, 500, white) to a variable named car
 const car = {type:"Fiat", model:"500", color:"white"}; //The values are written as name:value pairs


//When a JavaScript variable is declared with the keyword "new", the variable is created as an object
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
//But Do Not Declare Strings, Numbers, and Booleans as Objects! 



//JavaScript object with an object literal
const PersonInFo = {firstName:"Yash", lastName:"Rohan", age:23}; //which defines an object with three properties: firstName, lastName, and age


//An object definition can span multiple lines
const Person = {
    firstName: "Yash",
    lastName: "Rohan",
    age: 23,
};


// Access object properties in two ways:
// Define an object named 'PersonInfo' with properties
const PersonInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};
// 1. Using dot notation: objectName.propertyName
console.log(PersonInfo.lastName); // Output: Doe
  
// 2. Using bracket notation: objectName["propertyName"]
console.log(PersonInfo["lastName"]); // Output: Doe
  


// Define an object named 'person' with properties and a method
const person = {
    firstName: "John",
    lastName : "Doe",
    // Define a method named 'fullName' that returns the full name
    fullName : function() {

      return this.firstName + " " + this.lastName;  // 'this' refers to the 'person' object
      //this.firstName means the firstName property of person.
      //this.lastName means the lastName property of person.
    }
};
  
// Call the 'fullName' method of the 'person' object and store the result in a variable
const Name = person.fullName();
console.log(Name); // Output: "John Doe"

//If you access a method without the () parentheses, it will return the function definition
const FullName = person.fullName;
console.log(FullName);  //Output: [Function: fullName]
  