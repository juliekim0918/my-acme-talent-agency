const db = require("./db");
const Sequelize = require("sequelize");
const { Model } = require("sequelize");
const {
  DataTypes: { STRING },
} = Sequelize;

const Skill = db.define("skill", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Skill;
