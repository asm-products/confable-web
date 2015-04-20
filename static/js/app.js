(function () {
    'use strict';

    angular.module("Confable", ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/partials/home.html',
                    controller: 'HelloController',
                })

            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode({
                hashPrefix: '!',
                enabled: false,
                requireBase: false
            });
        })
}());
