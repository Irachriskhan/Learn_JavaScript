// import allows you to choose which parts of a file or module to load. In the previous lesson, the examples
// exported add from the math_functions.js file. Here's how you can import it to use in another file:

import { add } from "./math_functions.js";

// You can import more than one item from the file by adding them in the import statement like this:

import { uppercaseString, lowercaseString } from "./string_functions.js";
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File

// Suppose you have a file and you wish to import all of its contents into the current file. This can be done
// with the import * as syntax. Here's an example where the contents of a file named math_functions.js are
// imported into a file in the same directory:
// myMathModule  is just a variable name, you can name it anything
import * as myMathModule from "./math_functions.js";
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

// Import a Default Export
// To import a default export, you need to use a different import syntax. In the following example, add is
// the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
// add here is simply a variable name for whatever the default export of the math_functions.js file is.
// You can use any name here when importing a default.
