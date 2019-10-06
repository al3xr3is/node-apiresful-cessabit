'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PAGAMENTOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataemissao: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATEONLY
      },
      datavencimento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      datapagamento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      statuspagamento: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'USUARIOs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_taxa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TAXAs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATEONLY
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PAGAMENTOs');
  }
};