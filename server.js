"use strict";

// --------------- Dependencies
const express = require("express");
const path = require("path");


// envrionment variables
const PORT = process.env.PORT || 3000;


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


// init app
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
