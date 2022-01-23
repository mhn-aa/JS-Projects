firstName = "John";
lastName = "Doe";
age = 35;

var firstName = "John" , ;lastName = "Doe", age = 35;

// 1

alert(10*5);

// 2

alert(10/2);

// Alert the remainder when 15 is divided by 9.

alert(15%9);

// Use the correct assignment operator that will result in X being 15 (Same as x = x + y).

x = 10;
y = 5;
x += y;


// use the correct assignment operator that will result in X being 50 (same as x = x * y)

x = 10;
y = 5;
x *= y;

// Use comments to describe the correct data type of the following variables:

let length = 16; //Number
let lastName = "Johnson"; //String
const x = {
    firstName: "John",
    lastName: "Doe",
}                           //Object


// Execute the function named myFunction

function myFunction() {
    alert("Hello World! ")
}
myFunction();


// Create a function called "myFunction"
function myFunction() {
    alert ("Hello World!");
}


// Make the function return "Hello"

function myFunction() {
    return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

// Make the function display "Hello" in the inner HTML of an element with the ID "demo".

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
}

// Alert John by extracting information from the person object.

const person = {
    firstName:"Mahan",
    lastName:"Mirjamali"
};
alert(person.firstName);




// Add the following property and value to the person object: country:Norway.

const person = {
    firstName:"Mahan",
    lastName:"Mirjamali",
    country:"Iran"
}


// Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50")
const person = {
    name: "John" , age:50
};
alert(person.name + "is" + person.age);

// the <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="alert('Hello')">Click me.</button>



// use the length property to alret the lenght of txt.
let txt = "Hello World!";
let x = txt.length;
alert(x);

// use escape characters to alret we are "Vikings"
let txt = "We are \"Vikings\"";
alert (txt);


// concatenate the two strings to laret "Hello World!"
let str1 = "Hello";
let str2 = "World!";
alert(str1 + str2)

// Convert the text into an UPPERCASE test:
let txt = "Hello World!";
txt = txt.toUpperCase();

// Use the slice method to return the word "bananas".

let txt = "I can eat bananas all day";
let x = txt.slice(10,17) // ???


// use the correct string method to replace the word "Hello" with the word "welcome"

let txt = "Hello World";
txt = txt.replace("Hello" , "Welcome");

// Convert the value of txt to upper case

let txt = "Hello World";
txt = txt.toUpperCase();


// Convert the value of txt to lower case
let txt = "Hello World";
txt = txt.toLowerCase();



// get the value "Volvo" from the cars array.

const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

// change the first item of cars to "Ford"
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";



