(function () {


	angular
		.module('computerApp')
		.config(routeConfig);
	function routeConfig($stateProvider, $urlRouterProvider) {
		console.log("route config begin!");
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeController',
				controllerAs: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about.html',
				controller: 'AboutController',
				controllerAs: 'aboutCtrl'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'contact.html',
				controller: 'ContactController',
				controllerAs: 'contactCtrl',
				resolve: {
					locations: function (locationService) {
						return locationService.getLocations();
					}
				}
			})
			.state('list', {
				url: '/services/list',
				templateUrl: 'services-list.html',
				controller: 'ListController',
				controllerAs: 'listCtrl',
				resolve: {
					services: function (computerServices) {
						return computerServices.getServices();
					}
				}
			});
		console.log("route config done!");
		$urlRouterProvider.otherwise('/');
	}
})();

