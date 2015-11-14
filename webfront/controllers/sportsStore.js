/**
 * Created by shijin on 2015/11/14.
 */
angular.module("sportsStore")
    .constant("dataUrl","http://localhost:4444/products")
    .controller("sportsSroreCtrl", function ($scope,$http,dataUrl) {
    $http.get(dataUrl).success(function (data) {
        $scope.data = {};
        $scope.data.products = data;
    }).error(function (err) {
        $scope.data = {};
        console.log(err);
        $scope.data.err=err;
    });

});