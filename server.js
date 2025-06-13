require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
// Import Routes
const Home = require("./Routes/Home");
const Register = require("./Routes/Register");
const MemberViewList = require("./Routes/MembersList");

//Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Add this before your routes:
app.use(express.urlencoded({ extended: true }));

// use Routs
app.use(Home);
app.use(Register);
app.use(MemberViewList);

app.listen(process.env.PORT, () => {
  console.log(`listing Port in http://localhost:${process.env.PORT}`);
});
