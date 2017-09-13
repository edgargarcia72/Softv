'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function ($http, $q, globalService, $localStorage) {

        var factory = {};
        var paths = {
            GetPeriodoCobroList: '/PeriodoCobro/GetPeriodoCobroList',
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            AddClienteL: '/Cliente/AddClienteL',
            GetDeepCliente: '/Cliente/GetDeepCliente',
            GetMuestraCiudadesEstadoList: '/MuestraCiudadesEstado/GetMuestraCiudadesEstadoList',
            GetMuestraLocalidadCiudadList: '/MuestraLocalidadCiudad/GetMuestraLocalidadCiudadList',
            GetMuestraColoniaLocalidadList: '/MuestraColoniaLocalidad/GetMuestraColoniaLocalidadList',
            GetMuestraCalleColoniaList: '/MuestraCalleColonia/GetMuestraCalleColoniaList',
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
            UpdateClienteL: '/Cliente/UpdateClienteL',
            GetEstadoList2_web: '/Estado/GetEstadoList2_web',
            GetMuestraEstadosCompaniaList: '/MuestraEstadosCompania/GetMuestraEstadosCompaniaList',
            AddEstado2_web: '/Estado/AddEstado2_web',
            UpdateEstado2_web: '/Estado/UpdateEstado2_web',
            DeleteEstado2_web: '/Estado/DeleteEstado2_web',
            GetMunicipioList: '/Municipio/GetMunicipioList',
            GetDeepMunicipio: '/Municipio/GetDeepMunicipio',
            AddRelEstMunL: '/Municipio/AddRelEstMunL',
            UpdateRelEstMunL: '/Municipio/UpdateRelEstMunL',
            DeleteMunicipio: '/Municipio/DeleteMunicipio',
            GetLocalidadList: '/Localidad/GetLocalidadList',
            AddRelLocalidadL: '/localidad/AddRelLocalidadL',
            GetDeepLocalidad: '/localidad/GetDeepLocalidad',
            UpdateRellocalidadL: '/localidad/UpdateRellocalidadL',
            DeleteLocalidad: '/Localidad/DeleteLocalidad',
            GetTipoColoniaList: '/TipoColonia/GetTipoColoniaList',
            AddTipoColonia: '/TipoColonia/AddTipoColonia',
            UpdateTipoColonia: '/TipoColonia/UpdateTipoColonia',
            DeleteTipoColonia: '/TipoColonia/DeleteTipoColonia',
            GetCalleList: '/Calle/GetCalleList',
            AddCalleL: '/Calle/AddCalleL',
            GetDeepCalle: '/Calle/GetDeepCalle',
            UpdateCalleL: '/Calle/UpdateCalleL',
            DeleteCalle: '/Calle/DeleteCalle',
            GetDistribuidorList: '/Distribuidor/GetDistribuidorList',
            AddDistribuidor: '/Distribuidor/AddDistribuidor',
            GetDeepDistribuidor: '/Distribuidor/GetDeepDistribuidor',
            UpdateDistribuidor: '/Distribuidor/UpdateDistribuidor',
            DeleteDistribuidor: '/Distribuidor/DeleteDistribuidor',
            GetPlazaList: '/Plaza/GetPlazaList',
            AddPlazaL: '/Plaza/AddPlazaL',
            GetDeepPlaza: '/Plaza/GetDeepPlaza',
            UpdatePlazaL: '/Plaza/UpdatePlazaL',
            GetColoniaList: '/Colonia/GetColoniaList',
            AddColoniaL: '/Colonia/AddColoniaL',
            GetTipServList: '/TipServ/GetTipServList',
            GetmuestraCP_ColoniaLocalidadList: '/muestraCP_ColoniaLocalidad/GetmuestraCP_ColoniaLocalidadList',
            GetSucursalList: '/Sucursales/GetSUCURSALESList',
            AddSucursal: '/SUCURSALES/AddSUCURSALES',
            GetDeepSucursal:'/SUCURSALES/GetDeepSUCURSALES',
            UpdateSucursal: '/SUCURSALES/UpdateSUCURSALES'
        };

        factory.GetPlazaList = function (IdUsuario) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdUsuario': IdUsuario };
            $http.post(globalService.getUrl() + paths.GetPlazaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetSucursalList = function (Clv_Sucursal, Nombre,OP,idcompania) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'Clv_Sucursal': Clv_Sucursal, 'Nombre': Nombre, 'OP': OP, 'idcompania': idcompania, 'clv_usuario': $localStorage.currentUser.idUsuario };
            $http.post(globalService.getUrl() + paths.GetSucursalList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetPeriodoCobroList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetPeriodoCobroList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoClienteList_WebSoftvnew = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetTipoClienteList_WebSoftvnew, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdContrato': IdContrato };
            $http.post(globalService.getUrl() + paths.GetDeepCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetEstadoList2_web = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetEstadoList2_web, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraCiudadesEstadoList = function (RelEstMun) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = RelEstMun;
            console.log(Parametros);
            $http.post(globalService.getUrl() + paths.GetMuestraCiudadesEstadoList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraLocalidadCiudadList = function (clv_ciudad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'clv_ciudad': clv_ciudad };
            $http.post(globalService.getUrl() + paths.GetMuestraLocalidadCiudadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraColoniaLocalidadList = function (clv_localidad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'clv_localidad': clv_localidad };
            $http.post(globalService.getUrl() + paths.GetMuestraColoniaLocalidadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetmuestraCP_ColoniaLocalidadList = function (Clv_Colonia) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'Clv_Colonia': Clv_Colonia };
            $http.post(globalService.getUrl() + paths.GetmuestraCP_ColoniaLocalidadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraCalleColoniaList = function (clv_colonia) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'clv_colonia': clv_colonia };
            $http.post(globalService.getUrl() + paths.GetMuestraCalleColoniaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateClienteDPos = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: { 'Authorization': $localStorage.currentUser.token }
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstCliente':
                { 'IdContrato': ObjCliente.IdContrato },
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdContrato': IdContrato }
            $http.post(globalService.getUrl() + paths.GetDeepDatoFiscal, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetBancoList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetBancoList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDatoBancarioCliente = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstCliente':
                { 'IdContrato': ObjCliente.IdContrato },
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdContrato': IdContrato }
            $http.post(globalService.getUrl() + paths.GetDatoBancarioDeep, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddReferenciaClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstCliente':
                { 'IdContrato': ObjCliente.IdContrato },
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdContrato': IdContrato }
            $http.post(globalService.getUrl() + paths.GetReferenciaClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateReferencia = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdReferencia': IdReferencia };
            $http.post(globalService.getUrl() + paths.DeleteReferenciaCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddNotasClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstCliente':
                { 'IdContrato': ObjCliente.IdContrato },
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdContrato': IdContrato }
            $http.post(globalService.getUrl() + paths.GetDeepListadoNotas, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientes = function (lstCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'lstCliente': lstCliente };
            console.log($localStorage.currentUser);
            $http.post(globalService.getUrl() + paths.GetClientes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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

        factory.GetMuestraEstadosCompaniaList = function (idcompania) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'idcompania': idcompania };
            $http.post(globalService.getUrl() + paths.GetMuestraEstadosCompaniaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddEstado2_web = function (EstadoObj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objEstado': { Nombre: EstadoObj.Estado } };
            $http.post(globalService.getUrl() + paths.AddEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateEstado2_web = function (EstadoObj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdEstado': IdEstado };
            $http.post(globalService.getUrl() + paths.DeleteEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMunicipioList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetMunicipioList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepMunicipio = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdMunicipio': IdMunicipio };
            $http.post(globalService.getUrl() + paths.GetDeepMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRelEstMunL = function (lstRelEstado, RelMunicipioEstAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelEstado': lstRelEstado,
                'RelMunicipioEstAdd': RelMunicipioEstAdd
            };
            $http.post(globalService.getUrl() + paths.AddRelEstMunL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        factory.UpdateRelEstMunL = function (lstRelEstado, RelMunicipioEstAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelEstado': lstRelEstado,
                'RelMunicipioEstAdd': RelMunicipioEstAdd
            };
            $http.post(globalService.getUrl() + paths.UpdateRelEstMunL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteMunicipio = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdMunicipio': IdMunicipio };
            $http.post(globalService.getUrl() + paths.DeleteMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetLocalidadList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetLocalidadList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRelLocalidadL = function (lstRelLocalidad, RelLocalidadMunEstAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdLocalidad': IdLocalidad };
            $http.post(globalService.getUrl() + paths.GetDeepLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateRellocalidadL = function (lstRelLocalidad, RelLocalidadMunEstAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelLocalidad': lstRelLocalidad,
                'RelLocalidadMunEstAdd': RelLocalidadMunEstAdd
            };
            $http.post(globalService.getUrl() + paths.UpdateRellocalidadL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteLocalidad = function (IdLocalidad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { IdLocalidad: IdLocalidad };
            $http.post(globalService.getUrl() + paths.DeleteLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoColoniaList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetTipoColoniaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddTipoColonia = function (TipoColonia) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objTipoColonia': { Nombre: TipoColonia } };
            $http.post(globalService.getUrl() + paths.AddTipoColonia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateTipoColonia = function (TipoColoniaObj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { IdTipoColonia: IdTipoColonia };
            $http.post(globalService.getUrl() + paths.DeleteTipoColonia, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCalleList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetCalleList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddCalleL = function (lstRelCalle, RelCalleAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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

        factory.GetDeepCalle = function (IdCalle) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdCalle': IdCalle };
            $http.post(globalService.getUrl() + paths.GetDeepCalle, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateCalleL = function (lstRelCalle, RelCalleAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelCalle': lstRelCalle,
                'RelCalleAdd': RelCalleAdd
            };
            $http.post(globalService.getUrl() + paths.UpdateCalleL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteCalle = function (IdCalle) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { IdCalle: IdCalle };
            $http.post(globalService.getUrl() + paths.DeleteCalle, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDistribuidorList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetDistribuidorList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDistribuidor = function (DistribuidorObj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objDistribuidor': DistribuidorObj };
            $http.post(globalService.getUrl() + paths.AddDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepDistribuidor = function (IdDistribuidor) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdDistribuidor': IdDistribuidor };
            $http.post(globalService.getUrl() + paths.GetDeepDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateDistribuidor = function (DistribuidorObj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objDistribuidor': DistribuidorObj };
            $http.post(globalService.getUrl() + paths.UpdateDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteDistribuidor = function (IdDistribuidor) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdDistribuidor': IdDistribuidor };
            $http.post(globalService.getUrl() + paths.DeleteDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddPlazaL = function (lstRelPlazaMunEst, RelPlazaEstMunAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelPlazaMunEst': lstRelPlazaMunEst,
                'RelPlazaEstMunAdd': RelPlazaEstMunAdd
            };
            $http.post(globalService.getUrl() + paths.AddPlazaL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepPlaza = function (IdPlaza) { 
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'IdPlaza': IdPlaza };
            $http.post(globalService.getUrl() + paths.GetDeepPlaza, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdatePlazaL = function (lstRelPlazaMunEst, RelPlazaEstMunAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelPlazaMunEst': lstRelPlazaMunEst,
                'RelPlazaEstMunAdd': RelPlazaEstMunAdd
            };
            $http.post(globalService.getUrl() + paths.UpdatePlazaL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetColoniaList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetColoniaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipServList = function () {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            $http.get(globalService.getUrl() + paths.GetTipServList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddColoniaL = function (lstRelColonia, RelColoniaLocMunEstAdd, RelColoniaServicioAdd) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = {
                'lstRelColonia': lstRelColonia,
                'RelColoniaLocMunEstAdd': RelColoniaLocMunEstAdd,
                'RelColoniaServicioAdd': RelColoniaServicioAdd
            };
            $http.post(globalService.getUrl() + paths.AddColoniaL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddSucursal = function (SUCURSALESobj) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objSUCURSALES': SUCURSALESobj };
            $http.post(globalService.getUrl() + paths.AddSucursal, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepSucursal = function (Clv_Sucursal) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'clv_sucursal': Clv_Sucursal };
            $http.post(globalService.getUrl() + paths.GetDeepSucursal, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };
        
        factory.UpdateSucursal = function (objSUCURSALES) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objSUCURSALES': objSUCURSALES };
            $http.post(globalService.getUrl() + paths.UpdateSucursal, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        


        return factory;

    });
  
   