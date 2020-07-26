(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditCustomersCtrl', EditCustomersCtrl);

    EditCustomersCtrl.$inject = ['$scope', '$location', '$routeParams', '$http'];

    function EditCustomersCtrl($scope, $location, $routeParams, $http) {
        console.log($routeParams.id);
        $scope.customer = {};
        var serviceUrl = 'http://customer-service.azurewebsites.net/api/clientes';

        $http.get(serviceUrl + "/" + $routeParams.id).then((result) => {
            $scope.customer = result
        },
            (error) => {
                console.log(error);
            })
        $scope.save = function () {
            $http.put(serviceUrl, $scope.customer).then((result) => {
                toastr.success("Dados do cliente modificado com sucesso!", "Sucesso!");
                $location.url("/Home");
            },
                (error) => {
                    console.log(error);
                })
        }
    }
})();