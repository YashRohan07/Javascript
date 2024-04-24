/*

JavaScript Variables can be declared in 4 ways:
1.Automatically
2.Using var
3.Using let
4.Using const

The let and var keyword tells the browser to create variables.
Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you can't use const
Only use var if you MUST support old browsers.

The JavaScript syntax defines two types of values: Fixed values and Variable values
#Fixed values are called Literals.
#Variable values are called Variables.


All JavaScript variables must be identified with unique names. These unique names are called identifiers.
Identifiers are used to name variables and keywords, and functions. Identifiers are case-sensitive.

A JavaScript name must begin with:
A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Hyphens are not allowed in JavaScript. They are reserved for subtractions.
Subsequent characters may be letters, digits, underscores, or dollar signs.
Numbers are not allowed as the first character in names.

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.


Underscore: first_name, last_name, master_card, inter_city.
Upper Camel Case (Pascal Case):  FirstName, LastName, MasterCard, InterCity.
Lower Camel Case: firstName, lastName, masterCard, interCity.


JavaScript uses the Unicode character set.
Unicode covers (almost) all the characters, punctuations, and symbols in the world.

*/


//JavaScript identifiers are case sensitive.The variables lastName and lastname, are two different variables
let lastname, lastName;
lastName = "Yash";
lastname = "Rohan";

console.log(lastName + lastname);



//Strings are written inside double or single quotes. Numbers are written without quotes.
//If you put a number in quotes, it will be treated as a text string.
const pi = 3.14;
var string = "3.14";
let name = "Yash Rohan";
let ans = 'Yes I am';



//JavaScript treats underscore, dollar sign as a letter. So identifiers containing ($ or _) are valid variable names
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;