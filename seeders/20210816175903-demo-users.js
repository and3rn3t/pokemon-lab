"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ash Ketchum",
          username: "ash",
          password: "master",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Misty",
          username: "misty",
          password: "cascade",
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          username: "red",
          password: "trainer",
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
