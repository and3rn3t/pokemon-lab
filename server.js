// Import express
const express = require("express");
const app = express();

// Import pokemon data from model

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import controller
app.use("/pokemon", require("./controllers/pokemon.js"));

// Server listen on port 3000
app.listen(3000, (req, res) => {
  console.log("Pokemon Master is listening!");
});
