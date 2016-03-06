"use strict";

app.controller("welcomeCtrl", ["$http", function($http) {
  const self = this;



  $http.get("/api/userdata")
  .then((userData) => {
      self.username = userData.data[0].username;
  });



}]);
