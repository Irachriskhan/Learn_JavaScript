let people = [
  {
    id: 1,
    name: "Khan",
    age: 25,
    gender: "male",
    origin: "Rwanda",
    mass: 60,
    isMarried: true,
  },
  {
    id: 2,
    name: "Jane",
    age: 20,
    gender: "female",
    origin: "Burundi",
    mass: 65,
    isMarried: false,
  },
  {
    id: 3,
    name: "Jack",
    age: 30,
    gender: "male",
    origin: "Congo",
    mass: 80,
    isMarried: false,
  },
  {
    id: 4,
    name: "Anna",
    age: 20,
    gender: "female",
    origin: "Uganda",
    mass: 50,
    isMarried: true,
  },
  {
    id: 5,
    name: "Paul",
    age: 30,
    gender: "male",
    origin: "Rwanda",
    mass: 80,
    isMarried: true,
  },
  {
    id: 6,
    name: "John",
    age: 25,
    gender: "male",
    origin: "Burundi",
    mass: 73,
    isMarried: false,
  },
  {
    id: 7,
    name: "Kate",
    age: 28,
    gender: "female",
    origin: "Congo",
    mass: 80,
    isMarried: false,
  },
];

let education = [
  {
    id: 1,
    primary: "P6",
    secondary: "A2",
    bachelor: "none",
    employed: true,
  },
  {
    id: 2,
    primary: "P6",
    secondary: "A2",
    bachelor: "BSC",
    employed: false,
  },
  {
    id: 3,
    primary: "P6",
    secondary: "A2",
    bachelor: "BA",
    employed: false,
  },
  {
    id: 4,
    primary: "none",
    secondary: "none",
    bachelor: "none",
    employed: true,
  },
  {
    id: 5,
    primary: "P6",
    secondary: "A2",
    bachelor: "BH",
    employed: false,
  },
  {
    id: 6,
    primary: "P6",
    secondary: "A2",
    bachelor: "none",
    employed: true,
  },
  {
    id: 7,
    primary: "P6",
    secondary: "A2",
    bachelor: "BSC",
    employed: true,
  },
];

// array.at()
// takes an integer value and returns the item at that index, allowing for positive and
// negative integers. Negative integers count back from the last item in the array.
// Syntax: at(index)

let lenght = people.length; // 7
const at1 = people.at(1);
const at2 = people.at(-1);
// console.log(`At method gives`, at1, at2);

// array.concat()
// is used to merge two or more arrays. This method does not change the existing arrays,
// but instead returns a new array.
// Syntax : concat(); concat(value1); concat(value1, value2); concat(value1, value2, /* …, */ valueN)

const mergeArr = function () {
  return people.concat(education);
};
const method2 = mergeArr();
// console.log(`length of concatinated array = , ${method2.length}`);

// copyWithin()
// copies part of this array to another location in the same array and returns this array
// without modifying its length.
// Syntax: copyWithin(target, start); copyWithin(target, start, end);
const array1 = ["a", "b", "c", "d", "e"];
console.log(array1.copyWithin(0, 3, 4)); // output: Array ["d", "b", "c", "d", "e"]
console.log(array1.copyWithin(1, 3)); // output: Array ["d", "d", "e", "d", "e"]

// entries()
// returns a new array iterator object that contains the key/value pairs for each index in the array.

// for ... of
// Iteration of an array
// for (const value of people) {
//   console.log(value);
// }
