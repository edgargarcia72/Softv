'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, LocalidadObj){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function SaveLocalidad(){
            var LocalidadObj = {};
            LocalidadObj.IdLocalidad = vm.IdLocalidad;
            LocalidadObj.Localidad = vm.Localidad;
            LocalidadObj.IdCiudad = vm.Ciudad.Municipio.IdMunicipio;
            LocalidadObj.IdEstado = vm.Estado.IdEstado;
            CatalogosFactory.UpdateLocalidad(LocalidadObj).then(function(data){
                if(data.UpdateLocalidadResult > 0){
                    ngNotify.set('CORRECTO, se guardó la localidad.', 'success');
                    $state.reload('home.catalogos.localidades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al guardar la localidad.', 'warn');
                }
            });
        }

        function GetCiudadMunicipio(){
            CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdLocalidad = LocalidadObj.IdLocalidad;
        vm.Localidad = LocalidadObj.Nombre
        vm.Titulo = 'Editar Registro - ' + vm.IdLocalidad;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveLocalidad = SaveLocalidad;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.cancel = cancel;
        initData();

    });