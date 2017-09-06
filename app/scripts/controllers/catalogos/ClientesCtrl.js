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

            var lstCliente = {};
            CatalogosFactory.GetClientes(lstCliente).then(function(data){
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
            var lstCliente = {};
            lstCliente.IdCliente = vm.Contrato;
            CatalogosFactory.GetClientes(lstCliente).then(function(data){
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
            var lstCliente = {};
            lstCliente.IdEstado = vm.Estado.IdEstado;
            lstCliente.IdMunicipio = vm.CiuMun.Municipio.IdMunicipio;
            lstCliente.IdLocalidad = vm.Localidad.IdLocalidad;
            lstCliente.IdColonia = vm.Colonia.Colonia.IdColonia;
            lstCliente.IdCalle = vm.Calle.Calle.IdCalle;
            lstCliente.Numero = vm.Numero;
            CatalogosFactory.GetClientes(lstCliente).then(function(data){
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
            var lstCliente = {};
            lstCliente.NomCompleto = vm.Nombre;
            CatalogosFactory.GetClientes(lstCliente).then(function(data){
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
            var lstCliente = {};
            lstCliente.IdPlaza = vm.Plaza.IdPlaza;
            CatalogosFactory.GetClientes(lstCliente).then(function(data){
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