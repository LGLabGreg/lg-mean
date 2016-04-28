(function() {
	'use strict';
	angular
		.module('app')
		.run(run);

	run.$inject = ['$rootScope'];

	function run($rootScope) {

		$rootScope.$on('$routeChangeStart', function (event, next, current){
      // prevent user from accessing restricted content
      if (next.restricted){

      }
      
      if(next.preload){
      	angular.element('.preloader-wrapper').addClass('visible');
      }

    });

    $rootScope.$on('$routeChangeSuccess', function (event, next, current){

    });
	    
	}
}());
