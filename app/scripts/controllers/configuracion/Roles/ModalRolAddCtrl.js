'use strict';
angular
    .module('softvApp')
    .controller('ModalRolAddCtrl', function($uibModalInstance, ngNotify, $state){
        
        function SaveRol(){

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Rol';
        vm.Icono = 'fa fa-plus';
        vm.Estado = 'T';
        vm.SaveRol = SaveRol;
        vm.cancel = cancel;
    });