const express = require("express");
const { Rss } = require("react-feather");
const app = express.Router();
const { Artist, Skill, Artist_Skill } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const skills = await Skill.findAll({ include: Artist });
    res.send(skills);
  } catch (error) {
    next(error);
  }
});

app.put("/:skillId", async (req, res, next) => {
  try {
    const skill = await Skill.findByPk(req.params.skillId);
    console.log(req.body);
    await skill.update(req.body);
    res.send(skill);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
