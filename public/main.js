const addMovie = async () => {
    let name = document.getElementById("name");
    let genre = document.getElementById("genre");
    let plot = document.getElementById("plot");
    let releaseDate = document.getElementById('date');
    let rating = document.getElementById('rating');
    let notes = document.getElementById('notes');

    if (genre.value && plot.value && releaseDate.value && rating.value && notes.value) {
        await axios.post(`http://localhost:${process.env.PORT}/api/v1/movies`, {
            "name": name,
            "genre": genre,
            "plot": plot,
            "release_date": releaseDate,
            "rating": rating,
            "notes": notes
        }).then(function (response) {
            console.log(response);
            name.value = "";
            genre.value = "";
            plot.value = "";
            releaseDate.value = "";
            rating.value = "";
            notes.value = "";
             alert("movie added successfully");

        }).catch(function (err) {
            console.log(err);
            alert("failed to add movie");
        });
    } else {
        alert("please provide the required movie details");
    }
}

const getMovies = async () => {
    let moviesList = document.getElementById('movies');

     await axios.get(`http://localhost:${process.env.PORT}/api/v1/movies`).then(function(response) {
        // console.log(response.data);
        const movies = response.data.movies;
        movies.forEach((movie) => {
            console.log(movie);
            let li = document.createElement('li');
            let name = document.createElement('p');
            let genre = document.createElement('p');
            let plot = document.createElement('p');
            let releaseDate = document.createElement('p');
            let rating = document.createElement('p');
            let notes = document.createElement('p');
            let movieContainer = document.createElement('div');
            name.innerText = `Name: ${movie.name}`;
            genre.innerText = `Genre: ${movie.genre}`;
            plot.innerText = `Plot: ${movie.plot}`;
            releaseDate.innerText = `Release Date: ${movie.release_date}`;
            rating.innerText = `Rating: ${movie.rating}`;
            notes.innerText = `Notes: ${movie.notes}`;
            movieContainer.appendChild(name);
            movieContainer.appendChild(genre);
            movieContainer.appendChild(plot);
            movieContainer.appendChild(releaseDate);
            movieContainer.appendChild(rating);
            movieContainer.appendChild(notes);
            li.appendChild(movieContainer);
            moviesList.appendChild(li);
        });

    }).catch(function (err) {
        console.log(err);
        alert("Failed to fetch movies");
    });
}