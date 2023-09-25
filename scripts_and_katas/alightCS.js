// -------------- CALLBACK  FUNCTION and Higher Order function ----------------------

// Higher Order function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);



// ------------------------ FOR EACH -------------------------------------
// forEach Method : it return elememnts of an array
// forEach(callbackFn)
// forEach(callbackFn, thisArg)


const people = [
    {name : "Sadiki", age : 23, position : "DevOps"},
    {name : "Khan", age : 18, position : "Front-End"},
    {name : "Chris", age : 30, position : "FullStack"},
    {name : "Aubin", age : 25, position : "Back-end"}
];

people.forEach(function (item){
    console.log(item.age);
});

// ---------- MAP METHOD ------------------------------
let newArray = people.map(function (item){
    return `${item.name}`
});

console.log(newArray);

// -----------------------------------------------------------
const items = ["item1", "item2", "item3"];
const copyItems = [];
// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
console.log(copyItems)

// after
const newListItems = [];
items.forEach((item) => {
  newListItems.push(item);
});
console.log(newListItems)

// ----------------- FIND METHOD -------------------------------
 // Return the first match object or value of an array
let peopleDetails = [
    {id : 123, name : "Sadiki", age : 23, position : "DevOps"},
    {id : 132, name : "Khan", age : 18, position : "Front-End"},
    {id : 333, name : "Chris", age : 30, position : "FullStack"},
    {id : 127, name : "Aubin", age : 23, position : "Back-end"}
];

let firstOccurence = peopleDetails.find(function (personDetails){
    return personDetails.age === 23;
});

console.log(firstOccurence);
console.log(firstOccurence.id);

// ----------------- FILTER METHOD ---------------------------
// Return the array
peopleDetails = [
    {id : 123, name : "Sadiki", age : 23, position : "DevOps"},
    {id : 132, name : "Khan", age : 18, position : "Front-End"},
    {id : 333, name : "Chris", age : 30, position : "FullStack"},
    {id : 127, name : "Aubin", age : 23, position : "Back-end"}
];

let duplicates = peopleDetails.filter(function (personDetails){
    return personDetails.age === 23;
})

console.log(duplicates);
console.log(duplicates[0].id);

// ----------------- FILTER METHOD ---------------------------


// ======================== METHODS CHALLENGE =============================

let students = [
    {id: 1, name: 'peter', score: 80, favoriteSubject: 'Math'}, // student 1
    {id: 2, name: 'John', score: 70, favoriteSubject: 'Geography'}, // student 3
    {id: 3, name: 'Jacques', score: 90, favoriteSubject: 'Biology'}, // student 4
    {id: 4, name: 'Joel', score: 60, favoriteSubject: 'Kirundi'}, // student 5
    {id: 5, name: 'Junior', score: 100, favoriteSubject: 'Engrinsh'} // student 5
];


console.log("----------------------------- Task 1--------------------")
let updatedStudents = students.map(function (item){
    item.role ='student'; // Add role to every index
    return item;
});
console.log(updatedStudents);

console.log("------------------------- Task 2 ----------------------")
let highScores = students.filter(function (student){
    return student.id == 4;
});
console.log(highScores);

console.log("---------------------------  Task 3 ----------------------")
let specificId = students.find(function (student){
    return student.id === 4;
});
console.log(specificId);

console.log("---------------------------  Task 4 ----------------------")
let totalSum = students.reduce(function (sum, student){
    // console.log(item.score)
    return sum += student.score;
}, 0);
let averageScore = totalSum / students.length
console.log(`The average score is equal to ${averageScore}`);

// console.log("---------------------------  Task 5 ----------------------")
// let survey = students.reduce(function (sum, student){
//     // console.log(student.score)
//     return item.score;
// }, 0);

console.log("----- Multiple object properties assignment in Javascript --------")
var obj = {}
var position = {x: 1, y: 2, z: 3}
var rotation = {x: 4, y: 5, z: 6}

obj.position = Object.assign({}, position);
obj.rotation = Object.assign({}, rotation);
console.log(obj)

