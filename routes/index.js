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

router.get('/vacation/:id', function(req, res, next) {
    let id = req.params.id;
    knex('vacation')
        .where('id', id)
        .then(function(data) {
            res.render('index', {
              title: 'Vacation Journal',
                vacationData: data
            });
        });
});

router.get('/vacation/:id/edit', function(req, res, next) {
    let id = req.params.id;
    knex('vacation')
        .where('id', id)
        .then(function(data) {
            res.render('edit', {
              title: 'Vacation Journal',
                vacationData: data
            });
        });
});

router.post('/', function (req, res, next) {
  knex('vacation')
  .insert(req.body)
  .then(function () {
    res.redirect('/');
  });
});

router.post('/delete', function (req, res, next) {
  knex('vacation')
  .where('id',req.body.id)
  .del()
  .then(function () {
    res.redirect('/');
  });
});

router.post('/edit', (req, res, next) => {
  let id = req.body.id;
  let vaca = req.body;
  knex('vacation')
    .where("id",id)
    .update({location: vaca.location})
    .then(function () {
      res.redirect('/');
    });

})


module.exports = router;
