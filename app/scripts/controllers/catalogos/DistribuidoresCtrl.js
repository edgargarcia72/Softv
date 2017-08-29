'use strict';

angular
    .module('softvApp')
    .controller('DistribuidoresCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetDistribuidorList().then(function(data){
                vm.DistribuidoresList = data.GetDistribuidorListResult;
                if (vm.DistribuidoresList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }
        function OpenAddDistribuidor(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalDistribuidorForm.html',
                controller: 'ModalDistribuidorFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }

        function OpenUpdateDistribuidor(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalDistribuidorForm.html',
                controller: 'ModalDistribuidorFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenDeleteDistribuidor(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalDistribuidorEliminar.html',
                controller: 'ModalDistribuidorEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        var vm = this;
        vm.OpenAddDistribuidor = OpenAddDistribuidor;
        vm.OpenUpdateDistribuidor = OpenUpdateDistribuidor;
        vm.OpenDeleteDistribuidor = OpenDeleteDistribuidor;
        initData();
        
    });