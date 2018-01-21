var app = angular.module('computerApp',  ['ui.bootstrap', 'ngSanitize', 'ngAnimate']);

app.controller('computerController', computerCtrl);
function computerCtrl() {
  var vm = this;
  vm.collapse = true;
}

