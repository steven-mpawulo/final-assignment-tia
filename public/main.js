const addMovie = async () => {
    let name = document.getElementById("name").value;
    let genre = document.getElementById("genre").value;
    let plot = document.getElementById("plot").value;
    let releaseDate = document.getElementById('date').value;
    let rating = document.getElementById('rating').value;
    let notes = document.getElementById('notes').value;

    if (name && genre && plot && releaseDate && rating && notes ) {
        await axios.post(`http://localhost:8000/api/v1/movies`, {
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


const getMovies = async (sort = false) => {
    let endpoint = 'movies';
    if (sort) {
        endpoint = 'movies/sort';
    } else {
        endpoint = endpoint;
    }
    let moviesList = document.getElementById('movies');

    await axios.get(`http://localhost:8000/api/v1/${endpoint}`).then(function (response) {
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
            let deleteButton = document.createElement('button');
            let buttonTitle = document.createTextNode("Remove");
            deleteButton.addEventListener("click", async () => {
                console.log(`movie Id: ${movie.id}`);
                const movieId = movie.id;
                await axios.delete(`http://localhost:8000/api/v1/movies/${movieId}`).then((response) => {
                console.log(response.data);
                location.reload();
                alert("movie removed successfully");
                }).catch((err) => {
                    console.log(err);
                    alert("failed to remove movie");
                });
            });

            deleteButton.appendChild(buttonTitle);
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
            movieContainer.appendChild(deleteButton);
            li.appendChild(movieContainer);
            moviesList.appendChild(li);
        });

    }).catch(function (err) {
        console.log(err);
        alert("Failed to fetch movies");
    });
}

const searchMovieByName = async () => {
    let name = document.getElementById('search').value;
    console.log(name);

    if (name) {
        await axios.get(`http://localhost:8000/api/v1/movies/search?name=${name}`).then(function (response) {
            // console.log(response.data);
            const movie = response.data.movie;
            let movieList = document.getElementById('movie');
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
            movieList.appendChild(li);

        }).catch(function (err) {
            console.log(err);
            alert("Failed to fetch movie");
        });
    } else {
        alert("please provide a movie name");
    }
}