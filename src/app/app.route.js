(function() {
	'use strict';
	angular
		.module('app')
		.config(route);

	route.$inject = ['$routeProvider', '$locationProvider'];

	function route($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);
		$routeProvider

        .when("/404",
        {
            templateUrl: "app/partials/404/404.html",
            restricted : false,
            preload: false
        })
        .when("/",
        {
            templateUrl: "app/partials/home/home.html",
            controller: "HomeCtrl",
            restricted : false,
            preload: true
        })
        .otherwise({ redirectTo: '/404' });

	}
}());
