"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pokemons", [
      {
        name: "Bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ivysaur",
        img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venusaur",
        img: "http://img.pokemondb.net/artwork/venusaur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caterpie",
        img: "http://img.pokemondb.net/artwork/caterpie.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Metapod",
        img: "http://img.pokemondb.net/artwork/metapod.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Butterfree",
        img: "http://img.pokemondb.net/artwork/butterfree.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weedle",
        img: "http://img.pokemondb.net/artwork/weedle.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kakuna",
        img: "http://img.pokemondb.net/artwork/kakuna.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beedrill",
        img: "http://img.pokemondb.net/artwork/beedrill.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmander",
        img: "http://img.pokemondb.net/artwork/charmander.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmeleon",
        img: "http://img.pokemondb.net/artwork/charmeleon.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charizard",
        img: "http://img.pokemondb.net/artwork/charizard.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wartortle",
        img: "http://img.pokemondb.net/artwork/wartortle.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blastoise",
        img: "http://img.pokemondb.net/artwork/blastoise.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pichu",
        img: "http://img.pokemondb.net/artwork/pichu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pikachu",
        img: "http://img.pokemondb.net/artwork/pikachu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Raichu",
        img: "http://img.pokemondb.net/artwork/raichu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mimikyu",
        img: "http://img.pokemondb.net/artwork/mimikyu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jigglypuff",
        img: "http://img.pokemondb.net/artwork/jigglypuff.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wigglytuff",
        img: "http://img.pokemondb.net/artwork/wigglytuff.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Meowth",
        img: "http://img.pokemondb.net/artwork/meowth.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Pokemons", null, {});
  },
};
