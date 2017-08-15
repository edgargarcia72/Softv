'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory, ngNotify){

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
                console.log(IdContratoCliente);
                GetDatosClientes(IdContratoCliente);
            });
        }

        function GetDatosClientes(IdContratoCliente){
            CatalogosFactory.GetDeepCliente(IdContratoCliente).then(function(data){
                console.log(data);
                vm.IdContrato = data.GetDeepClienteResult.IdContrato;
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

        function AddDatosPostales(){
            if(vm.IdContrato != undefined){
                var ObjCliente = {};
                ObjCliente.IdContrato = vm.IdContrato;
                ObjCliente.IdEstado = vm.Estado.IdEstado;
                ObjCliente.IdMunicipio = vm.CiuMun.Municipio.IdMunicipio;
                ObjCliente.IdLocalidad = vm.Localidad.IdLocalidad;
                ObjCliente.IdColonia = vm.Colonia.Colonia.IdColonia;
                ObjCliente.IdCalle = vm.Callle.Calle.IdCalle;
                ObjCliente.EntCalles = vm.EntCalles;
                ObjCliente.NumExt = vm.NumExt;
                ObjCliente.NumInt = vm.NumInt;
                ObjCliente.CodigoPos = vm.CodigoPos;
                CatalogosFactory.UpdateClienteDPos(ObjCliente).then(function(data){
                    console.log(data);
                    GetDatosClientes(vm.IdContrato);
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        var vm = this;
        vm.TipoPersona = "1";
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$/;
        vm.MesList = {};
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.GetCalle = GetCalle;
        vm.AddDatosPostales = AddDatosPostales;
        initData();
        
    });