const con = require("../db/db");

// controller to remove movie
const removeMovie = (req, res) => {
   const movieId = parseInt(req.params.movieId);
   console.log(movieId);

   if (movieId) {
    const sql = "DELETE FROM movies WHERE id = ?";
    con.query(sql, [movieId], function(err, result){
        if (err) {
            console.log(err);
            res.status(400).json({"message": "something went wrong"});
        } else {
            console.log(result);
            res.status(200).json({"message": "movie deleted successfully"});
        }
    });
   } else {
    res.status(400).json({"message": "please provide a valid movie Id"});
   }
}

module.exports = removeMovie;