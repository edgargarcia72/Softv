'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, CalleObj){

        function initData(){
            CatalogosFactory.GetDeepCalle(vm.IdCalle).then(function(data){
                console.log(data);
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdCalle = CalleObj.IdCalle;
        console.log(vm.IdCalle);
        vm.Titulo = 'Efitar Registro';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.cancel = cancel;
        initData();

    });