'use strict';
angular
  .module('softvApp')
  .controller('generalesSistemaCtrl', function ($state, $uibModal, ngNotify, generalesSistemaFactory) {

    function init() {

      generalesSistemaFactory.GetGeneralesPrincipal().then(function(data){
        console.log(data);
      });

      generalesSistemaFactory.GetPeriodoscorte(0,1).then(function (response) {
        console.log(response);
      });

    }

    function Guardarperiodo() {

    }

    function GuardarImpuestos() {

    }
    var vm = this;
    init();
    vm.Guardarperiodo = Guardarperiodo;
    vm.GuardarImpuestos = GuardarImpuestos;

  });
