(function(){

  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = [{
      text: "un",
      complete: false
    }, 
    {
      text: "deux",
      complete: false
    }, 
    {
      text: "trois",
      complete: false
    }];

    $scope.addTask = function(newText) {
      if (newTask !== '') {
        var newTask = {
          text: newText,
          complete: false
        }
        $scope.tasks.push(newTask);
        $scope.newTask = '';
      }
    };

    $scope.strike = function(task) {
        var taskList = $scope.tasks;
        task.complete = !task.complete;
    }

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    window.scope = $scope;

  });

}());