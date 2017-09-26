angular
.module('softvApp')
.controller('ModalAddClusterCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){


    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

var vm = this;
vm.Titulo = 'Nuevo Cluster';
vm.Icono = 'fa fa-plus';
vm.cancel = cancel;
vm.blockdelete1 = true;
});