'use strict';
angular
    .module('softvApp')
    .controller('ModalRolDeleteCtrl', function($uibModalInstance, ngNotify, $state){
        
        function DeleteRol(){

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.DeleteRol = DeleteRol;
        vm.cancel = cancel;
    });