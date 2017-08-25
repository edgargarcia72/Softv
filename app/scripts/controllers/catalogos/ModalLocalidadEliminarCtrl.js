'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, LocalidadObj){

        function DeleteLocalidad(){
            CatalogosFactory.DeleteLocalidad(vm.IdLocalidad).then(function(data){
                if(data.DeleteLocalidadResult == 2){
                    ngNotify.set('CORRECTO, se eliminó la localida.', 'success');
                    $state.reload('home.catalogos.localidades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar la localidad.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdLocalidad = LocalidadObj.IdLocalidad;
        vm.Localidad = LocalidadObj.Nombre;
        vm.DeleteLocalidad = DeleteLocalidad;
        vm.cancel = cancel;

    });