(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'CustomersRepository'];

    function HomeCtrl($scope, CustomersRepository) {
        $scope.title = "Clientes Cadastrados";
        $scope.customers = [];

        activate();

        function activate() {}

        LoadCustomers()

        function LoadCustomers() {
            var promise = CustomersRepository.getAllCustomers()

            promise.then((result) =>
            {
               console.log(result)
               $scope.customers = result.data
            },
            (error) =>
            {
                console.log(error)
            })
        }
    }

})();