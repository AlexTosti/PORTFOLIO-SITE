var angular = angular || {};

angular.module('myApp', ['ui.router',
'app.router',
'app.controller.home',
'app.controller.home.gallery',
'app.controller.project',
'ngTouch',
'ngSanitize',
'hc.marked'

])

.run(function($rootScope) {

  $rootScope.global = {};
	$rootScope.global.projects = [{
    title: 'Trope',
		id: 'trope',
    tags: ['interaction design', 'web development', 'web app', 'full stack'],
    blurb: ''
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
		title: 'Imagine',
		id: 'imagine',
    tags: ['interaction design', 'installation', 'public art', 'instruction set for strangers', 'MFADT', '2013'],
    blurb: 'LITTLE BOXES WAS A REAL TIME, DIGITALLY INTERACTIVE SET OF TIME CAPSULES, PRESENTING INTERTWINED PERSONAL HISTORIES OF PARTICIPANTS, FOCUSING ON EXPLORING DIFFERENT WAYS WE CAN EXPERIENCE OUR PERSONAL ONLINE DATA. ',
    img: ['./media/img_01.JPG']
	},{
		title: 'Little Boxes',
		id: 'littleboxes',
    tags: ['interaction design', 'installation', 'tangible', 'networks', 'online data'],
    blurb: 'LITTLE BOXES WAS A REAL TIME, DIGITALLY INTERACTIVE SET OF TIME CAPSULES, PRESENTING INTERTWINED PERSONAL HISTORIES OF PARTICIPANTS, FOCUSING ON EXPLORING DIFFERENT WAYS WE CAN EXPERIENCE OUR PERSONAL ONLINE DATA. ',
    img: ['./media/img_01.JPG']
	},{
		title: 'Sydney\'s Public Transport',
		id: 'UPT',
    tags: ['interaction design', 'interface design', 'unified system', 'user research', 'design proposal'],
    blurb: 'LITTLE BOXES WAS A REAL TIME, DIGITALLY INTERACTIVE SET OF TIME CAPSULES, PRESENTING INTERTWINED PERSONAL HISTORIES OF PARTICIPANTS, FOCUSING ON EXPLORING DIFFERENT WAYS WE CAN EXPERIENCE OUR PERSONAL ONLINE DATA. ',
    imgs: {},
    details: []
	}];

	console.log('inRUN');

})
