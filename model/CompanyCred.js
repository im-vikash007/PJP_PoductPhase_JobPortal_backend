const mongoose = require("mongoose");

const companyCred = new mongoose.Schema({
  name:{
     type:String
   } ,
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

module.exports = mongoose.model("CompanyCred", companyCred); // here User: name of collection in database as "users" ,capital letter is converted to lower in name of collection in mongodb
