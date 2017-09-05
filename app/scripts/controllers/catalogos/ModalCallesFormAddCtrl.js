'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function GetMunicipio(){
            if(vm.Estado != undefined){
                CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                    vm.MunicipioList = data.GetEstadosRelMunResult;
                    vm.LocalidadList = null;
                    vm.ColoniaList = null;
                });
            }else{
                vm.MunicipioList = null;
                vm.LocalidadList = null;
                vm.ColoniaList = null;
            }
        }
        
        function GetLocalidad(){
            if(vm.Municipio != undefined){
                CatalogosFactory.GetLocalidadRelMun(vm.Municipio.Municipio.IdMunicipio).then(function(data){
                    vm.LocalidadList = data.GetLocalidadRelMunResult;
                    vm.ColoniaList = null;
                });
            }else{
                vm.LocalidadList = null;
                vm.ColoniaList = null;
            }
        }
        
        function GetColonia(){
             if(vm.Localidad != undefined){
                CatalogosFactory.GetColoniaRelLoc(vm.Localidad.IdLocalidad).then(function(data){
                    vm.ColoniaList = data.GetColoniaRelLocResult;
                });
            }else{
                vm.ColoniaList = null;
            }
        }

        function AddRelCalle(){
            if(vm.Estado != undefined && vm.Estado != 0 &&
               vm.Municipio != undefined && vm.Municipio != 0 &&
               vm.Localidad != undefined && vm.Localidad != 0 &&
               vm.Colonia != undefined && vm.Colonia != 0){
                var RelCalle = {};
                RelCalle.IdEstado = vm.Estado.IdEstado;
                RelCalle.IdMunicipio = vm.Municipio.Municipio.IdMunicipio;
                RelCalle.IdLocalidad = vm.Localidad.Localidad.IdLocalidad;
                RelCalle.IdColonia = vm.Colonia.Colonia.IdColonia;
                var RelCalleView = {};
                RelCalleView.IdEstado = vm.Estado.IdEstado;
                RelCalleView.IdMunicipio = vm.Municipio.Municipio.IdMunicipio;
                RelCalleView.IdLocalidad = vm.Localidad.Localidad.IdLocalidad;
                RelCalleView.IdColonia = vm.Colonia.Colonia.IdColonia;
                RelCalleView.Estado = vm.Estado.Nombre;
                RelCalleView.Municipio = vm.Municipio.Municipio.Nombre;
                RelCalleView.Localidad = vm.Localidad.Localidad.Nombre;
                RelCalleView.Colonia = vm.Colonia.Colonia.Nombre;
                if(ExistsRelCalle(RelCalle.IdEstado, RelCalle.IdMunicipio, RelCalle.IdLocalidad, RelCalle.IdColonia) == false){
                    vm.RelCalleList.push(RelCalle);
                    vm.RelCalleViewList.push(RelCalleView);
                }else{
                    ngNotify.set('ERROR, Ya existe esta relación.', 'warn');
                }
            }else{
                ngNotify.set('ERROR, Selecciona un estado, una ciudad, una localidad y una colonia.', 'warn');
            }
        }

        function ExistsRelCalle(IdEstado, IdMunicipio, IdLocalidad, IdColonia){
            var ResultExists = 0;
            for(var i = 0; vm.RelCalleList.length > i; i ++){
                if(vm.RelCalleList[i].IdEstado == IdEstado &&
                   vm.RelCalleList[i].IdMunicipio == IdMunicipio &&
                   vm.RelCalleList[i].IdLocalidad == IdLocalidad &&
                   vm.RelCalleList[i].IdColonia == IdColonia){
                    ResultExists = ResultExists + 1
                }
            }
            return (ResultExists > 0)? true : false;
        }

        function DeleteRelCalle(RelCalle){
            for(var i = 0; vm.RelCalleList.length > i; i ++){
                if(vm.RelCalleList[i].IdEstado == RelCalle.IdEstado &&
                   vm.RelCalleList[i].IdMunicipio == RelCalle.IdMunicipio &&
                   vm.RelCalleList[i].IdLocalidad == RelCalle.IdLocalidad &&
                   vm.RelCalleList[i].IdColonia == RelCalle.IdColonia){
                    vm.RelCalleList.splice(i, 1);
                    vm.RelCalleViewList.splice(i, 1);
                }
            }
        }

        function SaveCalle(){
            if(vm.RelCalleList.length > 0){
                var lstRelCalle = {};
                var RelCalleAdd = {};
                lstRelCalle.Nombre = vm.Calle;
                RelCalleAdd = vm.RelCalleList;
                CatalogosFactory.AddCalleL(lstRelCalle, RelCalleAdd).then(function(data){
                    if(data.AddCalleLResult > 0){
                        ngNotify.set('CORRECTO, se añadió una calle nueva.', 'success');
                        $state.reload('home.catalogos.calles');
				        cancel();
                    }else{
                        ngNotify.set('ERROR, al añadir una calle nueva.', 'warn');
                        $state.reload('home.catalogos.calles');
                        cancel();
                    }
                });
            }else{
                ngNotify.set('ERROR, Para añadir una nueva calle, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.RelCalleList = [];
        vm.RelCalleViewList = [];
        vm.GetMunicipio = GetMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.AddRelCalle = AddRelCalle;
        vm.DeleteRelCalle = DeleteRelCalle;
        vm.SaveCalle = SaveCalle;
        vm.cancel = cancel;
        initData();

    });