'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function AddEstMun(){
            if(vm.Estado != undefined && vm.Estado != 0 &&
               vm.Ciudad != undefined && vm.Ciudad != 0){
                var EstMun = {};
                EstMun.IdEstado = vm.Estado.IdEstado;
                EstMun.IdCiudad = vm.Ciudad.Municipio.IdMunicipio;
                vm.EstMunList.push(EstMun);
                console.log(vm.EstMunList);
            }else{
                ngNotify.set('ERROR, Selecciona un estado y una ciudad.', 'warn');
            }
        }

        function GetCiudadMunicipio(){
            CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.AddEstMun = AddEstMun;
        vm.EstMunList = [];
        vm.cancel = cancel;
        initData();
        
    });