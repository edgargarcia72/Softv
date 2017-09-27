'use strict';

angular
  .module('softvApp')
  .controller('nuevoservicioCtrl', function (atencionFactory, trabajosFactory, ngNotify) {

    function init() {
      obtenarticulosacom();

      atencionFactory.getServicios().then(function (data) {
        vm.servicios = data.GetMuestraTipSerPrincipalListResult;
        vm.servicio = vm.servicios[0];
        trabajosFactory.GetMuestra_Imputables()
          .then(function (data) {
            vm.imputables = data.GetMuestra_ImputablesResult;
            console.log(data);

            trabajosFactory.GetMuestra_Articulos_Acometida()
              .then(function (data) {
                console.log(data);
              });
          });

      });

    }

    function obtenarticulosacom() {
      trabajosFactory.GetMuestra_Articulos_Acometida()
        .then(function (result) {
          vm.articulosacom = result.GetMuestra_Articulos_AcometidaResult;
        });
    }

    function obtenarticulos() {
      trabajosFactory.GetMuestra_Articulos_Clasificacion(vm.clasificacion.clvtipo)
        .then(function (data) {
          vm.articulos = data.GetMuestra_Articulos_ClasificacionResult;
          console.log(data.GetMuestra_Articulos_ClasificacionResult);
        });
    }

    function save() {
      var params = {
        'clv_tipser': vm.servicio.Clv_TipSerPrincipal,
        'trabajo': vm.clave,
        'descripcion': vm.descripcion,
        'puntos': vm.individual,
        'cobranza': 0,
        'tipo': 'O',
        'prospectos': 0,
        'sica': 0,
        'secobramaterial': 0
      };
      trabajosFactory.GetSoftv_AddTrabajo(params).then(function (data) {
        console.log(data);

        if (data.GetSoftv_AddTrabajoResult === -1) {
          ngNotify.set('El trabajo no se pudo guardar ,por que existe una clave regitrada con el mismo valor', 'error');
        } else {
          vm.clv_trabajo = data.GetSoftv_AddTrabajoResult;
          vm.blockdescarga = true;
          vm.blocksave = true;
          vm.blockform = true;
          ngNotify.set('El trabajo se guardo con exito ,ahora puede continuar con la configuaración o salir del catálogo');
        }

      });
    }

    function agregarelacion() {
      trabajosFactory.
      GetSoftv_AddRelMaterialTrabajo(vm.clasificacion.clvtipo,
          vm.descripcionart.clave,
          vm.cantidad,
          vm.clv_trabajo, vm.servicio.Clv_TipSerPrincipal)
        .then(function (data) {
          if (data.GetSoftv_AddRelMaterialTrabajoResult === -1) {
            ngNotify.set('El artículo ya esta registrado ', 'warn');
          }
          console.log(data);
          consultamateriales();
        });
    }

    function consultamateriales() {
      trabajosFactory.GetConsultaRelMaterialTrabajos(vm.clv_trabajo)
        .then(function (data) {
          vm.relaciones = data.GetConsultaRelMaterialTrabajosResult;
          console.log(data);
        });
    }


    var vm = this;
    init();
    vm.obtenarticulos = obtenarticulos;
    vm.titulo = 'Nuevo trabajo';
    vm.save = save;
    vm.blockdescarga = true;
    vm.clv_trabajo = 0;
    vm.blocksave = false;
    vm.agregarelacion = agregarelacion;
    vm.blockmateriales = true;
    vm.blockform = false;
  });
