'use strict';
angular
  .module('softvApp')
  .controller('LoginCtrl', function ($stateParams, authFactory, $location, $localStorage, $window, ngNotify) {
    function initData() {
      if ($localStorage.currentUser) {
        $location.path('/home/dashboard');
      }
    }

    function login() {
      authFactory.login(vm.user, vm.password).then(function (data) {
        if (data) {
          $window.location.reload();
        } else {
          ngNotify.set('Datos de acceso erróneos', 'error');
        }

      });

    }

    var vm = this;
    initData();
    vm.login = login;
  });
