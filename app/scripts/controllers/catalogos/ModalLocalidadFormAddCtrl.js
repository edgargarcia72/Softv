'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        /*function AddEstMun(){
            if(vm.Estado != undefined && vm.Estado != 0 &&
               vm.Ciudad != undefined && vm.Ciudad != 0){
                var EstMun = {};
                EstMun.Estado = vm.Estado;
                EstMun.Ciudad = vm.Ciudad.Municipio;
                vm.EstMunList.push(EstMun);
                console.log(vm.EstMunList);
            }else{
                ngNotify.set('ERROR, Selecciona un estado y una ciudad.', 'warn');
            }
        }*/

        function SaveLocalidad(){
            var LocalidadObj = {};
            LocalidadObj.Localidad = vm.Localidad;
            LocalidadObj.IdCiudad = vm.Ciudad.Municipio.IdMunicipio;
            LocalidadObj.IdEstado = vm.Estado.IdEstado;
            CatalogosFactory.AddLocalidad(LocalidadObj).then(function(data){
                if(data.AddLocalidadResult > 0){
                    ngNotify.set('CORRECTO, se añadió una localidad nueva.', 'success');
                    $state.reload('home.catalogos.localidades');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al añadir una localidad nueva.', 'warn');
                }
            });
            /*var LocalidadObj = {};
            if(vm.EstMunList.length > 0){
                LocalidadObj.Localidad = vm.Localidad;
                LocalidadObj.IdCiudad = vm.EstMunList[0].Ciudad.IdMunicipio;
                LocalidadObj.IdEstado = vm.EstMunList[0].Estado.IdEstado;
            }else{
                LocalidadObj.Localidad = vm.Localidad;
                LocalidadObj.IdCiudad = 0;
                LocalidadObj.IdEstado = 0;
            }
            console.log(LocalidadObj);
            CatalogosFactory.AddLocalidad(LocalidadObj).then(function(data){
                console.log(data);
            });*/
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
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        //vm.AddEstMun = AddEstMun;
        vm.SaveLocalidad = SaveLocalidad;
        vm.EstMunList = [];
        vm.cancel = cancel;
        initData();
        
    });