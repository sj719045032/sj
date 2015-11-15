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
        $routeProvider.when("/complete",{
            templateUrl:"views/thankYou.html"
        });
        $routeProvider.when("/placeorder",{
            templateUrl:"views/placeOrder.html"
        });
        $routeProvider.otherwise({
            templateUrl:"views/productList.html"
        });
    }
);