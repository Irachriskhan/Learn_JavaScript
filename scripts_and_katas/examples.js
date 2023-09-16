"use strict"

// object
const studentInfo = {
  firstName: "John",
  lastName: "Doe",
  isMarried: false,
  driveLincense: null,
  age: 20,
};

// console.log(studentInfo)
// console.log(studentInfo.firstName)
// console.log(studentInfo.driveLincense)

// Array
const student = ['Bebe', 'Songa', 'Kado', 'Claude', 'Nina', 'Pro', null, true]
// console.log(student)

// Array in an array
const arrayInArray = [
  ['Claude', 'Fefe', 'Songa'], // 0
  ['Bebe', 'Nina', 'Divine'], // 1
  'Teacher' // 2
]

// console.log(arrayInArray[0][1])
// console.log(arrayInArray[0])


// Array in an object
const studentClaude = {
  familySize: 4,
  familyMembers: ['Bebe', 'Nina', 'Divine'],
  isMarried: true,
  wife: "Jeanne"
};
// console.log(studentClaude.familyMembers)
// console.log(studentClaude.familyMembers[2])

// Object in an Array
const objectInArray = [
  {
    familySize: 4,
    familyMembers: ['Bebe', 'Nina', 'Divine'],
    isMarried: true,
    wife: "Jeanne"
  },
  {
    familySize: 2,
    familyMembers: ['Songa', 'Kado', 'Pro'],
    isMarried: false
  }
]
// console.log(objectInArray[1])
// console.log(objectInArray[0].familyMembers[0])
// method is a function included in an object (1)


const kiki = {
  age: 20,
  isAdult : function (testAge){
    if(testAge > 25) return 'Yes'
    else return 'No'
  }
};

const adult = kiki.isAdult(10) 

// const adult = kiki.isAdult() // isAdult is a method
// const hisAge = kiki.age // age is a property (a property is a key in an object)
// console.log(adult)
// console.log(hisAge)

// Inside an object, 
const bebe = {
  age: 20,
  dob: 2000,
  gender: "Female",
  isAdult : function (){
    if(this.age > 25) return 'Yes' // this point to (or stand for) our object
    else return 'No'
  }
};

// console.log(bebe.isAdult())




// for ... of WORKS FOR ARRAY ONLY
// for ... in WORKS FOR ARRAYS AND OBJECTS
// for ... of 

let abanaBose = ['Bebe', 'Nina', 'Divine']
for (let umwana of abanaBose){ // element of arrayX
  // console.log(umwana)
}

for (let umwana in abanaBose){
  // console.log(umwana)
  // console.log(abanaBose[umwana])
}

let umuryango = {
  familySize: 4,
  familyMembers: ['Bebe', 'Nina', 'Divine'],
  isMarried: true,
  wife: "Jeanne"
};

