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
    console.log("successfully saved ->>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(savedObject);

    res.send({"status":"successful"});
  });


};


module.exports = exportObject;
