'use strict';
angular
  .module('softvApp')
  .controller('AddTapsCtrl', function (tapFactory, ngNotify, $state) {

    function Init() {
      postes();
      tapFactory.GetMuestraCluster(6, '', '', 0).then(function (result) {
        console.log(result.GetMuestraClusterResult);
        vm.clusters = result.GetMuestraClusterResult;
        getsectores(vm.clusters[0].Clv_cluster);

      });
    }

    function getsectores() {
      tapFactory.GetConSector2(0, '', '', 4, vm.cluster.Clv_cluster).then(function (data) {
        console.log(data);
        vm.sectores = data.GetConSector2Result;
      });
    }

    function getcolonias() {
      tapFactory.GetMuestraColoniaSec(0, vm.sector.Clv_Sector, 1).then(function (data) {
        vm.colonias = data.GetMuestraColoniaSecResult;
      });
    }

    function postes() {
      tapFactory.GetMUESTRAPostes(0).then(function (data) {

        vm.postes = data.GetMUESTRAPostesResult;
      });
    }

    function getcalles() {
      console.log(vm.sector.Clv_Sector, vm.colonia.IdColonia, 0, 0);
      tapFactory.GetMuestraCalleSec(vm.sector.Clv_Sector, vm.colonia.IdColonia, 0, 0).then(function (data) {
        vm.calles = data.GetMuestraCalleSecResult;
        console.log(data);

      });
    }


    function SaveTap() {
      var obj = {
        'clv_sector': vm.sector.Clv_Sector,
        'clv_colonia': vm.colonia.IdColonia,
        'clv_calle': vm.calle.IdCalle,
        'Ingenieria': vm.tap,
        'Salidas': vm.salida,
        'NoCasas': vm.casas,
        'NoNegocios': vm.negocios,
        'NoLotes': vm.lotes,
        'NoServicios': vm.servicios,
        'FrenteANumero': vm.frente,
        'clv_cluster': vm.cluster.Clv_cluster,
        'clv_poste':1
      };

      tapFactory.GetINSERTATap(obj).then(function (data) {
        ngNotify.set('El tap se agregó correctamente', 'success');
        $state.go('home.areatecnica.taps');
      });

    }

    var vm = this;
    Init();
    vm.Titulo = 'Nuevo Tap';
    vm.blocksave=false;
    vm.blockForm=false;
    vm.getsectores = getsectores;
    vm.getcolonias = getcolonias;
    vm.SaveTap = SaveTap;
    vm.getcalles = getcalles;

  });
