'use strict';
angular
  .module('softvApp')
  .controller('usuariosCtrl', function ($state, usuarioFactory, globalService, $uibModal, ordenesFactory) {

    function init() {


      ordenesFactory.getPlazas().then(function (data) {
        vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
        vm.plaza = vm.plazas[0];
        console.log(data.GetMuestra_Compania_RelUsuarioListResult);
        vm.GetList();

      });
    }

    function GetList() {
      var Parametros = {
        'ClvUsuario': (vm.claveusuario === null || vm.claveusuario === undefined || vm.claveusuario === '') ? '' : vm.claveusuario,
        'Nombre': (vm.nombreusuario === null || vm.nombreusuario === undefined || vm.nombreusuario === '') ? '' : vm.nombreusuario,
        'Op': vm.op,
        'idcompania': (vm.plaza === null || vm.plaza === undefined) ? 0 : vm.plaza.id_compania
      };
      console.log(Parametros);
     

      usuarioFactory.GetUsuarioSoftvList(Parametros).then(function (result) {
        vm.usuarios = result.GetUsuarioSoftvListResult;
      });
    }

    var vm = this;
    vm.op = 0;
    init();
    vm.GetList=GetList;


  });
