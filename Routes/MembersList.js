const express = require("express");
const fs = require("fs");
const path = require("path");
const MemberViewList = express.Router();

const MemberList = path.join(__dirname, "..", "data", "MemberData.json");

MemberViewList.get("/members", (req, res) => {
  fs.readFile(MemberList, "utf-8", (err, data) => {
    if (err)
      return res
        .status(500)
        .send("Aba error aa raha ha read file ma use solve kar...");

    let list = [];
    try {
      list = JSON.parse(data);
    } catch (error) {
      list = [];
    }
    res.render("DisplayList", { list });
  });
});

module.exports = MemberViewList;
