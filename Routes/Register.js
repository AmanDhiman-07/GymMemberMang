const express = require("express");
const fs = require("fs");
const path = require("path");
const Register = express.Router();

const MemberList = path.join(__dirname, "..", "data", "MemberData.json");

// GET register page
Register.get("/register", (req, res) => {
  res.render("Register");
});


// POST registration data
Register.post("/DataPost", (req, res) => {
  const MembersData = req.body;

  fs.readFile(MemberList, "utf-8", (err, data) => {
    let list = [];
    if (!err && data) {
      try {
        list = JSON.parse(data);
      } catch (e) {
        list = [];  
      }
    }
    list.push(MembersData);

    fs.writeFile(MemberList, JSON.stringify(list, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving member data.");
      res.render("Successfull");
    });
  });
});

module.exports = Register;
