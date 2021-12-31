const db = require("./db");
const Skill = require("./Skill");
const Artist = require("./Artist");
const seed = require("./seed");

Artist.belongsToMany(Skill, { through: "Artist_Skill" });
Skill.belongsToMany(Artist, { through: "Artist_Skill" });

module.exports = {
  db,
  seed,
  Artist,
  Skill,
};
