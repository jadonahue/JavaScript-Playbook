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
myName.slice(0, 1);

// This will slice the message to only contain 140 chars
var message = prompt("What is your message? (Can only be 140 characters in length)");
var messageUnder141 = message.slice(0, 141)
alert("This message whas adjusted to proper character length: " + messageUnder141);

// This will also slice the message to only 140 chars
alert(prompt("What is your message? (Can only be 140 characters in length)").slice(0, 141))


// Adjust caseing in text
/* word.toUpperCase() or word.toLowerCase() this will change the output below to JOSH or josh if lowercase.*/
var myName = "Josh"
myName.toUpperCase();

// While only using slice, toUpperCase and toLowerCase. Capitilize first letter of inputted name.
// 1 Prompt user for name
var yourName = prompt("What is your name? ");

// 2 Get the first char of name
var firstChar = yourName.slice(0, 1)

// 3 Turn the first char to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// 4 Slice the remaining chars in name and make them lowercase
var lowerCaseRemainingChars = yourName.slice(1, yourName.length).toLowerCase();

// 5 Combine the uppercase first char with remaining lowercase chars for capitlized name
var capitalizedName = upperCaseFirstChar + lowerCaseRemainingChars;

// 6 Alert saying hello to the capitalized name
alert("Hello " + capitalizedName);



// Numbers

// Addition
var a = 2 + 3; // 5

// Subtraction
var b = 10 - 2; // 8

// Multiplication
var c = 3 * 3; // 9

// Division
var d = 6 / 2; // 3

// Modulo (This gives you the remainder fo the division)
var e = 9 % 6; // 3



// Challenge: Ask for the age of dog. Then calculate the age in human years with an alert. humanAge = (dogAge - 2) x 4 + 21
dogAge = prompt("What is the age of your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " in human years.");


// Increments and decrements
var x = 5;
x = x + 1; // 6
x++; // 6
x = x - 1; // 4
x--; // 4

// If you want to increase or decrease by more then 1
var x = 5;
x += 2; // 7
x -= 2; // 3
var y = 3;
x += y; // 8

// Also works with *= or /=

// Increment before or after the number
var x = 3;
var y = 3++; // y = 3 (This doesnt store the ++ to makes y = 4.)
var y = ++3 // y = 4 (This does store the ++ and makes y = 4.)




// Functions
/* Series of instructions packaged into a block of code. 
Ex Creating Fucntion: function getMilk() {code for function here}
Ex Calling Function To Be Used: getMilk();
*/

// Create funtion
// Basic function
function getMilk() {
  alert("goToFridge");
  alert("openFridge");
  alert("grabMilkFromFridge");
  alert("closeFridge");
  alert("drinkMilk");
}

// Call function
getMilk();



// Function that can recieve inputs
/*  
Ex Fucntion: function getMilk(input) {code for function here}
Ex Calling Function To Be Used: getMilk(2);
*/

// Create function
function getMilk(bottles) {
  var cost = bottles * 1.5;
}

// Call function
getMilk(2); // 3

// Another function exmaple
function getMilk(bottles) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + bottles + " bottles of milk") // This will show "buy 12 bottles of milk"
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(12);

// Another function example
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  // Calculate total of bottles which can be purchased
  console.log("You can purchase " + (Math.floor(money / 1.5)) + " bottles of milk") // Math.floor rounds down.

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5) //Milk costs $1.5 5/1.5 = 3.333 which means can purchase only 3 bottles.

// Another way this can be solved.
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  // Calculate the number of bottles which can be purchased and store in variable.
  var numberOfBottles = (Math.floor(money / 1.5)); // Math.floor rounds down.

  // Output the number of bottles which can be purchased.
  console.log("You can purchase " + numberOfBottles + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5) //Milk costs $1.5 5/1.5 = 3 bottles



