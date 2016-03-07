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


}]);
