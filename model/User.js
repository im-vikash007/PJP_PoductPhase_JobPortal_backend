const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name:{
         type:String,
         rquired: true,
         min: 6,
         max: 255
     },
     email: {
         type:String,
         required: true,
         max:255,
         min:6
     },
     password:{
         type: String,
         required: true,
         max: 1024,
         min: 6
     },
     date: {
         type: Date,
         default: Date.now
     }

});


module.exports = mongoose.model('User',userSchema);// here User: name of collection in database as "users" ,capital letter is converted to lower in name of collection in mongodb