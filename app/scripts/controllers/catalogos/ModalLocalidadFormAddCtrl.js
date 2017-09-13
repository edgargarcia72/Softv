'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstados_NewList().then(function(data){
                vm.EstadoList = data.GetEstados_NewListResult;
            });
        }

        function AddEstMun(){
            if(vm.Estado != undefined && vm.Estado != 0 &&
               vm.Ciudad != undefined && vm.Ciudad != 0){
                var EstMun = {};
                EstMun.IdEstado = vm.Estado.Clv_Estado;
                EstMun.IdMunicipio = vm.Ciudad.Clv_Ciudad;
                var EstMunView = {};
                EstMunView.IdEstado = vm.Estado.Clv_Estado;
                EstMunView.IdMunicipio = vm.Ciudad.Clv_Ciudad;
                EstMunView.Estado = vm.Estado.Nombre;
                EstMunView.Municipio = vm.Ciudad.Nombre;
                if(ExistsEstMun(EstMun.IdEstado, EstMun.IdMunicipio) == false){
                    vm.EstMunList.push(EstMun);
                    vm.EstMunViewList.push(EstMunView);
                }else{
                    ngNotify.set('ERROR, Ya existe esta relación.', 'warn');
                }
            }else{
                ngNotify.set('ERROR, Selecciona un estado y una ciudad.', 'warn');
            }
        }

        function ExistsEstMun(IdEstado, IdMunicipio){
            var ResultExists = 0;
            for(var i = 0; vm.EstMunList.length > i; i ++){
                if(vm.EstMunList[i].IdEstado == IdEstado && vm.EstMunList[i].IdMunicipio == IdMunicipio){
                    ResultExists = ResultExists + 1
                }
            }
            return (ResultExists > 0)? true : false;
        }

        function DeleteEstMun(IdEstado, IdMunicipio){
            for(var i = 0; vm.EstMunList.length > i; i ++){
                if(vm.EstMunList[i].IdEstado == IdEstado && vm.EstMunList[i].IdMunicipio == IdMunicipio){
                    vm.EstMunList.splice(i, 1);
                    vm.EstMunViewList.splice(i, 1);
                }
            }
        }

        function SaveLocalidad(){
            if(vm.EstMunList.length > 0){
                var lstRelLocalidad = {};
                var RelLocalidadMunEstAdd = {};
                lstRelLocalidad.Nombre = vm.Localidad;
                if(vm.EstMunList.length > 0){
                    RelLocalidadMunEstAdd = vm.EstMunList;
                }
                CatalogosFactory.AddRelLocalidadL(lstRelLocalidad, RelLocalidadMunEstAdd).then(function(data){
                    if(data.AddRelLocalidadLResult > 0){
                        ngNotify.set('CORRECTO, se añadió una localidad nueva.', 'success');
                        $state.reload('home.catalogos.localidades');
                        cancel();
                    }else{
                        ngNotify.set('ERROR, al añadir una localidad nueva.', 'warn');
                        $state.reload('home.catalogos.localidades');
                        cancel();
                    }
                });
            }else{
                ngNotify.set('ERROR, Para guardar la localidad, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        function GetCiudadMunicipio(){
            if(vm.Estado != undefined){
                var RelEstMun = {
                    'clv_estado' : vm.Estado.Clv_Estado,
                    'idcompania' : 1//Delete
                };
                CatalogosFactory.GetMuestraCiudadesEstadoList(RelEstMun).then(function(data){
                    vm.CiudadMunicipioList = data.GetMuestraCiudadesEstadoListResult;
                });
            }else{
                vm.CiudadMunicipioList = null;
            }
            vm.LocalidadList = null;
            vm.ColoniaList = null;
            vm.CalleList = null;
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.EstMunList = [];
        vm.EstMunViewList = [];
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.AddEstMun = AddEstMun;
        vm.DeleteEstMun = DeleteEstMun;
        vm.SaveLocalidad = SaveLocalidad;
        vm.cancel = cancel;
        initData();
        
    });