/**
 * Created by shijin on 2015/11/15.
 */
angular.module("sportsStoreAdmin", ["ngRoute","ngResource"]).config(
    function ($routeProvider) {
        $routeProvider.when("/login",{
            templateUrl:"views/adminLogin.html"
        });
        $routeProvider.when("/main",{
            templateUrl:"views/adminMain.html"
        });

        $routeProvider.otherwise({
           redirectTo:"/login"
        });
    }
);