//The length property returns the length of a string
let string1 = "Yash Rohan";
console.log(string1.length);  //10


//Converting to Upper case and Lower case
let Text1 = "Hello World!";
let Text2 = Text1.toUpperCase(); // "HELLO WORLD!"
let Text3 = Text1.toLowerCase(); // "hello world!"


//concat() joins two or more strings
let Text4 = "Hello";
let Text5 = "World";
let Text6 = Text4.concat(" ", Text5);


// Using the plus operator
let x = "Hello" + " " + "World!";
console.log(x); // Output: "Hello World!"

// Using the concat() method
let y = "Hello".concat(" ", "World!");
console.log(y); // Output: "Hello World!"



//The charAt() method returns the character at a specified index (position) in a string
let string2 = "HELLO WORLD";
console.log(string2.charAt(1));  //E


//The charCodeAt() method returns the code of the character at a specified index in a string
let string3 = "HELLO WORLD";
console.log(string3.charCodeAt(0)); //72  The method returns a UTF-16 code (an integer between 0 and 65535).


//String at()
const str = "Yash";
let letter1 = str.at(2);  //s
let letter2 = str[2];  //s


/*
The at() method allows the use of negative indexes while charAt() do not.
you can use myString.at(-2) instead of charAt(myString.length-2).

Property Access [ ], It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
*/


//slice() method takes 2 parameters: start position, and end position (end not included)
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7, 13);  //Banana


//If you omit the second parameter, the method will slice out the rest of the string
let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(7);  //Banana, Kiwi


//If a parameter is negative, the position is counted from the end of the string
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(-12);  //Banana, Kiwi
//Extracts characters from counting 12 characters from the end of the string.


//This example slices out a portion of a string from position -12 to position -6
let text4 = "Apple, Banana, Kiwi";
let part4 = text4.slice(-12, -6);  //Banana
//Extracts characters from counting 12 characters from the end of the string (-12) to the position counting 6 characters from the end of the string (-6).


//substring() is similar to slice()
//The difference is that start and end values less than 0 are treated as 0 in substring().
let str5 = "Apple, Banana, Kiwi";
let part5 = str5.substring(7, 13);  //Banana
//If you omit the second parameter, substring() will slice out the rest of the string.


//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let str6 = "Apple, Banana, Kiwi";
let part6 = str6.substr(7, 6); //Banana


//If you omit the second parameter, substr() will slice out the rest of the string.
let str7 = "Apple, Banana, Kiwi";
let part7 = str7.substr(7);  //Banana, Kiwi


//If the first parameter is negative, the position counts from the end of the string.
let str8 = "Hello, world!";
let part8 = str.substr(-6); // "world!"


//The trim() method removes whitespace from both sides of a string
let A = " Hellow World  ";
let B = A.trim();  //Hellow World


//The trimStart() method removes whitespace only from the start of a string.
let C = "     Hello World!     ";
let D = C.trimStart();  //Hellow World!


//The trimEnd() method removes whitespace only from the end of a string.
let E = "Hello World!     ";
let F = E.trimEnd();  //Hello World!


//The padStart() method pads a string from the start.
//The padEnd() method pads a string from the end.
let G = "5";
let H = G.padStart(4, "x");  //xxx5  (Pad a string with "x" until it reaches the length 4)
let J = G.padEnd(4,"y");  //5yyy     (Pad a string with "y" until it reaches the length 4)

console.log(J);



//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string and does not change the original string.
let K = "Yash";
let Result = K.repeat(2);  //YashYash


//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces only the first match
let text = "Call Yash and Virat";
let newText = text.replace("Yash", "Rohan");  //Call Rohan and Virat
//the replace() method is case sensitive. Writing YASH (with upper-case) will not work


//To replace case insensitive, use a regular expression with an /i flag (insensitive)
let Text = "Please visit Microsoft";
let NewText = Text.replace(/MICROSOFT/i, "W3Schools");  //Please visit W3Schools


//To replace all matches, use a regular expression with a /g flag (global match)
let Txt = "Please visit Microsoft and Microsoft";
let NewTxt = Txt.replace(/Microsoft/g, "W3Schools");  //Please visit W3Schools and W3Schools


// replaceAll() uses regular expressions.  Use global flag (g) to avoid errors.
let txt = "I love Cats, Cats are awesome";

// Replace all occurrences of "Cats" with "Dogs"
let V = txt.replaceAll(/Cats/g,"Dogs");  //I love Dogs, Dogs are awesome



//Converting a String to an Array
let Num = "1,2,3,4,5";

// Splitting the string into an array using different separators
console.log(Num.split(","));  // Split on commas
console.log(Num.split("|"));  // Split on pipes
console.log(Num.split(""));   // Split into individual characters

/*
[ '1', '2', '3', '4', '5' ]
[ '1,2,3,4,5' ]
[ '1', ',', '2', ',', '3', ',', '4', ',', '5' ]
*/

// If the separator is not provided, the entire string is placed at index [0] of the array.
// If the separator is an empty string "", each character becomes an element of the array.
