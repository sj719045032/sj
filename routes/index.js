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
router.delete('/products/:_id', function (req, res) {
    Products.delete(req.params._id, function (err) {
        console.log(err);
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send("Delete successful!");
        }
    });


});
router.post('/products/:_id', function (req, res) {
    Products.update(req.params._id,req.body, function (err) {
        console.log(err);
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send("Update successful!");
        }
    });


});
router.post('/products', function (req, res) {
   var product=new Products(req.body);
    product.save(function (err,product) {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(product);
        }
    });


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
