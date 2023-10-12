const con = require("../db/db");

// controller for getting movie by id

const getMovie = (req, res) => {
    const movieId = parseInt(req.params.movieId);
    console.log(movieId);

    if (movieId) {
        const sql = "SELECT * FROM movies WHERE id = ?";
        con.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err);
                res.status(400).json({"message": "something went wrong"});
            } else {
                console.log(result);
                const movie = result[0];
                if (movie) {
                    res.status(200).json({"message": "movie retrieved", movie});
                } else {
                    res.status(404).json({"message": "no movie found"});
                }
            }
        });
    } else {
        res.status(400).json({"message": "please provide a valid movie Id"});
    }
}

module.exports = getMovie;