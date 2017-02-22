var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */

router.get('/', function(req, res, next) {
    knex('vacation')
        .then(function(data) {
            res.render('index', {
                title: 'Vacation Journal',
                vacationData: data
            }); //render books
        }, next);
});

router.get('/add', function (req,res,next){
  res.render('addedEntry');
});

router.post('/', function (req, res, next) {
  console.log('input',req.body);
  knex('vacation')
  .insert(req.body)
  .then(function () {
    res.redirect('/');
  });
});

module.exports = router;
