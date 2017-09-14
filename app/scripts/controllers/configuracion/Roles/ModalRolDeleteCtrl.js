'use strict';
angular
    .module('softvApp')
    .controller('ModalRolDeleteCtrl', function($uibModalInstance, ngNotify, $state, RolObj){
        
        function DeleteRol(){

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdRol = RolObj.IdRol;
        vm.Rol = RolObj.Nombre;
        vm.DeleteRol = DeleteRol;
        vm.cancel = cancel;
    });