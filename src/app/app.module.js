(function() {
	'use strict';
	angular
		.module('app', [
			
			'ngRoute',
			'ngSanitize',

			//App modules
			'app.config',

			'app.services.lodash',
			'app.services.helperService',
			'app.services.apiService',
			
			'app.controllers.home',
			'app.controllers.header',
			'app.controllers.footer'

			
		]);
}());






