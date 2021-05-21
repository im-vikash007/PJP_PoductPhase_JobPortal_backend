const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
var cookies = require("cookie-parser");
var bodyParser = require('body-parser');
dotenv.config();
//import Routes
/*
const registerRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const updateRoute = require("./routes/update");
*/
const userRoute = require("./routes/user");
const companyRoute = require("./routes/company");

/*
 command to start the mongodb: sudo service mongod start
 to check wheter mognodb started or not: sudo service mongod status
 to stop mongodb: sudo service mongod stop
 to check any PORT is available or not: lsof -i :<port no>
 command to free the busy PORT : sudo kill -9 $(sudo lsof -t -i:<port no>)
 command to install joi package (to verify constraints on user input ) : npm install @hapi/joi
*/
// Connect to DB

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => console.log(error));

//middlewares

app.use(cookies());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as templating engine
app.set("view engine", "ejs");

//Route middlewares
/*
app.use("/api/users", registerRoute);
app.use("/api/user", authRoute); // similar as app.get/post('api/user/route-options')
app.use("/api/posts", postRoute);
app.use("/api/update", updateRoute);

*/

app.use("/api/user",userRoute);
app.use("/api/company",companyRoute);


app.listen(3001, (req, res) => {
  console.log("server up and running on port 3001");
});
