'use strict';

angular
    .module('softvApp')
    .controller('ModalColoniaFormUpdateCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Registro';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.cancel = cancel;

    });