'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function SaveCiudad(){
            var CiudadObj = {};
            CiudadObj.Ciudad = vm.Ciudad;
            CiudadObj.IdEstado = vm.Estado.IdEstado;
            CatalogosFactory.AddMunicipio(CiudadObj).then(function(data){
                if(data.AddMunicipioResult > 0){
                    ngNotify.set('CORRECTO, se añadió una ciudad nueva.', 'success');
                    $state.reload('home.catalogos.ciudades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al añadir una ciudad nueva.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.SaveCiudad = SaveCiudad;
        vm.cancel = cancel;
        initData();

    });