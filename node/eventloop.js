let txt = "Dermatoglyphics";

function isIsogram(str) {
  const splittedTxt = str.toLowerCase().split("");
  let sum = 0;

  for (element of splittedTxt) {
    for (letter of splittedTxt) {
      if (letter === element) {
        sum++;
        if (sum === 2) return false;
      }
    }
    sum = 0;
  }
  return true;
}

console.log(isIsogram(txt));

// function isIsogram(str) {
//   return !str || str.length === new Set(str.toLowerCase()).size;
// }

// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }

// function isIsogram(str) {
//   var i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; ++i)
//     for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
//   return true;
// }

// Async patterns are callback, promises, async-await

// for (element of splittedTxt) {
//   for (letter of splittedTxt) {
//     sum++;
//     if (letter === element && sum === 2) return letter;
//   }
// }

const fs = require("fs");
fs.readFile("./sample.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
  }
});

function getText(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject("No path found");
      } else {
        resolve(result);
      }
    });
  });
}

getText("./sample.tx", "utf-8")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//   Async - await()

const goAhead = async () => {
  try {
    const second = await getText("./sample.txt", "utf-8");
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};
goAhead();

// util module
// it works the same as promise method
const { readFile, appendFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);
const updateFilePromise = util.promisify(appendFile);

const start = async () => {
  try {
    const reading = await readFilePromise("./sample.txt", "utf-8");
    console.log(reading);

    const writing = await updateFilePromise("./sample.txt", "I__");
    console.log(writing);
  } catch (error) {
    console.log(error);
  }
};
start();

function getSum(a, b) {
  let y = 0;
  if (a == b) return a;
  else if (a <= b) for (let i = a; i <= b; i++) y += i;
  else for (let i = a; i >= b; i--) y += i;
  return y;
}

getSum(2, 2);

// function GetSum(a, b) {
//   return ((Math.abs(a - b) + 1) * (a + b)) / 2;
// }

// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };

// function GetSum(a, b) {
//   if (a == b) return a;
//   else if (a < b) return a + GetSum(a + 1, b);
//   else return a + GetSum(a - 1, b);
// }

// function findNextSquare(sq) {
//   let x = Math.sqrt(sq);
//   if (x > Math.floor(x) || x < 0) return -1;
//   else return (x + 1) ** 2;
// }
