angular
.module('softvApp')
.controller('ModalUpdatePosteCtrl', function (areaTecnicaFactory, $uibModalInstance, ngNotify, $state,CLAVE,DESCRIPCION) {

    function initData() {
        vm.ID = CLAVE;
        vm.descripcion = DESCRIPCION;
    }

   
    
    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

       function AddPoste() {
        
              var Parametros = {
        
                'clave': CLAVE,
                'descripcion': vm.descripcion
        
              };
              areaTecnicaFactory.GetNuePoste(Parametros)
                .then(function (data) {
                  var result = data.AddInsertaNueDescPosteResult;
                  if (data.AddInsertaNueDescPosteResult == -1) {
                    ngNotify.set('Cambios realizados correctamente.', 'success');
                    $state.reload('home.areaTecnica.postes');
                    cancel();
                } else {
                    ngNotify.set('ERROR al guardar los cambios.', 'warn');
                    $state.reload('home.areaTecnica.postes');
                    cancel();
                }
                
                 
        
        
                });
            }
        



    var vm = this;
    initData();
    vm.Titulo = ' Editar Poste';
    vm.Icono = 'fa fa-pencil-square-o';
    vm.AddPoste = AddPoste;
    vm.cancel = cancel;
  
   
});