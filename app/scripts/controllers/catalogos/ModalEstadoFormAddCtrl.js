'use strict';

angular
    .module('softvApp')
    .controller('ModalEstadoFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetPlazaList().then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
            });
        }

        function SaveEstado(){
            var EstadoObj = {};
            EstadoObj.Estado = vm.Estado;
            CatalogosFactory.AddEstado2_web(EstadoObj).then(function(data){
                if(data.AddEstado2_webResult > 0){
                    ngNotify.set('CORRECTO, se añadió un estado nuevo.', 'success');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }else{
                    ngNotify.set('ERROR, al añadir un estado nuevo.', 'warn');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }
            });
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.SaveEstado = SaveEstado;
        vm.cancel = cancel;
        initData();

    });