'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, CiudadObj){

        function DeleteCiudad(){
            CatalogosFactory.DeleteMunicipio(vm.IdCiudad).then(function(data){
                if(data.DeleteMunicipioResult > 0){
                    ngNotify.set('CORRECTO, se eliminó la ciudad.', 'success');
                    $state.reload('home.catalogos.ciudades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar la ciudad.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;
        vm.IdCiudad = CiudadObj.IdMunicipio;
        vm.Ciudad = CiudadObj.Nombre;
        vm.IdEstado = CiudadObj.IdEstado;
        vm.DeleteCiudad = DeleteCiudad;

    });