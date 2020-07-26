(function () {
    'use strict';

    angular
        .module('app')
        .directive('customerBadgeDirective', CustomerBadgeDirective);

    CustomerBadgeDirective.$inject = ['$window'];

    function CustomerBadgeDirective($window) {
        return {
            templateUrl: "my-template-url.html",
            scope: {
                cliente: "="
            }
        }
}
}())