'use strict';

angular
    .module('softvApp')
    .controller('TiposColoniasCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetTipoColoniaList().then(function(data){
                vm.TipoColoniaList = data.GetTipoColoniaListResult;
                if (vm.TipoColoniaList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddTipoColonia(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalTiposColoniasForm.html',
                controller: 'ModalTiposColoniasFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        function OpenUpdateTipoColonia(TipoColoniaObj){
            var TipoColoniaObj = TipoColoniaObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalTiposColoniasForm.html',
                controller: 'ModalTiposColoniasFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md',
                resolve: {
                    TipoColoniaObj: function () {
                        return TipoColoniaObj;
                    }
                }
            });
        }

        function OpenDeleteTipoColonia(TipoColoniaObj){
            var TipoColoniaObj = TipoColoniaObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalTiposColoniasEliminar.html',
                controller: 'ModalTiposColoniasEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    TipoColoniaObj: function () {
                        return TipoColoniaObj;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenAddTipoColonia = OpenAddTipoColonia;
        vm.OpenUpdateTipoColonia = OpenUpdateTipoColonia;
        vm.OpenDeleteTipoColonia = OpenDeleteTipoColonia;
        initData();
        
    });