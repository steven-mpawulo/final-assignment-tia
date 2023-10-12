const con = require("../db/db");

// controller to sort movies by rating
const sortMovies = (req, res) => {
    const sql = "SELECT * FROM movies ORDER BY rating DESC";
    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            res.status(400).json({"message": "something went wrong"});
        } else {
            console.log(result);
            res.status(200).json({"messages": "movies sorted by rating", "movies": result});
        }
    })
}

module.exports = sortMovies;