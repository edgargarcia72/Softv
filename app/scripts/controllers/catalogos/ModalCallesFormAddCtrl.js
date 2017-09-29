'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormAddCtrl', function(CatalogosFactory, $uibModal, $uibModalInstance, ngNotify, $state){

        function SaveCalle(){
            var objValidaNombreCalle = {
                'nombre': vm.Calle,
                'clv_calle': 0
            };
            CatalogosFactory.AddValidaNombreCalle(objValidaNombreCalle).then(function(data){
                if(data.AddValidaNombreCalleResult == 0){
                    var objCalles_New = {
                        'NOMBRE': vm.Calle
                    };
                    CatalogosFactory.AddCalles_New(objCalles_New).then(function(data){
                        var Clv_Calle = data.AddCalles_NewResult;
                        if(Clv_Calle > 0){
                            ngNotify.set('CORRECTO, se añadió una calle nueva.', 'success');
                            cancel();
                            $state.reload('home.catalogos.calles');
                            OpenUpdateCalle(Clv_Calle);
                        }else{
                            ngNotify.set('ERROR, al añadir una calle nueva.', 'warn');
                            $state.reload('home.catalogos.calles');
                        }
                    });
                }else if(data.AddValidaNombreCalleResult == 1){
                    ngNotify.set('ERROR, ya existe una calle con el mismo nombre.', 'warn');
                }
            });
        }

        function OpenUpdateCalle(IdCalle){
            var IdCalle = IdCalle;
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
                    IdCalle: function () {
                        return IdCalle;
                    }
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nueva Calle';
        vm.Icono = 'fa fa-plus';
        vm.Show = true;
        vm.SaveCalle = SaveCalle;
        vm.cancel = cancel;
    });