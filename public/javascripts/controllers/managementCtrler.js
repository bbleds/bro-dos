"use strict";

app.controller("managementCtrl", ["$http", function($http) {
  const self = this;

// ------------- ng-models
  self.memberInput  = "";
  self.userSelected = "";
  self.taskInput = "";


// ------------- Methods
  // method for posting new members to user object in database
  self.saveMember = (member) => {
      $http.post(`/api/userdata/addmember/${member}`)
      .then((data) => {
          console.log(data);
      });
  };

  // method for posting tasks to members
  self.addTask = (selectedUser, task) => {

    const filteredUserSpaces = selectedUser.split(" ").join("%20");
    const filteredTaskSpaces = task.split(" ").join("%20");

    $http.post(`/api/userdata/addtask/${filteredUserSpaces}/${filteredTaskSpaces}`)
    .then((data) => {
        console.log(data);
    });
  };




  // get members from database when this controller is loaded
  $http.get("/api/userdata/usermembers/56db46774637024aa18aa517")
  .then((data) => {
    self.userMembers = data.data;
  });


}]);
