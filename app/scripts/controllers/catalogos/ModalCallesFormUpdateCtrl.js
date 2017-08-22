'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormUpdateCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Efitar Registro';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.cancel = cancel;

    });