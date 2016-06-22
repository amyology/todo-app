(function(){

  "use strict";

  angular.module("app").controller("todoController", function($scope) {

    $scope.tasks = ["un", "deux", "trois"];

    $scope.addTask = function(newStuff) {
      if (newStuff !== ''){
        $scope.tasks.push(newStuff);
        $scope.newTask = '';
      }
    };

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    window.scope = $scope;

  });

}());