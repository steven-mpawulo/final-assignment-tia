const con = require("../db/db");

// controller for adding a movie
const addMovie = (req, res) => {
    const {name, genre, plot, release_date, rating, notes} = req.body;

    if (name && genre && plot && release_date && rating && notes) {
        const sql = "INSERT INTO movies VALUES(?,?,?,?,?,?)";
        con.query(sql, [name, genre, plot, release_date, rating, notes], function (err, result){
            if (err) {
                console.log(err);
                res.status(400).json({"message": "failed to save movie information"});
            } else {
                console.log(result);
                res.status(201).json({"message": "movie saved successfully"});
            }
        });
    } else {
        res.status(400).json({"message": "please provide movie data"});
    }
}

module.exports = addMovie;