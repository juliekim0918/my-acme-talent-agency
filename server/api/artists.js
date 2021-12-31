const express = require("express");
const app = express.Router();
const { Artist, Skill, Artist_Skill } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.findAll({ include: Skill });
    res.send(artists);
  } catch (error) {
    next(error);
  }
});

app.delete("/:artistId/:skillId", async (req, res, next) => {
  try {
    const artistSkill = await Artist_Skill.findOne({
      where: {
        artistId: req.params.artistId,
        skillId: req.params.skillId,
      },
    });
    await artistSkill.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
