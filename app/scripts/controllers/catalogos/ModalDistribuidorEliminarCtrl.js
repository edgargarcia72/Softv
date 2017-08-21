'use strict';

angular
    .module('softvApp')
    .controller('ModalDistribuidorEliminarCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;

    });