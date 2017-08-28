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
            GetDeepListadoNotas: '/ListadoNotas/GetDeepListadoNotas',
            GetClientes: '/Cliente/GetClientes',
            GetClientesByDireccion: '/Cliente/GetClientes',
            GetClientesByNombre: '/Cliente/GetClientes',
            GetClientesByPlaza: '/Cliente/GetClientes',
            GetClientesAll: '/Cliente/GetClientes',
            UpdateClienteL: '/Cliente/UpdateClienteL',
            GetEstadoList3_web: '/Estado/GetEstadoList3_web',
            AddEstado2_web: '/Estado/AddEstado2_web',
            UpdateEstado2_web: '/Estado/UpdateEstado2_web',
            DeleteEstado2_web: '/Estado/DeleteEstado2_web',
            GetMunicipioList: '/Municipio/GetMunicipioList',
            GetMunicipioList2: '/Municipio/GetMunicipioList2',
            AddMunicipio: '/Municipio/AddMunicipio',
            UpdateMunicipio: '/Municipio/UpdateMunicipio',
            DeleteMunicipio: '/Municipio/DeleteMunicipio',
            GetLocalidadList: '/Localidad/GetLocalidadList',
            AddLocalidad: '/Localidad/AddLocalidad',
            AddRelLocalidadL: '/localidad/AddRelLocalidadL',
            GetDeepLocalidad: '/localidad/GetDeepLocalidad',
            UpdateLocalidad: '/Localidad/UpdateLocalidad',
            DeleteLocalidad: '/Localidad/DeleteLocalidad',
            GetTipoColoniaList: '/TipoColonia/GetTipoColoniaList',
            AddTipoColonia: '/TipoColonia/AddTipoColonia',
            UpdateTipoColonia: '/TipoColonia/UpdateTipoColonia',
            DeleteTipoColonia: '/TipoColonia/DeleteTipoColonia',
            GetCalleList: '/Calle/GetCalleList',
            AddCalleL: '/Calle/AddCalleL',
            GetDeepCalle: '/Calle/GetDeepCalle',
            DeleteCalle: '/Calle/DeleteCalle'
        };

        factory.GetPlazaList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetPlazaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetPeriodoCobroList = function(){
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetPeriodoCobroList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoClienteList_WebSoftvnew = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
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
                headers: {'Authorization': $localStorage.currentUser.token}};
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
                headers: {'Authorization': $localStorage.currentUser.token}};
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
            var config = { headers: {'Authorization': $localStorage.currentUser.token}};
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
            $http.post(globalService.getUrl() + paths.GetDeepListadoNotas, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientes = function (Contrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {'IdCliente': Contrato},
            };
            $http.post(globalService.getUrl() + paths.GetClientes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientesByDireccion = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    IdEstado: ObjCliente.IdEstado,
                    IdMunicipio: ObjCliente.IdMunicipio,
                    IdLocalidad: ObjCliente.IdLocalidad,
                    IdColonia: ObjCliente.IdColonia,
                    IdCalle: ObjCliente.IdCalle,
                    Numero: ObjCliente.Numero
                }
            };
            $http.post(globalService.getUrl() + paths.GetClientesByDireccion, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientesByNombre = function (NombreCompleto) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    NomCompleto: NombreCompleto
                }
            };
            $http.post(globalService.getUrl() + paths.GetClientesByNombre, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientesByPlaza = function (IdPlaza) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    IdPlaza: IdPlaza
                }
            };
            $http.post(globalService.getUrl() + paths.GetClientesByNombre, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientesAll = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    IdContrato: null,
                    Nombre1Er: null,
                    Nombre2Do: null,
                    ApePaterno: null,
                    ApeMaterno: null,
                    ClvElector: null,
                    Telefono: null,
                    Celular: null,
                    Email: null,
                    IdPlaza: null,
                    IdPeriodo: null,
                    IdTipoCliente: null,
                    EsPersonaFisica: null,
                    FechaNacimiento: null
                }
            };
            $http.post(globalService.getUrl() + paths.GetClientesAll, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    IdContrato: ObjCliente.IdContrato,
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
            $http.post(globalService.getUrl() + paths.UpdateClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetEstadoList3_web = function (IdPlaza) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'IdPlaza': IdPlaza
            };
            $http.post(globalService.getUrl() + paths.GetEstadoList3_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddEstado2_web = function (EstadoObj) {
            var deferred = $q.defer();
            var config = {
                headers: {'Authorization': $localStorage.currentUser.token}
            };
            var Parametros = {
                'objEstado': {
                    Nombre: EstadoObj.Estado
                }
            };
            $http.post(globalService.getUrl() + paths.AddEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateEstado2_web = function (EstadoObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objEstado': {
                    IdEstado: EstadoObj.IdEstado,
                    Nombre: EstadoObj.Estado
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteEstado2_web = function (IdEstado) {
            var deferred = $q.defer();
            var config = {
                headers: {'Authorization': $localStorage.currentUser.token}
            };
            var Parametros = {
                'IdEstado': IdEstado
            };
            $http.post(globalService.getUrl() + paths.DeleteEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMunicipioList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {'Authorization': $localStorage.currentUser.token}
            };
            $http.get(globalService.getUrl() + paths.GetMunicipioList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMunicipioList2 = function(){
            var deferred = $q.defer();
            var config = {
                headers: {'Authorization': $localStorage.currentUser.token}
            };
            $http.get(globalService.getUrl() + paths.GetMunicipioList2, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddMunicipio = function (CiudadObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objMunicipio': {
                    Nombre: CiudadObj.Ciudad,
                    IdEstado: CiudadObj.IdEstado
                }
            };
            $http.post(globalService.getUrl() + paths.AddMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateMunicipio = function (CiudadObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objMunicipio': {
                    Nombre: CiudadObj.Ciudad,
                    IdMunicipio: CiudadObj.IdCiudad
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteMunicipio = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'IdMunicipio': IdMunicipio
            };
            $http.post(globalService.getUrl() + paths.DeleteMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetLocalidadList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetLocalidadList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddLocalidad = function (LocalidadObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objLocalidad': {
                    Nombre: LocalidadObj.Localidad,
                    IdEstado: LocalidadObj.IdEstado,
                    IdMunicipio: LocalidadObj.IdCiudad
                }
            };
            $http.post(globalService.getUrl() + paths.AddLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRelLocalidadL = function (lstRelLocalidad, RelLocalidadMunEstAdd) {
            var deferred = $q.defer();
            var config = {
                headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {
                'lstRelLocalidad': lstRelLocalidad,
                'RelLocalidadMunEstAdd': RelLocalidadMunEstAdd
            };
            $http.post(globalService.getUrl() + paths.AddRelLocalidadL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepLocalidad = function (IdLocalidad) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'IdLocalidad': IdLocalidad
            };
            $http.post(globalService.getUrl() + paths.GetDeepLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateLocalidad = function (LocalidadObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objLocalidad': {
                    IdLocalidad: LocalidadObj.IdLocalidad,
                    Nombre: LocalidadObj.Localidad
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteLocalidad = function (IdLocalidad) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                IdLocalidad: IdLocalidad
            };
            $http.post(globalService.getUrl() + paths.DeleteLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoColoniaList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetTipoColoniaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddTipoColonia = function (TipoColonia) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objTipoColonia': {
                    Nombre: TipoColonia
                }
            };
            $http.post(globalService.getUrl() + paths.AddTipoColonia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateTipoColonia = function (TipoColoniaObj) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                'objTipoColonia': {
                    IdTipoColonia: TipoColoniaObj.IdTipoColonia,
                    Nombre: TipoColoniaObj.TipoColonia
                }
            };
            $http.post(globalService.getUrl() + paths.UpdateTipoColonia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteTipoColonia = function (IdTipoColonia) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                IdTipoColonia: IdTipoColonia
            };
            $http.post(globalService.getUrl() + paths.DeleteTipoColonia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCalleList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetCalleList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddCalleL = function (lstRelCalle, RelCalleAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {
                'lstRelCalle': lstRelCalle,
                'RelCalleAdd': RelCalleAdd
            };
            $http.post(globalService.getUrl() + paths.AddCalleL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteCalle = function (IdCalle) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {
                IdCalle: IdCalle
            };
            $http.post(globalService.getUrl() + paths.DeleteCalle, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return factory;

    });