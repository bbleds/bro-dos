"use strict";
// ---------------- Dependencies
// user model
const userModel = require("../models/user");
// member model
const memberModel = require("../models/userMembers");


// object that we are exporting from this file
const exportObject = {};

// get user data method
exportObject.getUserData = (req, res) => {
  // return all user data from our database
  userModel.find({}, (err, users) => {
    res.send(users);
  });
};

// add member to user
exportObject.addNewMember = (req, res) => {

  // new instance of member
  const newMember = new memberModel({
    memberName: `${req.params.memberName}`,
    belongsTo: "56db46774637024aa18aa517",
    tasks: []
  });

  // save
  newMember.save((err, savedObject) => {
    if(err) throw err;
    res.send({"status":"successful"});
  });
};

// get members connected with a user
exportObject.getUserMembers = (req, res) => {
  // user id is
  console.log(req.params.userId);

  // query the db for all members matching userId
  memberModel.find({"belongsTo": `${req.params.userId}`}, (err, membersFound) => {
    res.send(membersFound);
  });

};


module.exports = exportObject;
