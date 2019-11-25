var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

module.exports = router;

//GET retrieve all movies
router.get('/movies', moviesCtrl.index);

//GET retrieve single movie 
router.get('/movies/:id', moviesCtrl.show);

//POST a movie
router.post('/movies',moviesCtrl.create);

//PUT update a movie
router.put('/movies/:id', moviesCtrl.update);

//DELETE a movvie 
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;