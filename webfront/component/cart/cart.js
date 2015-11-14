/**
 * Created by shijin on 2015/11/14.
 */
angular.module("cart", [])
    .factory("cart", function () {
        var cartData = [];

        return {
            addProduct: function (id, name, price) {
                var addedToExistingItem = false;
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            },
            removeProduct: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },
            getProducts: function () {
                return cartData;
            }


        }
    })
    .directive("cartSummary", function (cart) {
        return {
            restrict:"EA",
            templateUrl:"component/cart/cartSummary.html",
            controller: function ($scope) {
                var cartDate=cart.getProducts();
                $scope.total= function () {
                    var total=0;
                    for(var i=0;i<cartDate.length;i++){
                        total+=cartDate[i].price*cartDate[i].count;
                    }
                    return total;
                };
                $scope.itemCount= function () {
                    var total=0;
                    for(var i=0;i<cartDate.length;i++){
                        total+=cartDate[i].count;
                    }
                    return total;
                }
            }
        }
    }
);