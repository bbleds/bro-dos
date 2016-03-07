"use strict";

app.controller("managementCtrl", ["$http", function($http) {
  const self = this;

  const memberInput = "";

  // method for posting new members to user object in database
  self.saveMember = (member) => {
      $http.post(`/api/userdata/addmember/${member}`)
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
