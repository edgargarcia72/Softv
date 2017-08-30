'use strict';

angular
    .module('softvApp')
    .controller('ModalDistribuidorEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, DistribuidorObj){

        function DeleteDistribuidor(){
            CatalogosFactory.DeleteDistribuidor(vm.IdDistribuidor).then(function(data){
                console.log(data);
                if(data.DeleteDistribuidorResult == 1){
                    ngNotify.set('CORRECTO, se eliminó el distribuidor.', 'success');
                    $state.reload('home.catalogos.distribuidores');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar el distribuidor.', 'warn');
                    $state.reload('home.catalogos.distribuidores');
				    cancel();
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdDistribuidor = DistribuidorObj.IdDistribuidor;
        vm.Distribuidor = DistribuidorObj.Nombre;
        vm.DeleteDistribuidor = DeleteDistribuidor;
        vm.cancel = cancel;

    });