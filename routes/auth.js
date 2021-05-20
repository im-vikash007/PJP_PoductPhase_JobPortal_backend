const router = require("express").Router();
const User = require("../model/User.js");
const { registerValidation, loginValidation } = require("../validation.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Validation

//Login

router.post("/login", async (req, res) => {
  // Let's validate the date before move further
  //const validation = registerValidation(req.body);
  const { error } = loginValidation(req.body);
  //res.send(error.details[0].message);
  if (error) return res.status(400).send(error.details[0].message);
  //Checking if the user is already in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");
  //Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("invalid password");
  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  //res.header('auth-token',token).send(`login success with token: ${token}`);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: process.env.TOKEN_AGE * 1000,
  });
  res.status(200).json({ user: user._id });
});

//logout
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("logout successfully");
});

module.exports = router;
