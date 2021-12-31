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


module.exports = app;
