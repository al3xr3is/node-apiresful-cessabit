'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('PAGAMENTOs', {
    token: DataTypes.STRING,
    dataemissao: DataTypes.DATEONLY,
    datavencimento: DataTypes.DATEONLY,
    datapagamento: DataTypes.DATEONLY,
    statuspagamento: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_taxa: DataTypes.INTEGER
  }, {});
  Pagamento.associate = function(models) {
    Pagamento.belongsTo(models.USUARIOs, {foreignKey: 'id_usuario'});
    Pagamento.belongsTo(models.TAXAs, {foreignKey: 'id_taxa'});
  };
  return Pagamento;
};