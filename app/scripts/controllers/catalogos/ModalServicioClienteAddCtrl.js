'use strict';

angular
    .module('softvApp')
    .controller('ModalServicioClienteAddCtrl', function(CatalogosFactory, $uibModal, $uibModalInstance, ngNotify, $state){
        
        function cancel() {
            console.log('ok');
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Agregar Servicio';
        vm.Icono = 'fa fa-plus';
        vm.cancel = cancel;

    });