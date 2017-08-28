'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, CalleObj){
        
        function DeleteCalle(){
            CatalogosFactory.DeleteCalle(vm.IdCalle).then(function(data){
                if(data.DeleteCalleResult == 2){
                    ngNotify.set('CORRECTO, se eliminó la calle.', 'success');
                    $state.reload('home.catalogos.calles');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar la calle.', 'warn');
                    $state.reload('home.catalogos.calles');
				    cancel();
                }
            });
        }
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdCalle = CalleObj.IdCalle;
        vm.Calle = CalleObj.Nombre;
        vm.DeleteCalle = DeleteCalle;
        vm.cancel = cancel;

    });