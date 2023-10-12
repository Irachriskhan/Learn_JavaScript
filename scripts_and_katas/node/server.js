const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url == "/about") {
    res.end("Here is our about page");
  }
  //   res.end(
  //     `<h1>Ooops</h1>
  //     <p>We cannot find the link yu specified</p>`
  //   );
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
