
// CODEWARS

/*
// -----------------------KATA 1-------------------------------------------
// A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const findNeedle = function(haystack) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === "needle") return "found the needle at position "+i;
    }
};
console.log(findNeedle(haystack));
"scissors",  --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

/*
// ------------------------------ KATA 2------------------------------------
// Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., 
//   depending on the language ) that receive a list of integers as input, and 
//   return the largest and lowest number in that list, respectively.
//   Example: * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134

const min = function(list){
    let mini = list[0];
    for(let i = 0; i < list.length; i++){
        if (list[i] <= mini) mini = list[i];
    }
    return mini;
};

const max = function(list){
    let maxi = list[0];
    for(let i = 0; i < list.length; i++){
        if (list[i] >= maxi) maxi = list[i];
    }
    return maxi;
};
let list3 = [7416, -7020, 90,5]  
console.log(min(list3));
console.log(max(list3));
*/

/*
// ------------------------------ KATA 3------------------------------------
// String repeat:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output): 6, "I"     -> "IIIIII" ;; 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let a = ""
    for(let i = 0; i < n; i++) a += s
    return a;
}
console.log(repeatStr(7, "v"));
*/

/*
// ------------------------------ KATA 4------------------------------------
// You only need one - Beginner:
// You will be given an array a and a value x. All you need to do is check whether 
// the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
    let test = false;
    for(let i = 0; i < a.length; i++) if(a[i] === x) return test = true; 
    return test
}
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
*/

/*
// ------------------------------ KATA 5------------------------------------
// Sum Arrays:
// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers 
// then you should return 0.
// Example: Input: [1, 5.2, 4, 0, -1] Output: 9.2

function sum (numbers) {
    "use strict";
    let result = 0, i =0;
    for( i in numbers) result += numbers[i];
    return result;
};
console.log(sum([1, 5.2, 4, 0, -1]));

// OTHERS' ANSWERS
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const sum = (a) => a.reduce((s,e) => s += e, 0);

sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};
*/

/*
// ------------------------------ KATA 6------------------------------------
// Convert a Boolean to a String:
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === Boolean(b)) return `${b}`;
  else return  "false";
}
console.log(booleanToString("true"));
console.log(booleanToString("false"));

// OTHERS' ANSWER
function booleanToString(b){
  return b.toString();
}

function booleanToString(b){
  return b ? 'true' : 'false';
}
*/

/*
// ------------------------------ KATA 7------------------------------------
// Transportation on vacation:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let dailyCost = 40, totalCost;
    if (d >= 7) return totalCost = (dailyCost * d) - 50;
    else if(d >= 3) return totalCost = (dailyCost * d) - 20;
    else return totalCost = (dailyCost * d);
}
console.log(rentalCarCost(3))

// OTHERS' ANSWERS
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}
*/

/*
// ------------------------------ KATA 7------------------------------------
// Reversed sequence:
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let list = [];
    // for (let i = 1; i <= n; i++) list.push(i);
    //return list.reverse();
    for (let i = n; i > 0; i--) list.push(i);
    return list;
};
console.log(reverseSeq(5));

// OTHERS' ANSWERS
const reverseSeq2 = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};
*/

/* 
// ------------------------------ KATA 8------------------------------------
// Quarter of the year:
// Given a month as an integer from 1 to 12, return to which 
// quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    return (10 <= month && month <= 12) ? 4  : (7 <= month && month <= 9) ? 3 :
    (4 <= month && month <= 6) ? 2 : (1 <= month && month <= 3) ? 1: "-1";
}
console.log(quarterOf(3)); console.log(quarterOf(8)); console.log(quarterOf(11));
*/

/*
// ------------------------------ KATA 9------------------------------------
// Write a function that takes an array of words and smashes them together into a sentence and 
// returns the sentence. You can ignore any need to sanitize words or add punctuation, but you 
// should add spaces between each word. Be careful, there shouldn't be a space at the beginning 
// or the end of the sentence!
// example: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  let sentence = "";
  // for (let i = 0; i < words.length; i++){
  //   sentence += words[i] + " ";
  // }

  words.forEach(element => {
    sentence += element + " ";
  });
   return sentence.trim();
};

const listOfWords = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(listOfWords));

// OTHERS' ANSWERS

smash = function (words) {
  return words.join(" ");
};

const smash = words => words.join(' ');

function smash (words) {
    "use strict";
    return words.join(' ');
};
*/

/*
// ------------------------------ KATA 10------------------------------------
// String ends with?
// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string). 

const solution = (str, ending) => {
  return (ending == str.slice(-(ending.length))) ? true: (ending == "")? true: false; 
}

// OTHERS' SOLUTIONS

function solution(str, ending){
  return str.endsWith(ending);
}

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}

console.log(solution('abcde', 'cde'));// returns true
console.log(solution('abcde', ''));// returns true
console.log(solution('abc', 'd')); // returns false

*/

// ------------------------------ KATA 11------------------------------------
// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is 
// an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// const isIsogram = (str) => {
//   let cnt = 0, lowerStr = str.toLowerCase();
//   let y = 0;
//   for (let i = 0; i < lowerStr.length; i++){
//     let newStr = lowerStr.slice(i + 1);
//     if (find(lowerStr[y])) cnt += 1;
//     y += 1;
//   }
//   return (cnt > 1) ? false : true;
// }
const isIsogram = (str) => {
  lowerStr = str.toLowerCase();
  let cnt = 0;
  let strTwo
  for (let i = 0; i < lowerStr.length; i++){
    strTwo = lowerStr.slice(i);
    // console.log(strTwo)
    for (let y = 0;  y < strTwo.length; y++){
      if (lowerStr[i] == strTwo[y]) {
        cnt += 1;
        if (cnt >= 1) console.log(false);
      }else{
        console.log("round x")
      }
    }
  }
}
console.log(isIsogram("Dermatoglyphics")); // = true
// console.log(isIsogram("moose")); // = false
// console.log(isIsogram("aba")); // = false
let a = 3;
console.log(++a)



