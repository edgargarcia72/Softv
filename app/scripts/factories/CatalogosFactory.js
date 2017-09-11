'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function($http, $q, globalService, $localStorage){

        var factory = {};
        var paths = {
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            GetCLIENTES_NewList: '/CLIENTES_New/GetCLIENTES_NewList',
            GetConsultaClientesList: '/CLIENTES_New/GetConsultaClientesList',
            GetMuestraCiudadesEstadoList: '/MuestraCiudadesEstado/GetMuestraCiudadesEstadoList',
            GetMuestraLocalidadCiudadList: '/MuestraLocalidadCiudad/GetMuestraLocalidadCiudadList',
            GetMuestraColoniaLocalidadList: '/MuestraColoniaLocalidad/GetMuestraColoniaLocalidadList',
            GetMuestraCalleColoniaList: '/MuestraCalleColonia/GetMuestraCalleColoniaList',
            AddDatosFiscales: '/DatosFiscales/AddDatosFiscales',
            GetDatosFiscalesList: '/DatosFiscales/GetDatosFiscalesList',
            GetBancoList: '/Banco/GetBancoList',
            GetMUESTRATIPOSDECUENTAList: '/MUESTRATIPOSDECUENTA/GetMUESTRATIPOSDECUENTAList',
            AddRELCLIBANCO: '/RELCLIBANCO/AddRELCLIBANCO',
            UpdateRELCLIBANCO: '/RELCLIBANCO/UpdateRELCLIBANCO',
            GetRELCLIBANCOList: '/RELCLIBANCO/GetRELCLIBANCOList',
            AddtblReferenciasClietes: '/tblReferenciasClietes/AddtblReferenciasClietes',
            UpdatetblReferenciasClietes: '/tblReferenciasClietes/UpdatetblReferenciasClietes',
            DeletetblReferenciasClietes: '/tblReferenciasClietes/DeletetblReferenciasClietes',
            GettblReferenciasClietesList: '/tblReferenciasClietes/GettblReferenciasClietesList',
            AddRELCLIENTEOBS: '/RELCLIENTEOBS/AddRELCLIENTEOBS',
            UpdateRELCLIENTEOBS: '/RELCLIENTEOBS/UpdateRELCLIENTEOBS',
            GetDeepRELCLIENTEOBS: '/RELCLIENTEOBS/GetDeepRELCLIENTEOBS',
            AddRoboDeSeñal_New: '/RoboDeSeñal_New/AddRoboDeSeñal_New',
            GetDeepRoboDeSeñal_New: '/RoboDeSeñal_New/GetDeepRoboDeSeñal_New',
            UpdateRoboDeSeñal_New: '/RoboDeSeñal_New/UpdateRoboDeSeñal_New',
            GetClientes: '/Cliente/GetClientes',
            UpdateCLIENTES_New: '/CLIENTES_New/UpdateCLIENTES_New',
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
            GetmuestraCP_ColoniaLocalidadList: '/muestraCP_ColoniaLocalidad/GetmuestraCP_ColoniaLocalidadList'
        };

        factory.GetPlazaList = function(IdUsuario) {
            var deferred = $q.defer();
            var config = {headers:{'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdUsuario': IdUsuario};
            $http.post(globalService.getUrl() + paths.GetPlazaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoClienteList_WebSoftvnew = function(){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            $http.get(globalService.getUrl() + paths.GetTipoClienteList_WebSoftvnew, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCLIENTES_NewList = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = ObjCliente;
            $http.post(globalService.getUrl() + paths.GetCLIENTES_NewList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetConsultaClientesList = function (CONTRATO) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'CONTRATO': CONTRATO};
            $http.post(globalService.getUrl() + paths.GetConsultaClientesList, JSON.stringify(Parametros), config).then(function (response) {
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

        factory.GetMuestraCiudadesEstadoList = function (RelEstMun) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = RelEstMun;
            $http.post(globalService.getUrl() + paths.GetMuestraCiudadesEstadoList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraLocalidadCiudadList = function (clv_ciudad) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'clv_ciudad': clv_ciudad};
            $http.post(globalService.getUrl() + paths.GetMuestraLocalidadCiudadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraColoniaLocalidadList = function (clv_localidad) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'clv_localidad': clv_localidad};
            $http.post(globalService.getUrl() + paths.GetMuestraColoniaLocalidadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetmuestraCP_ColoniaLocalidadList = function (Clv_Colonia) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Clv_Colonia': Clv_Colonia};
            $http.post(globalService.getUrl() + paths.GetmuestraCP_ColoniaLocalidadList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraCalleColoniaList = function (clv_colonia) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'clv_colonia': clv_colonia};
            $http.post(globalService.getUrl() + paths.GetMuestraCalleColoniaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDatosFiscales = function (objDatosFiscales) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objDatosFiscales': objDatosFiscales};
            $http.post(globalService.getUrl() + paths.AddDatosFiscales, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDatosFiscalesList = function (Contrato) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Contrato': Contrato};
            $http.post(globalService.getUrl() + paths.GetDatosFiscalesList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetBancoList = function(){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            $http.get(globalService.getUrl() + paths.GetBancoList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMUESTRATIPOSDECUENTAList = function(){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            $http.get(globalService.getUrl() + paths.GetMUESTRATIPOSDECUENTAList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRELCLIBANCO = function (objRELCLIBANCO) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objRELCLIBANCO': objRELCLIBANCO};
            $http.post(globalService.getUrl() + paths.AddRELCLIBANCO, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateRELCLIBANCO = function (objRELCLIBANCO) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objRELCLIBANCO': objRELCLIBANCO};
            $http.post(globalService.getUrl() + paths.UpdateRELCLIBANCO, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetRELCLIBANCOList = function (Contrato) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Contrato': Contrato}
            $http.post(globalService.getUrl() + paths.GetRELCLIBANCOList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddtblReferenciasClietes = function (objtblReferenciasClietes) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objtblReferenciasClietes': objtblReferenciasClietes};
            $http.post(globalService.getUrl() + paths.AddtblReferenciasClietes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdatetblReferenciasClietes = function (objtblReferenciasClietes) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objtblReferenciasClietes': objtblReferenciasClietes};
            $http.post(globalService.getUrl() + paths.UpdatetblReferenciasClietes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GettblReferenciasClietesList = function(ObjRef){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = ObjRef;
            $http.post(globalService.getUrl() + paths.GettblReferenciasClietesList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeletetblReferenciasClietes = function (id_referencia) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'id_referencia': id_referencia};
            $http.post(globalService.getUrl() + paths.DeletetblReferenciasClietes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRELCLIENTEOBS = function (objRELCLIENTEOBS) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {objRELCLIENTEOBS: objRELCLIENTEOBS};
            $http.post(globalService.getUrl() + paths.AddRELCLIENTEOBS, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };
        
        factory.UpdateRELCLIENTEOBS = function (objRELCLIENTEOBS) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {objRELCLIENTEOBS: objRELCLIENTEOBS};
            $http.post(globalService.getUrl() + paths.UpdateRELCLIENTEOBS, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRoboDeSeñal_New = function (objRoboDeSeñal_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {objRoboDeSeñal_New: objRoboDeSeñal_New};
            $http.post(globalService.getUrl() + paths.AddRoboDeSeñal_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateRoboDeSeñal_New = function (objRoboDeSeñal_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {objRoboDeSeñal_New: objRoboDeSeñal_New};
            $http.post(globalService.getUrl() + paths.UpdateRoboDeSeñal_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepRELCLIENTEOBS = function (Contrato) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Contrato': Contrato}
            $http.post(globalService.getUrl() + paths.GetDeepRELCLIENTEOBS, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepRoboDeSeñal_New = function (Contrato) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Contrato': Contrato}
            $http.post(globalService.getUrl() + paths.GetDeepRoboDeSeñal_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientes = function (lstCliente) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'lstCliente': lstCliente};
            $http.post(globalService.getUrl() + paths.GetClientes, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateCLIENTES_New = function (objCLIENTES_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objCLIENTES_New': objCLIENTES_New};
            $http.post(globalService.getUrl() + paths.UpdateCLIENTES_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraEstadosCompaniaList = function (idcompania) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'idcompania': idcompania};
            $http.post(globalService.getUrl() + paths.GetMuestraEstadosCompaniaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddEstado2_web = function (EstadoObj) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objEstado': {Nombre: EstadoObj.Estado}};
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
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdEstado': IdEstado};
            $http.post(globalService.getUrl() + paths.DeleteEstado2_web, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMunicipioList = function(){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            $http.get(globalService.getUrl() + paths.GetMunicipioList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepMunicipio = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'IdMunicipio': IdMunicipio};
            $http.post(globalService.getUrl() + paths.GetDeepMunicipio, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRelEstMunL = function (lstRelEstado, RelMunicipioEstAdd) {
            var deferred = $q.defer();
            var config = {headers:{'Authorization': $localStorage.currentUser.token}};
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
            var config = {headers:{'Authorization': $localStorage.currentUser.token}};
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
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'IdMunicipio': IdMunicipio};
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

        factory.AddRelLocalidadL = function (lstRelLocalidad, RelLocalidadMunEstAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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
            var Parametros = {'IdLocalidad': IdLocalidad};
            $http.post(globalService.getUrl() + paths.GetDeepLocalidad, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateRellocalidadL = function (lstRelLocalidad, RelLocalidadMunEstAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {IdLocalidad: IdLocalidad};
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
            var Parametros = {'objTipoColonia': {Nombre: TipoColonia}};
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
            var Parametros = {IdTipoColonia: IdTipoColonia};
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

        factory.GetDeepCalle = function (IdCalle) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdCalle': IdCalle};
            $http.post(globalService.getUrl() + paths.GetDeepCalle, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateCalleL = function (lstRelCalle, RelCalleAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {IdCalle: IdCalle};
            $http.post(globalService.getUrl() + paths.DeleteCalle, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDistribuidorList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetDistribuidorList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddDistribuidor = function (DistribuidorObj) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objDistribuidor': DistribuidorObj};
            $http.post(globalService.getUrl() + paths.AddDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepDistribuidor = function (IdDistribuidor) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdDistribuidor': IdDistribuidor};
            $http.post(globalService.getUrl() + paths.GetDeepDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateDistribuidor = function (DistribuidorObj) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objDistribuidor': DistribuidorObj};
            $http.post(globalService.getUrl() + paths.UpdateDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteDistribuidor = function (IdDistribuidor) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdDistribuidor': IdDistribuidor};
            $http.post(globalService.getUrl() + paths.DeleteDistribuidor, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddPlazaL = function (lstRelPlazaMunEst, RelPlazaEstMunAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'IdPlaza': IdPlaza};
            $http.post(globalService.getUrl() + paths.GetDeepPlaza, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdatePlazaL = function (lstRelPlazaMunEst, RelPlazaEstMunAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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

        factory.GetColoniaList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetColoniaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipServList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetTipServList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddColoniaL = function (lstRelColonia, RelColoniaLocMunEstAdd, RelColoniaServicioAdd) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
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

        return factory;

    });