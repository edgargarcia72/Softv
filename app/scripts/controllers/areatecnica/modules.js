'use strict';

angular
  .module('softvApp')
  .config(function ($stateProvider) {
    var states = [{
        name: 'home.areatecnica',
        abstract: true,
        template: '<div ui-view></div>'
      },
      {
        name: 'home.areatecnica.clusters',
        data: {
          pageTitle: 'SOFTV | CLUSTERS',
        },
        url: '/clusters',
        templateUrl: 'views/areatecnica/Clusters.html',
        controller: 'ClusterCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.sectores',
        data: {
          pageTitle: 'SOFTV | SECTORES',
        },
        url: '/sectores',
        templateUrl: 'views/areatecnica/Sectores.html',
        controller: 'SectoresCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.postes',
        data: {
          pageTitle: 'SOFTV | POSTES',
        },
        url: '/postes',
        templateUrl: 'views/areatecnica/Postes.html',
        controller: 'PostesCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.taps',
        data: {
          pageTitle: 'SOFTV | TAPS',
        },
        url: '/Taps',
        templateUrl: 'views/areatecnica/Taps.html',
        controller: 'TapsCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.Nuevataps',
        data: {
          pageTitle: 'SOFTV | NUEVA TAPS',
        },
        url: '/NuevaTaps',
        templateUrl: 'views/areatecnica/NuevoTap.html',
        controller: 'AddTapsCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.editatap',
        data: {
          pageTitle: 'SOFTV | EDITAR TAPS',
        },
        url: '/editatap/:id',
        templateUrl: 'views/areatecnica/NuevoTap.html',
        controller: 'UpdateTapCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.detalletap',
        data: {
          pageTitle: 'SOFTV | DETALLE TAPS',
        },
        url: '/detalletap/:id',
        templateUrl: 'views/areatecnica/NuevoTap.html',
        controller: 'DetalletapCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.servicio',
        data: {
          pageTitle: 'SOFTV | SERVICIO AL CLIENTE',
        },
        url: '/servicioalcliente',
        templateUrl: 'views/areatecnica/servicioCliente.html',
        controller: 'servicioClienteCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.nuevoservicio',
        data: {
          pageTitle: 'SOFTV | NUEVO TRABAJO',
        },
        url: '/nuevoservicioalcliente',
        templateUrl: 'views/areatecnica/nuevoservicio.html',
        controller: 'nuevoservicioCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.detalleservicio',
        data: {
          pageTitle: 'SOFTV | DETALLE TRABAJO',
        },
        url: '/detalleservicioalcliente/:id',
        templateUrl: 'views/areatecnica/nuevoservicio.html',
        controller: 'detalleservicioCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'home.areatecnica.editaservicio',
        data: {
          pageTitle: 'SOFTV | DETALLE TRABAJO',
        },
        url: '/editaservicioalcliente/:id',
        templateUrl: 'views/areatecnica/nuevoservicio.html',
        controller: 'editaservicioCtrl',
        controllerAs: '$ctrl'
      },
    ];
    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  });
