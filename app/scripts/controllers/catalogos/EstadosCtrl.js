'use strict';

angular
    .module('softvApp')
    .controller('EstadosCtrl', function($uibModal){

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
                size: 'md',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenUpdateEstado(){
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
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenDeleteEstado(){
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
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        var vm = this;
        vm.OpenAddEstado = OpenAddEstado;
        vm.OpenUpdateEstado = OpenUpdateEstado;
        vm.OpenDeleteEstado = OpenDeleteEstado;
        
    });