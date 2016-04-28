'use strict';
angular.module('app.services.apiService', [])
  .factory('apiService', function($http, $q, _, $window, Settings) {

    var headers = {
      'Content-Type': 'application/json'
    }

    function sendApiRequest(url, method, data) {

      var deferred = $q.defer();

      $http({
        method: method,
        url: url,
        headers: headers,
        data: data
      }).success(function(data, status, headers) {
        deferred.resolve(data);
      }).error(function(err) {
        console.log('Api Service error: ' + angular.toJson(err));
        deferred.reject(err);
      });

      return deferred.promise;

    }

    function buildUrl(path, params) {
      var url = getUrlValue(Settings.API, path);
      //TODO: handle path not found
      _.each(params, function(value, key) {
        url = url.replace(':' + key, value);
      });
      return Settings.API.baseURL + url;
    }

    function getUrlValue(obj, path) {
      var keys = path.split('.');
      for(var i=0; i<keys.length; i++){
        obj = obj[keys[i]];

        if(typeof obj === 'undefined'){
          return '';
        }
      }
      return obj;
    }


    // Public methods
    return {
      sendApiRequest: sendApiRequest,
      buildUrl: buildUrl
    };

  });