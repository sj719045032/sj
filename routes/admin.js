/**
 * Created by shijin on 2015/11/15.
 */
var express = require('express');
var router = express.Router();
var Products=require('../modules/products');
var Orders=require('../modules/orders');

/* GET home page. */
router.get('/', function (req, res) {
        return res.render('admin');
});


module.exports = router;
