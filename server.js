"use strict";

// --------------- Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// envrionment variables
const PORT = process.env.PORT || 3000;
const MONGODB_URL = "mongodb://localhost:27017/brodos";
// controllers
const apiCtrl = require("./controllers/api");

// set app
const app = express();

// set template engine to jade
app.set("view engine", "jade");

//use public directory for static files
app.use(express.static(path.join(__dirname, '/public')));


//----------------  Routes
// index route
app.get("/", (req, res) => {
  res.render("index");
});

// logged in route
app.get("/loggedin", (req, res) => {
  res.render("loggedin");
});

// --- Api Routes
app.get("/api/userdata", apiCtrl.getUserData);


// connect to mongodb
mongoose.connect(MONGODB_URL, (err) => {
  if(err) throw err;
  // init app
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
