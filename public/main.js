const addMovie = () => {
    let name = document.getElementById("name").value;
    let genre = document.getElementById("genre").value;
    let plot = document.getElementById("plot").value;
    let releaseDate = document.getElementById('release_date').value;
    let rating = document.getElementById('rating').value;
    let notes = document.getElementById('notes').value;

    if (genre && plot && releaseDate && rating && notes) {
        axios.post('http://localhost:8000/api/v1/movies', {
            "name": name,
            "genre": genre,
            "plot": plot,
            "release_date": releaseDate,
            "rating": rating,
            "notes": notes
        }).then((response) => {
            console.log(response);
            alert("movie added successfully");
        }).catch((err) => {
            console.log(err);
            alert("failed to add movie");
        });
    } else {
        alert("please provide the required movie details");
    }
}