'use strict';

angular
    .module('softvApp')
    .controller('ModalEstadoFormAddCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.cancel = cancel;

    });