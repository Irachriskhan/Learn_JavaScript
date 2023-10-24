const authorize = (req, res, next) => {
  const { user } = req.query;

  console.log("Authorized");
  if (user === "John") {
    req.user = { name: "John", id: 3 };
    return res.send("Welcome Mr the Autorided user");
  } else {
    res.status(401).send("Access denied!");
  }
  next();
};

module.exports = authorize;
