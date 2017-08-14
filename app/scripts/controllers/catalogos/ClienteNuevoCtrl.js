'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory){

        function initData(){
            CatalogosFactory.GetPlazaList().then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
            });

            CatalogosFactory.GetPeriodoCobroList().then(function(data){
                vm.PeriodoList = data.GetPeriodoCobroListResult;
            });

            CatalogosFactory.GetTipoClienteList_WebSoftvnew().then(function(data){
                vm.TipoCobroList = data.GetTipoClienteList_WebSoftvnewResult;
            });

            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });
        }

        function AddDatosPersonales(){
            var FechaNacD = vm.FechaNac.getDate();
            var FechaNacM = vm.FechaNac.getMonth() + 1;
            var FechaNacY = vm.FechaNac.getFullYear();
            var ObjCliente = {};
            ObjCliente.Nombre = vm.Nombre;
            ObjCliente.NombreAdi = vm.NombreAdi;
            ObjCliente.PrimerApe = vm.PrimerApe;
            ObjCliente.SegundoApe = vm.SegundoApe;
            ObjCliente.ClaveElector = vm.ClaveElector;
            ObjCliente.Telefono = vm.Telefono;
            ObjCliente.Celular = vm.Celular;
            ObjCliente.Email = vm.Email;
            ObjCliente.IdPlaza = vm.Plaza.IdPlaza;
            ObjCliente.IdPeriodo = vm.Periodo.IdPeriodo;
            ObjCliente.IdTipoCliente = vm.TipoCobro.IdTipoCliente;
            ObjCliente.TipoPersona = (vm.TipoPersona == 'F') ? 1 : 0;
            ObjCliente.FechaNac = FechaNacD + '/' + FechaNacM + '/' + FechaNacY;
            CatalogosFactory.AddClienteL(ObjCliente).then(function(data){
                var IdContratoCliente = data.AddClienteLResult;
                GetDatosClientes(IdContratoCliente);
            });
        }

        function GetDatosClientes(IdContratoCliente){
            CatalogosFactory.GetDeepCliente(IdContratoCliente).then(function(data){
                console.log(data);
                vm.IdContrato = data.GetDeepClienteResult.GetDeepClienteResult;
            });
        }

        function GetCiudadMunicipio(){
            CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                console.log(data);
                vm.GetCiudadMunicipioList = data.GetEstadosRelMunResult;
            })
        }

        function GetLocalidad(){
            CatalogosFactory.GetLocalidadRelMun(vm.Municipio.IdMunicipio).then(function(data){
                console.log(data)
            });
        }

        var vm = this;
        vm.TipoPersona = "1";
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$/;
        vm.MesList = {};
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        initData();
        
    });