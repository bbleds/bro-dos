"use strict";
const mongoose = require("mongoose");

// these will be members that belong to each user

const MemberSchema = mongoose.model("members", mongoose.Schema({
    memberName: String,
    belongsTo: String,
    tasks: []
}));

module.exports = MemberSchema;
