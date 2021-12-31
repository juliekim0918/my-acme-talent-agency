const express = require("express");
const app = express();
const volleyball = require("volleyball");
const path = require("path");
const PORT = process.env.PORT || 3030;
const { db, seed } = require("./db");

app.use(volleyball);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist/")));
app.use("/api/skills", require("./api/skills"));
app.use("/api/artists", require("./api/artists"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: true });
    await seed();
    app.listen(PORT, () =>
      console.log(`
        
            Listening on port ${PORT}

          http://localhost:${PORT}/
        
        `)
    );
  } catch (error) {
    console.log(`There was an error starting up!`, error);
  }
};

init();

module.exports = app;
