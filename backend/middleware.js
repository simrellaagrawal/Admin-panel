require("dotenv").config();

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authToken = req.body.token;
  console.log(authToken);
  if (authToken == null) return res.sendStatus(401);
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403).send(err);
    }
    next();
  });
}

function generateAccessToken(user) {
  try {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { authenticateToken, generateAccessToken };
