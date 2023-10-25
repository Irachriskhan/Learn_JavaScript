const express = require("express");
const app = express();
const loggers = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
let { people } = require("./data");

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
// });

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });

//   res.json(newProducts);
// });

// app.get("/api/products/:productID", (req, res) => {
//   // const singleProducts = products.find((product) => product.id === 1);
//   // res.json(singleProducts); // http://localhost:3000/api/products/1

//   const { productID } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   );

//   if (!singleProduct) {
//     return res.status(404).send("Product Does Not Exist");
//   }

//   return res.json(singleProduct);
//   // http://localhost:3000/api/products/3
// });

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//   console.log(req.params);
//   res.send("hello world");
// });

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
// const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   sortedProducts = sortedProducts.filter((product) => {
//     return product.name.startsWith(search);
//   });

//   if (limit) {
//     sortedProducts.slice(0, Number(limit));
//   }

//   if (sortedProducts.length < 1) {
//     // res.status(200).send("no products matched your search");
//     return res.status(200).json({ sucess: true, data: [] }); // data from db
//   }

//   res.status(200).json(sortedProducts);
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

// req => moddleware => res

// app.use(loggers.logger); // help us calling loggers everywhere in this page
//the query looks like: http://localhost:3000/api/?user=John
// app.use('/', [loggers.logger, authorize]); // Works where url start with /api
// chaining multipple loggers

// Three types of modules: own, express, third-parties

// app.use(morgan("tiny"));

// app.get("/home", (req, res) => {
//   console.log(req.query);
//   return res.send("Homepage");
// });

// // app.use(loggers.logger); // When positionned here, the homepage cannot access it

// app.get("/about", (req, res) => {
//   res.send("This is about page");
// });

// app.get("/api/products", (req, res) => {
//   res.send("This is the  list of products");
// });

// // ============================================================================
// // ============================================================================
// // CRUD methods

// let { people } = require("./data");

// app.get("/api/people", (req, res) => {
//   console.log("People");
//   // res.status(200).json(people); // access the data file in form of json
//   res.status(200).json({ success: true, data: people });
// });

// // static assets
// app.use(express.static("./methods-public")); // call the whole folder without using get method

// app.post("/api/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) return res.status(400).json({ success: false });
// });

// =====================================================================================
// =====================================================================================

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
