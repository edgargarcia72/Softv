'use strict';

angular
    .module('softvApp')
    .controller('ModalCalleFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, IdCalle){

        function initData(){
            CatalogosFactory.GetDeepCalle(IdCalle).then(function(data){
                var Calle = data.GetDeepCalleResult;
                vm.IdCalle = Calle.IdCalle;
                vm.Calle = Calle.Nombre;
                var Rel = Calle.RelCalleColonia;
                for(var i = 0; Rel.length > i; i ++){
                    var RelCalle = {};
                    RelCalle.IdCalle = vm.IdCalle
                    RelCalle.IdEstado = Rel[i].Estado.IdEstado;
                    RelCalle.IdMunicipio = Rel[i].Municipio.IdMunicipio;
                    RelCalle.IdLocalidad = Rel[i].Localidad.IdLocalidad;
                    RelCalle.IdColonia = Rel[i].Colonia.IdColonia;
                    var RelCalleView = {};
                    RelCalleView.IdCalle = vm.IdCalle
                    RelCalleView.IdEstado = Rel[i].Estado.IdEstado;
                    RelCalleView.IdMunicipio = Rel[i].Municipio.IdMunicipio;
                    RelCalleView.IdLocalidad = Rel[i].Localidad.IdLocalidad;
                    RelCalleView.IdColonia = Rel[i].Colonia.IdColonia;
                    RelCalleView.Estado = Rel[i].Estado.Nombre;
                    RelCalleView.Municipio = Rel[i].Municipio.Nombre;
                    RelCalleView.Localidad = Rel[i].Localidad.Nombre;
                    RelCalleView.Colonia = Rel[i].Colonia.Nombre;
                    vm.RelCalleList.push(RelCalle);
                    vm.RelCalleViewList.push(RelCalleView);
                }
            });

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
                RelCalle.IdCalle = vm.IdCalle;
                RelCalle.IdEstado = vm.Estado.IdEstado;
                RelCalle.IdMunicipio = vm.Municipio.Municipio.IdMunicipio;
                RelCalle.IdLocalidad = vm.Localidad.Localidad.IdLocalidad;
                RelCalle.IdColonia = vm.Colonia.Colonia.IdColonia;
                var RelCalleView = {};
                RelCalleView.IdCalle = vm.IdCalle;
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
                lstRelCalle.IdCalle = vm.IdCalle;
                lstRelCalle.Nombre = vm.Calle;
                RelCalleAdd = vm.RelCalleList;
                CatalogosFactory.UpdateCalleL(lstRelCalle, RelCalleAdd).then(function(data){
                    if(data.UpdateCalleLResult == -1){
                        ngNotify.set('CORRECTO, se guardó la calle.', 'success');
                        $state.reload('home.catalogos.calles');
				        cancel();
                    }else{
                        ngNotify.set('ERROR, al guardar la calle nueva.', 'warn');
                        $state.reload('home.catalogos.calles');
                        cancel();
                    }
                });
            }else{
                ngNotify.set('ERROR, Para guardar la calle, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Registro - ';
        vm.Icono = 'fa fa-pencil-square-o';
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