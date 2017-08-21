'use strict';

angular
    .module('softvApp')
    .controller('ModalTiposColoniasEliminarCtrl', function($uibModalInstance){

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;

    });