console.log("----- It is the same as below in ES6 --------")
var object = {position, rotation}
var position = {x: 1, y: 2, z: 3}
var rotation = {x: 4, y: 5, z: 6}

// object = {...object, position, rotation}
// console.log(object)
// console.log("----- It is the same by using for...in loop --------")
for ( const property in position ) {
    object.position[property] = position[property];
    console.log(object)
}

// ======================== MATH AND DATE METHODS  =============================
// ======================== MATH AND DATE METHODS  =============================
console.log("---------- MATH  METHODS -------------")
let squareRooted = Math.sqrt(25)
console.log(squareRooted, '\n', '\n')

const number = 26.56820
let floored = Math.floor(number) // remove decimal values
console.log('number = ' , number,'flooredNumber = ' , floored, '\n', '\n')

let randomedNum = Math.random() // random number between 0 and 1
console.log(randomedNum, '\n', '\n')
let roundRandomedNum = Math.floor(randomedNum * 10 ) // random number between 0 and 1 multiplied by 10 then floored
console.log(roundRandomedNum, '\n', '\n')

console.log("---------- DATE METHODS -------------")
const date = new Date();
const dateOfWeek = date.getDate();
console.log(dateOfWeek, '\n', '\n');
const month = date.getMonth();
console.log(month, '\n', '\n');
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(monthName[month], '\n', '\n');

// Usage  of DOM
// Add / Remove CSS
console.log("---------- JAVASCRIPT  DOM -------------")

// document.body.style.backgroundColor = 'rgb(42, 69, 70)';
// document.body.style.color = '#fff';
// document.getElementById('btn').style.color = 'rgb(42, 69, 200)';

// window object
// console.log(window)

// const btn = document.getElementById('btn') // get the button's html code 
// const elementName = btn.nodeName // get element's name 
// const css = btn.style // get the styles

// console.log('The button in html ', btn)
// console.log('button name', elementName)
// console.log('css property ', css)

const title = document.getElementById('title').style
title.color = 'red'
title.backgroundColor = 'white'
const main = document.getElementById('main').style
main.display = 'grid'
// main.justifyContent = 'space-around'
main.alignContent = 'space-around'
main.height = '200px'
main.backgroundColor = 'green'




// CLASSLIST AND CLASSNAME
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

first.className = 'colors'
second.className = 'colors' // add the color
second.classList.remove('colors') // remove the color
third.classList.add('colors', 'borders') // add other classes to the property

let result = third.classList.contains('colors')
if (result){
    console.log('Yes the class is there')
}else{
    console.log('No the class is not there')
}

// createElement('element')
// createTextNode('text content')
// element.appendChild.(childelement)

const siblings = document.querySelector('#siblings')
// create an empty element
const newDiv = document.createElement('div')
// create text node
const divText = document.createTextNode('This is the NEW DIV from JS')
newDiv.appendChild(divText) // append the content in the div
// Add the created div into the document
document.body.appendChild(newDiv)
newDiv.classList.add('text')

// // Add heading FOUR
const heading4 = document.createElement('h4')
const headingText4 = document.createTextNode('This is the heading FOUR')
heading4.appendChild(headingText4) // append the content in the div
document.body.appendChild(heading4)

// Add heading THREE
const heading3 = document.createElement('h3')
const headingText3 = document.createTextNode('This is the heading THREE')
heading3.appendChild(headingText3) // append the content in the div
document.body.appendChild(heading3)
// insertBefore('element', 'location')

// replaceChild('new', 'old')
const heading2 = document.createElement('h2')
const headingText2 = document.createTextNode('This is the heading TWO replacing the Heading FOUR')
heading2.appendChild(headingText2) // append the content in the div
document.body.replaceChild(heading2, heading4)

// insertBefore(newElement, existingElement)
const heading1 = document.createElement('h1')
const headingText1 = document.createTextNode('This is the heading ONE added bofore the NEW DIV')
heading1.appendChild(headingText1) // append the content in the div
document.body.insertBefore(heading1, newDiv)

// ADDING THE TEXT IN HTML Element
const fullID = document.createElement('div')
fullID.innerHTML = `My Personnal Profile`
document.body.prepend(fullID) // create the div
fullID.remove() // remove the element