// for ... in 
for (let umwana in umuryango){
  // console.log(umwana)
  // console.log(umuryango[umwana]) // umwana is an expression
}
// ------------------------------------------ CONSTRUCTOR -------------------------------------------
// Classes are a template for creating objects. 
// The constructor method is used for creating and initializing an object instance of that class.
// Constructor built in a class
class studentID {
  constructor(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let claudeID = new studentID ('Claude', 30, 60) // filling in our template

// console.log(claudeID)
// console.log(claudeID.name)
// claudeID.introduce();

// Constructor built in a function
function Identification(fname, age, height){
  this.fname = fname,
  this.age = age,
  this.height = height,
  this.fullInfo = () =>{
    return `${this.fname} ${this.age} ${this.height}`
  }
}

// When converted in a class
// class Identification {
//   constructor(fname, age, height) {
//     this.fname = fname,
//       this.age = age,
//       this.height = height;
//   }
// }

let ChrisID = new Identification('Christophe', 30, 165) // an object
let chris1 = new Identification('Christophe', 30, 165) // // assigning values to a constructor object

// console.log(ChrisID)
const kadoID = new ChrisID.constructor('Christophe', 60, 60) // borrowing properties from another constructor
console.log(kadoID.fullInfo())
// ---------------------------------------- FACTORY FUNCTION---------------------------------------------
// JavaScript Factory Functions
// It  is a function that returns a new object.
let family = {
  familySize: 4,
  marriedWith: "Jeanne",
  message(){
    return this.marriedWith + ' has a family of ' + this.familySize;
  }
};

// console.log(family.message())

// Factory Function
function createObject(size, stayWith){
  return {
    familySize : size,
    marriedWith : stayWith,
    message(){
      return this.marriedWith + ' has a family of ' + this.familySize;
    }
  };
}

let ninaFamily = createObject(6, 'John Doe'); // assigning values to a factory function

// console.log(ninaFamily.message())

// ---------------------------------------- PROTOTYPES --------------------------------------------
// Object prototypes
// Prototypes are the mechanism by which objects inherit features from one another.

let familyInfo = {
  familySize: 4,
  marriedWith: "Jeanne",
  message(){
    return this.marriedWith + ' has a family of ' + this.familySize;
  }
};


// console.log(familyInfo)
// Copy and Modify the object
let tempFamilyInfo = Object.create(familyInfo) // The copy of familyInfo in  songaInfo and connects to newID  

let JeanneDetails = {
  familySize : tempFamilyInfo.familySize,
  marriedWith : tempFamilyInfo.marriedWith,
  address : "Munini",
  phone : 781111777
}

// console.log(newID)

// Copy and Extend the the object

let bebeInfo = Object.create(familyInfo, {
  moreInfo : {
    value : 'gaot'
  }
});

// console.log(bebeInfo.value)

// let animal = {
// eats: true
// };
// let rabbit = Object.create(animal, {
// jumps: {
// value: true
// }
// });
// alert(rabbit.jumps); // trueIn other words; a variable can be used before it has been declared.



// function PROTOTYPES
function PersonDetails () {
    this.name = 'John',
    this.age = 23
}

const john = new PersonDetails(); // creating objects
console.log(PersonDetails.prototype); // checking the prototype value: output: { ... }

// adding property to constructor function
PersonDetails.prototype.gender = 'male';
console.log(PersonDetails.prototype);

// Prototype Inheritance
// In JavaScript, a prototype can be used to add properties and methods to a constructor f
// unction. And objects inherit properties and methods from a prototype. For example,








// ---------------------------------------- PROPERTY LOOKUP --------------------------------------------
















// ---------------------------------------- JavaScript Hoisting  --------------------------------------------
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// It is possible with var but not with let and const key wordsIn other words; a variable can be used before it has been declared.
carName = "Volvo"; // initialization

var carName; // declaration
// console.log(carName)



// ----------------------------------------  call() Method  --------------------------------------------
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

let x = person.fullName.call(person1, "Kigali", "Rwanda");
// console.log(x)

// ----------------------------------------  Function apply()  -----------------------------------
// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

let y = person.fullName.apply(person1, ["Kigali", "Rwanda"]);
// console.log(y)

// ----------------------------------------  IIFE  --------------------------------------------
// JavaScript immediately invoked function expressions (IIFE)
// IIFEs are functions that are executed when they are initialized.
// STEPS
// 1. we first create the function declaration: functionName()
// 2. Wrap parentheses around it. This creates the function expression
// 3. Add a second pair of parentheses at the end to immediately invoke it
// IIFEs have their own scope: the variables you declare in the Function Expression will not be available outside the function.
// NOTATION

// EXAMPLE
const counter = (function () {
 let count = 0;
 
 return function () {
   count += 1;

   return count;
 };
})();
// console.log(counter())

//  you may also see IIFEs written the following way as well, in which the first closing parenthesis is moved to the very end:
// (function funNameA() {
//  return null
// }());
// IIFEs can also have parameters. For example,
// Declaring the parameter required.
(function(dt) {
    console.log(dt.toLocaleTimeString());
    // Passing the Parameter.
})(new Date());

// ADVANTAGES OF IIFE
// Avoid polluting the global namespace 
// To create closures
// Avoid conflict of variable names between libraries and programs.
// IIFE is used to create private and  public variables and methods
// It is used to execute the async and await function
// It is used in JQuery Library
// It is used to work with require function

// ----------------------------------------  Function bind()  --------------------------------------------
// With the bind() method, an object can borrow a method from another object.
// iN a callback, the bind() method has to be used to prevent losing OF this.
// The bind() method solves this problem.
const personStory = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
// ----------------------------------------  Function bind()  --------------------------------------------
let theNewStudent = personStory.fullName.bind(member);
console.log(theNewStudent())



// ----------------------------------------  JavaScript Closures --------------------------------------------
// Global variables can be made local (private) with closures.
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. 
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

// Function to increment counter
const add = (function (n) {
  let counter = 0;
  return function () {
    counter += 1; 
    return counter
  }
})();

add();
add();
add();


function newAccount(name, initBalance){ // outer function
  let balance = initBalance;

  function showBalance(){ // inner function
    console.log(`Hey ${name}, your current balance is ${balance}`);
  }

  function deposit(amount){// inner function
    balance += amount
    console.log(`You deposed ${amount}`)
    showBalance()
  }

  function withdraw(amount){// inner function
    if (amount > balance) console.log('Sorry, no enough money')
    else balance -= amount;
    showBalance()
  }

   return { // returning functions as objects
    showBalance : showBalance,
    deposit : deposit,
    withdraw : withdraw

  }
}

let account1 = newAccount('Joy', 300);
account1.showBalance()
account1.deposit(600)
account1.withdraw(1000)

// ---------------------------
function foo(outer_arg) {

	function inner(inner_arg) {
		return outer_arg + inner_arg;
	}
	return inner;
}
let get_func_inner = foo(5); // assign 5 to outer func

console.log(get_func_inner(4)); // assign 4 to inner func
console.log(get_func_inner(3));


// ----------------------------------------  RECURSIVE FUNCTIONS IN JavaScript --------------------------------------------
// Replace Loops using Recursion

// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, 
// start by thinking about the following task: multiply the first n elements of an array to create the 
// product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
// That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  multiply([1, 2, 3, 4, 5, 6, 8, 9], 5) // Output of 5 first numbers:120 
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, 
// it returns 1. For larger values of n, it calls itself, but with n - 1. 
// That function call is evaluated in the same way, calling multiply again until n <= 0.
//  At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling 
// the function again (in this example, when n <= 0), otherwise they can never finish executing.

// EXERCISE:
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0){
    return 0
  }else{
    return sum(arr, n - 1) + arr[n-1]
  }
  // Only change code above this line
}
sum([2, 3, 4, 5], 3) // should equal 9.

