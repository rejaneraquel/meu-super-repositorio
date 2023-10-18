'use strict';

module.exports = {
 async up (queryInterface, Sequelize) {
     await queryInterface.createTable(
// nome da tabela - plural - 1ª Maiúscula
'Users', {
				// Nome coluna
         id: {
					// Define se é null
           allowNull: false,
					// Incremento automático
           autoIncrement: true,
					// Chave Primária
           primaryKey: true,
					// Tipo de variável
           type: Sequelize.INTEGER
         },
         fullName: {
           type: Sequelize.STRING
         },
         email: {
           type: Sequelize.STRING
         },
         createdAt: {
           allowNull: false,
           type: Sequelize.DATE
         },
         updatedAt: {
           allowNull: false,
           type: Sequelize.DATE
         }
       });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Users');
  }
};

// Após rodar comando CLI: env $(cat .env) npx sequelize db:migrate:undo