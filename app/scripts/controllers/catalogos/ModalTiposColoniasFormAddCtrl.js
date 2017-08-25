'use strict';

angular
    .module('softvApp')
    .controller('ModalTiposColoniasFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function SaveTipoColonia(){
            CatalogosFactory.AddTipoColonia(vm.TipoColonia).then(function(data){
                if(data.AddTipoColoniaResult > 0){
                    ngNotify.set('CORRECTO, se añadió un tipo de colonia nuevo.', 'success');
                    $state.reload('home.catalogos.tipos_colonias');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al añadir un tipo de colonia nuevo.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.SaveTipoColonia = SaveTipoColonia;
        vm.cancel = cancel;

    });