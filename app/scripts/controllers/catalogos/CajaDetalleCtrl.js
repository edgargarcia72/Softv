'use strict';

angular
  .module('softvApp')
  .controller('CajaDetalleCtrl', function (CatalogosFactory, atencionFactory, ngNotify, $state, $stateParams) {

    function init() {
      CatalogosFactory.GetDeepCatalogoCajas($stateParams.id)
        .then(function (data) {
          console.log(data);
          var res = data.GetDeepCatalogoCajasResult;
          vm.descripcion = res.Descripcion;
          vm.ticket = res.ImprimeTickets;
          vm.ip = res.IpMaquina;
          vm.idcompania = res.idcompania;

          vm.impresoratermica = (res.impresoratermica === 1) ? true : false;

          atencionFactory.getPlazas().then(function (data) {
            console.log(data);
            vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
            vm.plazas.forEach(function (item) {
              if (item.id_compania === vm.idcompania) {
                vm.plaza = item;
              }

            });            
            GetSucursales(vm.plaza.id_compania);

          });
        });
    }

    function GetSucursales(clave) {
      CatalogosFactory.GetMUESTRASUCURSALES2(clave)
        .then(function (result) {
          vm.sucursales = result.GetMUESTRASUCURSALES2Result;
          console.log(result.GetMUESTRASUCURSALES2Result);
        });
    }

    var vm = this;
    vm.IdCaja = $stateParams.id;
    vm.Titulo = 'Consultar Caja #' + $stateParams.id;
    vm.block=true;
    init();


  });
