var app = angular.module('computerApp',  ['ui.bootstrap', 'ngSanitize', 'ngAnimate', 'ngRoute']);

app.config(routeConfig);
function routeConfig($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'about.html',
			controller: 'AboutController',
			controllerAs: 'aboutCtrl'
		})
		.when('/services/hardware-repair', {
			templateUrl: 'services.html',
			controller: 'ServicesController',
			controllerAs: 'servicesCtrl'
		})
		.when('/services/virus-remove', {
			templateUrl: 'services.html',
			controller: 'ServicesController',
			controllerAs: 'servicesCtrl'
		})
		.when('/services/system-tuneup', {
			templateUrl: 'services.html',
			controller: 'ServicesController',
			controllerAs: 'servicesCtrl'
		})
		.when('/services/list', {
			templateUrl: 'services-list.html',
			controller: 'ServicesController',
			controllerAs: 'servicesCtrl',
			resolve: {
				services: function ($http) {
					return $http.get('/computer/assets/services.json');
				}
			}
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactController',
			controllerAs: 'contactCtrl'
		})
		.otherwise('/home')

}

app.controller('computerController', computerCtrl);
function computerCtrl() {
  var vm = this;
  vm.collapse = true;
}

app.controller('HomeController', homeCtrl);
function homeCtrl() {
	var vm = this;
}

app.controller('AboutController', aboutCtrl);
function aboutCtrl() {
	var vm = this;
}

app.controller('ServicesController', servicesCtrl);
function servicesCtrl(services) {
	var vm = this;
	services.success(function (rsp) {
		console.log("success get json!");
		vm.services = rsp.data;
	});
}

app.controller('ContactController', contactCtrl);
function contactCtrl() {
	var vm = this;
}

app.factory('servicesList', servicesList);
function servicesList($http) {
	return {
		list: function () {
			return $http.get('/assets/services.json').then(function (rsp) {
				return rsp.data;
			}, function (err) {
				console.log("http get /assets/services.json failed!");
			});
		}
	}
}

function getServiceList(serviceList) {
	console.log("getServiceList");
	return serviceList.list();
}