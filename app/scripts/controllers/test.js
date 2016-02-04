'use strict';

/**
 * @ngdoc function
 * @name fendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fendApp
 */
angular.module('fendApp')
  .controller('UserCtrl', function ($scope, $http) {
      $http.get('http://localhost:3000/users/56ad70e3dad42ec30433bc3e').
          success(function(data) {
              $scope.obj = data;
          });
  });

