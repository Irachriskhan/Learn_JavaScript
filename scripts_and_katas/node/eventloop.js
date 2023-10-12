// Async patterns are callback, promises, async-await

// const txt = "abcefjfvdmnj";

// const splittedTxt = txt.split("");

// for (element of splittedTxt) {
//   for (let i = 0; i < splittedTxt.length; i++) {
//     console.log(splittedTxt[i]);
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

    const writing = await updateFilePromise(
      "./sample.txt",
      "I like Javascript"
    );
    console.log(writing);
  } catch (error) {
    console.log(error);
  }
};
start();
