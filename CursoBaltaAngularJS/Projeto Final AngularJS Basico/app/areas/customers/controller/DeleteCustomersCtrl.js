(function () {
    'use strict';

    angular
        .module('app')
        .controller('DeleteCustomersCtrl', DeleteCustomersCtrl);

    DeleteCustomersCtrl.$inject = ['$scope', '$location', '$routeParams', '$http'];

    function DeleteCustomersCtrl($scope, $location, $routeParams, $http) {
        console.log($routeParams.id);
        $scope.customer = {};
        var serviceUrl = 'http://customer-service.azurewebsites.net/api/clientes';


        $scope.delete = function () {
            $http.delete(serviceUrl + "/" + $scope.customer.id).then((result) => {
                console.log(result);
                toastr.info("Cliente deletado com sucesso!", "Deletado!");
                $location.url("/Home");
            },
                (error) => {
                    console.log(error);
                })
        }
    }
})();