const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./Schema/User");
const { authenticateToken, generateAccessToken } = require("./middleware");
const app = express();
const userRouter = require("./routes/users");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongourl =
  "mongodb+srv://kheersagar:ZfaiWuKFV2KFprID@busspass.ineve.mongodb.net/BussPass?authSource=admin&replicaSet=atlas-scp85c-shard-0&readPreference=primary&ssl=true";

mongoose.connect(mongourl, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mongoDb connection succesfull");
  }
});
// app.post("/home", async (req, res) => {
//   const { username, password } = req.body;
//   console.log(req.body);
//   try {
//     const result = await User.findOne({
//       username: username,
//       password: password,
//     });
//     const payload = {
//       username: result.username,
//       password: result.password,
//     };
//     if (result) {
//       const token = generateAccessToken(payload);
//       res.send({ token });
//     } else {
//       res.status(401).send("No user found");
//     }
//   } catch (err) {
//     res.status(403).send(err.message);
//   }
// });
// app.get("/dashboard", (req, res) => {
//   User.find({}).then((response) => {
//     res.send(response);
//   });
// });
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // console.log(req.body);
  try {
    const result = await User.findOne({
      username: username,
      password: password,
    });
    const payload = {
      username: result.username,
      password: result.password,
    };
    // console.log(result);
    if (result && result.role === "admin") {
      const token = generateAccessToken(payload);
      res.send({ token });
    } else {
      res.status(401).send("No user found");
    }
  } catch (err) {
    res.status(403).send(err.message);
  }
});
app.get("/table", (req, res) => {
  User.find({}).then((response) => {
    res.send(response);
    // console.log(response);
  });
});
app.get("/chart", (req, res) => {
  User.find({}).then((response) => {
    const obj = {};
    response.map((item) => {
      obj[item.branch] = obj[item.branch] ? obj[item.branch] + 1 : 1;
    });
    const result = Object.keys(obj);
    const data={
     result:result,
     obj:obj,
     response:response
    }
    // const result1=Object.values(response);
    // console.log("this is values",result1);
    // console.log("the object is ", result);
    // console.log(obj);
    // console.log(response);
    res.send(data);
  });
});
app.use(authenticateToken);
app.use("/users", userRouter);
app.listen(2700, function () {
  console.log("server is working on port 2700");
});