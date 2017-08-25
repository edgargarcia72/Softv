'use strict';

angular
    .module('softvApp')
    .controller('ModalTiposColoniasFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, TipoColoniaObj){

        function SaveTipoColonia(){
            var TipoColoniaObj = {}
            TipoColoniaObj.IdTipoColonia = vm.IdTipoColonia;
            TipoColoniaObj.TipoColonia = vm.TipoColonia
            CatalogosFactory.UpdateTipoColonia(TipoColoniaObj).then(function(data){
                if(data.UpdateTipoColoniaResult == 1){
                    ngNotify.set('CORRECTO, se guardó el tipo de colonia.', 'success');
                    $state.reload('home.catalogos.tipos_colonias');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al guardar el tipo de colonia.', 'warn');
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdTipoColonia = TipoColoniaObj.IdTipoColonia;
        vm.TipoColonia = TipoColoniaObj.Nombre;
        vm.Titulo = 'Editar Registro - ' + vm.IdTipoColonia;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveTipoColonia = SaveTipoColonia;
        vm.cancel = cancel;

    });