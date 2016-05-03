'use strict';

angular.module('app.controllers.home', [])
  .controller( 'HomeCtrl',  function($scope, _, apiService, $http) {

    $scope.createTodoData = {};

    //Init page, get all todos
    function init(){
      apiService.sendApiRequest(apiService.buildUrl('todos.all'), 'GET').then(function(response){
        $scope.todos = response;
        angular.element('.preloader-wrapper').removeClass('visible');
      }, function(err){
        console.log('Error: ' + data);
      });
    };
    init();


    //Create a todo
    $scope.createTodo = function() {
      angular.element('.preloader-wrapper').addClass('visible');
      apiService.sendApiRequest(apiService.buildUrl('todos.all'), 'POST', $scope.createTodoData).then(function(response){
        $scope.todos = response;
        angular.element('.preloader-wrapper').removeClass('visible');
      }, function(err){
        console.log('Error: ' + data);
      });
    };

    //Update a todo
    $scope.updateTodo = function(todo) {
      angular.element('.preloader-wrapper').addClass('visible');
      apiService.sendApiRequest(apiService.buildUrl('todos.all'), 'PUT', todo).then(function(response){
        $scope.todos = response;
        angular.element('.preloader-wrapper').removeClass('visible');
      }, function(err){
        console.log('Error: ' + data);
      });
    };

    //Delete a todo
    $scope.deleteTodo = function(id) {
      angular.element('.preloader-wrapper').addClass('visible');
      apiService.sendApiRequest(apiService.buildUrl('todos.item', {id: id}), 'DELETE').then(function(response){
        $scope.todos = response;
        angular.element('.preloader-wrapper').removeClass('visible');
      }, function(err){
        console.log('Error: ' + data);
      });
    };


  });

