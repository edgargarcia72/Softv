'use strict';

angular
    .module('softvApp')
    .controller('SucursalDetalleCtrl', function(CatalogosFactory, ngNotify, $rootScope, $state, $stateParams,atencionFactory){

        function initData(){
            CatalogosFactory.GetDeepSucursal(Clv_Sucursal).then(function(data){
              var DatosSucursal = data.GetDeepSUCURSALESResult;
              vm.BaseIdUser = DatosSucursal.BaseIdUser;
              vm.BaseRemoteIp = DatosSucursal.BaseRemoteIp;
              vm.CP = DatosSucursal.CP;
              vm.Calle = DatosSucursal.Calle;
              vm.Ciudad = DatosSucursal.Ciudad;
              vm.Clv_Equivalente = DatosSucursal.Clv_Equivalente;
              vm.Clv_Sucursal = DatosSucursal.Clv_Sucursal;
              vm.Colonia = DatosSucursal.Colonia;
              vm.Contacto = DatosSucursal.Contacto;
              vm.Email = DatosSucursal.Email;
              vm.Horario = DatosSucursal.Horario;
              vm.IP = DatosSucursal.IP;
              vm.Impresora = DatosSucursal.Impresora;
              vm.Impresora_Tickets = DatosSucursal.Impresora_Tickets;
              vm.Impresora_contratos = DatosSucursal.Impresora_contratos;
              vm.Impresora_tarjetas = DatosSucursal.Impresora_tarjetas;
              vm.Matriz = DatosSucursal.Matriz;
              vm.Municipio = DatosSucursal.Municipio;
              vm.Nombre = DatosSucursal.Nombre;
              vm.Numero = DatosSucursal.Numero;
              vm.Referencia = DatosSucursal.Referencia;
              vm.Serie = DatosSucursal.Serie;
              vm.Telefono = DatosSucursal.Telefono;
              vm.UltimoFolioUsado = DatosSucursal.UltimoFolioUsado;
              vm.idcompania = DatosSucursal.idcompania;
              console.log(vm.idcompania);
              atencionFactory.getPlazas().then(function (data) {                    
                  vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
                  vm.plazas.forEach(function (item, index) {                        
                      console.log(item,index);
                      if (item.id_compania === vm.idcompania) {                           
                          vm.Plaza = vm.plazas[index];
                      }
                  });
                  
              });
                
            });
           
        }

        
        
       

   

       
        
        
          
     
      

        var vm = this;
        var Clv_Sucursal = $stateParams.id;
        vm.Titulo = 'Sucursal Detalle - ' + Clv_Sucursal;
        vm.blockForm = true;
        vm.blocksave = true;
        vm.blockcancel = true;
        initData();

    });
   
   
   
   
   
   
  