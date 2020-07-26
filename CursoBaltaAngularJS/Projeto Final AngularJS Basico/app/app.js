(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/index.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'app/areas/login/views/index.html'
            })
            .when('customer/new', {
                controller: 'NewCustomerCtrl',
                templateUrl: 'app/areas/customers/views/newcustomer.html'
            })
            .when('customer/edit/:id', {
                controller: 'EditCustomersCtrl',
                templateUrl: 'app/areas/customers/views/index.html'
            })
            .when('customer/delete/:id', {
                controller: 'DeleteCustomersCtrl',
                templateUrl: 'app/areas/customers/views/delete.html'
            })
            .otherwise({
                controller: 'HomeCtrl as vm',
                templateUrl: '404.html',
                requiresLogin: false
            });
    });

    app.run(function ($rootScope) {
        $rootScope.token = "";
        $rootScope.isAuthenticated = false;
    })

    app.controller('AppCtrl', function AppCtrl($scope, $http) {
        
    });
})();