const express = require('express');
const addMovie = require('../controllers/addMovie');
const removeMovie = require('../controllers/removeMovie');
const getMovies = require('../controllers/getMovies');

const movieRoute = express.Router();

// route to add a movie
movieRoute.post('/v1/movies', addMovie);
movieRoute.get('/v1/movies', getMovies);
movieRoute.delete('/v1/movies/:movieId', removeMovie);

module.exports = movieRoute;