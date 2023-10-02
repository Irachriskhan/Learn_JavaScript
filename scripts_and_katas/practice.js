// object
class StudentDetails {
  constructor(dob) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.isMarried = isMarried),
      (this.dob = dob);
  }

  age() {
    th;
    console.log(this.dob);
  }
}

function getDate() {
  setTimeout(() => {
    const today = document.querySelector("#today");
    const date = new Date();
    const currentDate = new Date().toLocaleString();
    // `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:
    // ${date.getMinutes()}:${date.getSeconds()} ${date.getMilliseconds()}`;
    today.innerHTML = currentDate;
    getDate();
  }, 100);
}
getDate();
// --------------------------------------------------------------------
// ----------------------------------------------------------------

// const number = prompt("Number:");

const btnCalculate = document.querySelector("#calculate");

const getValues = function (enteredNumber) {
  let operator = "";
  for (let character of enteredNumber) {
    if (character == "+") {
      operator += character;
    } else if (character == "-") {
      operator += character;
    } else if (character == "*") {
      operator += character;
    } else if (character == "/") {
      operator += character;
    }
  }
  let splitted = enteredNumber.split(operator);
  return { num1: splitted[0], operator: operator, num2: splitted[1] };
};

function calc(values) {
  const answer = document.querySelector("#answer"); //
  if (values.operator == "+") {
    answer.innerHTML = +values.num1 + +values.num2;
  } else if (values.operator == "-") {
    answer.innerHTML = +values.num1 - +values.num2;
  } else if (values.operator == "*") {
    answer.innerHTML = +values.num1 * +values.num2;
  } else if (values.operator == "/") {
    answer.innerHTML = +values.num1 / +values.num2;
  } else {
    alert("No operator Defined");
  }
}

btnCalculate.addEventListener("click", () => {
  const number = document.querySelector("#inputnumber").value;
  if (number != "") {
    const values = getValues(number);
    calc(values);
  } else {
    answer.innerHTML = `<h3 style="color: red;">No input</h3>`;
  }
});

// ---------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

let id = Symbol(123);
let id1 = Symbol(123);
console.log(id.description);

let numbers = [10, 8, 33, 14, 5, 59, 77, 8, 49, 10];
console.log(numbers.length);
let n = "";

for (let i = 1; i <= numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    n += numbers[i] + "-";
  }
}
console.log(n);

// Method is a function included in an object

let student = {
  fname: "Divine",
  gender: "Female",
  // calcAge : function(){}
  // calcAge() {},
  // calcAge: () => {}
  calcAge: (n) => {
    return 2023 - n;
  },
};

console.log(student.fname);
console.log(student.calcAge(2000));

// IIFE Immediatly Invoked Func Expression
let sum = (function (a, b) {
  if (a + b == 80) return true;
})(60, 20);

console.log(sum);

// PROTOTYPE returns an Object
// A prototype is a function that returns an object
// to assign a value we don't use the keyword 'new'

let returnObject = function (fname, lname, age) {
  return { firstName: fname, lastName: lname, dOB: age };
};

let cadeau = returnObject("Cadeau", "Masengesho", 2007);
// console.log(cadeau);

// CONSTRUCTOR
let Identification = function (fname, lname, age) {
  return `${(this.firstName = fname)} ${(this.dOB = age)} ${(this.lastName =
    lname)}`;
};

let fefe = new Identification("Felicien", "M", 2000);
// console.log(fefe);

class Imyirondoro {
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.dOB = age;
  }

  calcAge() {
    return 2023 - this.dOB;
  }
}

let irakoze = new Imyirondoro("Irakoze", "C", 2000);
console.log(irakoze);
console.log(irakoze.calcAge());

// FACTORY Function
// A factory function is a function that returns a new object.
// Use Object.create() to create an object using an existing object as a prototype.
// function createObject(size, stayWith) {
//   return {
//     familySize: size,
//     marriedWith: stayWith,
//   };
// }

// let details = {
//   message() {
//     return this.marriedWith + " has a family of " + this.familySize;
//   },
// };

// let ninaFamily = createObject(6, "John Doe");

// addition 2 numbers, result tuyi multiply na 5.

// function boilingWater(time) {
//   console.log("chop the carrots");
//   setTimeout(() => {
//     console.log("ready to eat!");
//   }, time);
// }

// boilingWater(1000);
// console.log("boiling the carrots");

// for (let i = 0; i < 10; i++) {
//   console.log("Wait...", i);
// }

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const timing = document.querySelector("#timing").value;
  let displayElem = document.querySelector(".processinfo");

  function boilingWater(time) {
    const chop = document.querySelector("#chop");
    chop.innerHTML = "chop the carrots";

    const ready = document.createElement("h4"); // create elem h4
    setTimeout(() => {
      ready.innerHTML = "Ready to Eat!"; // insert txt in h4
      displayElem.appendChild(ready);
      document.body.appendChild(displayElem);
    }, time);
  }

  boilingWater(timing);

  // let p = document.createElement("p"); // create elem p
  // const pTxt = document.createTextNode("Please wait!!"); // create text
  let allP;
  for (let i = 0; i <= 10; i++) {
    allP += `<p>Please wait!! ${i}</p>`;
  }
  displayElem.innerHTML = allP;
  document.body.appendChild(displayElem);
});
