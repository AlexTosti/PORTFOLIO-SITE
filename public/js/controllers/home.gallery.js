var angular = angular || {};

// Home GALLERY Controller

angular.module('app.controller.home.gallery', [])
.controller('HomeGalleryCtrl', function ($scope, $rootScope, $state) {

  console.log('IN GALLERY HOME');
	// $scope.projects = $rootScope.global.projects;
$scope.hover = false;
$scope.showSummary = false;
$scope.currentProject;
$scope.tags = [];
$scope.blurb = '';
$scope.img01 = '';

//FOR BLUE OVERLAY ETC...

$scope.viewSummary = function(id, hovering, index){

    $scope.currentProject = $rootScope.global.projects[index];
    $scope.tags = $scope.currentProject.tags;

    console.log($scope.currentProject);
    console.log($scope.tags);

  if(!hovering){
    console.log('OUT');
    $scope.hover = hovering;
    $scope.showSummary = $scope.hover;
  }else {
    console.log('IN');
    $scope.hover = hovering;
    $scope.tags = $scope.currentProject.tags;
    $scope.blurb = $scope.currentProject.blurb;
    $scope.img01 = $scope.currentProject.img[0];
    $scope.showSummary = $scope.hover;
  }



};
});
