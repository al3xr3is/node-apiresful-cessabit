'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('USUARIOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          msg: "Favor inserir em formato de e-mail!"
        },    
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        validate: {
          max: 8,
          msg: "A senha deve conter 8 caracteres"
        },
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        validate: {
          max: 15,
          msg: "Formato de CPF incorreto!"
        },
        defaultValue: '111.111.111-11',
        type: Sequelize.STRING
      },
      datacadastro: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATEONLY
      },
      id_empreendimento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'EMPREENDIMENTOS',
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
    return queryInterface.dropTable('USUARIOs');
  }
};