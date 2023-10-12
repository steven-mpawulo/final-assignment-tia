const express = require('express');
const addMovie = require('../controllers/addMovie');
const removeMovie = require('../controllers/removeMovie');
const getMovies = require('../controllers/getMovies');
const searchMovieByName = require('../controllers/searchMovieByName');
const sortMovies = require('../controllers/sortMovies');

const movieRoute = express.Router();

// route to add a movie
movieRoute.post('/v1/movies', addMovie);
movieRoute.get('/v1/movies', getMovies);
movieRoute.get('/v1/movies/search', searchMovieByName);
movieRoute.get('/v1/movies/sort', sortMovies);
movieRoute.delete('/v1/movies/:movieId', removeMovie);

module.exports = movieRoute;