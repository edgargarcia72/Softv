'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormUpdateCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Efitar Registro';
        vm.cancel = cancel;

    });