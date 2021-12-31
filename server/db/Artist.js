const db = require("./db");
const Sequelize = require("sequelize");
const {
  DataTypes: { STRING, INTEGER },
} = Sequelize;

const Artist = db.define("artist", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  avatarUrl: {
    type: STRING,
  },
  phone: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
});

module.exports = Artist;
