'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function ($http, $q, globalService, $localStorage) {

        var factory = {};
        var paths = {
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            GetClientesFiltosNew: '/CLIENTES_New/GetClientesFiltosNew',
            GetCLIENTES_NewList: '/CLIENTES_New/GetCLIENTES_NewList',
            GetConsultaClientesList: '/CLIENTES_New/GetConsultaClientesList',
            GetMuestraCiudadesEstadoList: '/MuestraCiudadesEstado/GetMuestraCiudadesEstadoList',
            GetMuestraLocalidadCiudadList: '/MuestraLocalidadCiudad/GetMuestraLocalidadCiudadList',
            GetMuestraColoniaLocalidadList: '/MuestraColoniaLocalidad/GetMuestraColoniaLocalidadList',
            GetMuestraCalleColoniaList: '/MuestraCalleColonia/GetMuestraCalleColoniaList',
            UpdateClienteDPos: '/Cliente/UpdateClienteDPos',
            AddDatoFiscalCliente: '/Cliente/AddDatoFiscalCliente',
            GetDeepDatoFiscal: '/DatoFiscal/GetDeepDatoFiscal',  
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
            UpdateCLIENTES_New: '/CLIENTES_New/UpdateCLIENTES_New',
            GetEstados_NewList: '/Estados_New/GetEstados_NewList',
            GetMuestraEstadosCompaniaList: '/MuestraEstadosCompania/GetMuestraEstadosCompaniaList',
            GetValidaNomEdo: '/Estados_New/GetValidaNomEdo',
            AddEstados_New: '/Estados_New/AddEstados_New',
            GetDeepEstados_New: '/Estados_New/GetDeepEstados_New',
            UpdateEstados_New: '/Estados_New/UpdateEstados_New',
            DeleteEstados_New: '/Estados_New/DeleteEstados_New',
            GetBuscaCiudades: '/RelEstadoCiudad_New/GetBuscaCiudades',
            GetMuestraCiudadById: '/Ciudades_New/GetMuestraCiudadById',
            GetRelEstadoCiudad_NewList: '/RelEstadoCiudad_New/GetRelEstadoCiudad_NewList',
            DeleteRelEstadoCiudad_New: '/RelEstadoCiudad_New/DeleteRelEstadoCiudad_New',
            GetAddCiudades: '/Ciudades_New/GetAddCiudades',
            UpdateCiudades_New: '/Ciudades_New/UpdateCiudades_New',
            DeleteCiudades_New: '/Ciudades_New/DeleteCiudades_New',
            GetLocalidadList: '/Localidad/GetLocalidadList',
            AddRelLocalidadL: '/localidad/AddRelLocalidadL',
            GetDeepLocalidad: '/localidad/GetDeepLocalidad',
            UpdateRellocalidadL: '/localidad/UpdateRellocalidadL',
            DeleteLocalidad: '/Localidad/DeleteLocalidad',
            GetTipo_Colonias1_NewList: '/Tipo_Colonias1_New/GetTipo_Colonias1_NewList',
            AddTipo_Colonias1_New: '/Tipo_Colonias1_New/AddTipo_Colonias1_New',
            GetDeepTipo_Colonias1_New: '/Tipo_Colonias1_New/GetDeepTipo_Colonias1_New',
            UpdateTipo_Colonias1_New: '/Tipo_Colonias1_New/UpdateTipo_Colonias1_New',
            DeleteTipo_Colonias1_New: '/Tipo_Colonias1_New/DeleteTipo_Colonias1_New',
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
            GetmuestraCP_ColoniaLocalidadList: '/muestraCP_ColoniaLocalidad/GetmuestraCP_ColoniaLocalidadList',
            GetTipServ_NewList: '/TipServ_New/GetTipServ_NewList',
            AddTipServ_New: '/TipServ_New/AddTipServ_New',
            GetDeepTipServ_New: '/TipServ_New/GetDeepTipServ_New',
            UpdateTipServ_New: '/TipServ_New/UpdateTipServ_New',
            DeleteTipServ_New: '/TipServ_New/DeleteTipServ_New',
            GetSucursalList: '/Sucursales/GetSUCURSALESList',
            AddSucursal: '/SUCURSALES/AddSUCURSALES',
            GetDeepSucursal:'/SUCURSALES/GetDeepSUCURSALES',
            UpdateSucursal: '/SUCURSALES/UpdateSUCURSALES',
            GetMuestraRelEdoCd: '/RelEstadoCiudad_New/GetMuestraRelEdoCd',
            AddRelEstadoCiudad_New: '/RelEstadoCiudad_New/AddRelEstadoCiudad_New'
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

        factory.GetTipoClienteList_WebSoftvnew = function(){
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
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

        factory.GetEstados_NewList = function () {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'opcion': 0, 'Nombre': ''};
            $http.post(globalService.getUrl() + paths.GetEstados_NewList, JSON.stringify(Parametros), config).then(function (response) {
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
            var Parametros = {'Contrato': Contrato};
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
            var Parametros = {'Contrato': Contrato};
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
            var Parametros = {'Contrato': Contrato};
            $http.post(globalService.getUrl() + paths.GetDeepRoboDeSeñal_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetClientesFiltosNew = function (lstCliente) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'lstCliente': lstCliente};
            $http.post(globalService.getUrl() + paths.GetClientesFiltosNew, JSON.stringify(Parametros), config).then(function (response) {
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
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'idcompania': idcompania };
            $http.post(globalService.getUrl() + paths.GetMuestraEstadosCompaniaList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddEstados_New = function (objEstados_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objEstados_New': objEstados_New};
            $http.post(globalService.getUrl() + paths.AddEstados_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetValidaNomEdo = function (ObjEstado) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = ObjEstado;
            $http.post(globalService.getUrl() + paths.GetValidaNomEdo, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepEstados_New = function (Clv_Estado) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'Clv_Estado': Clv_Estado};
            $http.post(globalService.getUrl() + paths.GetDeepEstados_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateEstados_New = function (objEstados_New) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'objEstados_New': objEstados_New};
            $http.post(globalService.getUrl() + paths.UpdateEstados_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteEstados_New = function (objEstado) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = objEstado;
            $http.post(globalService.getUrl() + paths.DeleteEstados_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };


       factory.GetBuscaCiudades = function(ObjCiudad){
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = ObjCiudad;
            $http.post(globalService.getUrl() + paths.GetBuscaCiudades, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraCiudadById = function (Clv_Ciudad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'Clv_Ciudad': Clv_Ciudad };
            $http.post(globalService.getUrl() + paths.GetMuestraCiudadById, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetRelEstadoCiudad_NewList = function (Clv_Ciudad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'Clv_Ciudad': Clv_Ciudad };
            $http.post(globalService.getUrl() + paths.GetRelEstadoCiudad_NewList, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetMuestraRelEdoCd = function (ObjMunicipio) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = ObjMunicipio;
            $http.post(globalService.getUrl() + paths.GetMuestraRelEdoCd, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddRelEstadoCiudad_New = function (objRelEstadoCiudad_New) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objRelEstadoCiudad_New': objRelEstadoCiudad_New };
            $http.post(globalService.getUrl() + paths.AddRelEstadoCiudad_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteRelEstadoCiudad_New = function (ObjMunicipio) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = ObjMunicipio;
            $http.post(globalService.getUrl() + paths.DeleteRelEstadoCiudad_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetAddCiudades = function (ObjCiudad) {
            var deferred = $q.defer();
            var config = {headers:{'Authorization': $localStorage.currentUser.token}};
            var Parametros = ObjCiudad;
            $http.post(globalService.getUrl() + paths.GetAddCiudades, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateCiudades_New = function (objCiudades_New) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'objCiudades_New': objCiudades_New };
            $http.post(globalService.getUrl() + paths.UpdateCiudades_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteCiudades_New = function (Clv_Ciudad) {
            var deferred = $q.defer();
            var config = { headers: { 'Authorization': $localStorage.currentUser.token } };
            var Parametros = { 'Clv_Ciudad': Clv_Ciudad };
            $http.post(globalService.getUrl() + paths.DeleteCiudades_New, JSON.stringify(Parametros), config).then(function (response) {
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

        factory.GetTipo_Colonias1_NewList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetTipo_Colonias1_NewList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddTipo_Colonias1_New = function (objTipo_Colonias1_New) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'objTipo_Colonias1_New': objTipo_Colonias1_New};
            $http.post(globalService.getUrl() + paths.AddTipo_Colonias1_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepTipo_Colonias1_New = function (Clave) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {Clave: Clave};
            $http.post(globalService.getUrl() + paths.GetDeepTipo_Colonias1_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateTipo_Colonias1_New = function (objTipo_Colonias1_New) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {'objTipo_Colonias1_New': objTipo_Colonias1_New};
            $http.post(globalService.getUrl() + paths.UpdateTipo_Colonias1_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.DeleteTipo_Colonias1_New = function (Clave) {
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            var Parametros = {Clave: Clave};
            $http.post(globalService.getUrl() + paths.DeleteTipo_Colonias1_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCalleList = function(){
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


        factory.GetTipServ_NewList = function(){
            var deferred = $q.defer();
            var config = { headers: {'Authorization': $localStorage.currentUser.token} };
            $http.get(globalService.getUrl() + paths.GetTipServ_NewList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddTipServ_New = function (objTipServ_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objTipServ_New': objTipServ_New};
            $http.post(globalService.getUrl() + paths.AddTipServ_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepTipServ_New = function (Clv_TipSer) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Clv_TipSer': Clv_TipSer};
            $http.post(globalService.getUrl() + paths.GetDeepTipServ_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.UpdateTipServ_New = function (objTipServ_New) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'objTipServ_New': objTipServ_New};
            $http.post(globalService.getUrl() + paths.UpdateTipServ_New, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

       factory.DeleteTipServ_New = function (Clv_TipSer) {
            var deferred = $q.defer();
            var config = {headers: {'Authorization': $localStorage.currentUser.token}};
            var Parametros = {'Clv_TipSer': Clv_TipSer};
            $http.post(globalService.getUrl() + paths.DeleteTipServ_New, JSON.stringify(Parametros), config).then(function (response) {
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
  
   