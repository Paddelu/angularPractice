var app = angular.module("myApp1", []);
app.controller("BindingCtrl", function ($scope) {
    $scope.data = {
        label: "WARNING",
        class: "btn-warning"
    };
});