// Import router module from express
const express = require("express");
const router = express.Router();

const pokemon = require("../models/pokemon_list.js");

// GET route to display index page
router.get("/", (req, res) => {
    console.log(pokemon);
  res.render("index.ejs", {
    pokemons: pokemon,
  });
});

// GET route to create new object
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// GET route to display indexed data
router.get("/:index", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.index],
  });
});

// GET route to edit an existing Pokemon
router.get("/:index/edit", function (req, res) {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.index],
    index: req.params.index,
  });
});

// PUT route to update an existing Pokemon
router.put("/:index", (req, res) => {
  pokemon[req.params.index] = req.body;
  res.redirect("/pokemon");
});

// POST route to add new Pokemon
router.post("/", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

// DELETE route to delete a Pokemon
router.delete("/:index", (req, res) => {
  pokemon.splice(req.params.index, 1);
  res.redirect("/pokemon");
});

module.exports = router;
