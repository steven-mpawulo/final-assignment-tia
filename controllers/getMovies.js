const con = require("../db/db");
// controller to fetch all movies

const getMovies = (req, res) => {
    const sql = "SELECT * FROM movies";
    con.query(sql, function (err, result){
        if (err) {
            console.log(err);
            res.status(400).json({"message": "something went wrong"});
        } else {
            console.log(result);
            if (result) {
                res.status(200).json({"message": "movies retrieved","movies": result});
            } else {
                res.status(404).json({"message": "no movies found"});
            }
        }
    });

}

module.exports = getMovies;