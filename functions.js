"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("SuperNova") // returns "Hello, SuperNova!"
 */

function sayHello(name) {
    //return "Hello, " + name + "!";
    console.log("Hello, " + name + "!");
};

sayHello("SuperNova");


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Siegfred");
//console.log(helloMessage); returns undefined






/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Siegfred";
sayHello(myName);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 /*Above code is solution
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */

function isTwo(number) {
    if (number == 2) {
        return true;
    }
    else
        return false
}
console.log(isTwo(1));
console.log(isTwo(2));
console.log(isTwo(3));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, bill) {
    let tip = tipPercent * bill;
    console.log(tip);
}

calculateTip(0.20, 20);
calculateTip(0.25, 25.50);
calculateTip(0.15, 33.42);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function calculateTip2() {
    let tipPercent = prompt("Enter The Percent you'll tip between 0 and 1");
    let bill = prompt("Enter Bill Total");
    let tip = tipPercent * bill;
    alert("Your Tip is " + "$" + tip);
}

calculateTip2();


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent) {
    var discountedAmount = originalPrice * discountPercent;
    var newPrice = originalPrice - discountedAmount;
    console.log(newPrice);
}
applyDiscount(100, .2);
applyDiscount(45.99, 0.12);

/* Using prompt and alert
function applyDiscount2() {
    let originalPrice = prompt("Enter Price of Item");
    let discountPercent = prompt("Enter discount percentage (between 0 and 1)");
    var discountedAmount = originalPrice * discountPercent;
    var newPrice = originalPrice - discountedAmount;
    alert("Your Updated price is " + newPrice);

}
applyDiscount2() */