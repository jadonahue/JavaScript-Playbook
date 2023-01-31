// Data Types

// String - Is the text within the " " and is a string of characters.
alert("Hello");

// Numbers - Such as 123

// Boolean - Describes data as true or false.

//Variables - Store information to memory
/* In this example var is the keyword, myName is the name of variable, 
and Josh is the value. */
var myName = "Josh";

// Naming convention for variables
/*
Give meaningful names
Can't begin with a number
Can't contain spaces
Can only contain letters, numbers, $, _
Camel casing is lowercase firstword and Uppercase for ever new woord such as lowercaseUppercaseAnotherWord 
*/

// Google Chrome Dev Shortcut CMDs
/* 
open JavaScrip console = option + cmd + j
run code in snippet = cmd + return 
clear console = cmd + k 
hard reset and clear cached info = click and hold previous button. Then select empty cache and hard reload. 
*/


// String Concatenation
// "a" + " " + "b" will become "a b". The exampe will output Hello Josh
var message = "Hello";
var myName = "Josh";
alert(message + " " + myName);

// Find the length of a string with word.length. The example below will return 4.
var myName = "Josh";
myName.length;

// Example combinding variables to find out how many characters are left to type in message.
var message = prompt("What is your message? (Can only be 140 characters in length)");
var CharRemaining = 140 - message.length
alert("You have written " + message.length + " characters, you have " + CharRemaining + " characters left.")


// Slice
/* This will return J counting starts at position 0 and stops at position 1.
If the slice was 1,4 it will be "osh".
The second number will go up to but not include. */
var myName = "Josh";
myName.slice(0,1);

// This will slice the message to only contain 140 chars
var message = prompt("What is your message? (Can only be 140 characters in length)");
var messageUnder141 = message.slice(0,141)
alert("This message whas adjusted to proper character length: " + messageUnder141);

// This will also slice the message to only 140 chars
alert(prompt("What is your message? (Can only be 140 characters in length)").slice(0,141))


// Adjust caseing in text
/* word.toUpperCase() or word.toLowerCase() this will change the output below to JOSH or josh if lowercase.*/
var myName = "Josh"
myName.toUpperCase();

// While only using slice, toUpperCase and toLowerCase. Capitilize first letter of inputted name.
// 1 Prompt user for name
var yourName = prompt("What is your name? ");

// 2 Get the first char of name
var firstChar = yourName.slice(0,1)

// 3 Turn the first char to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// 4 Slice the remaining chars in name and make them lowercase
var lowerCaseRemainingChars = yourName.slice(1,yourName.length).toLowerCase();

// 5 Combine the uppercase first char with remaining lowercase chars for capitlized name
var capitalizedName = upperCaseFirstChar + lowerCaseRemainingChars;

// 6 Alert saying hello to the capitalized name
alert("Hello " + capitalizedName);