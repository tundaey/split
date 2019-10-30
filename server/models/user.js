import bcrypt from 'bcrypt';

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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42],
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
        where: { email: login },
      });
    }
    return loginUser;
  };

  User.beforeCreate(async userToBeCreated => {
    userToBeCreated.password = await userToBeCreated.generatePasswordHash(); // eslint-disable-line
  });

  User.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    return hashedPassword;
  };

  User.prototype.validatePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  return User;
};
export default user;
