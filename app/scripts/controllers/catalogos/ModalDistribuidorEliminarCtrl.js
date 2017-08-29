'use strict';

angular
    .module('softvApp')
    .controller('ModalDistribuidorEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, DistribuidorObj){

        function DeleteDistribuidor(){
            CatalogosFactory.DeleteDistribuidor(vm.DeleteDistribuidor).then(function(data){
                console.log(data);
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