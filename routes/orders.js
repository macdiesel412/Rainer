var express = require('express');
var router = express.Router();
var _ = require('lodash');
var util = require("util");

var TOKENS = ['ff6bfd673ab6ae03d8911'];
var MODELS = ['pugetsound', 'olympic'];
var CUSTOMS = ['mtn','ltd','14k']

/* GET home page. */

router.post('/r/request_customized_model', function(req, res, next) {
    req.checkBody('token', util.format('Unknown token %s', req.body.token)).isIn(TOKENS);
    req.checkBody('model', util.format('Model must be one of %s', MODELS)).isIn(MODELS);
    req.checkBody('custom', util.format('Custom must be one of %s', CUSTOMS)).isIn(CUSTOMS);

    var errors = req.validationErrors();
    if(errors) {
        res.code = 400;
        res.json({"message":errors});
        return;
    }

    res.code = 200;
    res.json({'order_id':randomInt(0,Number.MAX_SAFE_INTEGER)});
});

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = router;
