/* use strict */
var app = angular.module("MyApp", []);

app.controller("AnimCtrl", function ($scope,$element)
              {
    $scope.useMove = function (obj)
    {
        console.log(obj);
    }
    $scope.movetypes = ["Normal", "Special", "Super"];
    $scope.movetype = $scope.movetypes[0];
})

.directive('character', function()
{
    return {
        restrict: "E",
        scope: {
            name: "@",
            image: "@",
            movetype: "="
        },
        templateUrl: "partials/anim_isolate.html",
        controller: "AnimCtrl"
    }
    
})