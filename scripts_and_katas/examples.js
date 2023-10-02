"use strict";

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
const student = ["Bebe", "Songa", "Kado", "Claude", "Nina", "Pro", null, true];
// console.log(student)

// Array in an array
const arrayInArray = [
  ["Claude", "Fefe", "Songa"], // 0
  ["Bebe", "Nina", "Divine"], // 1
  "Teacher", // 2
];

// console.log(arrayInArray[0][1])
// console.log(arrayInArray[0])

// Array in an object
const studentClaude = {
  familySize: 4,
  familyMembers: ["Bebe", "Nina", "Divine"],
  isMarried: true,
  wife: "Jeanne",
};
// console.log(studentClaude.familyMembers)
// console.log(studentClaude.familyMembers[2])

// Object in an Array
const objectInArray = [
  {
    familySize: 4,
    familyMembers: ["Bebe", "Nina", "Divine"],
    isMarried: true,
    wife: "Jeanne",
  },
  {
    familySize: 2,
    familyMembers: ["Songa", "Kado", "Pro"],
    isMarried: false,
  },
];
// console.log(objectInArray[1])
// console.log(objectInArray[0].familyMembers[0])
// method is a function included in an object (1)

const kiki = {
  age: 20,
  isAdult: function (testAge) {
    if (testAge > 25) return "Yes";
    else return "No";
  },
};

const adult = kiki.isAdult(10);

// const adult = kiki.isAdult() // isAdult is a method
// const hisAge = kiki.age // age is a property (a property is a key in an object)
// console.log(adult)
// console.log(hisAge)

// Inside an object,
const bebe = {
  age: 20,
  dob: 2000,
  gender: "Female",
  isAdult: function () {
    if (this.age > 25) return "Yes"; // this point to (or stand for) our object
    else return "No";
  },
};

// console.log(bebe.isAdult())

// for ... of WORKS FOR ARRAY ONLY
// for ... in WORKS FOR ARRAYS AND OBJECTS
// for ... of

let abanaBose = ["Bebe", "Nina", "Divine"];
for (let umwana of abanaBose) {
  // element of arrayX
  // console.log(umwana)
}

for (let umwana in abanaBose) {
  // console.log(umwana)
  // console.log(abanaBose[umwana])
}

let umuryango = {
  familySize: 4,
  familyMembers: ["Bebe", "Nina", "Divine"],
  isMarried: true,
  wife: "Jeanne",
};

// for ... in
for (let umwana in umuryango) {
  // console.log(umwana)
  // console.log(umuryango[umwana]) // umwana is an expression
}

