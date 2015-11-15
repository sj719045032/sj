var express = require('express');
var router = express.Router();
var Products=require('../modules/products');
var Orders=require('../modules/orders');

/* GET home page. */
router.get('/', function (req, res) {
         return res.render('index');
});
router.get('/products', function (req, res) {
    Products.getSome(1,10, function (err,products) {
        if(err)
            console.log(err);
        else
            return res.send(products);
    });

});
router.delete('/products', function (req, res) {
    console.log(xixi);
  return  res.status(200).send("xixi");

});
router.post('/orders', function (req, res) {
    var order=new Orders(req.body);
    order.save(function (err,data) {
       if(err)
           console.log(err);
       else

       return res.send(data._id);


    });


});
router.get('/orders', function (req, res) {
   Orders.getSome(1,10, function (err,orders) {
       if(err)
           console.log(err);
       else
           return res.send(orders);
   })


});
module.exports = router;
