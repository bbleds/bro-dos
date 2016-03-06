"use strict";

const app = angular.module("brodosApp", ["ui.router"]);

// configure app with ui router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // configure routes, controllers are bound to html partials
    $stateProvider
      .state("default", {
        url: '/',
        templateUrl : "html-partials/welcome.html"
      })
      .state("management", {
        url: '/management',
        templateUrl : "html-partials/management.html"
      });

      // if user navigates to route we havent specified, redirect to default state
      $urlRouterProvider.otherwise("/");
});
