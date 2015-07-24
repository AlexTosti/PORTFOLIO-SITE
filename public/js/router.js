var angular = angular || {};

angular.module('app.router', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      abstract: true,
      url: '/',
		  templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })

    .state('home.gallery', {
      url: '',
      templateUrl: 'views/home.gallery.html',
      controller: 'HomeGalleryCtrl'
    })

    .state('projects', {
      abstract: true,
      url: '/p',
      templateUrl: 'views/project.html'
    })

    // to just view images for each of the projects
    .state('projects.imageGallery', {
      url: '{parent}/gallery?id',
      templateUrl: 'views/projects/project.imageGallery.html',
      controller:''
    })

    //ACTUAL PROJECT PAGES

    //TROPE
    /////////////////////////////////
    .state('projects.trope', {
      url: '{parent}/trope',
      templateUrl: 'views/projects/trope.html',
      controller: 'ProjectCtrl'
    })


    //LITTLEBOXESSSSS
    /////////////////////////////////
    .state('projects.littleboxes', {
      url: '{parent}/littleboxes',
      templateUrl: 'views/projects/little-boxes.html',
      controller: 'ProjectCtrl'
    })

    //RENEITH
    /////////////////////////////////
    .state('projects.reneith', {
      url: '{parent}/reneith',
      templateUrl: 'views/reneith.html',
      controller: 'ProjectCtrl'
    })

    //WRAAAAAAAP BEATZ
    /////////////////////////////////
    .state('projects.wrapbeats', {
      url: '{parent}/wrapbeats',
      templateUrl: 'views/projects/wrapbeats.html',
      controller: 'ProjectCtrl'
    })

    //TRANSPORT SYSTEM
    /////////////////////////////////
    .state('projects.UPT', {
      url: '{parent}/unified-transport',
      templateUrl: 'views/projects/unified-transport.html',
      controller: 'ProjectCtrl'
    })

  $urlRouterProvider.otherwise('/'); // point the deafault to the home

})