// innerHTML VS textContent
const studentsList = document.getElementById('studentsList')

// console.log(studentsList.innerHTML)
// console.log(studentsList.textContent) // NOT SECURE
const ul = document.createElement('ul')
const addedList = `<li>Student 5</li> <li>Student 6</li>`
const moreList = `${addedList}<li>Student 7</li><li>Student 8</li>`
document.body.appendChild(ul)
ul.innerHTML = moreList

studentsList.innerHTML = `${studentsList} ${moreList}`

// ADD EVENTTS IN JAVASCRIPT
// Select elementName
// variable.addEventListener('event', fx)

const nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click', function(){
    alert('The next page is not AVAILABLE')
})

const unorderedList = document.querySelector('.unordered-list')

function getTargetedList(lists){
    console.log('the parent ul\n', lists.currentTarget) // call the whole ul
    console.log('the targeted list is \n', lists.target.textContent) // call the clicked list only
    // lists.forEach(list)
}
unorderedList.addEventListener('click', getTargetedList)

// FORM IN JS: Submit event listner
// prevent event
// get a value

const form = document.querySelector('#form')
const fullName = document.querySelector('#fullnames')
const email = document.querySelector('#email')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')

form.addEventListener('submit', e =>{
    e.preventDefault // prevent the default event of the event ex:browser to reload the console
    console.log(password.value)
    console.log(fullName.value)
    console.log('The form is submitted')
})

// WEB STORAGE : It is an API storage provided by the browser
// session storage and local storage
// Methods are: setItem, getItem, removeItem, clear
// syntax: localStorage.setItem('key', 'value')
sessionStorage.setItem('student', 'John')
localStorage.setItem('student', 'John')
localStorage.setItem('Job', 'DevOps')
localStorage.setItem('Status', 'Married')
localStorage.setItem('age', '25')
localStorage.setItem('dob', '2000')

const maritalStatus = localStorage.getItem('Status') // get an item from Local storage
console.log(maritalStatus)
localStorage.removeItem('age') // remove an item from the local storage
// localStorage.clear() // clear the local storage

// Accessing Local storage with multiple values: JSON.stringfy(), JSON.parse()
const friends = ['john', 'Mimi', 'Paul']
localStorage.setItem('friends', JSON.stringify(friends)) // set items as an array in Local storage
const values = JSON.parse(localStorage.getItem('friends')) // get item in local storage
console.log(values[0])
friends.push('Kezia', 'MUkamana', 'Keza') // adding more values in array
localStorage.setItem('friends', JSON.stringify(friends)) // submit them in the local storage

// setTimeout() - runs a function after waiting defined time in milliseconds
// time is expressed in ms. default time is 0
function greetMe(){
    alert("Hello Chris")
}

setTimeout(greetMe, 10000)

// Pass arguments to setTimeout()
const showScore = (person, score) =>{
    console.log('Dear', person, 'Your score is', score)
}
setTimeout(showScore,1000, 'Khan', 90)

// setInterval() -  repeats a given function at every given time-interval
const inter = setInterval(showScore,2000, 'Chris', 60) // stop the interval
clearInterval(inter)


// ------------------- Callbacks ------------------------------------------------------
// The setTimeout() method is being used in this code to postpone the execution of a function. 
function incrementDigits(num, callback) {
    setTimeout(function() {
        num++;
        console.log(num);
        if (num < 10) {
            incrementDigits(num, callback);
        } else {
            callback();
        }
    }, 1000);
}

function outPout() {
    console.log('done!');
}

incrementDigits(0, outPout); // calling

// --------------------------- Promise ---------------------------------------------
// An async promise operation’s eventual success or failure is represented as a JavaScript object. 
// An asynchronous operation is still in progress while a promise is still unfulfilled. promise fulfillment 
// indicates the successful completion of an asynchronous operation. Using the promise constructor, you could
//  make a promise in the following way:


let promise = new Promise(function (resolve, reject) {
  // create a new promise to resolve or reject
});

// The constructor function takes a function as an argument. This function is called the executor function.

// Promise constructor as an argument

// function(resolve, reject) {
//     // doSomethingHere
// }

