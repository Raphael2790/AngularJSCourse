(function () {
    'use strict';

    var app = angular.module('app', ['ngAnimate', 'ngRoute']);

    app.config(($routeProvider) => {
        $routeProvider
            .when('/',{
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/index.html'
            })
            .otherwise({
                controller: 'HomeCtrl',
                templateUrl: '404.html',
            })
    })

    app.controller('AppCtrl', function ($scope) {
        $scope.title = "Demo 06"
    })
})();