angular
.module('softvApp')
.controller('ModalCajaFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Editar Registro';
vm.Icono = 'fa fa-plus';
vm.cancel = cancel;
});