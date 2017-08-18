'use strict';

angular
    .module('softvApp')
    .controller('ClienteEditarCtrl', function(CatalogosFactory, ngNotify, $uibModal, $stateParams, $rootScope){

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

            CatalogosFactory.GetBancoList().then(function(data){
                vm.BancoList = data.GetBancoListResult;
            });

            GetDatosClientes(vm.IdContrato);
            GetDatosFiscal(vm.IdContrato);
            GetDatosBancario(vm.IdContrato);
            GetReferenciasPersonales(vm.IdContrato);
            GetNotas(vm.IdContrato);

        }

        function GetDatosClientes(IdContratoCliente){
            CatalogosFactory.GetDeepCliente(IdContratoCliente).then(function(data){
                console.log(data);
                var DatosCliente = data.GetDeepClienteResult;
                vm.IdCliente = DatosCliente.IdCliente;
                vm.IdPlaza = DatosCliente.IdPlaza;
                vm.IdPeriodo = DatosCliente.IdPeriodo;
                vm.IdTipoCliente = DatosCliente.IdTipoCliente;
                vm.Nombre = DatosCliente.Nombre1Er;
                vm.NombreAdi = DatosCliente.Nombre2Do;
                vm.PrimerApe = DatosCliente.ApePaterno;
                vm.SegundoApe = DatosCliente.ApeMaterno;
                vm.ClaveElector = DatosCliente.ClvElector;
                vm.Telefono = DatosCliente.Telefono;
                vm.Celular = DatosCliente.Celular;
                vm.Email = DatosCliente.Email;
                vm.EsPersonaFisica = DatosCliente.EsPersonaFisica;
                vm.FechaNac = toDate(DatosCliente.FechaNacimiento);
                vm.IdEstado = DatosCliente.IdEstado;
                vm.IdMunicipio = DatosCliente.IdMunicipio;
                vm.IdLocalidad = DatosCliente.IdLocalidad;
                vm.IdColonia = DatosCliente.IdColonia;
                vm.IdCalle = DatosCliente.IdCalle;
                vm.EntCalles = DatosCliente.EntreCalles;
                vm.NumExt = DatosCliente.NumExt;
                vm.NumInt = DatosCliente.NumInt;
                vm.CodigoPos = DatosCliente.CP;

                CatalogosFactory.GetPlazaList().then(function(data){
                    vm.PlazaResult = data.GetPlazaListResult;
                    for (var b = 0; b < vm.PlazaResult.length; b++) {
                        if (vm.PlazaResult[b].IdPlaza == vm.IdPlaza) {
                            vm.Plaza = vm.PlazaResult[b];
                            vm.NombrePlaza = vm.PlazaResult[b].Nombre;
                        }
                    }
                });

                CatalogosFactory.GetPeriodoCobroList().then(function(data){
                    vm.PeriodoResult = data.GetPeriodoCobroListResult;
                    for (var b = 0; b < vm.PeriodoResult.length; b++) {
                        if (vm.PeriodoResult[b].IdPeriodo == vm.IdPeriodo) {
                            vm.Periodo = vm.PeriodoResult[b];
                            vm.NombrePeriodo = vm.PeriodoResult[b].Descripcion;
                        }
                    }
                });

                CatalogosFactory.GetTipoClienteList_WebSoftvnew().then(function(data){
                    vm.TipoCobroResult = data.GetTipoClienteList_WebSoftvnewResult;
                    for (var b = 0; b < vm.TipoCobroResult.length; b++) {
                        if (vm.TipoCobroResult[b].IdTipoCliente == vm.IdTipoCliente) {
                            vm.TipoCobro = vm.TipoCobroResult[b];
                            vm.NombreTipoCobro = vm.TipoCobroResult[b].Nombre;
                        }
                    }
                });

                if(vm.EsPersonaFisica == 1){
                    vm.TipoPersona = "F";
                }else if(vm.EsPersonaFisica == 0){
                    vm.TipoPersona = "M";
                }

                CatalogosFactory.GetEstadoList2_web().then(function(data){
                    vm.EstadoResult = data.GetEstadoList2_webResult;
                    for (var b = 0; b < vm.EstadoResult.length; b++) {
                        if (vm.EstadoResult[b].IdEstado == vm.IdEstado) {
                            vm.Estado = vm.EstadoResult[b];
                            vm.NombreEstado = vm.EstadoResult[b].Nombre;
                        }
                    }
                });

                CatalogosFactory.GetEstadosRelMun(vm.IdEstado).then(function(data){
                    vm.CiudadMunicipioList = data.GetEstadosRelMunResult;
                    for (var b = 0; b < vm.CiudadMunicipioList.length; b++) {
                        if (vm.CiudadMunicipioList[b].IdMunicipio == vm.IdMunicipio) {
                            vm.CiuMun = vm.CiudadMunicipioList[b];
                            vm.NombreCiuMun = vm.CiudadMunicipioList[b].Municipio.Nombre;
                        }
                    }
                });

                CatalogosFactory.GetLocalidadRelMun(vm.IdMunicipio).then(function(data){
                    vm.LocalidadList = data.GetLocalidadRelMunResult;
                    for (var b = 0; b < vm.LocalidadList.length; b++) {
                        if (vm.LocalidadList[b].IdLocalidad == vm.IdLocalidad) {
                            vm.Localidad = vm.LocalidadList[b];
                            vm.NombreLocalidad = vm.LocalidadList[b].Localidad.Nombre;
                        }
                    }
                });

                CatalogosFactory.GetColoniaRelLoc(vm.IdLocalidad).then(function(data){
                    vm.ColoniaList = data.GetColoniaRelLocResult;
                    for (var b = 0; b < vm.ColoniaList.length; b++) {
                        if (vm.ColoniaList[b].IdColonia == vm.IdColonia) {
                            vm.Colonia = vm.ColoniaList[b];
                            vm.NombreColonia = vm.ColoniaList[b].Colonia.Nombre;
                        }
                    }
                });

                CatalogosFactory.GetCalleRelCol(vm.IdColonia).then(function(data){
                    vm.CalleList = data.GetCalleRelColResult;
                    for (var b = 0; b < vm.CalleList.length; b++) {
                        if (vm.CalleList[b].IdCalle == vm.IdCalle) {
                            vm.Callle = vm.CalleList[b];
                            vm.NombreCalle = vm.CalleList[b].Calle.Nombre;
                        }
                    }
                });

            });
        }

        function AddDatosPersonales(){
            var FechaNacD = vm.FechaNac.getDate();
            var FechaNacM = vm.FechaNac.getMonth() + 1;
            var FechaNacY = vm.FechaNac.getFullYear();
            var ObjCliente = {};
            ObjCliente.IdContrato = vm.IdContrato;
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
            console.log(ObjCliente)
            CatalogosFactory.UpdateClienteL(ObjCliente).then(function(data){
                console.log(data);
                GetDatosClientes(vm.IdContrato);
            });
        }

        function toDate(dateStr) {
            var parts = dateStr.split("/");
            return new Date(parts[2], parts[1] - 1, parts[0]);
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

        function GetDatosFiscal(IdContrato){
            CatalogosFactory.GetDeepDatoFiscal(IdContrato).then(function(data){
                console.log(data);
                var DatosFiscales = data.GetDeepDatoFiscalResult;
                vm.RazonSoc = DatosFiscales.RazonSocial;
                vm.RFC = DatosFiscales.RFC;
                vm.CURP = DatosFiscales.CURP;
                vm.CalleDF = DatosFiscales.Calle;
                vm.NumExtDF = DatosFiscales.NumExt;
                vm.NumIntDF = DatosFiscales.NumInt;
                vm.EntCallesDF = DatosFiscales.EntreCalles;
                vm.Pais = DatosFiscales.Localidad;
                vm.EstadoDF = DatosFiscales.Estado;
                vm.CiuMunDF = DatosFiscales.Ciudad;
                vm.ColoniaDF = DatosFiscales.Colonia;
                vm.CodigoPosDF = DatosFiscales.CP;
                vm.TelefonoDF = DatosFiscales.Telefono;
                vm.Fax = DatosFiscales.Fax;
                vm.EmailDF = DatosFiscales.Email;
            });
        }

        function GetDatosBancario(IdContrato){
            CatalogosFactory.GetDatoBancarioDeep(IdContrato).then(function(data){
                console.log(data);
                var DatosBancarios = data.GetDatoBancarioDeepResult;
                vm.IdBanco = DatosBancarios.IdBanco;
                vm.Titular = DatosBancarios.NombreTitular;
                vm.NumTarjeta = DatosBancarios.DigitosTarjeta;
                vm.CodigoSeg = DatosBancarios.CodigoSeguridad;
                vm.IdMes = DatosBancarios.MesVencimiento;
                vm.YearVen = DatosBancarios.AnioVencimiento;
                vm.IdTipoTarjeta = DatosBancarios.IdTipoTarjeta;
                CatalogosFactory.GetBancoList().then(function(data){
                    vm.BancoResult = data.GetBancoListResult;
                    for (var b = 0; b < vm.BancoResult.length; b++) {
                        if (vm.BancoResult[b].IdBanco == vm.IdBanco) {
                            vm.Banco = vm.BancoResult[b];
                        }
                    }
                });
                for (var b = 0; b < vm.MesList.length; b++) {
                    if (vm.MesList[b].IdMes == vm.IdMes) {
                        vm.MesVen = vm.MesList[b];
                    }
                }
                for (var b = 0; b < vm.TipoTarjetaList.length; b++) {
                    if (vm.TipoTarjetaList[b].IdTipoTarjeta == vm.IdTipoTarjeta) {
                        vm.TipoPlastico = vm.TipoTarjetaList[b].Nombre;
                    }
                }
            });
        }

        function GetReferenciasPersonales(IdContrato){
            CatalogosFactory.GetReferenciaClienteL(IdContrato).then(function(data){
                vm.RefPerList = data.GetReferenciaClienteLResult;
                if (vm.RefPerList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function GetNotas(IdContrato){
            CatalogosFactory.GetDeepListadoNotas(IdContrato).then(function(data){
                var DatosNotas = data.GetDeepListadoNotasResult;
                vm.Observaciones = DatosNotas.Observacion;
                vm.Notas = DatosNotas.DescripcionRobo;
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
                    GetDatosFiscal(vm.IdContrato);
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
                    GetDatosBancario(vm.IdContrato);
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

        $rootScope.$on('LoadRefPersonal', function(e, IdContrato){
            GetReferenciasPersonales(IdContrato);
        });

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
                console.log(ObjCliente);
                CatalogosFactory.AddNotasClienteL(ObjCliente).then(function(data){
                    console.log(data);
                    GetNotas(vm.IdContrato);
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        var vm = this;
        vm.Title = 'Cliente editar';
        vm.ShowAccord = true;
        vm.BlockInput = true;
        vm.IdContrato = $stateParams.id;
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$/;
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
        ]
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.GetCalle = GetCalle;
        vm.AddDatosPostales = AddDatosPostales;
        vm.AddDatosFiscales = AddDatosFiscales;
        vm.AddDatosBancarios = AddDatosBancarios;
        vm.AddRefPersonales = AddRefPersonales;
        vm.OpenEditRefPersonal = OpenEditRefPersonal;
        vm.OpenDeleteRefPersonal = OpenDeleteRefPersonal;
        vm.AddNotas = AddNotas;
        initData();

    });