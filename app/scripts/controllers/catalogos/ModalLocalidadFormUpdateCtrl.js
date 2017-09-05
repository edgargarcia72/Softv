'use strict';

angular
    .module('softvApp')
    .controller('ModalLocalidadFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, IdLocalidad){

        function initData(){
            CatalogosFactory.GetDeepLocalidad(IdLocalidad).then(function(data){
                var LocalidadResult = data.GetDeepLocalidadResult;
                vm.IdLocalidad = LocalidadResult.IdLocalidad;
                vm.Localidad = LocalidadResult.Nombre;
                var RelEstMun = LocalidadResult.RelLocalidadMunEst;
                for(var i = 0; RelEstMun.length > i; i ++){
                    var EstMun = {};
                    EstMun.IdLocalidad = vm.IdLocalidad;
                    EstMun.IdEstado = RelEstMun[i].IdEstado;
                    EstMun.IdMunicipio = RelEstMun[i].IdMunicipio;
                    var EstMunView = {};
                    EstMunView.IdEstado = RelEstMun[i].IdEstado;
                    EstMunView.IdMunicipio = RelEstMun[i].IdMunicipio;
                    EstMunView.Estado = RelEstMun[i].NomEstado;
                    EstMunView.Municipio = RelEstMun[i].NomMunicipio;
                    vm.EstMunList.push(EstMun);
                    vm.EstMunViewList.push(EstMunView);
                }
            });

            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function GetCiudadMunicipio(){
            if(vm.Estado != undefined){
                CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                    vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
                });
            }else{
                vm.CiudadMunicipioList = null;
            }
        }

        function AddEstMun(){
            if(vm.Estado != undefined && vm.Estado != 0 &&
               vm.Ciudad != undefined && vm.Ciudad != 0){
                var EstMun = {};
                EstMun.IdLocalidad = vm.IdLocalidad;
                EstMun.IdEstado = vm.Estado.IdEstado;
                EstMun.IdMunicipio = vm.Ciudad.Municipio.IdMunicipio;
                var EstMunView = {};
                EstMunView.IdEstado = vm.Estado.IdEstado;
                EstMunView.IdMunicipio = vm.Ciudad.Municipio.IdMunicipio;
                EstMunView.Estado = vm.Estado.Nombre;
                EstMunView.Municipio = vm.Ciudad.Municipio.Nombre;
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
                lstRelLocalidad.IdLocalidad = vm.IdLocalidad;
                lstRelLocalidad.Nombre = vm.Localidad;
                RelLocalidadMunEstAdd = vm.EstMunList;
                CatalogosFactory.UpdateRellocalidadL(lstRelLocalidad, RelLocalidadMunEstAdd).then(function(data){
                    if(data.UpdateRellocalidadLResult == -1){
                        ngNotify.set('CORRECTO, se guardó la localidad.', 'success');
                        $state.reload('home.catalogos.localidades');
				        cancel();
                    }else{
                        ngNotify.set('ERROR, al guardar la localidad.', 'warn');
                        $state.reload('home.catalogos.localidades');
                        cancel();
                    }
                });
            }else{
                ngNotify.set('ERROR, Para guardar la localidad, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        
        vm.EstMunList = [];
        vm.EstMunViewList = [];
        vm.Titulo = 'Editar Registro - ';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveLocalidad = SaveLocalidad;
        vm.AddEstMun = AddEstMun;
        vm.DeleteEstMun = DeleteEstMun;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.cancel = cancel;
        initData();

    });