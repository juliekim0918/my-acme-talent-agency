const db = require("./db");
const Sequelize = require("sequelize");
const {
  DataTypes: { STRING },
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
});

module.exports = Artist;
