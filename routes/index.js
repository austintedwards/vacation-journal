var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vacation Journal' });
});

router.get('/', function(req, res, next) {
  console.log("hey");
    knex('vacation')
        .then(function(data) {
          console.log("data", data);
            res.render('index', {
                vacationData: data
            }); //render books
        }, next);

});

module.exports = router;
