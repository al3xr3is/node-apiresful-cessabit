'use strict';
module.exports = (sequelize, DataTypes) => {
  const Taxa = sequelize.define('TAXAs', {
    tipo: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    descricao: DataTypes.STRING
  }, {});
  Taxa.associate = function(models) {
    Taxa.hasMany(models.PAGAMENTOs, {foreignKey: 'id_taxa'});
  };
  return Taxa;
};