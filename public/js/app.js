var angular = angular || {};

angular.module('myApp', ['ui.router',
'app.router',
'app.controller.home',
'app.controller.home.gallery',
'app.controller.project',
'ngTouch',
'ngSanitize',
'hc.marked',
'bootstrapLightbox'

])

.run(function($rootScope) {

  $rootScope.global = {};
	$rootScope.global.projects = [{
    title: 'Trope',
		id: 'trope',
    tags: ['interaction design', 'web development', 'web app', 'full stack'],
    blurb: '',
    images: [
      {
      url: 'http://media.lucymatch.com/TR/img/internet+attributes-01.png'
      },{
      url:'http://media.lucymatch.com/TR/img/internet+attributes-02.png'
      },{
      url: 'http://media.lucymatch.com/TR/img/internet+attributes-03.png'
      },
      { url:'http://media.lucymatch.com/TR/img/internet+attributes-04.png'},
      { url:'http://media.lucymatch.com/TR/img/internet+attributes-05.png'},
      {url:'http://media.lucymatch.com/TR/img/internet+attributes-06.png'},
      {url:'http://media.lucymatch.com/TR/img/internet+attributes-07.png'},
      {url:'http://media.lucymatch.com/TR/img/internet+attributes-08.png'},
      {url:'http://media.lucymatch.com/TR/img/phone-screengrab-remote.PNG'},
      {url:'http://media.lucymatch.com/TR/img/stack-diagram_1.png'},
      {url:'http://media.lucymatch.com/TR/img/stack-diagram_2.png'},
      {url:'http://media.lucymatch.com/TR/img/stack-diagram_3.png'},
      {url:'http://media.lucymatch.com/TR/img/trope-title.png'},
      {url:'http://media.lucymatch.com/TR/img/trope-vinyl.JPG'},
      {url:'http://media.lucymatch.com/TR/img/wireframe_1.png'},
      {url:'http://media.lucymatch.com/TR/img/wireframe_2.png'},
      {url:'http://media.lucymatch.com/TR/img/wireframe_3.png'},
      {url:'http://media.lucymatch.com/TR/img/wireframe_3b.png'},
      {url:'http://media.lucymatch.com/TR/img/wireframe_4.png'},

      {url:'http://media.lucymatch.com/TR/gifs/bury-multi-screen.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/bury-multi-screen2.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/bury-multi-screen3.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/free-throw-scroll-2.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/free-throw-scroll.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/proto-1-1.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/proto-1-2.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/proto-2-splash.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/scroll-eye.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/scroll-eye2.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-bury.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-home-small.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-home.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-menu.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-menu2.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-clean-and-simple-yoga.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-thesis.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-url-smaller.gif'},
      {url:'http://media.lucymatch.com/TR/gifs/trope-url.gif'}
    ] //end of images
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