/* Challenge: Assuming a person lives until 90 yrs and 
there are 365 days a year, 52 weeks a year, 12 months a year. 
How long do they have left. Create a function to calculate each. */
function lifeInWeeks(age) {
  var daysLeft = (90 * 365) - (age * 365);
  var weeksLeft = (90 * 52) - (age * 52);
  var monthsLeft = (90 * 12) - (age * 12);

  // Output the remaining time left for days, weeks, and month.
  console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
}

lifeInWeeks(51) // Input current age. 51. You have 14235 days, 2028 weeks, and 468 months left.


// Function can recieve output and return values
/* When calling getMilk(4) it then inputs the amount as money % 1.5 = 1. 
Then returns the change 1 to the original call location and stores in variable change */
function getMilk(money) {
  return money % 1.5; // returns the or outputs the value where "getMilk(4)" was originally.
}

var change = getMilk(4) //Milk costs $1.5 so 4 % 1.5 = $1 in change

// Another function example
/* Notice this says "money" for first input and not "startingMoney". 
The first position regardless of name will take starting value input. This example is 5.
That being said the other code will have to match this inside the main first function. */
function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");



  /* This uses "money" as first input from main function 
  (Note: If this first function used "startingMoney" This would have to match that.) 
  The 2nd input is calcBottles function. */
  console.log("You can purchase " + calcBottles(money, calcBottles) + " bottles of milk")


  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  /* This uses "money" as first input from main function 
  (Note: If this first function used "startingMoney" This would have to match that.) 
  The 2nd input is calcBottles function. */
  return calcChange(money, costPerBottle);
}


function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

// This calling function takes two inputs. getMilk(startingMoney, costPerBottle)
// Also using getMilk(money, costPerBottle)
// Point is it can all be the same. The names help us understand. These names take the position 1 and 2 input.
console.log("Hey mother, here is your " + getMilk(5, 1.5) + " change.");



// Challenge Fucntion Practice
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
// BMI Formula: BMI = weight(kg) / height**2 (m**2)


function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  return bmi;
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/



// Get random number between 0 - 5 (increase by changing n)
var n = Math.random();
n *= 6;
n = Math.floor(n) + 1 // This simulates a dice roll now 1 - 6
console.log(n);


// Challenge create a love score calculator:
function loveScore(num) {
  var firstName = prompt("What is the first persons name?");
  var secondName = prompt("What is the second persons name?");

  var num = Math.random();
  num *= 100;
  num = Math.floor(num + 1);
  alert("The love score of " + firstName + " & " + secondName + " is " + num + "%");

}

loveScore(100)

// Another solution
var firstName = prompt("What is the first persons name?");
var secondName = prompt("What is the second persons name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");



// Control Statements

// Comparators
/*
=== Is equal to (also checks if data types match)
!== Is not equal to (value or type)
> Is greater than
< Is lesser than
>= Is greater or equal to
<= Is lesser or equal to
== Is equal to (does not check if data types match. For example int 1 and string 1 will show as true.)
&& AND
|| OR
! NOT (or the opposite of something)
*/


// Example:
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}

// Example:
var firstName = prompt("What is the first persons name?");
var secondName = prompt("What is the second persons name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1 -100

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%" + " Your love is top notch for each other.");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
}

// else {
//     alert("Your love score is " + loveScore + "%");
// }


// Challenge: BMI Calculater Advanced (IF/ELSE)
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  if (bmi < 18.5) {
    var interpretation = ("Your BMI is " + bmi + ", so you are underweight.")
  }

  if (bmi >= 18.5 && bm <= 24.9) {
    var interpretation = ("Your BMI is " + bmi + ", so have a normal weight.")
  }

  if (bmi > 24.9) {
    var interpretation = ("Your BMI is " + bmi + ", so are overweight.")
  }

  return interpretation;
}

bmiCalculator(60, 2)



