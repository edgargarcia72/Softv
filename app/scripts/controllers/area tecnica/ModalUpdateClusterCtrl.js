    angular
    .module('softvApp')
    .controller('ModalUpdateClusterCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){
    
    
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    
    var vm = this;
    vm.Titulo = ' Editar  Cluster';
    vm.Icono = 'fa fa-pencil-square-o';
    vm.cancel = cancel;
    vm.blockForm = false;
    vm.blocksave = false;
    vm.blockdelete = false;
    vm.blockdelete1 = true;
    });