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

const date = new Date();
const currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(currentDate);
// --------------------------------------------------------------------
// ----------------------------------------------------------------

const number = prompt("Number:");
// const number = document.querySelector("#inputnumber");
// const btnCalculate = document.querySelector("#calculate");
// const answer = document.querySelector("#answer");

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
  if (values.operator == "+") {
    console.log(+values.num1 + +values.num2);
  } else if (values.operator == "-") {
    console.log(+values.num1 - +values.num2);
  } else if (values.operator == "*") {
    console.log(+values.num1 * +values.num2);
  } else if (values.operator == "/") {
    console.log(+values.num1 / +values.num2);
  } else {
    alert("No operator Defined");
  }
}

const values = getValues(number);
calc(values);
// btnCalculate.addEventListener("click", () => {
//   if (number != "") {
//     const values = getValues(number);
//     calc(values);
//   } else {
//     answer.innerHTML = `<h3 style="color: red;">No input</h3>`;
//   }
// });
