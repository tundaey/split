const recipient = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
  });
  Recipient.associate = models => {
    Recipient.belongsTo(models.User);
  };
  return Recipient;
};
export default recipient;
