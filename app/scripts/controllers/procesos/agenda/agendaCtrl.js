'use strict';

angular
  .module('softvApp')
  .controller('agendaCtrl', function (CatalogosFactory, agendaFactory, $localStorage) {
   
    function init(){
      CatalogosFactory.GetPlazaList($localStorage.currentUser.idUsuario).then(function(data){
        vm.PlazaList = data.GetPlazaListResult;
        vm.Plaza = vm.PlazaList[0];
        GetAgendaList();
      });

      agendaFactory.GetSoftv_MuestraSectores().then(function(data){
        console.log(data);
        vm.SectorList = data.GetSoftv_MuestraSectoresResult;
      });

      agendaFactory.GetMuestra_Tecnicos_Agenda($localStorage.currentUser.idUsuario).then(function(data){
        console.log(data);
        vm.TecnicoList = data.GetMuestra_Tecnicos_AgendaResult;
      });

      agendaFactory.GetspConsultaTurnosList().then(function(data){
        console.log(data);
        vm.TurnoList = data.GetspConsultaTurnosListResult;
      });
    }
    
    function GetAgendaList(Opc){
      var ObjAgenda = {
        'idcompania': vm.Plaza.id_compania,
        'ClvUsuario': $localStorage.currentUser.idUsuario,
        'opSetupBoxTarjeta': (Opc == 3 && vm.SetUpBox != undefined)? 2 : 1,
        'CLV_TECNICO': (Opc == 1 && vm.Tecnico != undefined)? vm.Tecnico.clv_tecnico : 0,
        'CONTRATO': (Opc == 1 && vm.Contrato != undefined)? vm.Contrato : 0,
        'Sector': (Opc > 0 && vm.Sector != undefined)? vm.Sector.Clv_Sector : 0,
        'NOMBRE': (Opc == 2 && vm.Nombre != undefined)? vm.Nombre : '',
        'ApellidoPaterno': (Opc == 2 && vm.Paterno != undefined)? vm.Paterno : '',
        'ApellidoMaterno': (Opc == 2 && vm.Materno != undefined)? vm.Materno : '',
        'SetUpBox': (Opc == 3 && vm.SetUpBox != undefined)? vm.SetUpBox : ''
      }
      agendaFactory.GetDesplegarAgenda(ObjAgenda).then(function(data){
        console.log(data);
        vm.AgendaList = data.GetDesplegarAgendaResult;
      });
    }

    var vm = this;
    vm.GetAgendaList = GetAgendaList;
    init();    

  });
