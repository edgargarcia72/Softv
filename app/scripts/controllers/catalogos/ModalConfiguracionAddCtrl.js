'use strict';

angular
    .module('softvApp')
    .controller('ModalConfiguracionAddCtrl', function($uibModalInstance, $uibModal, CatalogosFactory, $state, $rootScope, ngNotify, Clv_Servicio){

        function initData(){
            CatalogosFactory.GetMuestra_Plazas_ConfiguracionServiciosList(0).then(function(data){
                console.log(data);
                vm.DistribuidorList = data.GetMuestra_Plazas_ConfiguracionServiciosListResult;
            });
        }

        function GetRelComEstCiu(){
            if(vm.Distribuidor != undefined){
                CatalogosFactory.GetDameRelCompaniaEstadoCiudadList(vm.Distribuidor.clv_plaza).then(function(data){
                    console.log(data);
                    vm.RelComEstCiuList = data.GetDameRelCompaniaEstadoCiudadListResult;
                });
            }
            vm.Servicio1List = '';
            vm.Servicio2List = '';
        }

        function GetSerRelComEstCiu1(ObjRelComEstCiu1){
            var ObjSerRelComEstCiu = {
                'clv_plaza': vm.Distribuidor.clv_plaza, 
                'id_compania': ObjRelComEstCiu1.id_compania, 
                'Clv_Estado': ObjRelComEstCiu1.Clv_Estado, 
                'Clv_Ciudad': ObjRelComEstCiu1.Clv_Ciudad, 
                'Clv_Servicio': vm.Clv_Servicio
            };
            CatalogosFactory.GetDameServiciosRelComEdoCd_PorServicio1_NewList(ObjSerRelComEstCiu).then(function(data){
                console.log(data);
                vm.Servicio1List = data.GetDameServiciosRelComEdoCd_PorServicio1_NewListResult;
            });
    
            CatalogosFactory.GetDameServiciosRelComEdoCd_PorServicio2_NewList(ObjSerRelComEstCiu).then(function(data){
                console.log(data);
                vm.Servicio2List = data.GetDameServiciosRelComEdoCd_PorServicio2_NewListResult;
            });
        }

        function GetSerRelComEstCiu2(ObjRelComEstCiu2){
            var ObjSerRelComEstCiu = {
                'clv_plaza': vm.Distribuidor.clv_plaza, 
                'id_compania': ObjRelComEstCiu1, 
                'Clv_Estado': ObjRelComEstCiu1, 
                'Clv_Ciudad': ObjRelComEstCiu1, 
                'Clv_Servicio': vm.Clv_Servicio
            };
            
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;
        vm.Clv_Servicio = Clv_Servicio;
        vm.GetRelComEstCiu = GetRelComEstCiu;
        vm.GetSerRelComEstCiu1 = GetSerRelComEstCiu1;
        vm.AplicaComision = 1;
        initData();
    });