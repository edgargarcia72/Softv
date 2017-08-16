'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory, ngNotify, $uibModal, $rootScope){

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

            GetReferenciasPersonales(vm.IdContrato);
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
                ObjCliente.LocalidadDF = 'Localidad';
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
                    GetDatosFiscal(vm.IdContrato);
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function GetDatosFiscal(IdContrato){
            CatalogosFactory.GetDeepDatoFiscal(IdContrato).then(function(data){
                console.log(data);
            });
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
                    GetDatosBancario(vm.IdContrato);
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function GetDatosBancario(IdContrato){
            CatalogosFactory.GetDatoBancarioDeep(IdContrato).then(function(data){
                console.log(data);
            });
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
                CatalogosFactory.AddReferenciaClienteL(ObjCliente).then(function(data){
                    console.log(data);
                    GetNotas(vm.IdContrato);
                });
            }else{
                ngNotify.set('Aun no se han registrado los datos personales.', 'warn');
            }
        }

        function GetNotas(IdContrato){
            CatalogosFactory.GetDeepListadoNotas(IdContrato).then(function(data){
                console.log(data);
            });
        }

        var vm = this;
        //vm.IdContrato = 28;//Eliminar
        vm.TipoPersona = "1";
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