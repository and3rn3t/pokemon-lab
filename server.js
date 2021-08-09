// Import express
const express = require("express");
const app = express();

// Middleware
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import controllers
app.use("/pokemon", require("./controllers/pokemon.js"));
app.use("/users", require("./controllers/usersController.js"));

// Server listen on port 3000
app.listen(3000, (req, res) => {
  console.log("Pokemon Master is listening!");
});
