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
            //EstadoObj.IdPlaza = vm.Plaza.IdPlaza;
            console.log(EstadoObj);
            CatalogosFactory.AddEstado2_web(EstadoObj).then(function(data){
                console.log(data);
                ngNotify.set('CORRECTO, se añadió estado nuevo.', 'success');
                $state.reload('home.catalogos.estados');
				cancel();
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