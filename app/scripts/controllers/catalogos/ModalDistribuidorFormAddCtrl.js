'use strict';

angular
    .module('softvApp')
    .controller('ModalDistribuidorFormAddCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state){

        function SaveDistribuidor(){
            var DistribuidorObj = {};
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
            DistribuidorObj.IdAsociado = 1;
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
            console.log(DistribuidorObj);
            CatalogosFactory.AddDistribuidor(DistribuidorObj).then(function(data){
                if(data.AddDistribuidorResult > 0){
                    ngNotify.set('CORRECTO, se añadió un distribuidor nuevo.', 'success');
                    $state.reload('home.catalogos.distribuidores');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al añadir un distribuidor nuevo.', 'warn');
                    $state.reload('home.catalogos.distribuidores');
                    cancel();
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus'
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$/;
        vm.SaveDistribuidor = SaveDistribuidor;
        vm.cancel = cancel;

    });