const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  User.associate = models => {
    User.hasMany(models.Recipient, { onDelete: 'CASCADE' });
  };
  User.findByLogin = async login => {
    let loginUser = await User.findOne({
      where: { username: login },
    });
    if (!loginUser) {
      loginUser = await User.findOne({
        where: { emaail: login },
      });
    }
    return loginUser;
  };
  return User;
};
export default user;