const incrementDigitz = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num++;
      console.log(num);
      if (num < 10) {
        resolve(incrementDigitz(num));
      } else {
        resolve("done!");
      }
    }, 1000);
  });
};

incrementDigitz(0).then((res) => console.log(res));

// Other example

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise( (myResolve, myReject) => {
  let x = 0;

  // some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

// ------------------------- ASYNCHRONOUS -------------------------------
// Asynchronous is a mechanism that allow Javascript to execute one function in the background so that it 
// cannot interrupt the control flow of other codes.

boilingWater(1000)
console.log("boiling the carrots");
for (let i = 0; i < 10; i++) {
  console.log("Wait...");
}

function boilingWater(time) {
  console.log("chop the carrots");
  setTimeout(() => {
    console.log("ready to eat!");
  }, time);
}

 // CALLBACKS
let posts = [
  { title: "Post One", body: "This is the post One" },
  { title: "Post Two", body: "This is the post Two" }
];

function getPosts(){
  setTimeout(()=>{
    let outPuts = '';
    posts.forEach((post, index) =>{
      outPuts += `<li>${post.title}</li>`
    });
    // document.body.innerHTML = outPuts;
    console.log(outPuts);
  }, 1000)
}

// Without the callback, the createPost is not executed
function createPost(post, callback){
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// ---------------------------------- PROMISES ------------------------
function getPostz() {
  setTimeout(() => {
    let outPuts = "";
    posts.forEach((post, index) => {
      outPuts += `<li>${post.title}</li>`;
    });
    // document.body.innerHTML = outPuts;
    console.log(outPuts);
  }, 1000);
}

// Without the callback, the createPost is not executed
function createPostz(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error){
        resolve();
      }else{
        reject('ERROR: Something went wrong!')
      }
    }, 2000);
  })
}

createPostz({ title: "Post Three", body: "This is post three" }).then(getPostz);

// --------------------------------------------------------------------
let promises = new Promise((resolve, reject) => {
  let value = true;

  if (value){
    resolve('The data is accessible')
  }else{
    reject('This is an error!')
  }
});

// PROMISES EXPLAINED
promises.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data)
});

// -------------------------------------------------------------------------------

const heading_1 = document.querySelector('.heading_1'); // you can remove the class to make an erroe
const heading_2 = document.querySelector(".heading_2");
const heading_3 = document.querySelector(".heading_3");
const btn = document.querySelector('.btn');
// Calling the then 
// btn.addEventListener('click', () => {
//   addColor(1000, heading_1, "red")
//   .then(() => addColor(2000, heading_2, "green"))
//   .then(() => addColor(1000, heading_3, "blue"));
// })

function addColor(time, element, color){
  return new Promise((resolve, reject) => {
    if (element){
      setTimeout(() => {
        element.style.color = color;
        resolve()
      }, time)
    }else{
      // Accessing the error in Promise
      reject(new Error(`There is no such element ${element}`)) 
    }
  });
}

// --------------------------- AWAIT/ ASYNC -----------------------
// Await waits till promise is settled
// Error handling - try/catch
// Cons: It cannot grab the data reassigned to a variable

// We MODIFIED THE CODES ABOVES
btn.addEventListener("click", async () => {
  try{
    await addColor(1000, heading_1, "red");
    await addColor(2000, heading_2, "green");
    await addColor(1000, heading_3, "blue");
  }catch (error){
    console.log(error) // Catching the ERROR in async
  }
});

// ------------------ AJAX ---------------------------------------------
// AJAX stand for Asynchronous Javascript And XML 
// HTTP Request: communicate btween the client and the server
// API : Application Programming Interface

const gererateText = document.querySelector(".gereratetext");




  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../api/sample.txt"); // Accessing the file
  // console.log(xhr); // the readyState is 1 ==> file is found
  //  xhr.onreadystatechange = function()
  gererateText.addEventListener("click",function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
      console.log("done");
    } else {
      console.log({ status: xhr.status, Text: this.statusText });
    }
    // console.log(xhr);
  });
  xhr.send();
// console.log(xhr);
console.log('---------------------------------------------------------------------------');
