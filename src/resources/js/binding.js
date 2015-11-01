var app = angular.module("myApp", []);
app.controller("BindingCtrl", function ($scope) {
    $scope.data = {
        label: "WARNING",
        class: "btn-warning"
    };
});