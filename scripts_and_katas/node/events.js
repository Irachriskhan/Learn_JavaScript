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
