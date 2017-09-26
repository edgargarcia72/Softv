    'use strict'
    angular
      .module('softvApp')
      .controller('ModalUpdateClusterCtrl', function (clusterFactory,tapFactory, $uibModalInstance, ngNotify, $state, options) {
        console.log(options);

        function init() {
          vm.clv_cluster = options.Clv_cluster;
          console.log(options);
          var params = {
            'opcion': 4,
            'clave': '',
            'descripcion': '',
            'clv_cluster': options.Clv_cluster
          };
          clusterFactory.GetMuestraCluster(params)
            .then(function (data) {
              vm.clave = data.GetMuestraClusterResult[0].Clv_txt;
              vm.descripcion = data.GetMuestraClusterResult[0].Descripcion;
              console.log(data);

              clusterFactory.GetMuestraRelClusterSector(options.Clv_cluster, 1)
                .then(function (rel) {
                  console.log(rel);
                  vm.relaciones = rel.GetMuestraRelClusterSectorResult;

                  tapFactory.GetConSector2(0, '', '', 4, 0).then(function (data) {
                    vm.sectores = data.GetConSector2Result;
                    console.log(data);
                  });
                });
            });
        }

        function cancel() {
          $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.clv_cluster = 0;
        init();
        vm.Titulo = ' Editar  Cluster';
        vm.Icono = 'fa fa-pencil-square-o';        
        vm.cancel = cancel;
        vm.blockForm = false;
        vm.blocksave = false;

      });
