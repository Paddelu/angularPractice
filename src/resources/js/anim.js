/* use strict */
var app = angular.module("MyApp3", []);

app.controller("AnimCtrl", function ($scope,$element)
              {
    $scope.getMove = function (name, movetype, move)
    {
        console.log(""+ name +" performed a " + movetype+" "+move);
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
            movetype: "@",
            useMove: "&"
        },
        templateUrl: "partials/anim_isolate.html",
        controller: "AnimCtrl"
    }
    
})