function countdown(n){
  if (n <= 0){
    return []
  } else{
    const countArr = countdown (n - 1) 
    countArr.unshift(n);
    return countArr;
    
  }
}
// Only change code above this line
console.log(countdown(10))

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));


// Testing Objects for Properties

// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. 
// someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is 
// found on the object or not.

// Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false


// ----------------------------------------  LOOKUP PROFILE EXERCISE--------------------------------------------
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) return contacts[i][prop];
      else return "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Bob", "number"))
console.log(lookUpProfile("Kristian", "lastName"))

// --------------------------- GENERATE RANDOM NUMBER IN A RANGE -------------------------------------
// Generate Random Whole Numbers within a Range
// This formula gives a random whole number in the range from min to max. 
// Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
Math.floor(Math.random() * (10 - 7 + 1)) + 7
// --------------- CONVERT A BINARY NUMBER TO INTEGER using parseInt() -------------------------------------
// The parseInt() function parses a string and returns an integer. It takes a second argument 
// for the radix, which specifies the base of the number in the string. The radix can be an
//  integer between 2 and 36.

function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011"); // Output: 19
convertToInteger("11"); // Output: 3


function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) return [startNum];
  else {
    const theRange = rangeOfNumbers(startNum,endNum - 1)
    theRange.push(endNum);
    return theRange 
  }
};

console.log(rangeOfNumbers(1, 5))

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;

// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

  // if(records[id][prop]) {
  //   delete records[id][prop] // ok
  // }else if (records[id][prop] != records[id]['tracks'] && value){
  //   records[id][prop] = value // ok
  // }else if(records[id][prop] == records[id]['tracks'] && value){
  //   if (!records[id].hasOwnProperty('tracks')){
  //     records[id]['tracks'] = [];
  //     records[id]['tracks'].push(value)
  //   }
  // }
  // return records;
}

let ans = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(ans)