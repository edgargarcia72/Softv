'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function($http, $q, globalService, $localStorage){

        var factory = {};
        var paths = {
            GetPlazaList: '/Plaza/GetPlazaList',
            GetPeriodoCobroList: '/PeriodoCobro/GetPeriodoCobroList',
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            AddClienteL: '/Cliente/AddClienteL',
            GetDeepCliente: '/Cliente/GetDeepCliente',
            GetEstadoList2_web: '/Estado/GetEstadoList2_web',
            GetEstadosRelMun: '/RelMunicipioEst/GetEstadosRelMun',
            GetLocalidadRelMun: '/RelLocalidadMunEst/GetLocalidadRelMun',
            GetColoniaRelLoc: '/RelColoniaLocMunEst/GetColoniaRelLoc',
            GetCalleRelCol: '/RelCalleColonia/GetCalleRelCol',
            UpdateClienteDPos: '/Cliente/UpdateClienteDPos',
            AddDatoFiscalCliente: '/Cliente/AddDatoFiscalCliente',
            GetDeepDatoFiscal: '/DatoFiscal/GetDeepDatoFiscal',
            GetBancoList: '/Banco/GetBancoList',
            AddDatoBancarioCliente: '/Cliente/AddDatoBancarioCliente',
            GetDatoBancarioDeep: '/DatoBancario/GetDatoBancarioDeep',
            AddReferenciaClienteL: '/Cliente/AddReferenciaClienteL',
            DeleteReferenciaCliente: '/ReferenciaCliente/DeleteReferenciaCliente',
            UpdateReferencia: '/ReferenciaCliente/UpdateReferencia',
            GetReferenciaClienteL: '/ReferenciaCliente/GetReferenciaClienteL',
            AddNotasClienteL: '/Cliente/AddNotasClienteL',
            GetDeepListadoNotas: '/ListadoNotas/GetDeepListadoNotas'
        };

        factory.GetPlazaList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetPlazaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetPeriodoCobroList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetPeriodoCobroList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoClienteList_WebSoftvnew = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetTipoClienteList_WebSoftvnew, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    Nombre1Er: ObjCliente.Nombre,
                    Nombre2Do: ObjCliente.NombreAdi,
                    ApePaterno: ObjCliente.PrimerApe,
                    ApeMaterno: ObjCliente.SegundoApe,
                    ClvElector: ObjCliente.ClaveElector,
                    Telefono: ObjCliente.Telefono,
                    Celular: ObjCliente.Celular,
                    Email: ObjCliente.Email,
                    IdPlaza: ObjCliente.IdPlaza,
                    IdPeriodo: ObjCliente.IdPeriodo,
                    IdTipoCliente: ObjCliente.IdTipoCliente,
                    EsPersonaFisica: ObjCliente.TipoPersona,
                    FechaNacimiento: ObjCliente.FechaNac
                }
            };
            $http.post(globalService.getUrl() + paths.AddClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepCliente = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            };
            $http.post(globalService.getUrl() + paths.GetDeepCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };
        
        factory.GetEstadoList2_web = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetEstadoList2_web, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetEstadosRelMun = function (IdEstado) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdEstado': IdEstado
            };
            $http.post(globalService.getUrl() + paths.GetEstadosRelMun, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetLocalidadRelMun = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdMunicipio': IdMunicipio
            };
            $http.post(globalService.getUrl() + paths.GetLocalidadRelMun, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetColoniaRelLoc = function (IdLocalidad) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdLocalidad': IdLocalidad
            };
            $http.post(globalService.getUrl() + paths.GetColoniaRelLoc, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCalleRelCol = function (IdColonia) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdColonia': IdColonia
            };
            $http.post(globalService.getUrl() + paths.GetCalleRelCol, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateClienteDPos = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstClienteDP': {
                    IdContrato: ObjCliente.IdContrato,
                    IdEstado: ObjCliente.IdEstado,
                    IdMunicipio: ObjCliente.IdMunicipio,
                    IdLocalidad: ObjCliente.IdLocalidad,
                    IdColonia: ObjCliente.IdColonia,
                    IdCalle: ObjCliente.IdCalle,
                    EntreCalles: ObjCliente.EntCalles,
                    NumExt: ObjCliente.NumExt,
                    NumInt: ObjCliente.NumInt,
                    CP: ObjCliente.CodigoPos
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateClienteDPos, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDatoFiscalCliente = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': 
                    {'IdContrato': ObjCliente.IdContrato},
                    'DatoFiscalAdd': [{
                        IVADesglosado: ObjCliente.IVADesglosado,
                        RazonSocial: ObjCliente.RazonSoc,
                        RFC: ObjCliente.RFC,
                        CURP: ObjCliente.CURP,
                        Calle: ObjCliente.CalleDF,
                        NumExt: ObjCliente.NumExtDF,
                        NumInt: ObjCliente.NumIntDF,
                        EntreCalles: ObjCliente.EntCallesDF,
                        Colonia: ObjCliente.ColoniaDF,
                        Localidad: ObjCliente.LocalidadDF,
                        Ciudad: ObjCliente.CiuMunDF,
                        Estado: ObjCliente.EstadoDF,
                        CP: ObjCliente.CodigoPosDF,
                        Telefono: ObjCliente.TelefonoDF,
                        Fax: ObjCliente.Fax,
                        Email: ObjCliente.EmailDF,
                        Tipo: ObjCliente.Tipo
                    }]
            };
            $http.post(globalService.getUrl() + paths.AddDatoFiscalCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepDatoFiscal = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            }
            $http.post(globalService.getUrl() + paths.GetDeepDatoFiscal, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetBancoList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetBancoList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDatoBancarioCliente = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': 
                    {'IdContrato': ObjCliente.IdContrato},
                    'DatoBancarioAdd': [{
                        IdBanco: ObjCliente.IdBanco,
                        IdTipoTarjeta: ObjCliente.TipoPlastico,
                        NombreTitular: ObjCliente.Titular,
                        DigitosTarjeta: ObjCliente.NumTarjeta,
                        CodigoSeguridad: ObjCliente.CodigoSeg,
                        MesVencimiento: ObjCliente.IdMes,
                        AnioVencimiento: ObjCliente.YearVen
                    }]
            };
            $http.post(globalService.getUrl() + paths.AddDatoBancarioCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDatoBancarioDeep = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            }
            $http.post(globalService.getUrl() + paths.GetDatoBancarioDeep, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddReferenciaClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': 
                    {'IdContrato': ObjCliente.IdContrato},
                    'ReferenciaClienteAdd': [{
                        Nombre: ObjCliente.NombreRef,
                        Direccion: ObjCliente.DireccionRef,
                        Email: ObjCliente.EmailRef,
                        Telefono: ObjCliente.TelefonoRef,
                        OpcionProspecto: ObjCliente.OpcionProspecto
                    }]
            };
            $http.post(globalService.getUrl() + paths.AddReferenciaClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetReferenciaClienteL = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            }
            $http.post(globalService.getUrl() + paths.GetReferenciaClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateReferencia = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstReferencia': {
                    Direccion: ObjCliente.DireccionRef,
                    Email: ObjCliente.EmailRef,
                    IdContrato: ObjCliente.IdContrato,
                    IdReferencia: ObjCliente.IdReferencia,
                    Nombre: ObjCliente.NombreRef,
                    OpcionProspecto: ObjCliente.OpcionProspecto,
                    Telefono: ObjCliente.TelefonoRef
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateReferencia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteReferenciaCliente = function (IdReferencia) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdReferencia': IdReferencia
            };
            $http.post(globalService.getUrl() + paths.DeleteReferenciaCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddNotasClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': 
                    {'IdContrato': ObjCliente.IdContrato},
                    'ObservacionClienteAdd': [{ Observacion: ObjCliente.Observaciones }],
                    'RoboDeSenalAdd': [{ Descripcion: ObjCliente.Notas }]
            };
            $http.post(globalService.getUrl() + paths.AddNotasClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepListadoNotas = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            }
            console.log(Parametros);
            $http.post(globalService.getUrl() + paths.GetDeepListadoNotas, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return factory;

    });