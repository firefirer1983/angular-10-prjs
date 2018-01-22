(function () {
	angular
		.module('computerApp')
		.controller('computerController', computerCtrl);
	function computerCtrl() {
		var vm = this;
		vm.collapse = true;
	}

	angular
		.module('computerApp')
		.controller('HomeController', homeCtrl);
	function homeCtrl() {
		var vm = this;
	}

	angular
		.module('computerApp')
		.controller('AboutController', aboutCtrl);
	function aboutCtrl() {
		var vm = this;
	}

	angular
		.module('computerApp')
		.controller('ListController', listCtrl);
	function listCtrl(services) {
		var vm = this;
		vm.services = services;
		console.log("services:",services);
		console.log(services.services);
	}

	angular
		.module('computerApp')
		.controller('ContactController', contactCtrl);
	function contactCtrl(locations) {
		var vm = this;
		vm.locations = locations;
	}
})();