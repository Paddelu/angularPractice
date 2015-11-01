/*use strict*/
var app = angular.module("MyApp2", []);

app.controller("ShieldCtrl", function ($scope) {
    $scope.shieldNames = [];
    
    this.addReigns = function () {
        $scope.shieldNames.push("Roman Reigns: Juggernaut");
    };
    
    this.addRollins = function () {
        $scope.shieldNames.push("Seth Rollins: Architect");
    };
        
    this.addAmbrose = function () {
        $scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
    };
})


    .directive("theshield", function () {
        return {
            restrict:   "E",
            controller: "ShieldCtrl",
            link: function (scope, element, attrs) {
                element.bind("mouseenter", function () {
                    console.log(scope.shieldNames);         
                });
            }
        }
})

    .directive("reigns", function () {
    return{
        require: "theshield",
        link: function (scope, element, attrs, ShieldCtrl)
        {
            ShieldCtrl.addReigns();
        }
    }
})

.directive("rollins", function () {
    return{
        require: "theshield",
        link: function (scope, element, attrs, ShieldCtrl)
        {
            ShieldCtrl.addRollins();
        }
    }
})

    .directive("ambrose", function () {
    return{
        require: "theshield",
        link: function (scope, element, attrs, ShieldCtrl)
        {
            ShieldCtrl.addAmbrose();
        }
    }
})


             
app.directive("interactiveBtn", function ()
{
    return {
        restrict: "A",
        link: function (scope,element, attrs)
        {
            element.bind("mouseenter", function()
            {
              element[0].innerText ="Rolled over!";
            });
            
            element.bind("mouseleave", function()
            { 
                element[0].innerText = "Rolled out!";
            });
        }
    }  
})

app.directive("walterwhite", function ()
{
    return {
        restrict: "E",
        transclude: true,
        template:   "<h2>Pushing so I can can continue working from anywhere</h2>"
    }
});