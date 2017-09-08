'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory, ngNotify, $uibModal, $rootScope, $state, $localStorage){

        function initData(){
            CatalogosFactory.GetPlazaList($localStorage.currentUser.idUsuario).then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
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
            var ObjCliente = {
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
            CatalogosFactory.GetCLIENTES_NewList(ObjCliente).then(function(data){
                vm.Cliente = data.GetCLIENTES_NewListResult;
                if(vm.Cliente.length == 1){
                    var IdCliente = vm.Cliente[0].CONTRATO;
                    ngNotify.set('CORRECTO, se añadió un cliente nuevo.', 'success');
                    $state.go('home.catalogos.cliente_editar', { id:IdCliente });
                }else{
                    ngNotify.set('ERROR, al añadir un cliente nuevo.', 'warn');
                    $state.go('home.catalogos.clientes');
                }
            });
        }

        function GetEstado(){
            if(vm.Plaza != undefined){
                CatalogosFactory.GetMuestraEstadosCompaniaList(vm.Plaza.id_compania).then(function(data){
                    vm.EstadoList = data.GetMuestraEstadosCompaniaListResult;
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
                var RelEstMun = {
                    'clv_estado' : vm.Estado.Clv_Estado,
                    'idcompania' : vm.Plaza.id_compania
                };
                CatalogosFactory.GetMuestraCiudadesEstadoList(RelEstMun).then(function(data){
                    vm.CiudadMunicipioList = data.GetMuestraCiudadesEstadoListResult;
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
                CatalogosFactory.GetMuestraLocalidadCiudadList(vm.CiuMun.Clv_Ciudad).then(function(data){
                    vm.LocalidadList = data.GetMuestraLocalidadCiudadListResult;
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
                CatalogosFactory.GetMuestraColoniaLocalidadList(vm.Localidad.Clv_Localidad).then(function(data){
                    vm.ColoniaList = data.GetMuestraColoniaLocalidadListResult;
                    vm.CalleList = null;
                });
            }else{
                vm.ColoniaList = null;
                vm.CalleList = null;
            }
        }

        function GetCalle(){
            if(vm.Colonia != undefined){
                CatalogosFactory.GetmuestraCP_ColoniaLocalidadList(vm.Colonia.CLV_COLONIA).then(function(data){
                    vm.CodigoPos = data.GetmuestraCP_ColoniaLocalidadListResult[0].CodigoPostal;
                });
                CatalogosFactory.GetMuestraCalleColoniaList(vm.Colonia.CLV_COLONIA).then(function(data){
                    vm.CalleList = data.GetMuestraCalleColoniaListResult;
                });
            }else{
                vm.CalleList = null;
                vm.CodigoPos = null;
            }
        }

        var vm = this;
        vm.ShowAccord = false;
        vm.BlockInput = false;
        vm.DisableInput = true;
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
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.GetEstado = GetEstado;
        vm.GetCiudadMunicipio = GetCiudadMunicipio;
        vm.GetLocalidad = GetLocalidad;
        vm.GetColonia = GetColonia;
        vm.GetCalle = GetCalle;
        initData();
        
    });