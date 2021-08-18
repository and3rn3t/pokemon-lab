'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - teamId - to - players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  add - teamId - to - players.init({
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'add-teamId-to-players',
  });
  return add - teamId - to - players;
};