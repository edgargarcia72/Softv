'use strict';
angular
  .module('softvApp')
  .controller('nuevoUsuarioCtrl', function ($state, usuarioFactory, globalService, $uibModal, $filter, rolFactory, encuestasFactory) {

    this.$onInit = function () {
      rolFactory.GetRolList().then(function (data) {
        vm.Roles = data.GetRolListResult;
        usuarioFactory.GetConsultaIdentificacionUsuario(0, '').then(function (result) {
          console.log(result);
          vm.Indentificaciones = result.GetConsultaIdentificacionUsuarioResult;

          encuestasFactory.GetMuestra_DistribuidoresEncList().then(function (data) {
            console.log(data.GetMuestra_DistribuidoresEncListResult);
            vm.distribuidores = data.GetMuestra_DistribuidoresEncListResult;
          });
        });
      });
    };

    function muestraplazas() {
      encuestasFactory.Muestra_PlazaEnc(vm.distribuidor.Clv_Plaza).then(function (data) {
        console.log(data.GetMuestra_PlazaEncListResult);
        vm.plazas = data.GetMuestra_PlazaEncListResult;
      });

    }
    
    function agregaRelacion(){


    }



    function Guardar() {

      var Parametros = {
        'Clave': 0,
        'Clv_Usuario': vm.Clave,
        'Domicilio': '',
        'Colonia': '',
        'FechaIngreso': $filter('date')(vm.fechaingreso, 'dd/MM/yyyy'),
        'FechaSalida': $filter('date')(vm.fechabaja, 'dd/MM/yyyy'),
        'Activo': vm.activo,
        'Pasaporte': vm.pass2,
        'Clv_TipoUsuario': vm.rol.IdRol,
        'CATV': false,
        'Facturacion': true,
        'Boletos': false,
        'Mizar_AN': 0,
        'RecibeMensaje': vm.recibemensaje,
        'NotaDeCredito': 0,
        'Clv_IdentificacionUsuario': vm.identificacion.Clave,
        'RecibeMensajeDocumentos': 0,
        'Nombre': vm.Nombre
      };

      usuarioFactory.GetAddUsuarioSoftv(Parametros).then(function (data) {
       vm.IdUser=data.GetAddUsuarioSoftvResult.Clave;
      });


      /*vm.Clave
      vm.Nombre
      vm.rol.IdRol
      vm.pass2
      vm.pass1
      vm.identificacion
      vm.fechaingreso
      vm.fechabaja
      vm.activo
      vm.recibemensaje*/
    }


    var vm = this;
    vm.Guardar = Guardar;
    vm.muestraplazas = muestraplazas;
    vm.agregaRelacion=agregaRelacion;
    vm.IdUser=0;

  });
