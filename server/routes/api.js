const express = require('express');
const router = express.Router();
const Record = require('../models/record');

router.get('/records', function(req, res, next) {
    Record.find({}).then(function(records) {
        res.send(records);    
    });
});

router.post('/records', function(req, res, next) {
    Record.create(req.body).then(function(record) {
        res.send(record);
    }).catch(next);
});

router.put('/records/:name', function(req, res, next) {
    Record.findOneAndUpdate({name: req.params.name}, req.body).then(function(record) {
        Record.findOne({name: req.params.name}).then(function(record) {
            res.send(record);
        })
    });
});

router.delete('/records/:name', function(req, res, next) {
    Record.findOneAndRemove({name: req.params.name}).then(function(record) {
        res.send(record);
    });
});

module.exports = router;
