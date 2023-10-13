const addMovie = () => {
    let name = document.getElementById("name");
    let genre = document.getElementById("genre");
    let plot = document.getElementById("plot");
    let releaseDate = document.getElementById('date');
    let rating = document.getElementById('rating');
    let notes = document.getElementById('notes');

    if (genre.value && plot.value && releaseDate.value && rating.value && notes.value) {
        axios.post('http://localhost:8000/api/v1/movies', {
            "name": name,
            "genre": genre,
            "plot": plot,
            "release_date": releaseDate,
            "rating": rating,
            "notes": notes
        }).then((response) => {
            console.log(response);
            name.value = "";
            genre.value = "";
            plot.value = "";
            releaseDate.value = "";
            rating.value = "";
            notes.value = "";
             alert("movie added successfully");

        }).catch((err) => {
            console.log(err);
            alert("failed to add movie");
        });
    } else {
        alert("please provide the required movie details");
    }
}