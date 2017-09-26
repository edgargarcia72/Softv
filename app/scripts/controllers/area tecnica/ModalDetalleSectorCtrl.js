angular
.module('softvApp')
.controller('ModalDetalleSectorCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Consulta Sector';
vm.Icono = 'fa fa-eye';
vm.cancel = cancel;
vm.blockForm = true;
vm.blocksave = true;
vm.blockdelete = true;
vm.blockdelete1 = true;
});