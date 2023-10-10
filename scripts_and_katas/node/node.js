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
