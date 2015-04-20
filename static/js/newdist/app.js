angular.module("Confable", ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$authProvider", function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HelloCtrl',
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
        alert("Hi!");
    }])
