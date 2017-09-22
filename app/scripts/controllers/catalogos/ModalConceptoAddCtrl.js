'use strict';

angular
    .module('softvApp')
    .controller('ModalConceptoAddCtrl', function($uibModalInstance, $uibModal, CatalogosFactory, $state, $rootScope, ngNotify, Clv_TipoCobro){

        function initData(){
            CatalogosFactory.GetMUESTRASOLOTARIFADOSList().then(function(data){
                console.log(data);
                vm.TipoConceptoList = data.GetMUESTRASOLOTARIFADOSListResult;
                vm.TipoConcepto = vm.TipoConceptoList[0];
            });
        }

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
        vm.Clv_TipoCobro = Clv_TipoCobro;
        console.log(Clv_TipoCobro);
        initData();
    });