// Import express
const express = require("express");
const app = express();

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

// GET route to display all data
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// GET route to display indexed data
app.get("/pokemon/:index", (req, res) => {
  res.send(pokemon[req.params.index]);
});

// Server listen on port 3000
app.listen(3000, () => {
  console.log("Pokemon Master is listening!");
});
