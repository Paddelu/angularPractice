var app = angular.module("MyApp", []);
app.controller("MainCtrl", function ($scope) {
    $scope.data = {
        label: "WARNING",
        class: "btn-warning"
    };
});