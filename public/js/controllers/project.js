var angular = angular || {};

// Home GALLERY Controller

angular.module('app.controller.project', [])
.controller('ProjectCtrl', function ($scope, $rootScope, Lightbox) {
  console.log('PROJECT CONTROLLER');

  //V A R I A B L E S
  $scope.trope = $rootScope.global.projects[0];
  $scope.imgs = $rootScope.global.projects[0].images;
  console.log($scope.trope);

  //show hide quick and dirty drop down
  $scope.QnD = false;

  ///IMAGE FOR TROPE.. MAKE THIS VAR BASED SO IT PULLS HEADER IMG FROM OBJECT DEPENDING ON WHICH PAGE WE AT
  //'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-home-small.gif'
  $scope.imgURL = $scope.trope.images[30].url;

  $scope.openLightboxModal = function(index){
    Lightbox.openModal($scope.imgs, index);
  };

});
