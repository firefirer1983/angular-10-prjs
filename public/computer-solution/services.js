(function () {
	angular
		.module('computerApp')
		.factory('computerServices', computerServices);
	function computerServices($http) {
		return {
			getServices: function () {
				return $http.get('/computer/assets/services.json').then(function (rsp) {
					return rsp.data;
				}, function (err) {
					console.log("http get /computer/assets/services.json failed! err:",err);
				});
			}
		}
	}

	angular
		.module('computerApp')
		.factory('locationService', locationService);
	function locationService($http) {
		return {
			getLocations: function () {
				return $http.get('/computer/assets/locations.json').then(function (rsp) {
					return rsp.data;
				}, function (err) {
					console.log("http get /computer/assets/locations.json failed! err:",err);
				});
			}
		}
	}
})();
