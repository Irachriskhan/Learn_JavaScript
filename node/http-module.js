const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  res.end("Page NOT FOUND");
});
server.listen(8080);

// NPM
// local dependancies - use only in this particular project
// npm install pkgname

// global dependancies - used in all projects
// npm install --global pkgname

// package json - manifest filr (store important info about proj/pkg)
// it is installed manually in the root folder of te project
// npm init -y (everything default)

// installing nodemon for restarting the server automatically after every change
// npm install nodemon  --save-dev

// In the package.json file add the following changes in the script property
// "start": "",
// "dev": "nodemon app.js"

// to run the file
// npm run dev

// Event loop
// They
