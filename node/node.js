// This is the root file that receive all data from two files
// REPL Read Eval Print Loop to run node in terminal
// CLI Command Line Interface to run node in cli app
// __dirname;
// __filename;
// require;
// module;

const data = require("./variables"); // Calling all exported elements in data
const funcyi = require("./utils"); // Calling all exported elements  in funcyi

console.log(funcyi(data.paul));
console.log(data);
require("./mind-greneda"); // Running the whole file here to get the output

// Built-In modules are
// os (operating system)
// path
// fs (file system)
// http

//  ---------------------- OS MODULE ----------------------------------
const os = require("os");
const user = os.userInfo();

console.log(user);
console.log(os.uptime());

const currestOS = {
  name: os.type(),
  release: os.release(),
};

console.log(currestOS);

//  ---------------------- PATH MODULE ----------------------------------
const path = require("path");
console.log(path.sep);

const filepath = path.join("../../api", "sample.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "../../api", "sample.txt");
console.log(absolute);

//  ---------------------- FILE SYSTEM ------------------------------------

function generateText() {
  return `
      Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte
  aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique
  datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney
   College, en Virginie, s'est intéressé à un des mots latins les plus obscurs,
   consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages
   de ce mot dans la littérature classique, découvrit la source incontestable du Lorem
    Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
    et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très
     populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.
     Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent
     de la section 1.10.32.
      `;
}

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const readInFile = readFileSync("../../api/sample.txt", "utf-8");
const writeInFile = writeFileSync(
  "../../api/sample.txt",
  " Hello hello Hello Hello"
);

console.log(readInFile, writeInFile);

//  Asynchronous methods are readFile, writeFile,...
// Synchronous methods are readFileSync, writeFileSync,...
// Reading a file

readFile("../../api/sample.txt", "utf-8", (err, result) => {
  if (err) throw err;
  console.log(data);

  //   writeFile("../../api/sample.txt", (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //   });
});
// Writing in a file
console.log(os.constants);

let result = [];
let sum = 0;

function add() {
  if (sum >= 10) {
    console.log(result);
  } else {
    setTimeout(() => {
      sum++;
      result.push(sum);
      console.log(sum);
      add();
    }, 1000);
  }
}

add();
