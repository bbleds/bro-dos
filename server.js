"use strict";

// --------------- Dependencies
const express = require("express");


// envrionment variables
const PORT = process.env.PORT || 3000;


// set app
const app = express();

// set template engine to jade
app.set("view engine", "jade");


// routes
app.get("/", (req, res) => {
  res.render("index");
});

// init app
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
