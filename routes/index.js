var express = require('express');
var router = express.Router();
var Products=require('../modules/products');

/* GET home page. */
router.get('/', function (req, res) {
     Products.getSome(1,10, function (err,docs) {
         return res.render('index', {
             docs:docs
         });

     });

});
router.get('/products', function (req, res) {
    Products.getSome(1,10, function (err,docs) {
        if(err)
            console.log(err);
        else
        return res.send(docs);


    });

});
module.exports = router;
