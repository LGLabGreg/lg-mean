'use strict';

angular.module('app.controllers.header', [])
  .controller( 'HeaderCtrl',  function($scope, _, Settings) {

    $scope.settings = Settings.UI.header;

  });

