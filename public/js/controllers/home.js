var angular = angular || {};

// Home Controller

angular.module('app.controller.home', [])
.controller('HomeCtrl', function ($scope, $rootScope) {

  console.log('IN HOME');
	$scope.projects = $rootScope.global.projects;

});
