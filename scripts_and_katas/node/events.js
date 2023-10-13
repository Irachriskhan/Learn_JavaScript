// EVENTS in NODE
// Create an event
const eventEmita = require("events");
// const { response } = require("express");
const customEvent = new eventEmita();

// Listen to the event
customEvent.on("response", (name, id) => {
  console.log(`data received ${name} of the id : ${id}`);
});

customEvent.emit("response", "John", 34); // Trigger the event

// Events on server

const http = require("http");
const server = http.createServer();

server.listen(8080, () => {
  console.log("Server is running on port 80");
});

server.on("request", (req, res) => {
  res.end(`data received.......`);
});

server.emit("response");

// Stream is used for : Readable, Writeable, Duplex, Transform
// It used especially in manipulating files
const fs = require("fs");

// We create and write in hello.txt file
// for (let i = 1; i <= 5; i++) {
//   fs.writeFileSync("./hello.txt", `Hello World ${i}\n`, { flag: "a" });
// } // { flag: "a" } prevent the file to overwrite the content

// createReadStream help us to read a file in lightweight way
// default size is 64kb; HighWaterMark - control the size
// const stream = fs.createReadStream("./hello.txt", {
//   highWaterMark: 20000,
//   encoding: "utf-8",
// });

// stream.on("data", (result) => {
//   console.log(result);
// });
// http
//   .createServer((req, res) => {
//     const txt = fs.readFileSync("./hello.txt", "utf-8");
//     res.end(txt);
//   })
//   .listen(9000);

// Application of createReadStream that compress the file
http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./hello.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // getting the file
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(9000);
