const mongoose = require("mongoose");

const userCred = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserCred", userCred); // here User: name of collection in database as "users" ,capital letter is converted to lower in name of collection in mongodb
