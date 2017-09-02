'use strict';

angular
    .module('softvApp')
    .controller('ModalPlazaFormUpdateCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Registro';
        vm.cancel = cancel;

    });