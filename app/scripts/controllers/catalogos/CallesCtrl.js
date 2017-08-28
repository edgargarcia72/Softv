'use strict';

angular
    .module('softvApp')
    .controller('CallesCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetCalleList().then(function(data){
                vm.CalleList = data.GetCalleListResult;
                if (vm.CalleList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddCalle(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCalleForm.html',
                controller: 'ModalCalleFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }

        function OpenUpdateCalle(CalleObj){
            var CalleObj = CalleObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCalleForm.html',
                controller: 'ModalCalleFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg',
                resolve: {
                    CalleObj: function () {
                        return CalleObj;
                    }
                }
            });
        }

        function OpenDeleteCalle(CalleObj){
            var CalleObj = CalleObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCalleEliminar.html',
                controller: 'ModalCalleEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    CalleObj: function () {
                        return CalleObj;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenAddCalle = OpenAddCalle;
        vm.OpenUpdateCalle = OpenUpdateCalle;
        vm.OpenDeleteCalle = OpenDeleteCalle;
        initData();
        
    });