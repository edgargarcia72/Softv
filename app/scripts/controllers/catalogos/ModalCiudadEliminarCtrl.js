'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadEliminarCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;

    });