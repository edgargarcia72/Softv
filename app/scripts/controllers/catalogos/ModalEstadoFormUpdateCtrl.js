'use strict';

angular
    .module('softvApp')
    .controller('ModalEstadoFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, EstadoObj, ngNotify, $state){
        
        function SaveEstado(){
            var EstadoObj = {};
            EstadoObj.IdEstado = vm.IdEstado;
            EstadoObj.Estado = vm.Estado;
            console.log(EstadoObj);
            CatalogosFactory.UpdateEstado2_web(EstadoObj).then(function(data){
                console.log(data);
                ngNotify.set('CORRECTO, se añadió estado nuevo.', 'success');
                $state.reload('home.catalogos.estados');
                cancel();
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdEstado = EstadoObj.IdEstado;
        vm.Estado = EstadoObj.Nombre;
        vm.Titulo = 'Editar Registro - ' + vm.IdEstado;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveEstado = SaveEstado;
        vm.cancel = cancel;

    });