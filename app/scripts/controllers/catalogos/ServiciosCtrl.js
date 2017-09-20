'use strict'
angular
    .module('softvApp')
    .controller('ServiciosCtrl', function(CatalogosFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope, $localStorage){

        function initData(){
            CatalogosFactory.GetMuestraTipSerPrincipal_SERList().then(function(data){
                console.log(data);
                vm.TipoServicioList = data.GetMuestraTipSerPrincipal_SERListResult;
            });
            vm.ServicioList = [
                {
                    'Clv_Servicio': 5344,
                    'clv_txt': 'BBBBQ'
                }
            ];
            vm.ConRegistros = true;
        }

        function OpenDeleteServicio(ObjServicio){
            var ObjServicio = ObjServicio;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalServicioDelete.html',
                controller: 'ModalServicioDeleteCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    ObjServicio: function () {
                        return ObjServicio;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenDeleteServicio = OpenDeleteServicio;
        initData();
    });