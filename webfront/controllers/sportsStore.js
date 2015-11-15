/**
 * Created by shijin on 2015/11/14.
 */
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:4444/products")
    .constant("orderUrl", "http://localhost:4444/orders")
    .controller("sportsSroreCtrl", function ($scope, $http, dataUrl,$location,orderUrl,cart) {
        $http.get(dataUrl).success(function (data) {
            $scope.data = {};
            $scope.data.products = data;
        }).error(function (err) {
            $scope.data = {};
            console.log(err);
            $scope.data.err = err;
        });
       $scope.sendOrder= function (shippingDetails) {
            var order=angular.copy(shippingDetails);
           order.products = cart.getProducts();
           $http.post(orderUrl,order)
               .success(function (data) {
                   $scope.data.orderId=data;
               })
               .error(function (err) {
                   $scope.data.orderError=err;
               }).finally(function () {
                   $location.path("/complete");
               });
       }
    });