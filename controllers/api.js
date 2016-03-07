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

// add a task to a members
exportObject.addMemberTask = (req, res) => {
    console.log("->>>>>>>>>>>>>>>>>>>>>>>>>>> params ");
    console.log(req.params);

    // find member in database,
    // push task into tasks array
        // the conditions to be met in our database query
        const conditions = {
          "memberName": `${req.params.selectedMember}`,
          "belongsTo": "56db46774637024aa18aa517"
        };
        // the operation to be executed when conditions are met
        const updateOperation = {$push: {"tasks": {"taskName": `${req.params.task}`}}};

    // run update query
    memberModel.update(conditions, updateOperation, (err, result) => {
      console.log(result);
      res.send({"status":"successful"});
    });


};


module.exports = exportObject;
