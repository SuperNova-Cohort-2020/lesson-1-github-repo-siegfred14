//this is a comment
/*this is a multi-line comment */

/*Naming variables come with rules these rules are
*1) Names should begin with lowercase
* 2) Names cannot contain or begin with symbols
* 3) Names cannot begin with a number
* 4) Names can contain mix of uppercase strings, lowercase strings and numbers*/

// VALID
// var man;
// var woman3;
// var blackDog; // This is the best way to name variables with multiple words

// INVALID
// var 1girl;
// var -girl;

//Variable declaration using var
// var x;
//
// var bowl;
//
// var car;

//The above variable starts to hold memory the once it is declared, as in the example of above. The value once declaration has occurred is undefined.This variable declaration is deprecated.


//Multiple variables in JavaScript can also be chained, while separated by a comma.

// var a, b, c;


//Assigning values to variables we use the equal sign

// var x = 5, y = 6, z = 7;

var a = 10,
    b = 30,
    c = 90;

console.log(a)
//A variable can be reassigned a new value at any time using the equal sign.
var a = 20    //here we have redeclared and  reassigned a value of 20 onto the variable a from above example.
console.log(a)







let x = 'Tic';
x = 'Tac';
x = 'Toe';


//above variable x we have only reassigned the value not redeclared the variable

//ES2015 is an updated version of JavaScript (also known as ECMAScript) or ES6 at the time this version was introduced the variable declaration became let and const we will look at those below.


/*Unlike var, variables cannot be re-declared using let, trying to do that will throw a Syntax error: Identifier has already been declared*/

// let name;
//
// let pet;
//
// let x;
//
// let x = 5;


//Multiple declarations using let

// let x, y, z;
//
// let x = 50, y = 20, z = 3;

//Const
/* const is also limited to the scope which it operates. const is declared like var and let. Note: A variable declared with **const** MUST be initialized.

*/

//const x; // SyntaxError: missing initializer

//Like var and let, variables declared with const can also be chained with commas separating each variable:

// const x = 20, y = 50, man = true;

//You are not allowed to change the value of a variable declared with const.
// const name = 'chris';

//name = 'john'; // Uncaught TypeError: Assignment to constant variable.

//However, if you declare an object as const, you are able to change the properties.

// const person = {};
//
// person.name = 'chris'; // no error

//When declaring variables, it is good practice to avoid using var. Always lean towards let or const based on the following rules.
/*
1) Use let when we will be changing the value of the variable
2) Use const when you are sure that variable won't change
 */

//LET'S GO THROUGH SOME HANDS ON PROBLEMS

//PROBLEM 1
//THE AGE CALCULATOR


/*We will write a program the tell you your age, below follow the steps
1)Store your birth year in a variable named birthYear

2)Store a future year (2020) in a variable named future year

3) Create a variable named age and assign the futureYear - birthYear;

4) write console.log statement provided below last variable, and view the browser console.
console.log('I will be ' + age + 'by the end of this year');

 */
const birthYear = 2001;
let futureYear = 2020;
let age = futureYear - birthYear;
console.log('I will be ' + age + ' by the end of this year');

/*PROBLEM 2
THE LIFETIME SNACK SUPPLY CALCULATOR
1) Store your current age into a variable named age.
2)Store a maximum age of 100 into a variable named maxAge
3)Store an estimated amount of snack need per day as a number inside a variable named numPerDay.
4)Store the calculation of how many you would eat for the rest of your life in a variable named totalNeeded.
Example var totalNeeded = (numPerDay * 365 ) * (maxAge - age);
5) Store a string of 'You will need' with concatenation(+) symbol then your totalNeeded variable followed by another concatenation symbol + followed by string of 'of snack to last you until you ripe old age of' followed by another concatenation symbol followed by maxAge variable.
Example
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);
 */

age = 19;
let maxAge = 100;
let numPerDay = 2;
let totalNeeded = (numPerDay * 365) * (maxAge - age);
let message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);


/*PROBLEM 3
The Area of a Circle
Calculate the Area of a Circle
1) Store the radius of your circle inside of a variable named radius.
2) Store the formula to find circumference in a variable named circumference and (Math.PI) built in javascript method to multiply pi.Example
var circumference = Math.PI * 2*radius;
3)Console the following console.log("The circumference is " + circumference);
4) Create a variable named area assign (store) the formula to calculate area based on the radius.
Example   var area = Math.PI * radius*radius;
5) console log the following console.log("The area is " + area);
*/

let radius = 3;
let circumference = Math.PI * 2 * radius;
console.log("The circumference is " + circumference);

let area = Math.PI * (radius ** 2);
console.log("The area is " + area);


/*PROBLEM 4
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

1)Store a celsius temperature into a variable named celsius.
2)Convert it to fahrenheit and output "NN°C is NN°F" store the formula to convert in a variable named celsiusInF.
3) console.log(celsius + '°C is ' + celsiusInF + '°F');

4) Now store a fahrenheit temperature into a variable named fahrenheit.
5) Convert fahrenheit to celsius and output "NN°F is NN°C." store the formula in a variable named fahrenheitInC.
6)console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

 */

let celsius = 25;
let celsiusInF = (celsius * 9 / 5) + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');

let fahrenheit = 90;
let fahrenheitInC = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');


/*PROBLEM 5
* The Fortune Teller
* Why pay a fortune teller when you can just program your fortune yourself?
* 1) Create a variable name numKids and assign number of children
* 2) Create a variable name partner assign a string with name of partner of dream partner.
* 3)Create a variable name geoLocation assign a string of your dream geographical location to live.
* 4) Create a variable named jobTitle assign the variable the string of your dream job.
* 5) Create a variable named future and assign the following based on the example below
* Example
* var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
   * 6) console.log(future);
* */

let numKids = 3;
let partner = "Elizabeth";
let geoLocation = "Halifax, Nova Scotia CA";
let jobTitle = "Full Stack Engineer";
let future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);