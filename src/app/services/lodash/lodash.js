'use strict';
angular.module('app.services.lodash', [])
  .factory( '_',  function($window) {
    return $window._;
  });

