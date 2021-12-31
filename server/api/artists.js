const express = require("express");
const app = express.Router();
const { Artist, Skill } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.findAll({ include: Skill });
    res.send(artists);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
