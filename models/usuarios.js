'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('USUARIOs', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    datacadastro: DataTypes.DATEONLY,
    id_empreendimento: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.EMPREENDIMENTOs, {foreignKey: 'id_empreendimento'});
    Usuario.hasMany(models.PAGAMENTOs, {foreignKey: 'id_usuario'});
  };
  return Usuario;
};