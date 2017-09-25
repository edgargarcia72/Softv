angular
.module('softvApp')
.controller('ModalAddSectorCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Nuevo Sector';
vm.Icono = 'fa fa-plus';
vm.cancel = cancel;
vm.blockdelete1 = true;
});