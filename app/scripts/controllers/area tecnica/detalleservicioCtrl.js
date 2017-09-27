'use strict';

angular
  .module('softvApp')
  .controller('detalleservicioCtrl', function (atencionFactory, trabajosFactory, ngNotify, $stateParams) {

    function init() {
      trabajosFactory.GetSoftv_GetTrabajoById($stateParams.id)
        .then(function (result) {

          console.log(result);
          var trabajo = result.GetSoftv_GetTrabajoByIdResult;
          vm.clv_trabajo = trabajo.clv_trabajo;
          vm.clave = trabajo.trabajo;
          vm.titulo = 'Detalle trabajo - ' + vm.clave;
          vm.descripcion = trabajo.descripcion;
          vm.individual = trabajo.puntos;
          vm.proceso = trabajo.sica;
          vm.descarga = trabajo.secobramaterial;
          vm.servicios.forEach(function (item) {
            if (item.Clv_TipSerPrincipal === trabajo.clv_tipser) {
              vm.servicio = item;
            }
          });
          consultamateriales();
        });

    }

    function consultamateriales() {
      trabajosFactory.GetConsultaRelMaterialTrabajos(vm.clv_trabajo)
        .then(function (data) {
          vm.relaciones = data.GetConsultaRelMaterialTrabajosResult;
          console.log(data);
        });
    }

    var vm = this;
    vm.blockdescarga = true;
    vm.blocksave = true;
    vm.blockmateriales = true;
    vm.blockform = true;
    init();

  });
