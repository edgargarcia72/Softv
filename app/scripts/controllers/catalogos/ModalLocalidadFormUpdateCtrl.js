'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormUpdateCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Registro';
        vm.cancel = cancel;

    });