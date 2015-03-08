'use strict';

//Setting up route
angular.module('todo').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
      url : '/',
      controller : 'TodoController'
    });

  }]);
