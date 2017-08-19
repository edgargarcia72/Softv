'use strict';

angular
    .module('softvApp')
    .controller('CiudadesCtrl', function($uibModal){

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
                size: 'md',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenUpdateCiudad(){
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
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenDeleteCiudad(){
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
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        var vm = this;
        vm.OpenAddCiudad = OpenAddCiudad;
        vm.OpenUpdateCiudad = OpenUpdateCiudad;
        vm.OpenDeleteCiudad = OpenDeleteCiudad;
        
    });