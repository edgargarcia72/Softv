'use strict';

angular
    .module('softvApp')
    .config(function ($stateProvider) {
        var states = [{
            name: 'home.areaTecnica',
            abstract: true,
            template: '<div ui-view></div>'
        },
        {
            name: 'home.areaTecnica.clusters',
            data: {
                pageTitle: 'SOFTV | CLUSTERS',
            },
            url: '/Clusters',
            templateUrl: 'views/area tecnica/Clusters.html',
            controller: 'ClusterCtrl',
            controllerAs: '$ctrl'
        },
        {
            name: 'home.areaTecnica.sectores',
            data: {
                pageTitle: 'SOFTV | SECTORES',
            },
            url: '/Sectores',
            templateUrl: 'views/area tecnica/Sectores.html',
            controller: 'SectoresCtrl',
            controllerAs: '$ctrl'
        },
        {
            name: 'home.areaTecnica.postes',
            data: {
                pageTitle: 'SOFTV | POSTES',
            },
            url: '/Postes',
            templateUrl: 'views/area tecnica/Postes.html',
            controller: 'PostesCtrl',
            controllerAs: '$ctrl'
        },
        {
            name: 'home.areaTecnica.taps',
            data: {
                pageTitle: 'SOFTV | TAPS',
            },
            url: '/Taps',
            templateUrl: 'views/area tecnica/Taps.html',
            controller: 'TapsCtrl',
            controllerAs: '$ctrl'
        },
        {
            name: 'home.areaTecnica.Nuevataps',
            data: {
              pageTitle: 'SOFTV | NUEVA TAPS',
            },
                url: '/NuevaTaps',
                templateUrl: 'views/area tecnica/NuevaTaps.html',
                controller: 'AddTapsCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.areaTecnica.Editataps',
                data: {
                  pageTitle: 'SOFTV | EDITAR TAPS',
                },
                    url: '/EditarTaps',
                    templateUrl: 'views/area tecnica/EditarTaps.html',
                    controller: 'UpdateTapsCtrl',
                    controllerAs: '$ctrl'
                },
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });