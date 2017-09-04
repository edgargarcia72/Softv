'use strict'
angular
    .module('softvApp')
    .controller('ServicioAddCtrl', function(CatalogosFactory, $uibModal){

        function SetTipoCobro(){
            console.log(vm.CobroMensual);
            if(vm.CobroMensual == 'Y'){
                vm.ShowCobroMensual = true;
                vm.HideCobroMensual = false;
            }
            else if(vm.CobroMensual == 'N'){
                vm.ShowCobroMensual = false;
                vm.HideCobroMensual = true;
            }
        }
        
        function OpenAddConcepto(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalConceptoForm.html',
                controller: 'ModalConceptoAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }

        var vm = this;
        vm.Titulo = 'Servicio Nuevo';
        vm.ShowCobroMensual = false;
        vm.HideCobroMensual = true;
        vm.SetTipoCobro = SetTipoCobro;
        vm.OpenAddConcepto = OpenAddConcepto;
    });