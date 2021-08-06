// Import express
const express = require("express");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Array with Pokemon data to use
const pokemon = [
  {
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
  },
  {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
  },
  {
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg",
  },
  {
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg",
  },
  {
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg",
  },
  {
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg",
  },
  {
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg",
  },
];

// Middleware
app.use(express.urlencoded({ extended: true }));

// GET route to display index page
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemons: pokemon,
  });
});

// GET route to create new object
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

// GET route to display indexed data
app.get("/pokemon/:index", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.index],
  });
});

// GET route to edit an existing Pokemon
app.get("/pokemon/:index/edit", function (req, res) {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.index],
    index: req.params.index,
  });
});

// PUT route to update an existing Pokemon
app.put("/pokemon/:index", (req, res) => {
  pokemon[req.params.index] = req.body;
  res.redirect("/pokemon");
});

// POST route to add new Pokemon
app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

// DELETE route to delete a Pokemon
app.delete("/pokemon/:index", (req, res) => {
  pokemon.splice(req.params.index, 1);
  res.redirect("/pokemon");
});

// Server listen on port 3000
app.listen(3000, (req, res) => {
  console.log("Pokemon Master is listening!");
});
