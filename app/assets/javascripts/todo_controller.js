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

    $scope.completeTask = function(task) {
      task.complete = !task.complete;
    };

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    $scope.clearAll = function(index) {
      $scope.tasks = [];
    };

    $scope.countTasks = function() {
      var completedTasks = [];
      angular.forEach($scope.tasks, function(task, index) {
        if (task.complete === false) {
          completedTasks.push(task);
        }
      });
      if (completedTasks.length === 1) {
        return "1 more thing left to do."
      }
      else if (completedTasks.length !== 0) {
        return completedTasks.length + " things left to do.";
      }
      else {
        return "Nothing to do at the moment.";
      }
    };

    $scope.clearCompleted = function() {
      var activeTasks = []
      angular.forEach($scope.tasks, function(task, index) {
        if (task.complete === false) {
          activeTasks.push(task)
        }
      });
      $scope.tasks = activeTasks;
    }

    window.scope = $scope;

  });

}());