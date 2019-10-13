'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('USUARIOs', 'nivelacesso', {
      allowNull: false,
      type: Sequelize.ENUM('desativado', 'cliente', 'moderador', 'adm', 'root'),
      defaultValue: 'cliente'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('USUARIOs');
  }
};
