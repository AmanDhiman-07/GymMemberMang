const express = require("express");
const app = express();
const Home = express.Router();
const path = require("path");

// app.set("views", path.join(__dirname, "views"));

// Set view engine
app.set("view engine", "ejs");

Home.get("/", (req, res) => {
  res.render("HomePage");
});

module.exports = Home;
