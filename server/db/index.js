const db = require("./db");
const Skill = require("./Skill");
const Artist = require("./Artist");
const seed = require("./seed");

const Artist_Skill = db.define("Artist_Skill", {});

Artist.belongsToMany(Skill, { through: Artist_Skill });
Skill.belongsToMany(Artist, { through: Artist_Skill });

module.exports = {
  db,
  seed,
  Artist,
  Skill,
  Artist_Skill,
};
