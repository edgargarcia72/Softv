'use strict';

angular
    .module('softvApp')
    .controller('PlazaAddCtrl', function(CatalogosFactory, ngNotify, $rootScope, $state){

        function initData(){
            CatalogosFactory.GetDistribuidorList().then(function(data){
                vm.DistribuidorList = data.GetDistribuidorListResult;
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
                RelEstMun.IdEstado = vm.EstadoPla.IdEstado;
                RelEstMun.IdMunicipio = vm.CiudadPla.Municipio.IdMunicipio;
                var RelEstMunView = {};
                RelEstMunView.IdEstado = vm.EstadoPla.IdEstado;
                RelEstMunView.Estado = vm.EstadoPla.Nombre;
                RelEstMunView.IdMunicipio = vm.CiudadPla.Municipio.IdMunicipio;
                RelEstMunView.Municipio = vm.CiudadPla.Municipio.Nombre;;
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
                CatalogosFactory.AddPlazaL(lstRelPlazaMunEst, RelPlazaEstMunAdd).then(function(data){
                    if(data.AddPlazaLResult > 0){
                        ngNotify.set('CORRECTO, se añadió una plaza nueva.', 'success');
                        $state.go('home.catalogos.plazas');
                    }else{
                        ngNotify.set('ERROR, al añadir una plaza nueva.', 'warn');
                        $state.go('home.catalogos.plazas');
                    }
                });
            }else{
                ngNotify.set('ERROR, Para añadir una nueva plaza, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }

        var vm = this;
        vm.Titulo = 'Plaza Nueva';
        vm.RelEstMunList = [];
        vm.RelEstMunViewList = [];
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.AddRelEstMun = AddRelEstMun;
        vm.DeleteRelEstMun = DeleteRelEstMun;
        vm.SavePlaza = SavePlaza;
        initData();

    });