'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ash Ketchum",
          username: "ash",
          password: "master",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Misty",
          username: "misty",
          password: "cascade",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          username: "red",
          password: "trainer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
