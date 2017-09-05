'use strict';

angular
    .module('softvApp')
    .controller('EstadosCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
                if (vm.EstadoList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddEstado(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalEstadoForm.html',
                controller: 'ModalEstadoFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        function OpenUpdateEstado(EstadoObj){
            var EstadoObj = EstadoObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalEstadoForm.html',
                controller: 'ModalEstadoFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md',
                resolve: {
                    EstadoObj: function () {
                        return EstadoObj;
                    }
                }
            });
        }

        function OpenDeleteEstado(EstadoObj){
            var EstadoObj = EstadoObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalEstadoEliminar.html',
                controller: 'ModalEstadoEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    EstadoObj: function () {
                        return EstadoObj;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenAddEstado = OpenAddEstado;
        vm.OpenUpdateEstado = OpenUpdateEstado;
        vm.OpenDeleteEstado = OpenDeleteEstado;
        
        initData();

    });