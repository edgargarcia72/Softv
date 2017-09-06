'use strict';

angular
    .module('softvApp')
    .controller('SucursalesCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetMunicipioList().then(function(data){
                vm.CiudadLista = data.GetMunicipioListResult;
                if (vm.CiudadLista.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddSucursal(){
            var modalInstance = $uibModal.open({
               // animation: true,
                //ariaLabelledBy: 'modal-title',
                //ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/SucursalForm.html',
                controller: 'ModalSucursalFormCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        function OpenUpdateCiudad(IdMunicipio){
            var IdMunicipio = IdMunicipio;
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
                    IdMunicipio: function () {
                        return IdMunicipio;
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
        vm.OpenAddSucursal = OpenAddSucursal;
        vm.OpenUpdateCiudad = OpenUpdateCiudad;
        vm.OpenDeleteCiudad = OpenDeleteCiudad;
        initData();
        
    });