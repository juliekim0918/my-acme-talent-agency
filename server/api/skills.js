const express = require("express");
const app = express.Router();
const { Artist, Skill } = require("../db");

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
    await skill.update(req.body);
    res.send(skill);
  } catch (error) {
    next(error);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const newSkill = await Skill.create(req.body);
    res.send(newSkill);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
