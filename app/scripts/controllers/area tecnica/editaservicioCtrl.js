'use strict';

angular
  .module('softvApp')
  .controller('editaservicioCtrl', function (atencionFactory, trabajosFactory, ngNotify, $stateParams) {

    function init() {
      trabajosFactory.GetSoftv_GetTrabajoById($stateParams.id)
        .then(function (result) {
          atencionFactory.getServicios().then(function (data) {
            vm.servicios = data.GetMuestraTipSerPrincipalListResult;
            

            console.log(result);
            var trabajo = result.GetSoftv_GetTrabajoByIdResult;
            vm.clv_trabajo = trabajo.clv_trabajo;
            vm.clave = trabajo.trabajo;
            vm.titulo = 'Detalle trabajo - ' + vm.clave;
            vm.descripcion = trabajo.descripcion;
            vm.individual = trabajo.puntos;
            vm.proceso = trabajo.sica;
            vm.descarga = trabajo.secobramaterial;
            vm.servicios.forEach(function(item){
                 if(item.Clv_TipSerPrincipal===trabajo.clv_tipser){
                 vm.servicio=item;
                 }
             });

            consultamateriales();
            obtenarticulosacom();
          });
        });

    }

    function existearticulo(clv){
        //vm.relaciones.
    }

    function agregarelacion() {
      trabajosFactory.
      GetSoftv_AddRelMaterialTrabajo(vm.clasificacion.clvtipo,
          vm.descripcionart.clave,
          vm.cantidad,
          vm.clv_trabajo, vm.servicio.Clv_TipSerPrincipal)
        .then(function (data) {
            if(data.GetSoftv_AddRelMaterialTrabajoResult===-1){
             ngNotify.set('El artículo ya esta registrado ','warn');
            }
          console.log(data);
          consultamateriales();
        });
    }

    function obtenarticulosacom() {
      trabajosFactory.GetMuestra_Articulos_Acometida()
        .then(function (result) {

          vm.articulosacom = result.GetMuestra_Articulos_AcometidaResult;
        });
    }

    function consultamateriales() {
      trabajosFactory.GetConsultaRelMaterialTrabajos(vm.clv_trabajo)
        .then(function (data) {
          vm.relaciones = data.GetConsultaRelMaterialTrabajosResult;
          console.log(data);
        });
    }

    function obtenarticulos() {
      trabajosFactory.GetMuestra_Articulos_Clasificacion(vm.clasificacion.clvtipo)
        .then(function (data) {
          vm.articulos = data.GetMuestra_Articulos_ClasificacionResult;
          console.log(data.GetMuestra_Articulos_ClasificacionResult);
        });
    }

    var vm = this;
    vm.blockdescarga = false;
    vm.blocksave = false;
    vm.blockmateriales = true;
    vm.blockform = false;
    vm.obtenarticulos = obtenarticulos;
    vm.agregarelacion = agregarelacion;
    init();

  });
