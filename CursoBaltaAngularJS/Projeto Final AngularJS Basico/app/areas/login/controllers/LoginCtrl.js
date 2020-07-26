(function () {
    'use strict'

    angular
        .module('app')
        .controller("LoginCtrl", LoginCtrl);

    LoginCtrl.$inject = ['$location', '$scope', '$rootScope','$http'];

    function LoginCtrl($scope, $http, $location, $rootScope) {
        $scope.user = {
            username : "",
            password : "",
        }

        $scope.Login = function () {
            var authurl = 'http://customer-service.azurewebsites.net/api/security/token';
            var data = "grant_type=password&username=" + $scope.user.username + "&password=" + $scope.user.password;
            $http.post(authurl, data, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            }).then((result) => {
                $rootScope.token = result.access_token;
                $rootScope.isAuthenticated = true;
                $location.url("/")
            },
                (error) => {
                    console.log(error);
                    toastr.error("Usário ou senha inválido", "Falha na autenticação")
                })
        }
    }
}())