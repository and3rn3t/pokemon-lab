// Import router module from express
const express = require("express");
const router = express.Router();

const Pokemon = require("../models").Pokemon;

// GET route to display index page
router.get("/", (req, res) => {
  Pokemon.findAll().then((pokemon) => {
    res.render("index.ejs", {
      pokemons: pokemon,
    });
  });
});

// GET route to create new object
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// GET route to display indexed data
router.get("/:id", (req, res) => {
  Pokemon.findByPk(req.params.id).then((pokemon) => {
    res.render("show.ejs", {
      pokemons: pokemon,
    });
  });
});

// GET route to edit an existing Pokemon
router.get("/:id/edit", function (req, res) {
  Pokemon.findByPk(req.params.id).then((pokemon) => {
    res.render("edit.ejs", {
      pokemons: pokemon,
    });
  });
});

// PUT route to update an existing Pokemon
router.put("/:id", (req, res) => {
  Pokemon.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((pokemon) => {
    res.redirect("/pokemon");
  });
});

// POST route to add new Pokemon
router.post("/", (req, res) => {
  Pokemon.create(req.body).then((newPokemon) => {
    res.redirect("/pokemon");
  });
});

// DELETE route to delete a Pokemon
router.delete("/:id", (req, res) => {
  Pokemon.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/pokemon");
  });
});

module.exports = router;
