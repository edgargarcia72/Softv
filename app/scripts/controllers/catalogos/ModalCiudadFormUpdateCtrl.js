'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, CiudadObj){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
                for(var i = 0; i < vm.EstadoList.length; i++){
                    if(vm.EstadoList[i].IdEstado == vm.IdEstado){
                        vm.Estado = vm.EstadoList[i];
                        break;
                    }
                }
            });
        }

        function SaveCiudad(){
            var CiudadObj = {};
            CiudadObj.Ciudad = vm.Ciudad;
            CiudadObj.IdCiudad = vm.IdCiudad;
            CatalogosFactory.UpdateMunicipio(CiudadObj).then(function(data){
                if(data.UpdateMunicipioResult > 0){
                    ngNotify.set('CORRECTO, se guardó la ciudad.', 'success');
                    $state.reload('home.catalogos.ciudades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al guardar la ciudad.', 'warn');
                }
            });
        }
        
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdCiudad = CiudadObj.IdMunicipio;
        vm.Ciudad = CiudadObj.Nombre;
        vm.IdEstado = CiudadObj.IdEstado;
        vm.Titulo = 'Editar Registro - ' + vm.IdCiudad;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveCiudad = SaveCiudad;
        vm.cancel = cancel;
        initData();

    });