'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'User',
      lastName: 'Test',
      email: 'testuser@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Hai',
      lastName: 'Quing',
      email: 'haiquing@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
