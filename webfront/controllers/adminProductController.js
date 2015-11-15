/**
 * Created by shijin on 2015/11/15.
 */
angular.module("sportsStoreAdmin")
    .constant("productsUrl", "http://localhost:4444/products/")
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials=true;
    })
    .controller("productsCtrl", function ($scope, $resource, productsUrl) {
        $scope.productsResource=$resource(productsUrl+":_id",{_id:"@_id"});
        $scope.listProducts= function () {
            $scope.products=$scope.productsResource.query();
        };
        $scope.deleteProduct= function (product) {
            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product),1);
            })
        };
        $scope.createProduct= function (product) {
          new $scope.productsResource(product).$save().then(function (newProduct) {
              $scope.products.push(newProduct);
              $scope.editedProduct=null;
          })
        };
        $scope.updateProduct= function (product) {
            product.$save().then( $scope.listProducts());
            $scope.editedProduct=null;
        };
        $scope.startEdit= function (product) {
            $scope.editedProduct=product;
        };
        $scope.cancelEdit= function () {
            $scope.editedProduct=null;
        };
        $scope.listProducts();
    });