'use strict';
angular
  .module('softvApp')
  .controller('generalesSistemaCtrl', function ($state, rolFactory, permisosFactory, globalService, $uibModal, ngNotify) {

    function Guardarperiodo() {

    }
    function GuardarImpuestos() {

    }
    var vm = this;
    vm.Guardarperiodo = Guardarperiodo;
    vm.GuardarImpuestos = GuardarImpuestos;

  });
