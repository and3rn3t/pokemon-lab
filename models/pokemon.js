"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsToMany(models.User, {
        through: "UserPokemon",
        foreignKey: "pokemonId",
        otherKey: "playerId",
      });
    }
  }
  Pokemon.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
