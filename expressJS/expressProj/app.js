// patch update the specified items only in a row
// put update the whoole row of items

const express = require("express");
const app = express();
const people = require("./routes/people"); // people route
const auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// people route
app.use("/api/people", people);
// login route
app.use("/login", auth);

app.listen(9000, () => {
  console.log("Server listening on port 9000 with success");
});
