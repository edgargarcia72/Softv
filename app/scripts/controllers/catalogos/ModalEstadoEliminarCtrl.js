'use strict';

angular
    .module('softvApp')
    .controller('ModalEstadoEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, EstadoObj){

        function DeleteEstado(){
            CatalogosFactory.DeleteEstado2_web(vm.IdEstado).then(function(data){
                if(data.DeleteEstado2_webResult == 1){
                    ngNotify.set('CORRECTO, se eliminó el estado.', 'success');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar el estado.', 'warn');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdEstado = EstadoObj.IdEstado;
        vm.Estado = EstadoObj.Nombre;
        vm.DeleteEstado = DeleteEstado;
        vm.cancel = cancel;

    });