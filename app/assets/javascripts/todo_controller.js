(function(){

  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = [{
      text: "un",
      complete: false,
      visible: true
    }, 
    {
      text: "deux",
      complete: false,
      visible: true
    }, 
    {
      text: "trois",
      complete: false,
      visible: true
    }];

    $scope.addTask = function(newText) {
      if (newTask !== '') {
        var newTask = {
          text: newText,
          complete: false,
          visible: true
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
    };

    $scope.showActive = function() {
      angular.forEach($scope.tasks, function(task, index) {
        if (task.complete) {
          task.visible = false;
        }
        else {
          task.visible = true;
        }
      });
    };

    $scope.showCompleted = function() {
      angular.forEach($scope.tasks, function(task, index) {
        if (task.complete) {
          task.visible = true;
        }
        else {
          task.visible = false;
        }
      });
    };

    $scope.showAll = function() {
      angular.forEach($scope.tasks, function(task, index) {
        task.visible = true;
      });
    };

    window.scope = $scope;

  });

}());