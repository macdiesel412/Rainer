var express = require('express');
var router = express.Router();
var _ = require('lodash')
var util = require("util")

/* GET home page. */
router.get('/r/nonce_token', function(req, res, next) {
    req.checkQuery('storefront', util.format('Invalid storefront id %s', req.param.storefront)).equals('ccas-bb9630c04f');

    var errors = req.validationErrors();
    if(errors) {
        res.code = 401;
        res.json({"message":errors});
        return;
    }
    res.code = 200;
    res.json({'nonce_token':"ff6bfd673ab6ae03d8911"});

});

module.exports = router;