// ------------------------------------------ CONSTRUCTOR -------------------------------------------
// Classes are a template for creating objects.
// The constructor method is used for creating and initializing an object instance of that class.
// Constructor built in a class
class studentID {
  constructor(name, age, height) {
    (this.name = name), (this.age = age), (this.height = height);
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let claudeID = new studentID("Claude", 30, 60); // filling in our template

// console.log(claudeID)
// console.log(claudeID.name)
// claudeID.introduce();

// Constructor built in a function
function Identification(fname, age, height) {
  (this.fname = fname),
    (this.age = age),
    (this.height = height),
    (this.fullInfo = () => {
      return `${this.fname} ${this.age} ${this.height}`;
    });
}

// When converted in a class
// class Identification {
//   constructor(fname, age, height) {
//     this.fname = fname,
//       this.age = age,
//       this.height = height;
//   }
// }

let ChrisID = new Identification("Christophe", 30, 165); // an object
let chris1 = new Identification("Christophe", 30, 165); // // assigning values to a constructor object

// console.log(ChrisID)
const kadoID = new ChrisID.constructor("Christophe", 60, 60); // borrowing properties from another constructor
console.log(kadoID.fullInfo());
// ---------------------------------------- FACTORY FUNCTION---------------------------------------------
// JavaScript Factory Functions
// It  is a function that returns a new object.
let family = {
  familySize: 4,
  marriedWith: "Jeanne",
  message() {
    return this.marriedWith + " has a family of " + this.familySize;
  },
};

// console.log(family.message())

// FACTORY Function
// A factory function is a function that returns a new object.
// Use Object.create() to create an object using an existing object as a prototype.
function createObject(size, stayWith) {
  return {
    familySize: size,
    marriedWith: stayWith,
    message() {
      return this.marriedWith + " has a family of " + this.familySize;
    },
  };
}

let ninaFamily = createObject(6, "John Doe"); // assigning values to a factory function

// console.log(ninaFamily.message())

// ---------------------------------------- PROTOTYPES --------------------------------------------
// Object prototypes
// Prototypes are the mechanism by which objects inherit features from one another.

let familyInfo = {
  familySize: 4,
  marriedWith: "Jeanne",
  message() {
    return this.marriedWith + " has a family of " + this.familySize;
  },
};

// console.log(familyInfo)
// Copy and Modify the object
let tempFamilyInfo = Object.create(familyInfo); // The copy of familyInfo in  songaInfo and connects to newID

let JeanneDetails = {
  familySize: tempFamilyInfo.familySize,
  marriedWith: tempFamilyInfo.marriedWith,
  address: "Munini",
  phone: 781111777,
};

// console.log(newID)

// Copy and Extend the the object

let bebeInfo = Object.create(familyInfo, {
  moreInfo: {
    value: "gaot",
  },
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
function PersonDetails() {
  (this.name = "John"), (this.age = 23);
}

const john = new PersonDetails(); // creating objects
console.log(PersonDetails.prototype); // checking the prototype value: output: { ... }

// adding property to constructor function
PersonDetails.prototype.gender = "male";
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
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

let xy = person.fullName.call(person1, "Kigali", "Rwanda");
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
(function (dt) {
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
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};
// ----------------------------------------  Function bind()  --------------------------------------------
let theNewStudent = personStory.fullName.bind(member);
console.log(theNewStudent());

// ----------------------------------------  JavaScript Closures --------------------------------------------
// Global variables can be made local (private) with closures.
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

// Function to increment counter
const add = (function (n) {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

function newAccount(name, initBalance) {
  // outer function
  let balance = initBalance;

  function showBalance() {
    // inner function
    console.log(`Hey ${name}, your current balance is ${balance}`);
  }

  function deposit(amount) {
    // inner function
    balance += amount;
    console.log(`You deposed ${amount}`);
    showBalance();
  }

  function withdraw(amount) {
    // inner function
    if (amount > balance) console.log("Sorry, no enough money");
    else balance -= amount;
    showBalance();
  }

  return {
    // returning functions as objects
    showBalance: showBalance,
    deposit: deposit,
    withdraw: withdraw,
  };
}

let account1 = newAccount("Joy", 300);
account1.showBalance();
account1.deposit(600);
account1.withdraw(1000);

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

multiply([1, 2, 3, 4, 5, 6, 8, 9], 5); // Output of 5 first numbers:120
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
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
sum([2, 3, 4, 5], 3); // should equal 9.

function countdown(n) {
  if (n <= 0) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}
// Only change code above this line
console.log(countdown(10));

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

checkForProperty({ top: "hat", bottom: "pants" }, "top"); // true
checkForProperty({ top: "hat", bottom: "pants" }, "middle"); // false

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
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Kristian", "lastName"));

// --------------------------- GENERATE RANDOM NUMBER IN A RANGE -------------------------------------
// Generate Random Whole Numbers within a Range
// This formula gives a random whole number in the range from min to max.
// Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
Math.floor(Math.random() * (10 - 7 + 1)) + 7;
// --------------- CONVERT A BINARY NUMBER TO INTEGER using parseInt() -------------------------------------
// The parseInt() function parses a string and returns an integer. It takes a second argument
// for the radix, which specifies the base of the number in the string. The radix can be an
//  integer between 2 and 36.

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011"); // Output: 19
convertToInteger("11"); // Output: 3

function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) return [startNum];
  else {
    const theRange = rangeOfNumbers(startNum, endNum - 1);
    theRange.push(endNum);
    return theRange;
  }
}

console.log(rangeOfNumbers(1, 5));

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
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

let ans = updateRecords(
  recordCollection,
  5439,
  "tracks",
  "Take a Chance on Me"
);
console.log(ans);

// -------------------- TAGGED TEMPLATES --------------------------------
// Tags allow you to parse template literals with a function. The first argument of a tag
// function contains an array of string values. The remaining arguments are related to the expressions.
const surName = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster"; // conditional operator

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${surName} is a ${age}.`; // calling function

console.log(output); // That Mike is a youngster.

// -------------------------- Prevent Object Mutation ---------------------------------
// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation.
//  To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); // error
// The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode
// by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ----------------------------- SPREAD OPERATOR ------------------------------------
// Use the Spread Operator to Evaluate Arrays In-Place
// The spread operator allows us to expand arrays and other expressions in places where multiple
// parameters or elements are expected.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus); // maximus would have a value of 89.
const spreaded = [...arr];
console.log(spreaded); // [6, 89, 3, 45]

// ------------------------------------------- DESTRUCTURING ASSIGNMENT -------------------------

// ------------ Use Destructuring Assignment to Extract Values from Objects ----------------------------
// Destructuring assignment is special syntax for neatly assigning values taken directly from an object.

const user = { userName: "John Doe", userAge: 34 };
// const uName = user.userName; // name = John Doe
// const uAge = user.userAge; // u_age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { userName, userAge } = user; // Here, name1 and age1 variables will be created and assigned the values of their respective values from the user object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { yesterday, tomorrow } = HIGH_TEMPERATURES; // assign the variables today and tomorrow the values of yesterday
// and tomorrow from the HIGH_TEMPERATURES object

// ---------------- Use Destructuring Assignment to Assign Variables from Objects ------------
// Here's how you can give new variable names in the assignment:
const { name: uName, age: uAge } = user;
// Means: "get the value of user.name and assign it to a new variable named uName" and so on.
// The value of uName = John Doe, and the value of uAge = 34.

// ------------ Use Destructuring Assignment to Assign Variables from Nested Objects ----------------
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Here's how to extract the values of object properties and assign them to variables with the same name:

const {
  tomorrow: { low, high },
} = user;
// you can assign an object properties' values to variables with different names:
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

// --------------- Use Destructuring Assignment to Assign Variables from Arrays -------------------
// One key difference between the spread operator and array destructuring is that the spread
// operator unpacks all contents of an array into a comma-separated list. Consequently, you
// cannot pick or choose which elements you want to assign to variables.

const [u, v] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // Output: 1, 2
// We can also access the value at any index in an array with destructuring by using
// commas to reach the desired index:
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1 2 5
// OR
const ageOfst = [1, 2, 3, 4, 5, 6];
const [ab, ac, ad, , , ae] = ageOfst;
console.log(ab, ae);

// -------------------- Destructuring via rest elements ------------------------------
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// he result is similar to Array.prototype.slice()
const [ai, bi, ...arra] = [1, 2, 3, 4, 5, 7];
console.log(ai, bi); // 1, 2 : emulate the behavior of  Array.removeFirstTwo()
// arra : gets the rest of the values in the form of an array.
console.log(arra); // [3, 4, 5, 7]

function removeFirstTwo(list) {
  const [a, b, ...sourceWithoutFirstTwo] = list;
  return sourceWithoutFirstTwo;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeFirstTwo(source);

// ---------------------------Destructuring Function's Parameters of an Object ------------------------------
// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Accessing the only the properties: min and max
const half = ({ max, min }) => (max + min) / 2.0;
half(stats);

// Destructuring incoming objects containing the following properties
const profileUpdate = ({ name, age, nationality, location }) => {};

// ------------------------ SPREAD OPERATOR -----------------------------------
var boys = ["Ghad", "Boyz", "Tom"];
var girls = ["Bebe", "Gogo", "Kiki"];
var allPeople = [boys, girls, source];
var spreadPeople = [...boys, ...girls, ...source];

console.log(allPeople); // print 3 arrays in one array
console.log(spreadPeople); // print a single array of values from 3 arrays

var newGirls = girls; // a chande(update of values) mage in newGils affect the original array = girls
var newBoys = [...boys]; // make an independent copy of boys

// -------------------- SWAP VALUES OF VARIABLES --------------------------
let ax = 8,
  bx = 6;
// Only change code below this line
[ax, bx] = [bx, ax]; // ax = 6, bx = 8
console.log(ax, bx); // ax = 6, bx = 8

// same as follow in ES5
(ax = 8), (bx = 6);
temp = bx;
bx = ax;
ax = temp;
console.log(ax, bx);

function concatName(fName, lname) {
  let names = fName + " " + lname;
  var age = 34;
  let answer = `${names} is ${age / 2} old`;

  console.log(age);
  return answer;
}

let outPut = concatName("Mugisha", "Ghad"); // calling function
console.log(outPut);

// Write Concise Object Literal Declarations Using Object Property Shorthand
// Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

// Here is the same function from above rewritten to use this new syntax:

const getMousePosition1 = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};

// Equivalent to
const createPerson1 = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

// ------------------------ JAVASCRIPT SYMBOL --------------------------
// Symbols are immutable (cannot be changed) and are unique. For example,
// creating symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");

console.log(value1 === value2); // false
console.log(value1); // Symbol(hello)

// To access the description of a symbol, we use the . operator. For example,
console.log(value1.description); // hello

// Add Symbol as an Object Key
// You can add symbols as a key in an object using square brackets []. For example,
let id = Symbol("id");

let personId = {
  name: "Jack",

  // adding symbol as a key
  [id]: 123, // not "id": 123
};

console.log(personId); // {name: "Jack", Symbol(id): 123}

// Symbols are not included in for...in Loop
// The for...in loop does not iterate over Symbolic properties. For example,
// using for...in
for (let key in person) {
  console.log(key);
}
// OUTPUT: name age

// -------------------------- ARRAY METHODS -------------------------------------
//concat() method is used to join two or more arrays and returns a new array.
var myArray = new Array("x", "y", "z");
myArray = myArray.concat("1", "2", "3");
console.log(myArray); //Output ["x", "y", "z", "1", "2", "3"]

//join() method is used to join all elements of an array into a string. The elements are separated by a specified separator.
var myArray = new Array("1", "2", "3");
var list = myArray.join(" - ");
console.log(myArray); //Output ["1", "2", "3"]

//push() adds one or more elements at the end of an array and returns the resulting length of the array.
var myArray = new Array("a", "b");
console.log(myArray.push("c")); //output 3

//pop() method is used to remove the last element from an array.
var myArray = new Array("a", "b", "c");
var last = myArray.pop();
console.log(myArray); //Output ["a", "b"]

//shift() removes the first element from an array and returns that element.
var myArray = new Array("a", "b", "c");
var x = myArray.shift();
console.log(myArray); //Output // myArray is now ["b", "c"], x is "a"

//The unshift() method is used to add one or more elements to the beginning of an array and return the length of the array.
var myArray = new Array("a", "b", "c");
myArray.unshift("d", "e");
console.log(myArray); //Output myArray becomes ["d", "e", "a", "b", "c"]

//slice(start_index, upto_index) extracts a section of an array and returns a new array.
var myArray = new Array("1", "2", "3", "4", "5");
myArray = myArray.slice(1, 4);
console.log(myArray); /* starts at index 1 and extracts all elements
  until index 3, returning [ "2", "3", "4"] */

//splice(index, count_to_remove, addelement1, addelement2, ...) removes elements from an array and (optionally) replaces them.
var myArray = new Array("10", "20", "30", "40", "50");
myArray.splice(1, 3, "a", "b", "c", "d");
console.log(myArray); //output ["10", "a", "b", "c", "d", "50"]
// The above code started at index one (or where the "20" was), removed 3 elements there, and then inserted all consecutive elements in its place.

//The reverse() method is used to reverse the order of the elements in an array, i.e. first array element becomes the last and the last becomes the first.
var myArray = new Array("a", "b", "c");
myArray.reverse();
console.log(myArray); //Output myArray becomes ["c", "b", "a"]

//sort() method is used to sort the elements of an array.
var myArray = new Array(202, 201, 204);
myArray.sort();
console.log(myArray); //Output myArray becomes [201, 202, 204]

// -------------------------- JAVASCRIPT DATE OBJECT-------------------------------------
// JavaScript date object is used to create dates and times. The Date object range is -100,000,000 days
// to 100,000,000 days relative to 01 January, 1970 UTC.

// These are the ways to create a date object in JavaScript :

new Date();
// [for example today = new Date() ].

new Date(milliseconds);
// [for example inauguration_day = new Date("August 15, 1997 10:05:00") ].

new Date(dateString);
// [for example inauguration_day = new Date(97,8,15) ].

new Date(year, month, day, hours, minutes, seconds, milliseconds).date // -------------------- JAVASCRIPT DATE OBJECT - METHODS ------------------------ // [for example inauguration_day = new Date(97,8,15,10,05,0) ].
  .getDate(); // Returns the day of the month (from 1-31).
date.getDay(); // Returns the day of the week (from 0-6).
date.getFullYear(); // Returns the year (four digits).
date.getHours(); // Returns the hour (from 0-23).
date.getMilliseconds(); // Returns the milliseconds (from 0-999).
date.getMinutes(); // Returns the minutes (from 0-59).
date.getMonth(); // Returns the month (from 0-11).
date.getSeconds(); // Returns the seconds (from 0-59).
date.getTime(); // Returns the number of milliseconds since midnight Jan 1, 1970.
date.getTimezoneOffset(); // Returns the time difference between UTC time and local time, in minutes.

date.getUTCDate(); // Returns the day of the month, according to universal time (from 1-31).
date.getUTCDay(); // Returns the day of the week, according to universal time (from 0-6).
date.getUTCFullYear(); // Returns the year, according to universal time (four digits).
date.getUTCHours(); // Returns the hour, according to universal time (from 0-23).
date.getUTCMilliseconds(); // Returns the milliseconds, according to universal time (from 0-999).
date.getUTCMinutes(); // Returns the minutes, according to universal time (from 0-59).
date.getUTCMonth(); // Returns the month, according to universal time (from 0-11).
date.getUTCSeconds(); // Returns the seconds, according to universal time (from 0-59).

date.setDate(day); // Sets the day of the month of a date object.
date.setFullYear(year, month, day); // Sets the year (four digits) of a date object.
date.setHours(hour, min, sec, millisec); // Sets the hour of a date object.
date.setMilliseconds(millisec); // Sets the milliseconds of a date object.
date.setMinutes(min, sec, millisec); // Set the minutes of a date object.
date.setMonth(month, day); // Sets the month of a date object.
date.setSeconds(sec, millisec); // Sets the seconds of a date object.
date.setTime(millisec); // Sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

date.setUTCDate(day); // Sets the day of the month of a date object, according to universal time.
date.setUTCFullYear(year, month, day); // Sets the year of a date object, according to universal time (four digits).
date.setUTCHours(hour, min, sec, millisec); // Sets the hour of a date object, according to universal time.
date.setUTCMilliseconds(millisec); // Sets the milliseconds of a date object, according to universal time.
date.setUTCMinutes(min, sec, millisec); // Set the minutes of a date object, according to universal time.
date.setUTCMonth(month, day); // Sets the month of a date object, according to universal time.
date.setUTCSeconds(sec, millisec); // Set the seconds of a date object, according to universal time.

date.toDateString(); // Converts the date portion of a Date object into a readable string.
date.toISOString(); // Returns the date as a string, using the ISO standard.
date.toJSON(); // Returns the date as a string, formatted as a JSON date.
date.toLocaleDateString(); // Returns the date portion of a Date object as a string, using locale conventions.
date.toLocaleTimeString(); // Returns the time portion of a Date object as a string, using locale conventions.
date.toLocaleString(); // Converts a Date object to a string, using locale conventions.
date.toString(); // Converts a Date object to a string.
date.toTimeString(); // Convert the time portion of a Date object to a string.
date.toUTCString(); // Converts a Date object to a string, according to universal time.
date.valueOf(); // Returns the primitive value of a Date object.

// ------------------------- JAVASCRIPT MATH OBJECT --------------------------------------------------------

// JavaScript math object is a top level, predefined object for mathematical constants and functions. Math Objects Property are :
//Returns the mathematical constant E, the base of natural logarithms, approximately 2.718.
console.log(Math.E); //Output 2.718281828459045

//Returns the natural logarithm of 10, approximately 2.302.
console.log(Math.LN10); //Output 2.302585092994046

//Returns the natural logarithm of 2, approximately 0.693.
console.log(Math.LN2); //Output 0.6931471805599453

//Returns the base 10 logarithm of E (approximately equal to 0.434).
console.log(Math.LOG10E); //Output 0.4342944819032518

//Returns the base 2 logarithm of E (approximately equal to 1.442).
console.log(Math.LOG2E); //Output 1.4426950408889634

//Returns the ratio of the circumference of a circle to its diameter ( approximately 3.14159).
console.log(Math.PI); //Output 3.141592653589793

//Returns the square root of 1/2 i.e. 0.5, approximately 0.707.
console.log(Math.SQRT1_2); //Output 0.7071067811865476

//Returns the square root of 2 (approximately 1.414).
console.log(Math.SQRT2); //Output 1.4142135623730951

// -------------------------------------- JAVASCRIPT MATH OBJECT - METHODS -----------------------
// JavaScript math object is a top level, predefined object for mathematical constants and functions.
// Math Objects Property are :

//The abs() method of math object is used to get the absolute value of a number.
console.log(Math.abs(-87.56)); //Output  87.56

//The acos() method of math object is used to get the arccosine (in radians) of a number.
console.log(Math.acos(0.65)); //Output 0.863211890069541

//The asin() method of math object is used to get the arcsine (in radians) of a number.
console.log(Math.asin(0.65)); //Output 0.7075844367253556

//The atan() method of math object is used to get the arctangent (in radians) of a number.
console.log(Math.atan(0.65)); //Output 0.5763752205911837

//The atan2() method of math object is used to get the arctangent of the quotient of its arguments.
console.log(Math.atan2(0.5, 0.5)); //Output 0.7853981633974483

//The ceil() method of math object is used to get the smallest integer, greater than or equal to a number.
console.log(Math.ceil(0.65)); //Output 1

//The cos() method of math object is used to get the the cosine of a number.
console.log(Math.cos(0)); //Output 1

//The exp() method of math object returns Ex, where x is the argument, and E is Euler's constant, the base of the natural logarithms.
console.log(Math.exp(5)); //Output 148.41315910257657

//The floor() method of math object is used to get the largest integer, less than or equal to a number.
console.log(Math.floor(15.99)); //Output 15

//The log() method of math object is used to get the natural logarithm (base E) of a number.
console.log(Math.log(2)); //Output 0.6931471805599453

//The max() method of math object is used to get the larger of two given numbers.
console.log(Math.max(25, 23)); //Output 25

//The min() method of math object is used to get the smaller of two given numbers.
console.log(Math.min(25, 23)); //Output 23

//The pow() method of math object returns base to the exponent power.
console.log(Math.pow(2, 4)); //Output 16

//The random() method of math object is used to get the pseudo-random number between 0 and 1. The random number generator is seeded from the current time, as in Java.
console.log(Math.random());

//The round() method of math object is used to get the value of a number rounded to the nearest integer. If the fractional part of the number is greater than or equal to .5, the argument is rounded to the next higher integer. If the fractional part of number is less than .5, the argument is rounded to the next lower integer.
console.log(Math.round(22.45)); //Output 22

//The sin() method of math object is used to get the sine of a number. The sin method returns a numeric value between -1 and 1, which represents the sine of the argument.
console.log(Math.sin(45)); //Output 0.8509035245341184

//The sqrt() method of math object is used to get the square root of a number.
console.log(Math.sqrt(17)); //Output 4.123105625617661

//The tan() method of math object is used to get the the tangent of a number.
console.log(Math.tan(45)); //Output 1.6197751905438615

// --------------------------------NUMBER OBJECT -------------------------------------------
// The Number object has properties for numerical constants, such as maximum value, not-a-number, and infinity and values
// of these properties cannot be changed. You can use them as follows:

// MAX_VALUE - The largest representable number
var biggest_Number = Number.MAX_VALUE;
console.log(biggest_Number); //Output 1.7976931348623157e+308

//MIN_VALUE - The smallest representable number
var smallest_Number = Number.MIN_VALUE;
console.log(smallest_Number); //Output 5e-324

//POSITIVE_INFINITY - Special positive infinite value; returned on overflow
var infinite_Number = Number.POSITIVE_INFINITY;
console.log(infinite_Number); //Output Infinity

//NEGATIVE_INFINITY - Special negative infinite value; returned on overflow
var negInfinite_Number = Number.NEGATIVE_INFINITY;
console.log(negInfinite_Number); //Output -Infinity

//NaN -    Special "not a number" value
var notANumber = Number.NaN;
console.log(notANumber); //Output NaN

// -------------------------- NUMBER OBJECT - METHODS -------------------------------------
// The Number prototype provides methods for retrieving information from Number
//  objects in various formats. You can use them as follows:

//toExponential - Returns a string representing the number in exponential notation.
var num = 257.0254;
console.log(num.toExponential()); //Output "2.570254e+2"

//toFixed - Returns a string representing the number in fixed-point notation.
var num = 302.2547;
console.log(num.toFixed()); //Output "302"

//toPrecision - Returns a string representing the number to a specified precision in fixed-point notation.
var num = 5.254;
console.log(num.toPrecision(2)); //Output "5.3"

//Returns a string representing the specified object. Overrides the Object.toString method.
var x = Number(301);
console.log(x.toString()); //Output "301"

//Returns the primitive value of the specified object. Overrides the Object.valueOf method.
var x = Number(701);
console.log(x.valueOf()); //Output 701

// --------------------------------- REGEXP OBJECT ------------------------------

// A regular expression (sometimes abbreviated to "regex") is a pattern used to match character
// combinations in a string.

// Creating Regular Expression
// There are two ways to construct regular expression.
// Using an object initializer, as follows :

var colorName = /Green/;

// The above code creates a new RegExp object called colorName and assigns the pattern Green.
// In the above notation the forward slash character (/) is used to designate the starting and
// end of the pattern.
// Using the constructor function, as follows :

re = new RegExp("Green");

// ---------------------------------- REGULAR EXPRESSIONS PATTERNS ----------------------

// \  -> Indicates that the next character is special and not to be interpreted literally
// For example, /d/ matches the character 'd'. By placing a backslash in front of d, that is by using /\d/, the character becomes special to mean matches any character which is a digit.
// -or-
// Indicates that the next character is not special and should be interpreted literally.

// ^ -> Matches the beginning of the string or line.
// For example /^A/ does not match the 'A' in "about Articles" but does match it in "Articles of life"

// $ -> Matches the end of the string or line.
// For example, /e$/ does not match the 't' in "exact", but does match it in "w3resource"

// * -> Matches the previous character 0 or more times.
// For example, /bo*/ matches 'boo' in "A bootable usb" and 'b' in "A beautiful mind", but nothing in "A going concern".

// + -> Matches the previous character 1 or more times.
// For example, /a+/ matches the 'a' in "Daniel" and all the a's in "Daaam"

// ? -> Matches the previous character 0 or 1 time.
// For example, /r?eu?/ matches the 're' in "w3resource" and the 'eu' in "europe ."

// . -> The decimal point matches any single character except a new line.
// For example, /.n/ matches 'an' and 'on' in "an orange is on the table".

// (x) -> Matches 'x' and remembers the match character. For example, /(go)/ matches and remembers 'go' in "go there"

// x|y -> Matches either 'x' or 'y'.
// For example, /green|red/ matches 'green' in "green color" and blue in "blue color."

// {n} -> Matches exactly n (a positive integer) occurrences of the preceding character.
// For example, /a{2}/ doesn't match the 'a' in "dam," but it matches all of the a's in "daam," and the first two a's in "daaam"

// {n,} -> Matches at least n (a positive integer) occurrences of the preceding character.
// For example, /a{2,}/ doesn't match the 'a' in "dam," but it matches all of the a's in "daam," and the first two a's in "daaam"

// {n,m} -> Matches at least n and at maximum m (n and m are positive integer) occurrences of the preceding character.
// For example, /a{1,3}/ matches nothing in "dom", the 'a' in "dam," the first two a's in "daam" and the first three a's in "daaaaaam". Notice that when matching "daaaaaam", the match is "aaa" as the maximum value of m is 3 though the original string had more a's in it.

// [xyz] -> Matches any one from the character set, using a hyphen you can specify a range of characters.
// For example. [uvwxyz] is the same as [u-z]. The match 'y' in "yellow" and the 'u' in "blue".

// [^xyz] -> Matches any character that is not enclosed in the brackets, using a hyphen you can specify a range of characters.
// For example, [^wxyz] is the same as [^w-z]. They initially match 'b' in "blue" and 's' in "specify".

// [\b] -> Matches a backspace. \b Matches a word boundary (position between a word character and a non-word character), such as a space.
// For example, /\bn\w/ matches the 'on' in "sooner"

// \B -> Matches the position which is beyond a word character and a non-word character boundary.
// For example, /\w\Bn/ matches 'on' in "sooner".

// \cX -> Matches a control character (X) in a string. For example, /\cM/ matches control-M in a string.

// \d -> Matches any character which is a digit. Equivalent to [0-9].
// For example, /\d/ or /[0-9]/ matches '2' in "E2 means second example."

// \D -> Matches any character which is a non-digit. Equivalent to [^0-9].
// For example, /\D/ or /[^0-9]/ matches 'C' in "E2 means second example."

// \f -> Matches a Form feed \n Matches a New line \r Matches a Carriage return.

// \s -> Matches any white space character (including tab, new line, carriage return, form feed, vertical tab). [ \t\n\r\f\v].
// For example, /\s\w*/ matches ' apple' in "An apple."

// \S -> Matches any non-white space character. Equivalent to [^ \f\n\r\t\v].
// For example, /\S/\w* matches 'An' in "An apple"

// \t -> Matches a tab

// \v -> Matches a vertical tab.

// \w -> Matches any word character (alphanumeric) including the underscore. Equivalent to [A-Za-z0-9_].
// For example, /\w/ matches 'g' in "green," '8' in "12.86," and '3' in "3G."

// \W -> Matches any non-word character, equivalent to [^A-Za-z0-9_].
// For example, /\W/ or /[^$A-Za-z0-9_]/ matches '$' in "150$"

// \n -> Where n is a positive integer. A back reference to the last sub string matching the n parenthetical in the regular expression
// For example, /red(,)\sgreen\1/ matches 'red, green', in "red, green, white, black."

// \ooctal -> An octal escape value allows to embed ASCII codes into regular expressions.

// \xhex -> An hexadecimal escape value allows to embed ASCII codes into regular expressions. -

// ------------------------------------- STRING OBJECT - METHODS -----------------------------------
// Here the if else if.. statement checks the grade of total marks on some conditions.
//The anchor method() of string object is used to create an HTML anchor that is used as a hypertext target.
var text = "Learn Javascript";
console.log(text.anchor("txtanchor")); //Output "<a name=\"txtanchor\">Learn Javascript</a>"

//The big method() of the string object is used to display a string in a big font as if it were in <big> tag.
var txt = "w3resource.com";
console.log(txt.big()); //Output "<big>w3resource.com</big>"

//The blink method() of the string object is used to blink a string as if it were within a <blink> tag.
var Str = "Blinking Text";
console.log(Str.blink()); //output "<blink>Blinking Text</blink>"

//The bold method() of the string object is used to display a string bold as if it were in a <b> tag.
var txt = "Father of Computer:-Charles Babbage";
console.log(txt.bold()); //output "<b>Father of Computer:-Charles Babbage</b>"

//The italics() method is used to display a string as italics, as if it were within an <i> tag.
var str = "Italics";
console.log(str.italics()); //"<i>Italics</i>"

//The charAt() method of the string object returns the specified character from a string.
var str = "Merits Of Computer Use";
console.log("First character is:" + str.charAt(0)); //"The first character is: M"
console.log("Seventh character is:" + str.charAt(7)); //"The seventh character is: O"

//The concat() method is used to join the text of two or more strings and returns a new string.
st1 = "Thank You";
st2 = " for visit our site";
st3 = " - W3resouce.com";
st4 = st1.concat(st2, st3);
console.log(st4); //Output "Thank You for visit our site - W3resouce.com"

//The fixed() method is used to display a string in fixed-pitch font as if it were in a <tt> tag.
var str = "Learn Javascript Easily";
console.log(str.fixed()); //Output "<tt>Learn Javascript Easily</tt>"

//The indexOf() method returns the index within the calling string object of the first occurrence of the specified value, starting the search at startIndex. It returns -1 if the value is not found.
var Str = "Brave new world";
console.log(
  "The index of the first w from the beginning is " + Str.indexOf("w")
);
//Output "The index of the first w from the beginning is 8"
console.log("The index of 'new' from the beginning is " + Str.indexOf("new"));
//output "The index of 'new' from the beginning is 6"

//The lastIndexOf() method returns the index within the calling string object of the last occurrence of the specified value. It returns -1 if not found. The calling string is search in reverse order, starting at startIndex.
var str = "Learn Javascript";
console.log(str.lastIndexOf("Learn")); //Output 0
console.log(str.lastIndexOf("Javascript")); //Output 6
console.log(str.lastIndexOf("Easily")); //Output -1

//The match() method is used to match a regular expression against a string.
str = "abcDdcba";
newArray = str.match(/d/gi);
console.log(newArray);

//The replace() method is used to find a match between a regular expression and a string and replaces the matched substring (within the main string) with a given string.
regex = /brown/gi;
str1 = "The Quick Brown Fox Jumps Over The Lazy Dog";
console.log("Searched string : brown");
console.log("New string : white ");
newstr = str1.replace(regex, "white");
console.log(newstr);

//The search() method is used to search for a match between a regular expression and a specified string. If a match is found, search returns the index of the regular expression inside the string, otherwise it returns -1.
newRe = new RegExp("Fox", "g");
// Define a string.
str1 = "The Quick Brown Fox Jumps Over The Lazy Dog";
// Check whether regular expression exists in the string.
ans = str1.search(newRe);
if (ans == -1) {
  console.log("'Fox' is not found in " + str1);
} else {
  console.log("'Fox' is found in " + str1);
}

//The slice() method is used to extract a section of a string and returns a new string.
str1 = "The Quick Brown Fox Jumps Over The Lazy Dog";
console.log("Make a slice starting position : 4 and end position 8.");
str2 = str1.slice(3, 9);
console.log(str2);

// startWith(), endsWith() includes() methods
var myName = "Christophe Irakoze";
console.log(myName.startsWith("Chris")); // true
console.log(myName.startsWith("Chris", 5)); //
console.log(myName.endsWith("oze")); // true
console.log(myName.endsWith("ophe", 10)); // at index 10 return true
console.log(myName.includes("ophe")); // true
