var angular = angular || {};

// Home GALLERY Controller

angular.module('app.controller.project', [])
.controller('ProjectCtrl', function ($scope, $rootScope) {

  console.log('PROJECT CONTROLLER');

  //show hide quick and dirty drop down
  $scope.QnD = false;

  ///IMAGE FOR TROPE.. MAKE THIS VAR BASED SO IT PULLS HEADER IMG FROM OBJECT DEPENDING ON WHICH PAGE WE AT
  $scope.imgURL = 'http://mfadt.parsons.edu/2015/wp-content/uploads/projects/158_img_01.jpg';

});
