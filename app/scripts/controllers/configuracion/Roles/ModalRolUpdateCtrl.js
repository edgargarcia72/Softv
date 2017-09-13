'use strict';
angular
    .module('softvApp')
    .controller('ModalRolUpdateCtrl', function($uibModalInstance, ngNotify, $state, IdRol){
        
        function SaveRol(){

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdRol = IdRol;
        vm.Titulo = 'Editar Rol - ' + vm.IdRol;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.Estado = 'T';
        vm.SaveRol = SaveRol;
        vm.cancel = cancel;
        console.log(vm.IdRol);
    });