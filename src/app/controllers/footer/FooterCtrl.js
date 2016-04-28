'use strict';

angular.module('app.controllers.footer', [])
  .controller( 'FooterCtrl',  function($scope, _, Settings) {

    $scope.settings = Settings.UI.footer;

  });

