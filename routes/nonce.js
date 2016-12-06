var express = require('express');
var router = express.Router();
var _ = require('lodash')
var util = require("util")

/* GET home page. */
router.get('/r/nonce_token', function(req, res, next) {
    req.checkQuery('storefront', util.format('Invalid storefront id %s', req.param.storefront)).equals('ccas-bb9630c04f');

    var errors = req.validationErrors();
    if(errors) {
        res.json({"message":errors}, 401);
        return;
    }
    res.json({'nonce_token':"ff6bfd673ab6ae03d8911"}, 200);

});

module.exports = router;
