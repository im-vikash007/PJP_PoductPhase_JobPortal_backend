const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");

const User = require("../../models/User");
// @route    POST api/use
// @desc     Register user
// @access   Public
router.post("/register", async (req, res) => {
  // Let's validate the date before move further
  //const validation = registerValidation(req.body);
  const { error } = registerValidation(req.body);
  //res.send(error.details[0].message);
  if (error) return res.status(400).send(error.details[0].message);
  //Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash the Passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
  //res.send('Register');
});
