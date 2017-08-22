'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormAddCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.cancel = cancel;

    });