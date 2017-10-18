'use strict';

angular
  .module('softvApp')
  .controller('agendaUpdateCtrl', function (agendaFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope, $localStorage) {
    
    function InitData(){
      var ObjContrato = {
        'ContratoCom': vm.Contrato,
        'Id': 0
      };
      agendaFactory.GetMuestraContratoReal(ObjContrato).then(function(data){
        console.log(data);
        vm.IdContrato = data.GetMuestraContratoRealResult.Contrato;
        console.log(vm.IdContrato);
        var ObjCliente = {
          'CONTRATO': vm.IdContrato,
          'NOMBRE': '',
          'CALLE': '',
          'NUMERO': '',
          'CIUDAD': '',
          'Telefono': '',
          'OP': 0
        };

        agendaFactory.GetMuestra_Tecnicos_Almacen(vm.IdContrato).then(function(data){
          console.log(data);
          vm.TecnicoList = data.GetMuestra_Tecnicos_AlmacenResult;
        });

        agendaFactory.GetCONCITAS($stateParams.cita).then(function(data){
          console.log(data);
          var Cita = data.GetCONCITASResult;
          vm.ClvCita = Cita.Clv_Cita;
          vm.FechaCita = Cita.Fecha;
        });

        agendaFactory.GetBUSCLIPORCONTRATO2(ObjCliente).then(function(data){
          console.log(data);
          var DatosCliente =  data.GetBUSCLIPORCONTRATO2Result;
          vm.NombreCliente = DatosCliente.NomCompleto;
          vm.Calle = DatosCliente.Calle_;
          vm.Numero = DatosCliente.NumExt;
          vm.Colonia = DatosCliente.Colonia_;
          vm.Ciudad = DatosCliente.Ciudad_;
          vm.tipoAtencion = (DatosCliente.SoloInternet == true)? 'T' : 'S';
        });
      });
    }

    var vm = this;
    vm.Titulo = '  Agenda Detalle';
    vm.Contrato = $stateParams.id;
    console.log($stateParams.cita);
    InitData();

  });
