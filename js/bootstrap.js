'use strict';

var modules = ['ui.router'];
angular.module('todo', modules);


angular.element(document).ready(function() {
  angular.bootstrap(document, ['todo']);
});