// Challenge: Leap Year
/*
Write a program that works out whether if a given year is a leap year.
A normal year has 365 days, leap years have 366, with an extra day in February. 
The reason why we have leap years is really fascinating.

This is how to work out whether if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)



Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.



Example Input 1

2400
Example Output 1

Leap year.


Example Input 2

1989


Example Output 2

Not leap year.
*/

function isLeap(year) {

  /**************Don't change the code above****************/

  //Write your code here.    

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year."
      } else {
        return "Not leap year."
      }
    } else {
      return "Leap year."
    }
  } else {
    return "Not leap year."
  }

  /**************Don't change the code below****************/

}

// Another possible solution:
/* 
if ((year % 4) !== 0) {
  return "Not leap year."
}

if (((year % 4) === 0) && ((year % 100) !== 0)) {
  return "Leap year."
}

if (((year % 4) === 0) && ((year % 100) === 0) && ((year % 400) !== 0)) {
  return "Not leap year."
}

if (((year % 4) === 0) && ((year % 100) === 0) && ((year % 400) === 0)) {
  return "Leap year."
}
*/




// Collections: Working with Arrays
// Array's are a collection of items that are related and can be scored together in the same container or variable.
var eggs = [redEgg, blueEgg, greenEgg];
var myEgg = eggs[1]; // Will return blueEgg cause position is 1.
eggs.length; // Counts eggs, so 3.
eggs.includes("redEgg"); // This will go throught list and see if there is another redEgg other than initial. Returns True or False.
eggs.push("pinkEgg"); // This will add pinkEgg to the end of array.
eggs.pop("pinkEgg"); // This will remove the last item in the array.

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// Prompt guest for name and check list to see if they are in the guestlist. Then use if and else to reply with alert.
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome");
} else {
  alert("'Sorry maybe next time.'");
}


// Challenge FizzBuzz: 
/* Create a function which outputs number and adds to array.
Fizz for numbers divisible by 3 and Buzz if divisible by 5.
If the number is divisible by 3 and 5 then output FizzBuzz.
If the number isnt divisible by any of those, then output the number.
*/
var output = [];
var count = 1;


function fizzBuzz() {

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  }
  else if (count % 3 === 0) {
    output.push("Fizz");
  }
  else if (count % 5 === 0) {
    output.push("Buzz");
  }
  else {
    output.push(count);
  }

  count++;

  console.log(output);
}




// Challenge Who's Buying Lunch?:
/*
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!
*/

function whosPaying(names) {

  /******Don't change the code above*******/

  //Write your code here.
  var pickPerson = Math.floor(Math.random() * (names.length));
  return (names[pickPerson] + " is going to buy lunch today!")

  /******Don't change the code below*******/
}



// Control Statements: While Loops
/* 
while (soething is true) {
  // Do something
}
*/



// FizzBuzz: With While Loop
var output = [];
var count = 1;

function fizzBuzz() {

  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;

  }
  console.log(output);
}


// Challegne 99 Cartons Of Milk In The Fridge:
var numOfMilk = 99;

function milk() {

  while (numOfMilk >= 0) {

    if (numOfMilk > 0) {
      console.log(numOfMilk + " cartons of milk in the fridge, " + numOfMilk + " cartons of milk. Take 1 now, pass it around, " + (numOfMilk - 1) + " cartons of milk in the fridge.")

    }

    numOfMilk--;
  }

}


// Control Statements: For Loops
/* start, end, change: starts at i = 0, checks if i < 2, does something in loop. 
Once done with current loop it then i++;, so i = 1, then checks if i < 2. 
*/
for (i = 0; i < 2; i++) {
  // Do something
}

// FizzBuzz With For Loop
var output = [];

function fizzBuzz() {

  for (var count = 1; count <= 100; count++) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

  }
  console.log(output);
}

// While Loop Vs For Loop

// While is checking for a state, true or false.
while (something is true) {
  // Do something
}

// For iteration and how many iterations.
for (i = 0; i < 2; i++) {
  // Do something
}




