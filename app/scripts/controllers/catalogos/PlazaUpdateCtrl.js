'use strict';

angular
    .module('softvApp')
    .controller('PlazaUpdateCtrl', function(CatalogosFactory, ngNotify, $rootScope, $state, $stateParams){

        function initData(){
            CatalogosFactory.GetDeepPlaza(IdPlaza).then(function(data){
                var Plaza = data.GetDeepPlazaResult;
                vm.IdPlaza = Plaza.IdPlaza;
                vm.Plaza = Plaza.Nombre;
                vm.Calle = Plaza.Calle;
                vm.NumExt = Plaza.NumEx;
                vm.NumInt = Plaza.NumIn;
                vm.Colonia = Plaza.Colonia;
                vm.CP = Plaza.CP;
                vm.Localidad = Plaza.Localidad;
                vm.Estado = Plaza.Estado;
                vm.Calles = Plaza.EntreCalles;
                vm.Telefono = Plaza.Telefono;
                vm.Fax = Plaza.Fax;
                vm.Email = Plaza.Email;
                vm.Municipio = Plaza.Municipio;
                vm.Pais = Plaza.Pais;
                vm.Telefono2 = Plaza.Telefono2;
                vm.Contacto = Plaza.NombreContacto;
                vm.IdDistribuidorRes = Plaza.IdDistribuidor;
                vm.IdAsociado = Plaza.IdAsociado;
                vm.EstadoAlm = Plaza.EstadoAlmacen;
                vm.MunicipoAlm = Plaza.MunicipioAlmacen;
                vm.LocalidadAlm = Plaza.LocalidadAlmacen;
                vm.ColoniaALm = Plaza.ColoniaAlmacen;
                vm.CalleAlm = Plaza.CalleAlmacen;
                vm.NumeroALm = Plaza.NumeroAlmacen;
                vm.CPAlm = Plaza.CPAlmacen;
                var Rel = Plaza.RelPlazaEstMun;
                CatalogosFactory.GetDistribuidorList().then(function(data){
                    vm.DistribuidorList = data.GetDistribuidorListResult;
                    for(var i = 0; vm.DistribuidorList.length > i; i ++){
                        if(vm.DistribuidorList[i].IdDistribuidor == vm.IdDistribuidorRes){
                            vm.Distribuidor = vm.DistribuidorList[i];
                        }
                    }
                });
                for(var i = 0; Rel.length > i; i ++){
                    var RelEstMun = {};
                    RelEstMun.IdPlaza = vm.IdPlaza;
                    RelEstMun.IdEstado = Rel[i].Estado.IdEstado;
                    RelEstMun.IdMunicipio = Rel[i].Municipio.IdMunicipio;
                    var RelEstMunView = {};
                    RelEstMunView.IdPlaza = vm.IdPlaza;
                    RelEstMunView.IdEstado = Rel[i].Estado.IdEstado;
                    RelEstMunView.Estado = Rel[i].Estado.Nombre;
                    RelEstMunView.IdMunicipio = Rel[i].Municipio.IdMunicipio;
                    RelEstMunView.Municipio = Rel[i].Municipio.Nombre;
                    vm.RelEstMunList.push(RelEstMun);
                    vm.RelEstMunViewList.push(RelEstMunView);
                }
            });
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function GetCiudadMunicipio(){
            if(vm.EstadoPla != undefined){
                CatalogosFactory.GetEstadosRelMun(vm.EstadoPla.IdEstado).then(function(data){
                    vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
                });
            }else{
                vm.CiudadMunicipioList = null;
            }
        }
        
        function AddRelEstMun(){
            if(vm.EstadoPla != undefined && vm.EstadoPla != 0 &&
               vm.CiudadPla != undefined && vm.CiudadPla != 0){
                var RelEstMun = {};
                RelEstMun.IdPlaza = vm.IdPlaza;
                RelEstMun.IdEstado = vm.EstadoPla.IdEstado;
                RelEstMun.IdMunicipio = vm.CiudadPla.Municipio.IdMunicipio;
                var RelEstMunView = {};
                RelEstMunView.IdPlaza = vm.IdPlaza;
                RelEstMunView.IdEstado = vm.EstadoPla.IdEstado;
                RelEstMunView.Estado = vm.EstadoPla.Nombre;
                RelEstMunView.IdMunicipio = vm.CiudadPla.Municipio.IdMunicipio;
                RelEstMunView.Municipio = vm.CiudadPla.Municipio.Nombre;
                if(ExistsRelEstMun(RelEstMun.IdEstado, RelEstMun.IdMunicipio) == false){
                    vm.RelEstMunList.push(RelEstMun);
                    vm.RelEstMunViewList.push(RelEstMunView);
                }else{
                    ngNotify.set('ERROR, Ya existe esta relación.', 'warn');
                }
            }else{
                ngNotify.set('ERROR, Selecciona un estado y una ciudad.', 'warn');
            }
        }

        function ExistsRelEstMun(IdEstado, IdMunicipio){
            var ResultExists = 0;
            for(var i = 0; vm.RelEstMunList.length > i; i ++){
                if(vm.RelEstMunList[i].IdEstado == IdEstado && vm.RelEstMunList[i].IdMunicipio == IdMunicipio){
                    ResultExists = ResultExists + 1
                }
            }
            return (ResultExists > 0)? true : false;
        }

        function DeleteRelEstMun(RelEstMun){
            for(var i = 0; vm.RelEstMunList.length > i; i ++){
                if(vm.RelEstMunList[i].IdEstado == RelEstMun.IdEstado && vm.RelEstMunList[i].IdMunicipio == RelEstMun.IdMunicipio){
                    vm.RelEstMunList.splice(i, 1);
                    vm.RelEstMunViewList.splice(i, 1);
                }
            }
        }

        function SavePlaza(){
            if(vm.RelEstMunList.length > 0){
                var lstRelPlazaMunEst = {};
                lstRelPlazaMunEst.IdPlaza = vm.IdPlaza;
                lstRelPlazaMunEst.Nombre = vm.Plaza;
                lstRelPlazaMunEst.Calle = vm.Calle;
                lstRelPlazaMunEst.NumEx = vm.NumExt;
                lstRelPlazaMunEst.NumIn = vm.NumInt;
                lstRelPlazaMunEst.Colonia = vm.Colonia;
                lstRelPlazaMunEst.CP = vm.CP;
                lstRelPlazaMunEst.Localidad = vm.Localidad;
                lstRelPlazaMunEst.Estado = vm.Estado;
                lstRelPlazaMunEst.EntreCalles = vm.Calles;
                lstRelPlazaMunEst.Telefono = vm.Telefono;
                lstRelPlazaMunEst.Fax = vm.Fax;
                lstRelPlazaMunEst.Email = vm.Email;
                lstRelPlazaMunEst.Municipio = vm.Municipio;
                lstRelPlazaMunEst.Pais = vm.Pais;
                lstRelPlazaMunEst.Telefono2 = vm.Telefono2;
                lstRelPlazaMunEst.NombreContacto = vm.Contacto;
                lstRelPlazaMunEst.IdDistribuidor = vm.Distribuidor.IdDistribuidor;
                lstRelPlazaMunEst.IdAsociado = 1;
                lstRelPlazaMunEst.EstadoAlmacen = vm.EstadoAlm;
                lstRelPlazaMunEst.MunicipioAlmacen = vm.MunicipoAlm;
                lstRelPlazaMunEst.LocalidadAlmacen = vm.LocalidadAlm;
                lstRelPlazaMunEst.ColoniaAlmacen = vm.ColoniaALm;
                lstRelPlazaMunEst.CalleAlmacen = vm.CalleAlm;
                lstRelPlazaMunEst.NumeroAlmacen = vm.NumeroALm;
                lstRelPlazaMunEst.CPAlmacen = vm.CPAlm;
                var RelPlazaEstMunAdd = vm.RelEstMunList;
                CatalogosFactory.UpdatePlazaL(lstRelPlazaMunEst, RelPlazaEstMunAdd).then(function(data){
                    if(data.UpdatePlazaLResult == -1){
                        ngNotify.set('CORRECTO, se guardó la plaza.', 'success');
                        $state.go('home.catalogos.plazas');
                    }else{
                        ngNotify.set('ERROR, al guardar la plaza.', 'warn');
                        $state.go('home.catalogos.plazas');
                    }
                });
            }else{
                ngNotify.set('ERROR, Para añadir una nueva plaza, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        var vm = this;
        var IdPlaza = $stateParams.id;
        vm.Titulo = 'Plaza Editar - ' + IdPlaza;
        vm.RelEstMunList = [];
        vm.RelEstMunViewList = [];
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.AddRelEstMun = AddRelEstMun;
        vm.DeleteRelEstMun = DeleteRelEstMun;
        vm.SavePlaza = SavePlaza;
        initData();

    });