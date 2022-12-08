const express = require("express");
const router = express.Router();
const User = require("../Schema/User");
// const DashData = require("../Schema/DashData");

router.get("/", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }).then((founduser) => {
    if (foundUser) {
      res.json(founduser);
    } else {
      res.send("not found");
    }
  });
});

// router.get("/delete", (req, res) => {
//   User.deleteOne({}, (err, users) => {
//     res.send(users);
//   });
// });
// router.post("/", (req, res) => {
//   User.find({}, function (err, users) {
//     res.send(users);
//   });
// });

module.exports = router;
