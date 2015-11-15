var express = require('express');
var router = express.Router();
var User = require('../modules/users');


router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.getUser(username, function (err, user) {
        if (err) {
            return console.log(err);
        }

        if (!user) {
            return res.status(500).send("Username is not available!")
        }

        if (user.password == password) {
        return    res.send("Log in success!")
        }
        else{
            return res.status(500).send("Password is incorrect!");
        }
    });

});

module.exports = router;
