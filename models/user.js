"use strict";
const mongoose = require("mongoose");

// We want a user
  // each user will have :
      // username
      // members
        // each memeber will have an id
        // each memeber will have tasks
const UserSchema = mongoose.model("users", mongoose.Schema({
    username: String,
    members: {}
}));

module.exports = UserSchema;
