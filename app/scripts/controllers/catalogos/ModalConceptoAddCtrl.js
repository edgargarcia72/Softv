'use strict';

angular
    .module('softvApp')
    .controller('ModalConceptoAddCtrl', function($uibModalInstance, $uibModal, CatalogosFactory, $state, $rootScope, ngNotify){

        function SetOrden(){
            console.log(vm.GeneraOrden);
            if(vm.GeneraOrden == 'Y'){
                vm.ShowOrden = true;
            }
            else if(vm.GeneraOrden == 'N'){
                vm.ShowOrden = false;
            }
        }

        function AddConcepto(){
            cancel();
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.ShowOrden = false;
        vm.SetOrden = SetOrden;
        vm.cancel = cancel;
        vm.AddConcepto = AddConcepto;
    });