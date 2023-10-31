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
let vowelRegex = /[aeiou]/gi;
let solution = quoteSample.match(vowelRegex); // Change this line

// Match Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of
// typing when you need to match a large range of characters (for example, every letter in the alphabet).
// Fortunately, there is a built-in feature that makes this short and simple.

// Match all the letters in the string quoteSample. Note: Be sure to match both uppercase and lowercase letters.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let solutio = quoteSample.match(alphabetRegex);

// Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. It also
// works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
let jennyStr = "Jenny8675309";
let newRegex = /[a-z0-9]/gi;
jennyStr.match(newRegex);

// Match Single Characters Not Specified
// You could also create a set of characters that you do not want to match. These types of character
// sets are called negated character sets.
// To create a negated character set, you place a caret character (^) after the opening bracket and before
// the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and
// white space are matched - the negated vowel character set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to
// include the appropriate flags in the regex.
let quoteSample1 = "3 blind mice.";
let myRegex1 = /[^aiuoe0-9]/gi;
let result1 = quoteSample1.match(myRegex1);

// Match Characters that Occur One or More Times
// you need to match a character (or group of characters) that appears one or more times in a row. This means it
// occurs at least once, and may be repeated.
// You can use the + character to check if that is the case.
// For example, /a+/g would find one match in abc and return ["a"].
// Because of the +, it would also find a single match in aabc and return ["aa"].
// If it were instead checking the string abab, it would find two matches and
// return ["a", "a"] because the a characters are not in a row - there is a b between them.

let difficultSpelling = "Mississippi";
let myRegex2 = /s+/gi;
let result2 = difficultSpelling.match(myRegex2);

// Match Characters that Occur Zero or More Times

// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches
//  characters that occur zero or more times.
// The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes.
// Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed
// by zero or more lowercase a characters in chewieQuote.
// Your regex does not need flags or character classes, and it should not match any of the other quotes.

const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result3 = chewieQuote.match(chewieRegex);

// Find Characters with Lazy Matching

// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex
// pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest
// possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts
// with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest
// sub-string possible to fit the pattern.
// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted
// regex of /t[a-z]*?i/ returns ["ti"].
// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular
// expressions is completely fine.

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember
// the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<[a-z0-9]*?>/;
let result4 = text.match(myRegex);

// Find One or More Criminals in a Hunt

// Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away,
// but you don't know how many. However, you do know that they stay close together when they are around other
// people. You are responsible for finding all of the criminals at once.
// The regex /z+/ matches the letter z when it appears one or more times in a row.

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is
// represented by the capital letter C.
let reCriminals = /C+/;

// Match Beginning String Patterns

// In an earlier challenge, you used the caret character (^) inside a character set to create a negated
// character set in the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // false

// Match Ending String Patterns
// There is also a way to search for patterns at the end of strings.
// You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // True
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // False

// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of
// character class is common enough that there is a shortcut for it, although it includes a few extra
// characters as well.
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to
// [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character
// class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result5 = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern
// you might want to search for is the opposite of alphanumerics.
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This
// shortcut is the same as [^A-Za-z0-9_].
let shortHand1 = /\W/;
let numbers1 = "42%";
let sentence = "Coding!";
numbers1.match(shortHand1);
sentence.match(shortHand1);
// The first match call would return the value ["%"] and the second would return ["!"].

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let quoteSample3 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result6 = quoteSample3.match(nonAlphabetRegex).length;
