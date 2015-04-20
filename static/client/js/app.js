(function () {
    'use strict';

    angular.module("Confable", ['ui.router'])
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HelloController',
                })

            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode({
                hashPrefix: '!',
                enabled: false,
                requireBase: false
            });
        }])

        .controller("HelloController", ["$scope", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "World, AngularJS";
        }])
}());
