"use strict";
// ---------------- Dependencies
// user model
const userModel = require("../models/user");


// object that we are exporting from this file
const exportObject = {};

// get user data method
exportObject.getUserData = (req, res) => {
  // return all user data from our database
  userModel.find({}, (err, users) => {
    res.send(users);
  });
};


module.exports = exportObject;
