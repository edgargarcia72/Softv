angular
.module('softvApp')
.controller('ModalCajaFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state,$uibModal){


    


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Nuevo Registro';
vm.Icono = 'fa fa-plus';
vm.cancel = cancel;

});