(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewCustomerCtrl', NewCustomerCtrl);

    NewCustomerCtrl.$inject = ['$scope', '$location', '$http'];

    function NewCustomerCtrl($scope, $location, $http) {
        $scope.customer = {};
        var serviceUrl = 'http://customer-service.azurewebsites.net/api/clientes';

        $scope.create = function () {
            $scope.customer.id = 0;
            $http.post(serviceUrl, $scope.customer).then((result) => {
                toastr.success("Cliente cadastrado com sucesso!", "Sucesso!");
                $location.url("/Home");
            },
                (error) => {
                    console.log(error);
                })
        }
    }
})();