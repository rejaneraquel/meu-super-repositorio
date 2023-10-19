// src/migrations/[timestamp]-add-column-phone-table-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	// Adicionando coluna 
  await queryInterface.addColumn('Users', 'phoneNum', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
  // Revertendo a adição da coluna  
	await queryInterface.removeColumn('Users', 'phoneNum');
  }
};