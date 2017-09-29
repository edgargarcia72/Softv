'use strict';

angular
  .module('softvApp')
  .controller('PostesCtrl', function (areaTecnicaFactory, atencionFactory, $uibModal) {

    function initData() {
      GetPost(0);
    }

    function GetPost(op) {

      var Parametros = {
        'op': op
      };
      areaTecnicaFactory.GetPostes(Parametros)
        .then(function (data) {
          vm.postes = data.GetMuestraDescPosteResult;
          console.log(data);
        });

    }

    function AddPoste() {

      var Parametros = {

        'clave': -1,
        'descripcion': vm.descripcion

      };
      areaTecnicaFactory.GetNuePoste(Parametros)
        .then(function (data) {
          var result = data.AddInsertaNueDescPosteResult;
          console.log(data);
          GetPost(0);


        });
    }



    function UpdatePoste(CLAVE,DESCRIPCION) {
      var CLAVE = CLAVE;
      var DESCRIPCION = DESCRIPCION;
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/areatecnica/ModalPoste.html',
        controller: 'ModalUpdatePosteCtrl',
        controllerAs: 'ctrl',
        backdrop: 'static',
        keyboard: false,
        class: 'modal-backdrop fade',
        size: 'md',
        resolve: {
          
          CLAVE: function () {
            return CLAVE;
          },
          DESCRIPCION: function() {
              return DESCRIPCION;
          }
          
        }
      });
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }





    var vm = this;
    initData();
    vm.cancel = cancel;
    vm.AddPoste = AddPoste;
    vm.UpdatePoste = UpdatePoste;

  });
