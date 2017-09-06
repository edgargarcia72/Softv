'use strict';

angular
    .module('softvApp')
    .controller('DistribuidorUpdateCtrl', function(CatalogosFactory, ngNotify, $state, $stateParams){

        function initData(){
            CatalogosFactory.GetDeepDistribuidor(IdDistribuidor).then(function(data){
                var Distribuidor = data.GetDeepDistribuidorResult;
                vm.IdDistribuidor = Distribuidor.IdDistribuidor;
                vm.Nombre = Distribuidor.Nombre;
                vm.RFC = Distribuidor.RFC;
                vm.NumExt = Distribuidor.NumEx;
                vm.NumInt = Distribuidor.NumIn;
                vm.CP = Distribuidor.CP;
                vm.Calles = Distribuidor.EntreCalles;
                vm.Calle = Distribuidor.Calle;
                vm.Colonia = Distribuidor.Colonia;
                vm.Localidad = Distribuidor.Localidad;
                vm.Municipio = Distribuidor.Municipio;
                vm.Estado = Distribuidor.Estado;
                vm.Pais = Distribuidor.Pais;
                vm.Telefono = Distribuidor.Telefono;
                vm.Email = Distribuidor.Email;
                vm.Telefono2 = Distribuidor.Telefono2;
                vm.Pagare = Distribuidor.ImportePagare;
                vm.IdAsociado = Distribuidor.IdAsociado;
                vm.NombreRG = Distribuidor.NombreResGral;
                vm.TelefonoRG = Distribuidor.TelResGral;
                vm.CelularRG = Distribuidor.CelResGral;
                vm.EmailRG = Distribuidor.EmailResGral;
                vm.NombreRC = Distribuidor.NombreResCom;
                vm.TelefonoRC = Distribuidor.TelResCom;
                vm.CelularRC = Distribuidor.CelResCom;
                vm.EmailRC = Distribuidor.EmailResCom;
                vm.NombreRO = Distribuidor.NombreResOpe;
                vm.TelefonoRO = Distribuidor.TelResOpe;
                vm.CelularRO = Distribuidor.CelResOpe;
                vm.EmailRO = Distribuidor.EmailResOpe;
                vm.NombreRA = Distribuidor.NombreResAte;
                vm.TelefonoRA = Distribuidor.TelResAte;
                vm.CelularRA = Distribuidor.CelResAte;
                vm.EmailRA = Distribuidor.EmailResAte;
                vm.NombreDC = Distribuidor.NombreCon;
                vm.EstadoDC = Distribuidor.EstadoCon;
                vm.MunicipoDC = Distribuidor.MunicipioCon;
                vm.LocalidadDC = Distribuidor.LocalidadCon;
                vm.ColoniaDC = Distribuidor.ColoniaCon;
                vm.CalleDC = Distribuidor.CalleCon;
                vm.NumeroDC = Distribuidor.NumeroCon;
                vm.CPDC = Distribuidor.CPCon;
            });
        }

        function SaveDistribuidor(){
            var DistribuidorObj = {};
            DistribuidorObj.IdDistribuidor = vm.IdDistribuidor;
            DistribuidorObj.Nombre = vm.Nombre;
            DistribuidorObj.RFC = vm.RFC;
            DistribuidorObj.NumEx = vm.NumExt;
            DistribuidorObj.NumIn = vm.NumInt;
            DistribuidorObj.CP = vm.CP;
            DistribuidorObj.EntreCalles = vm.Calles;
            DistribuidorObj.Calle = vm.Calle;
            DistribuidorObj.Colonia = vm.Colonia;
            DistribuidorObj.Localidad = vm.Localidad;
            DistribuidorObj.Municipio = vm.Municipio;
            DistribuidorObj.Estado = vm.Estado;
            DistribuidorObj.Pais = vm.Pais;
            DistribuidorObj.Telefono = vm.Telefono;
            DistribuidorObj.Email = vm.Email;
            DistribuidorObj.Telefono2 = vm.Telefono2;
            DistribuidorObj.ImportePagare = vm.Pagare;
            DistribuidorObj.IdAsociado = vm.IdAsociado;
            DistribuidorObj.NombreResGral = vm.NombreRG;
            DistribuidorObj.TelResGral = vm.TelefonoRG;
            DistribuidorObj.CelResGral = vm.CelularRG;
            DistribuidorObj.EmailResGral = vm.EmailRG;
            DistribuidorObj.NombreResCom = vm.NombreRC;
            DistribuidorObj.TelResCom = vm.TelefonoRC;
            DistribuidorObj.CelResCom = vm.CelularRC;
            DistribuidorObj.EmailResCom = vm.EmailRC;
            DistribuidorObj.NombreResOpe = vm.NombreRO;
            DistribuidorObj.TelResOpe = vm.TelefonoRO;
            DistribuidorObj.CelResOpe = vm.CelularRO;
            DistribuidorObj.EmailResOpe = vm.EmailRO;
            DistribuidorObj.NombreResAte = vm.NombreRA;
            DistribuidorObj.TelResAte = vm.TelefonoRA;
            DistribuidorObj.CelResAte = vm.CelularRA;
            DistribuidorObj.EmailResAte = vm.EmailRA;
            DistribuidorObj.NombreCon = vm.NombreDC;
            DistribuidorObj.EstadoCon = vm.EstadoDC;
            DistribuidorObj.MunicipioCon = vm.MunicipoDC;
            DistribuidorObj.LocalidadCon = vm.LocalidadDC;
            DistribuidorObj.ColoniaCon = vm.ColoniaDC;
            DistribuidorObj.CalleCon = vm.CalleDC;
            DistribuidorObj.NumeroCon = vm.NumeroDC;
            DistribuidorObj.CPCon = vm.CPDC;
            CatalogosFactory.UpdateDistribuidor(DistribuidorObj).then(function(data){
                if(data.UpdateDistribuidorResult == 1){
                    ngNotify.set('CORRECTO, al guardar el distribuidor.', 'success');
                    $state.go('home.catalogos.distribuidores');
                }else{
                    ngNotify.set('ERROR, al guardar el distribuidor.', 'warn');
                    $state.go('home.catalogos.distribuidores');
                }
            });
        }

        var vm = this;
        var IdDistribuidor = $stateParams.id;
        vm.Titulo = 'Editar Registro - ';
        vm.Icono = 'fa fa-pencil-square-o'
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{1}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{1}[A-Z]{1}$/;
        vm.SaveDistribuidor = SaveDistribuidor;
        initData();

    });