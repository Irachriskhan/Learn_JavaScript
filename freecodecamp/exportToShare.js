// Imagine a file called math_functions.js that contains several functions related to mathematical operations.
//  One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to
//  use this function in several different JavaScript files. In order to share it with these other files,
//  you first need to export it.

export const add = (x, y) => {
  return x + y;
};

// To export many elements
const multiply = (x, y) => {
  return x * y;
};

function subtract() {
  return 50 - 30;
}

export { add, subtract };

// EXPORT DEFAULT 
// There is another export syntax you need to know, known as export default. Usually you will use this syntax
// if only one value is being exported from a file. It is also used to create a fallback value for a file or
// module.

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}

// The first is a named function, and the second is an anonymous function.

// Since export default is used to declare a fallback value for a module or file, you can only have one value 
// be a default export in each module or file. Additionally, you cannot use export default with var, let, or 
// const

export default function subtract(x, y) {
  return x - y;
}