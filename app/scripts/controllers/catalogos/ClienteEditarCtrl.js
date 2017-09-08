'use strict';

angular
    .module('softvApp')
    .controller('ClienteEditarCtrl', function(CatalogosFactory, ngNotify, $uibModal, $stateParams, $rootScope, $localStorage){

        function initData(){

            CatalogosFactory.GetPlazaList($localStorage.currentUser.idUsuario).then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
                CatalogosFactory.GetTipoClienteList_WebSoftvnew().then(function(data){
                    vm.TipoCobroList = data.GetTipoClienteList_WebSoftvnewResult;
                    CatalogosFactory.GetBancoList().then(function(data){
                        vm.BancoList = data.GetBancoListResult;
                        GetDatosClientes(vm.IdContrato);
                        GetDatosFiscal(vm.IdContrato);
                    });
                });
            });

            /*GetDatosBancario(vm.IdContrato);
            GetReferenciasPersonales(vm.IdContrato);
            GetNotas(vm.IdContrato);*/

        }

        function GetDatosClientes(IdContratoCliente){
            CatalogosFactory.GetConsultaClientesList(IdContratoCliente).then(function(data){
                console.log(data);
                var DatosCliente = data.GetConsultaClientesListResult[0];
                vm.CONTRATO = DatosCliente.CONTRATO;
                vm.IdCliente = DatosCliente.ContratoCom;
                vm.IdPlaza = DatosCliente.IdCompania;
                vm.IdPeriodo = DatosCliente.Clv_Periodo;
                vm.IdTipoCliente = DatosCliente.TipoCliente;
                vm.Nombre = DatosCliente.Nombre;
                vm.NombreAdi = DatosCliente.SegundoNombre;
                vm.PrimerApe = DatosCliente.Apellido_Paterno;
                vm.SegundoApe = DatosCliente.Apellido_Materno;
                vm.ClaveElector = DatosCliente.ClaveElector;
                vm.Telefono = DatosCliente.TELEFONO;
                vm.Celular = DatosCliente.CELULAR;
                vm.Email = DatosCliente.Email;
                vm.EsPersonaFisica = DatosCliente.EsFisica;
                vm.FechaNac = toDate(DatosCliente.FechaNacimiento);
                vm.IdEstado = DatosCliente.Clv_Estado;
                vm.IdMunicipio = DatosCliente.Clv_Ciudad;
                vm.IdLocalidad = DatosCliente.Clv_Localidad;
                vm.IdColonia = DatosCliente.Clv_Colonia;
                vm.IdCalle = DatosCliente.Clv_Calle;
                vm.EntCalles = DatosCliente.ENTRECALLES;
                vm.NumExt = DatosCliente.NUMERO;
                vm.NumInt = DatosCliente.NumInt;
                vm.CodigoPos = DatosCliente.CP;

                for (var b = 0; b < vm.TipoCobroList.length; b++) {
                    if(vm.TipoCobroList[b].CLV_TIPOCLIENTE == vm.IdTipoCliente) {
                        vm.TipoCobro = vm.TipoCobroList[b];
                        vm.NombreTipoCobro = vm.TipoCobroList[b].DESCRIPCION;
                    }
                }

                if(vm.EsPersonaFisica == true){
                    vm.TipoPersona = "F";
                }else if(vm.EsPersonaFisica == false){
                    vm.TipoPersona = "M";
                }

                for(var b = 0; b < vm.PlazaList.length; b++){
                    if(vm.PlazaList[b].id_compania == vm.IdPlaza){
                        vm.Plaza = vm.PlazaList[b];
                        vm.NombrePlaza = vm.PlazaList[b].razon_social;
                    }
                }

                CatalogosFactory.GetMuestraEstadosCompaniaList(vm.IdPlaza).then(function(data){
                    vm.EstadoList = data.GetMuestraEstadosCompaniaListResult;
                    for (var b = 0; b < vm.EstadoList.length; b++) {
                        if (vm.EstadoList[b].Clv_Estado == vm.IdEstado) {
                            vm.Estado = vm.EstadoList[b];
                            vm.NombreEstado = vm.EstadoList[b].Nombre;
                            GetCiudadMunicipio(vm.IdMunicipio);
                        }
                    }
                });

            });
        }

        function GetCiudadMunicipio(IdMunicipio){
            if(vm.Estado != undefined){
                var RelEstMun = {
                    'clv_estado' : vm.Estado.Clv_Estado,
                    'idcompania' : vm.Plaza.id_compania
                };
                CatalogosFactory.GetMuestraCiudadesEstadoList(RelEstMun).then(function(data){
                    vm.CiudadMunicipioList = data.GetMuestraCiudadesEstadoListResult;
                    if(IdMunicipio != undefined){
                        for (var b = 0; b < vm.CiudadMunicipioList.length; b++) {
                            if (vm.CiudadMunicipioList[b].Clv_Ciudad == IdMunicipio) {
                                vm.CiuMun = vm.CiudadMunicipioList[b];
                                vm.NombreCiuMun = vm.CiudadMunicipioList[b].Nombre;
                                GetLocalidad(vm.IdLocalidad);
                            }
                        }
                    }
                });
            }else{
                vm.CiudadMunicipioList = null;
            }
            vm.LocalidadList = null;
            vm.ColoniaList = null;
            vm.CalleList = null;
        }

        function GetLocalidad(IdLocalidad){
            if(vm.CiuMun != undefined){
                CatalogosFactory.GetMuestraLocalidadCiudadList(vm.CiuMun.Clv_Ciudad).then(function(data){
                    vm.LocalidadList = data.GetMuestraLocalidadCiudadListResult;
                    if(IdLocalidad != undefined){
                        for (var b = 0; b < vm.LocalidadList.length; b++) {
                            if (vm.LocalidadList[b].Clv_Localidad == vm.IdLocalidad) {
                                vm.Localidad = vm.LocalidadList[b];
                                vm.NombreLocalidad = vm.LocalidadList[b].NOMBRE;
                                GetColonia(vm.IdColonia);
                            }
                        }
                    }
                });
            }else{
                vm.LocalidadList = null;
            }
            vm.ColoniaList = null;
            vm.CalleList = null;
        }
        
        function GetColonia(IdColonia){
            if(vm.Localidad != undefined){
                CatalogosFactory.GetMuestraColoniaLocalidadList(vm.Localidad.Clv_Localidad).then(function(data){
                    vm.ColoniaList = data.GetMuestraColoniaLocalidadListResult;
                    if(IdColonia != undefined){
                        for (var b = 0; b < vm.ColoniaList.length; b++) {
                            if (vm.ColoniaList[b].CLV_COLONIA == IdColonia) {
                                vm.Colonia = vm.ColoniaList[b];
                                vm.NombreColonia = vm.ColoniaList[b].Nombre;
                                GetCalle(vm.IdCalle);
                            }
                        }
                    }
                });
            }else{
                vm.ColoniaList = null;
            }
            vm.CalleList = null;
        }

        function GetCalle(IdCalle){
            if(vm.Colonia != undefined){
                CatalogosFactory.GetMuestraCalleColoniaList(vm.Colonia.CLV_COLONIA).then(function(data){
                    vm.CalleList = data.GetMuestraCalleColoniaListResult;
                    if(IdCalle){
                        for (var b = 0; b < vm.CalleList.length; b++) {
                            if (vm.CalleList[b].Clv_Calle == IdCalle) {
                                vm.Calle = vm.CalleList[b];
                                vm.NombreCalle = vm.CalleList[b].Nombre;
                            }
                        }
                    }
                });
                CatalogosFactory.GetmuestraCP_ColoniaLocalidadList(vm.Colonia.CLV_COLONIA).then(function(data){
                    vm.CodigoPos = data.GetmuestraCP_ColoniaLocalidadListResult[0].CodigoPostal;
                });
            }else{
                vm.CalleList = null;
                vm.CodigoPos = null;
            }
        }

        function AddDatosPersonales(){
            var FechaNacD = vm.FechaNac.getDate();
            var FechaNacM = vm.FechaNac.getMonth() + 1;
            var FechaNacY = vm.FechaNac.getFullYear();
            var objCLIENTES_New = {
                'CONTRATO': vm.IdContrato,
                'Nombre': vm.Nombre, 
                'SegundoNombre': vm.NombreAdi,
                'Apellido_Paterno': vm.PrimerApe,
                'Apellido_Materno': vm.SegundoApe,
                'FechaNacimiento': FechaNacD + '/' + FechaNacM + '/' + FechaNacY,
                'EsFisica': (vm.TipoPersona == 'F') ? 1 : 0,
                'TELEFONO': vm.Telefono, 
                'CELULAR': vm.Celular, 
                'Email': vm.Email, 
                'ClaveElector': vm.ClaveElector, 
                'IdCompania': vm.Plaza.id_compania, 
                'Clv_Estado': vm.Estado.Clv_Estado, 
                'Clv_Ciudad': vm.CiuMun.Clv_Ciudad, 
                'Clv_Localidad': vm.Localidad.Clv_Localidad, 
                'Clv_Colonia': vm.Colonia.CLV_COLONIA, 
                'Clv_Calle': vm.Calle.Clv_Calle, 
                'ENTRECALLES': vm.EntCalles,
                'NUMERO': vm.NumExt, 
                'NumInt': vm.NumInt, 
                'CodigoPostal': vm.CodigoPos, 
                'IdUsuario': $localStorage.currentUser.idUsuario,
                'TipoCliente': vm.TipoCobro.CLV_TIPOCLIENTE
            };
            CatalogosFactory.UpdateCLIENTES_New(objCLIENTES_New).then(function(data){
                console.log(data);
                if(data.UpdateCLIENTES_NewResult == -1){
                    ngNotify.set('CORRECTO, se guardaron datos personales.', 'success');
                    GetDatosClientes(vm.IdContrato);
                }else{
                    ngNotify.set('ERROR, al guardar datos personales.', 'warn');
                }
            });
        }

        function toDate(dateStr) {
            var parts = dateStr.split("/");
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }

        function GetDatosFiscal(IdContrato){
            CatalogosFactory.GetDatosFiscalesList(IdContrato).then(function(data){
                console.log(data);
                var DatosFiscales = data.GetDatosFiscalesListResult[0];
                vm.RazonSoc = DatosFiscales.RAZON_SOCIAL;
                vm.RFC = DatosFiscales.RFC;
                vm.CURP = DatosFiscales.CURP;
                vm.CalleDF = DatosFiscales.CALLE_RS;
                vm.NumExtDF = DatosFiscales.NUMERO_RS;
                vm.EntCallesDF = DatosFiscales.ENTRECALLES;
                vm.Pais = DatosFiscales.PAIS;
                vm.EstadoDF = DatosFiscales.ESTADO_RS;
                vm.CiuMunDF = DatosFiscales.CIUDAD_RS;
                vm.ColoniaDF = DatosFiscales.COLONIA_RS;
                vm.CodigoPosDF = DatosFiscales.CP_RS;
                vm.TelefonoDF = DatosFiscales.TELEFONO_RS;
                vm.Fax = DatosFiscales.FAX_RS;
                vm.EmailDF = DatosFiscales.Email;
            });
        }

        function GetDatosBancario(IdContrato){
            CatalogosFactory.GetDatoBancarioDeep(IdContrato).then(function(data){
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

        function AddDatosFiscales(){
            if(vm.IdContrato != undefined){
                var objDatosFiscales = {
                    "Contrato": vm.IdContrato,
                    "RAZON_SOCIAL" : vm.RazonSoc,
                    "RFC" : vm.RFC,
                    "CURP" : vm.CURP,
                    "PAIS" : vm.Pais,
                    "ESTADO_RS" : vm.EstadoDF,
                    "CIUDAD_RS" : vm.CiuMunDF,
                    "COLONIA_RS" : vm.ColoniaDF,
                    "CP_RS" : vm.CodigoPosDF,
                    "CALLE_RS" : vm.CalleDF,
                    "NUMERO_RS" : vm.NumExtDF,
                    "ENTRECALLES" : vm.EntCallesDF,
                    "TELEFONO_RS" : vm.TelefonoDF,
                    "FAX_RS" : vm.Fax,
                    "Email" : vm.EmailDF
                };
                console.log(objDatosFiscales);
                CatalogosFactory.AddDatosFiscales(objDatosFiscales).then(function(data){
                    console.log(data);
                    var DatosFiscales = data.AddDatosFiscalesResult;
                    if(DatosFiscales == -1){
                        ngNotify.set('CORRECTO, se guardaron datos fiscales.', 'success');
                        $state.go('home.catalogos.cliente_editar', { id:IdCliente });
                        GetDatosFiscal(vm.IdContrato);
                    }else{
                        ngNotify.set('ERROR, al guardar datos fiscales.', 'warn');
                        $state.go('home.catalogos.clientes');
                    }
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
                var FechaVen = vm.MesVen.IdMes + '/' + vm.YearVen;
                console.log(FechaVen);
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
                CatalogosFactory.AddNotasClienteL(ObjCliente).then(function(data){
                    console.log(data);
                    GetNotas(vm.IdContrato);
                    ngNotify.set('CORRECTO, se guardaron notas.', 'success');
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        var vm = this;
        vm.IdContrato = $stateParams.id;
        vm.Title = 'Cliente editar - ' + vm.IdContrato;
        vm.ShowAccord = true;
        vm.BlockInput = true;
        vm.DisableInput = false;
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
        ]
        vm.AddDatosPersonales = AddDatosPersonales;
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