/*
The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.

Create a function where you can call it by writing the code:

fibonacciGenerator (n)

Where n is the number of items in the sequence.

So I should be able to call:

fibonacciGenerator(3) and get

[0,1,1]

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.

Do NOT change any of the existing code.

You do NOT need any alerts or prompts, the result should be returned from the function as an output.

The first two numbers in the sequence must be 0 and 1.

Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.

e.g. for (var i = 0; i < 10; i ++)

*/
function fibonacciGenerator(n) {

  var output = [];
  if (n === 1) {
    var output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);

    }

  }

  return output

}

output = fibonacciGenerator(1);
console.log(output)



// DOM: Document Object Model
// Is basically the tree heirarchy of the website. Can be used to manipulate objects etc.

// Properties: Describe something about the object.
// Methods: Are things that the object can do.

// Get property
car.colour; // Will return car color. Notice the property doesnt have ()

// Set property
car.numberOfDoors = 0; // Will set car doors to 0

// Call method
car.drive(); // The car starts driving. Notice the method has ()


/* The only difference between a method and fucntion is that a 
method is something that an object can do. Has to be associated with an object. */

// Example of changing object using DOM
var heading = document.firstElementChild.lastElementChild.firstElementChild
heading.innerHTML = "Good Bye";
heading.getElementsByClassName.color = "Red";
document.querySelector("input").click();


// Challenge Change Object Using DOM
// Solution 1
var thirdList = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild
thirdList.innerHTML = "Challenge Complete!";

// Solution 2
document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Challenge Complete";


// Using DOM to Select Examples
document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "purple"; // Can select specific in array
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn"); // Can select by class
document.getElementById("title"); // Can select based on Id
document.getElementById("title").innerHTML = "Good Bye"; // Can select and change 
document.querySelector("h1"); // Can select with query tag
document.querySelector("#title"); // Can select with query id
document.querySelector(".btn"); // Can select with query class
document.querySelector("li a"); // Can select a specific a by listing the heirachy before. Notice the space.
document.querySelector("li.item"); // Can select by combining. In this case a list item with the class item.
document.querySelector("#list .item"); // If you select something with querySelector with multiple returns. You will only get first item.
document.querySelector("li a").style.color = "red"; // // This will select the a inside the the li and color it red.
document.querySelector(".item a").style.color = "red"; // This will select the a inside the class item and color it red.
document.querySelectorAll("#list .item"); // Query selector all can return multiple. This will return list/array.
document.querySelectorAll("#list .item")[2].style.color.blue; // To modify one of the items. Need to select the array position.
// Generally will see querySelector and queryselectorAll being used. Can be more specific using this.
// The other get ways are broad and can't be very specific.


// DOM Style
document.querySelector("h1").style.fontSize = "10rem"; // Uses camelCasing as "strings" with JavaScript, Even though css uses font-size.



// Seperation Of Concern: Structure vs Style vs Behaviour
/*
HTML is for content only
CSS is for styling the website
JS is for behaviour
*/

document.querySelector("button").classList // This will give us the list of classes that are attached to element.
document.querySelector("button").classList.add("inivisible"); // This will add this class to button. Then we can go to css to style.
document.querySelector("button").classList.remove("invisible"); // This will remove the class.
document.querySelector("button").classList.toggle("invisible"); // This will toggle on if off or off if on.
// In other words we can keep the syling in CSS but use JS to turn on and off.


// Manipulate Text
.innerHTML; // Gives element between h1 tags. This would effect also <strong>Hello</strong>
.innerHTML = "<em>Good Bye</em>" // You can also adjsut html on fly with the text. Must be in "" as string. 

  .textContent; // Just gives you the text content


// Manipulate Attributes
document.querySelector("a").attributes; // Retrieves and shows in array the different attributes
document.querySelector("a").getAttribute("href"); // Gets single attribute
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // Takes two inputs. First is what we are changing. Second is what its being cahnged to.

