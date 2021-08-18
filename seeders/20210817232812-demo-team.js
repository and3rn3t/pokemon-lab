"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Teams",
      [
        {
          name: "Blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    {
      return await queryInterface.bulkDelete("Teams", null, {});
    }
  },
};
