const express = require('express');
const addMovie = require('../controllers/addMovie');
const removeMovie = require('../controllers/removeMovie');
const getMovies = require('../controllers/getMovies');
const searchMovieByName = require('../controllers/searchMovieByName');
const sortMovies = require('../controllers/sortMovies');

const movieRoute = express.Router();

// route to add a movie
movieRoute.post('/v1/movies', addMovie);
// route to get all movies
movieRoute.get('/v1/movies', getMovies);
// route to search movies by name
movieRoute.get('/v1/movies/search', searchMovieByName);
// route to sort movies
movieRoute.get('/v1/movies/sort', sortMovies);
// route to delete movie
movieRoute.delete('/v1/movies/:movieId', removeMovie);

module.exports = movieRoute;