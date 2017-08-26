'use strict';

angular
    .module('softvApp')
    .controller('CiudadesCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetMunicipioList2().then(function(data){
                console.log(data);
                vm.CiudadLista = data.GetMunicipioList2Result;
                if (vm.CiudadLista.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddCiudad(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCiudadForm.html',
                controller: 'ModalCiudadFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        function OpenUpdateCiudad(CiudadObj){
            var CiudadObj = CiudadObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCiudadForm.html',
                controller: 'ModalCiudadFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md',
                resolve: {
                    CiudadObj: function () {
                        return CiudadObj;
                    }
                }
            });
        }

        function OpenDeleteCiudad(CiudadObj){
            var CiudadObj = CiudadObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCiudadEliminar.html',
                controller: 'ModalCiudadEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    CiudadObj: function () {
                        return CiudadObj;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenAddCiudad = OpenAddCiudad;
        vm.OpenUpdateCiudad = OpenUpdateCiudad;
        vm.OpenDeleteCiudad = OpenDeleteCiudad;
        initData();
        
    });