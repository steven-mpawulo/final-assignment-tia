const express = require('express');
const addMovie = require('../controllers/addMovie');

const movieRoute = express.Router();

// route to add a movie
movieRoute.post('/v1/movies', addMovie);

module.exports = movieRoute;