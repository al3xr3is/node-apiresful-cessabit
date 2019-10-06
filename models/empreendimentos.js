'use strict';
module.exports = (sequelize, DataTypes) => {
  const EMPREENDIMENTO = sequelize.define('EMPREENDIMENTOs', {
    nome: DataTypes.STRING,
    bloco: DataTypes.CHAR,
    apartamento: DataTypes.CHAR
  }, {});
  EMPREENDIMENTO.associate = function(models) {
    EMPREENDIMENTO.hasOne(models.USUARIOs, {foreignKey: 'id_empreendimento'});
  };
  return EMPREENDIMENTO;
};