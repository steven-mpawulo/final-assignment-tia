const con = require("../db/db");

// controller to search movie by name
const searchMovieByName = (req, res) => {
    const { name } = req.body;

    if (name) {
        const sql = "SELECT * FROM movies WHERE name = ?";
        con.query(sql, [name], function(err, result){
            if (err) {
                console.log(err);
                res.status(400).json({"message": "something went wrong"});
            } else {
                console.log(result);
                const movie = result[0];
                res.status(200).json({"message": "movie retreived", movie});
            }
        });
    } else {
        res.status(400).json({"message": "please provide a movie name"});
    }
}

module.exports = searchMovieByName;