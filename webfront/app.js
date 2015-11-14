/**
 * Created by shijin on 2015/11/14.
 */
angular.module("sportsStore", ["customFilters","cart","ngRoute"]).config(
    function ($routeProvider) {
        $routeProvider.when("/checkout",{
            templateUrl:"views/checkoutSummary.html"
        });
        $routeProvider.when("/products",{
            templateUrl:"views/productList.html"
        });
        $routeProvider.otherwise({
            templateUrl:"views/productList.html"
        });
    }
);