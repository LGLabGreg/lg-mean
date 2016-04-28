'use strict';

angular.module('app.controllers.home', [])
  .controller( 'HomeCtrl',  function($scope, _, apiService, $http) {

    $scope.view = 'all';

    /*
    apiService.sendApiRequest(apiService.buildUrl('posts.all'), 'GET').then(function(response){
      $scope.posts = response;
      angular.element('.preloader-wrapper').removeClass('visible');
    });//Handle API errors in apiService


    $scope.readMore = function(post){
      angular.element('.preloader-wrapper').addClass('visible');
      apiService.sendApiRequest(apiService.buildUrl('posts.item', {id: post.id}), 'GET').then(function(response){
        $scope.post = response;
        $scope.view = 'detail';
        angular.element('.preloader-wrapper').removeClass('visible');
      });
    }
    */

    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
      .success(function(data) {
        $scope.todos = data;
        angular.element('.preloader-wrapper').removeClass('visible');
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
      $http.post('/api/todos', $scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear the form so our user is ready to enter another
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
      $http.delete('/api/todos/' + id)
        .success(function(data) {
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

  });

