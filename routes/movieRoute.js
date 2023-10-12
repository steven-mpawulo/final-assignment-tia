const express = require('express');
const addMovie = require('../controllers/addMovie');
const removeMovie = require('../controllers/removeMovie');

const movieRoute = express.Router();

// route to add a movie
movieRoute.post('/v1/movies', addMovie);
movieRoute.delete('/v1/movies/:id', removeMovie);

module.exports = movieRoute;