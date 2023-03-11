'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Users', // Tables name
      [
        {
          username: 'John Doe1',
          email: 'doe1@gmail.com',
          password: 'aksfjfkasf',
        },
        {
          username: 'John Doe2',
          email: 'doe2@gmail.com',
          password: 'aksfjfkasf',
        },
        {
          username: 'John Doe3',
          email: 'doe3@gmail.com',
          password: 'aksfjfkasf',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
