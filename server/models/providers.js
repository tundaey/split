'use strict';
module.exports = (sequelize, DataTypes) => {
  const Providers = sequelize.define('Providers', {
    name: DataTypes.STRING
  }, {});
  Providers.associate = function(models) {
    // associations can be defined here
    Providers.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Providers;
};