'use strict';

angular
    .module('softvApp')
    .controller('ClientesCtrl', function(CatalogosFactory){

        function initData(){

            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });

            CatalogosFactory.GetPlazaList().then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
            });

            CatalogosFactory.GetClientesAll().then(function(data){
                vm.ClienteList = data.GetClientesResult.Entities;
                if (vm.ClienteList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });

        }

        function SearchContrato(){
            CatalogosFactory.GetClientes(vm.Contrato).then(function(data){
                vm.ClienteList = data.GetClientesResult.Entities;
                if (vm.ClienteList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function GetCiudadMunicipio(){
            CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
            })
        }

        function GetLocalidad(){
            CatalogosFactory.GetLocalidadRelMun(vm.CiuMun.Municipio.IdMunicipio).then(function(data){
                vm.LocalidadList = data.GetLocalidadRelMunResult;
            });
        }

        function GetColonia(){
            CatalogosFactory.GetColoniaRelLoc(vm.Localidad.IdLocalidad).then(function(data){
                vm.ColoniaList = data.GetColoniaRelLocResult;
            });
        }

        function GetCalle(){
            CatalogosFactory.GetCalleRelCol(vm.Colonia.Colonia.IdColonia).then(function(data){
                vm.CalleList = data.GetCalleRelColResult;
            });
        }

        function SearchDireccion(){
            var ObjDireccion = {};
            ObjDireccion.IdEstado = vm.Estado.IdEstado;
            ObjDireccion.IdMunicipio = vm.CiuMun.Municipio.IdMunicipio;
            ObjDireccion.IdLocalidad = vm.Localidad.IdLocalidad;
            ObjDireccion.IdColonia = vm.Colonia.Colonia.IdColonia;
            ObjDireccion.IdCalle = vm.Calle.Calle.IdCalle;
            ObjDireccion.Numero = vm.Numero;
            CatalogosFactory.GetClientesByDireccion(ObjDireccion).then(function(data){
                vm.ClienteList = data.GetClientesResult.Entities;
                if (vm.ClienteList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function SearchNombre(){
            CatalogosFactory.GetClientesByNombre(vm.Nombre).then(function(data){
                vm.ClienteList = data.GetClientesResult.Entities;
                if (vm.ClienteList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function SearchPlaza(){
            CatalogosFactory.GetClientesByPlaza(vm.Plaza.IdPlaza).then(function(data){
                vm.ClienteList = data.GetClientesResult.Entities;
                if (vm.ClienteList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        var vm = this;
        vm.SearchContrato = SearchContrato;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.GetCalle = GetCalle;
        vm.SearchDireccion = SearchDireccion;
        vm.SearchNombre = SearchNombre;
        vm.SearchPlaza = SearchPlaza;
        initData();

    });