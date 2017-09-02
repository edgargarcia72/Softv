'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory, ngNotify, $uibModal, $rootScope, $state){

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

            CatalogosFactory.GetBancoList().then(function(data){
                vm.BancoList = data.GetBancoListResult;
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
                var ObjClienteDP = {};
                ObjClienteDP.IdContrato = IdContratoCliente;
                ObjClienteDP.IdEstado = vm.Estado.IdEstado;
                ObjClienteDP.IdMunicipio = vm.CiuMun.Municipio.IdMunicipio;
                ObjClienteDP.IdLocalidad = vm.Localidad.IdLocalidad;
                ObjClienteDP.IdColonia = vm.Colonia.Colonia.IdColonia;
                ObjClienteDP.IdCalle = vm.Callle.Calle.IdCalle;
                ObjClienteDP.EntCalles = vm.EntCalles;
                ObjClienteDP.NumExt = vm.NumExt;
                ObjClienteDP.NumInt = vm.NumInt;
                ObjClienteDP.CodigoPos = vm.CodigoPos;
                CatalogosFactory.UpdateClienteDPos(ObjClienteDP).then(function(data){
                    console.log(data);
                    ngNotify.set('CORRECTO, se añadió cliente nuevo.', 'success');
                    $state.go('home.catalogos.cliente_editar', { id:IdContratoCliente });
                });
            });
        }

        function GetEstado(){
            if(vm.Plaza != undefined){
                CatalogosFactory.GetEstadoList3_web(vm.Plaza.IdPlaza).then(function(data){
                    vm.EstadoList = data.GetEstadoList3_webResult;
                    vm.CiudadMunicipioList = null;
                    vm.LocalidadList = null;
                    vm.ColoniaList = null;
                    vm.CalleList = null;
                });
            }else{
                vm.EstadoList = null;
                vm.CiudadMunicipioList = null;
                vm.LocalidadList = null;
                vm.ColoniaList = null;
                vm.CalleList = null;
            }
        }

        function GetCiudadMunicipio(){
            if(vm.Estado != undefined){
                CatalogosFactory.GetEstadosRelMun(vm.Estado.IdEstado).then(function(data){
                    vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
                    vm.LocalidadList = null;
                    vm.ColoniaList = null;
                    vm.CalleList = null;
                });
            }else{
                vm.CiudadMunicipioList = null;
                vm.LocalidadList = null;
                vm.ColoniaList = null;
                vm.CalleList = null;
            }
        }

        function GetLocalidad(){
            if(vm.CiuMun != undefined){
                CatalogosFactory.GetLocalidadRelMun(vm.CiuMun.Municipio.IdMunicipio).then(function(data){
                    vm.LocalidadList = data.GetLocalidadRelMunResult;
                    vm.ColoniaList = null;
                    vm.CalleList = null;
                });
            }else{
                vm.LocalidadList = null;
                vm.ColoniaList = null;
                vm.CalleList = null;
            }
        }

        function GetColonia(){
            if(vm.Localidad != undefined){
                CatalogosFactory.GetColoniaRelLoc(vm.Localidad.IdLocalidad).then(function(data){
                    vm.ColoniaList = data.GetColoniaRelLocResult;
                    vm.CalleList = null;
                });
            }else{
                vm.ColoniaList = null;
                vm.CalleList = null;
            }
        }

        function GetCalle(){
            if(vm.Colonia != undefined){
                CatalogosFactory.GetCalleRelCol(vm.Colonia.Colonia.IdColonia).then(function(data){
                    vm.CalleList = data.GetCalleRelColResult;
                });
            }else{
                vm.CalleList = null;
            }
        }

        function AddDatosFiscales(){
            if(vm.IdContrato != undefined){
                var ObjCliente = {};
                ObjCliente.IdContrato = vm.IdContrato;
                ObjCliente.IVADesglosado = 10;
                ObjCliente.RazonSoc = vm.RazonSoc;
                ObjCliente.RFC = vm.RFC;
                ObjCliente.CURP = vm.CURP;
                ObjCliente.CalleDF = vm.CalleDF;
                ObjCliente.NumExtDF = vm.NumExtDF;
                ObjCliente.NumIntDF = vm.NumIntDF;
                ObjCliente.EntCallesDF = vm.EntCallesDF;
                ObjCliente.ColoniaDF = vm.ColoniaDF;
                ObjCliente.LocalidadDF = vm.Pais;
                ObjCliente.CiuMunDF = vm.CiuMunDF;
                ObjCliente.EstadoDF = vm.EstadoDF;
                ObjCliente.CodigoPosDF = vm.CodigoPosDF;
                ObjCliente.TelefonoDF = vm.TelefonoDF;
                ObjCliente.Fax = vm.Fax;
                ObjCliente.EmailDF = vm.EmailDF;
                ObjCliente.Tipo = 1;
                CatalogosFactory.AddDatoFiscalCliente(ObjCliente).then(function(data){
                    console.log(data);
                    GetDatosClientes(vm.IdContrato);
                    ngNotify.set('CORRECTO, se guardaron datos fiscales.', 'success');
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function AddDatosBancarios(){
            if(vm.IdContrato != undefined){
                for(var i = 0; i < vm.TipoTarjetaList.length; i ++){
                    if(vm.TipoTarjetaList[i].Nombre == vm.TipoPlastico){
                        vm.IdTipoTar = vm.TipoTarjetaList[i].IdTipoTarjeta;
                        break;
                    }
                }
                var ObjCliente = {};
                ObjCliente.IdContrato = vm.IdContrato;
                ObjCliente.IdBanco = vm.Banco.IdBanco;
                ObjCliente.TipoPlastico = vm.IdTipoTar;
                ObjCliente.Titular = vm.Titular;
                ObjCliente.NumTarjeta = vm.NumTarjeta;
                ObjCliente.CodigoSeg = vm.CodigoSeg;
                ObjCliente.IdMes = vm.MesVen.IdMes;
                ObjCliente.YearVen = vm.YearVen;
                CatalogosFactory.AddDatoBancarioCliente(ObjCliente).then(function(data){
                    console.log(data);
                    GetDatosClientes(vm.IdContrato);
                    ngNotify.set('CORRECTO, se guardaron datos bancarios.', 'success');
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function AddRefPersonales(){
            if(vm.IdContrato != undefined){
                var ObjCliente = {};
                ObjCliente.IdContrato = vm.IdContrato;
                ObjCliente.NombreRef = vm.NombreRef;
                ObjCliente.DireccionRef = vm.DireccionRef;
                ObjCliente.EmailRef = vm.EmailRef;
                ObjCliente.TelefonoRef = vm.TelefonoRef;
                ObjCliente.OpcionProspecto = 1;
                CatalogosFactory.AddReferenciaClienteL(ObjCliente).then(function(data){
                    console.log(data);
                    GetReferenciasPersonales(vm.IdContrato);
                    ngNotify.set('CORRECTO, se guardó referencia personal.', 'success');
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function OpenEditRefPersonal(ObjRefCliente){
            var ObjRefCliente = ObjRefCliente;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalEditarRefCliente.html',
                controller: 'ModalEditarRefClienteCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg',
                resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }
            });
        }

        function OpenDeleteRefPersonal(ObjRefCliente){
            var ObjRefCliente = ObjRefCliente;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalEliminarRefCliente.html',
                controller: 'ModalEliminarRefClienteCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }
            });
        }

        function AddNotas(){
             if(vm.IdContrato != undefined){
                var ObjCliente = {};
                ObjCliente.IdContrato = vm.IdContrato;
                ObjCliente.Observaciones = vm.Observaciones;
                ObjCliente.Notas = vm.Notas;
                CatalogosFactory.AddNotasClienteL(ObjCliente).then(function(data){
                    console.log(data);
                    ngNotify.set('CORRECTO, se guardaron notas.', 'success');
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        var vm = this;
        vm.ShowAccord = false;
        vm.BlockInput = false;
        vm.TipoPersona = "F";
        vm.Title = 'Cliente nuevo';
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{1}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{1}[A-Z]{1}$/;
        vm.MesList = [
            { IdMes: 1, Nombre: 'Enero' },
            { IdMes: 2, Nombre: 'Febrero' },
            { IdMes: 3, Nombre: 'Marzo' },
            { IdMes: 4, Nombre: 'Abril' },
            { IdMes: 5, Nombre: 'Mayo' },
            { IdMes: 6, Nombre: 'Junio' },
            { IdMes: 7, Nombre: 'Julio' },
            { IdMes: 8, Nombre: 'Agosto' },
            { IdMes: 9, Nombre: 'Septiembre' },
            { IdMes: 10, Nombre: 'Octubre' },
            { IdMes: 11, Nombre: 'Noviembre' },
            { IdMes: 12, Nombre: 'Diciembre' }
        ];
        vm.TipoTarjetaList = [
            { IdTipoTarjeta: 1, Nombre: 'V' },
            { IdTipoTarjeta: 2, Nombre: 'A' },
            { IdTipoTarjeta: 3, Nombre: 'M' }
        ];
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.GetEstado = GetEstado;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.GetCalle = GetCalle;
        vm.AddDatosFiscales = AddDatosFiscales;
        vm.AddDatosBancarios = AddDatosBancarios;
        vm.AddRefPersonales = AddRefPersonales;
        vm.OpenEditRefPersonal = OpenEditRefPersonal;
        vm.OpenDeleteRefPersonal = OpenDeleteRefPersonal;
        vm.AddNotas = AddNotas;
        initData();
        
    });