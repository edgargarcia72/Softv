'use strict';

angular
    .module('softvApp')
    .controller('CajasCtrl', function (CatalogosFactory, atencionFactory, $uibModal) {

        function OpenAddCaja(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCajaForm.html',
                controller: 'ModalCajaFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }   

        function OpenDetalleCaja(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCajaForm.html',
                controller: 'ModalCajaFormDetalleCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }   
        
        
             

        function OpenUpdateCaja(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCajaForm.html',
                controller: 'ModalCajaFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }       

        function OpenDeleteCaja(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCajaEliminar.html',
                controller: 'ModalCajaEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm'
            });
        }   

     var vm = this;
     vm.OpenAddCaja = OpenAddCaja;
     vm.OpenUpdateCaja = OpenUpdateCaja;
     vm.OpenDetalleCaja = OpenDetalleCaja;
     vm.OpenDeleteCaja = OpenDeleteCaja;
    });