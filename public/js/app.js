var angular = angular || {};

angular.module('myApp', ['ui.router',
'app.router',
'app.controller.home',
'app.controller.home.gallery',
'app.controller.project',
'ngTouch'

])

.run(function($rootScope) {

  $rootScope.global = {};
	$rootScope.global.projects = [{
		title: 'untitled',
		id: 'untitled'
	},{
		title: 'Wrap Beats',
		id: 'wrapbeats',
    tags: ['interaction design', 'instrument', 'physical computing', 'DIY'],
    blurb: ''
	},{
		title: 'ReNeith',
		id: 'reneith',
    tags: ['street art', 'installation', 'string art'],
    blurb: ''
	},{
		title: 'Little Boxes',
		id: 'littleboxes',
    tags: ['interaction design', 'installation', 'tangible'],
    blurb: 'LITTLE BOXES WAS A REAL TIME, DIGITALLY INTERACTIVE SET OF TIME CAPSULES, PRESENTING INTERTWINED PERSONAL HISTORIES OF PARTICIPANTS, FOCUSING ON EXPLORING DIFFERENT WAYS WE CAN EXPERIENCE OUR PERSONAL ONLINE DATA. ',
    img: ['./media/img_01.JPG']
	}];

	console.log('inRUN');

})
