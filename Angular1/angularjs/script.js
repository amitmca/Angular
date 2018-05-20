var myApp = angular.module("myModule",[]);  //Create a module

myApp.controller("myController",function($scope) {   // Create a Controller

var employee ={
firstName : "Amit"
};
$scope.employee = employee;
}); // Register controller to module

