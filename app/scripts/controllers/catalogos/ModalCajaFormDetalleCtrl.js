angular
.module('softvApp')
.controller('ModalCajaFormDetalleCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Consultar Registro';
vm.Icono = 'fa fa-plus';
vm.cancel = cancel;
vm.blockForm = true;
vm.blocksave = true;
vm.blockcancel = true;
vm.blockdelete = true;
vm.blockreturn = false;
});