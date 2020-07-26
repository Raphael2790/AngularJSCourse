(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomerRepository', CustomerRepository);

    CustomerRepository.$inject = ['$http'];

    function CustomerRepository($http) {
        var serviceUrl = 'http://customer-service.azurewebsites.net/api/clientes';
        return {
            getAllCustomers: function (id) {
                return $http.get(serviceUrl).then((result) => {
                    console.log(result);
                },
                    (error) => {
                        console.log(error);
                    }
                )
            }
        }
    }
})();