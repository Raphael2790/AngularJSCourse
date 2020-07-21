(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl)

    HomeCtrl.$inject = ['$scope', '$location'];

    function HomeCtrl($scope, $location) {
        $scope.title = "Clientes Cadastrados"
    }

}());