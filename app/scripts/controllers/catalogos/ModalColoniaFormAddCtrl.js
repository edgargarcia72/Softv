'use strict';

angular
    .module('softvApp')
    .controller('ModalColoniaFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetTipServList().then(function(data){
                vm.TipoServicioList = data.GetTipServListResult;
            });

            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function GetCiudadMunicipio(){
            if(vm.Estado != undefined){
                CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                    vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
                    vm.LocalidadList = null;
                });
            }else{
                vm.CiudadMunicipioList = null;
                vm.LocalidadList = null;
            }
        }

        function GetLocalidad(){
            if(vm.Ciudad != undefined){
                CatalogosFactory.GetLocalidadRelMun(vm.Ciudad.Municipio.IdMunicipio).then(function(data){
                    console.log(data);
                    vm.LocalidadList = data.GetLocalidadRelMunResult;
                });
            }else{
                vm.LocalidadList = null;
            }
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.RelColList = [];
        vm.RelColViewList = [];
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.cancel = cancel;
        initData();

    });