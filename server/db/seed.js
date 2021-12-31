const db = require("./db");
const faker = require("faker");
const Artist = require("./Artist");
const Skill = require("./Skill");

const seed = async () => {
  await db.sync({ force: true });
  const artists = await Promise.all([
    Artist.create({
      name: "Mel",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=7352dbc7d68009e3c5907ba88ff86af7",
    }),
    Artist.create({
      name: "Steve",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=8a67b4149f641baf1dd0cffd9aaedded",
    }),
    Artist.create({
      name: "Wanda",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=c3ad02b4c56a73d312f9ea35ec8bcee8",
    }),
    Artist.create({
      name: "Eddie",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=3a7ca2d4b169ed44c01b1216ee20822f",
    }),
    Artist.create({
      name: "Freddie",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=f7402920909e99b3850e78f13a950f42",
    }),
    Artist.create({
      name: "Lucy",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=cd7ffd8046be024b4d3601f79723d096",
    }),
    Artist.create({
      name: "Donald",
      avatarUrl:
        "https://doodleipsum.com/700/avatar-2?i=0b97563c41e025e6c761db36833159f3",
    }),
  ]);
  const [mel, steve, wanda, eddie, freddie, dom, donald] = artists;
  const skills = await Promise.all([
    Skill.create({ name: "juggling" }),
    Skill.create({ name: "acting" }),
    Skill.create({ name: "singing" }),
    Skill.create({ name: "miming" }),
    Skill.create({ name: "plate spinning" }),
  ]);

  const [juggling, acting, singing, miming, plateSpinning] = skills;

  await mel.setSkills([juggling, miming, plateSpinning]);
  await steve.setSkills([singing, miming]);
  await wanda.setSkills([juggling, plateSpinning, acting]);
  await eddie.setSkills([acting, plateSpinning]);
  await freddie.setSkills([acting, singing]);
  await donald.setSkills([juggling, singing, miming]);
};

module.exports = seed;
