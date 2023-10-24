// Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns
// to help you do that matching.
// If you want to find the word the in the string The dog chased the cat, you could use the following regular
// expression: /the/. Notice that quote marks are not required within the regular expression.
// One way to test a regex is using the .test() method.
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let myString = "Hello, my name is Kevin.";
let myRegex = /Kevin/;
let result = myRegex.test(myString);

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

// Match a Literal String with Different Possibilities
// You can search for multiple patterns using the alternation or OR operator: |.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let output = petRegex.test(petString);

// Ignore Case While Matching
// You can match both cases using what is called a flag. There are other flags but here you'll focus on
// the flag that ignores case - the i flag. You can use it by appending it to the regex.
// An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

let myTxt = "freeCodeCamp";
let fccRegex = /freecodEcamp/i;
let answer = fccRegex.test(myTxt);
console.log(answer);

// Extract Matches
// You can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let ans = extractStr.match(codingRegex);
console.log(ans);

// Find More Than the First Match
let testStr = "Twinkle, twinkle, little star";
let ourRegex = /Twinkle/;
testStr.match(ourRegex);

// To search or extract a pattern more than once, you can use the global search flag: g.
// Here match would return ["Repeat"].
let repeatRegex = /Twinkle/gi; // 2 flags g and i
console.log(testStr.match(repeatRegex));

// And here match returns the value ["Twinkle", "twinkle"]

// Match Anything with Wildcard Period

// Sometimes you won't (or don't need to) know the exact characters in your patterns.
//  Luckily, you can save time using the wildcard character: .
// The wildcard is also called dot and period. You can use the wildcard character just like any other
// character in the regex. For example, if you wanted to match hug, huh, hut, and hum,
// you can use the regex /hu./ to match all four words.

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
console.log(unRegex.test(exampleStr)); // true

let humStr = "I'll hum a song";
let huRegex = /hu./;
huRegex.test(humStr); // true

// Match Single Character with Multiple Possibilities
// You can search for a literal pattern with some flexibility with character classes. Character classes allow
// you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog.
//  You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
// Note: Be sure to match both upper- and lowercase vowels.

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a,e,i,o,u]/gi; // Change this line
let solution = quoteSample.match(vowelRegex); // Change this line
