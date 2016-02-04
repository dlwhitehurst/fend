'use strict';

/**
 * @ngdoc function
 * @name fendApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the fendApp
 */
angular.module('fendApp').controller('UserCtrl', function ($scope, $http) {
		// Simple GET request example:
	  $http.get('http://localhost:3000/users')
	      .then(function(response) {
	          $scope.obj = response.data;
	      });		  		
});
