'use strict';

angular
    .module('softvApp')
    .controller('ModalTiposColoniasEliminarCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, TipoColoniaObj){

        function DeleteTipoColonia(){
            CatalogosFactory.DeleteTipoColonia(vm.IdTipoColonia).then(function(data){;
                if(data.DeleteTipoColoniaResult == 1){
                    ngNotify.set('CORRECTO, se eliminó el tipo de colonia.', 'success');
                    $state.reload('home.catalogos.tipos_colonias');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar el tipo de colonia.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdTipoColonia = TipoColoniaObj.IdTipoColonia;
        vm.TipoColonia = TipoColoniaObj.Nombre;
        vm.DeleteTipoColonia = DeleteTipoColonia;
        vm.cancel = cancel;

    });