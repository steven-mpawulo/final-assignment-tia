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
            name = "";
            genre = "";
            plot = "";
            releaseDate = "";
            rating = "";
            notes = "";
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
    let outsideRating = []; 
    let thumbNails = [];
    let endpoint = 'movies';
    if (sort) {
        endpoint = 'movies/sort';
    } else {
        endpoint = endpoint;
    }
    let moviesList = document.getElementById('movies');

    await axios.get(`http://localhost:8000/api/v1/${endpoint}`).then(async function (response) {
        // console.log(response.data);
        const movies = response.data.movies;
        movies.forEach(async (movie) => {
            console.log(`movie: ${movie.id}, ${movie.name}`);
            await axios.get(`https://www.omdbapi.com/?t=${movie.name}&apikey=dd3d212b`).then((response) => {
            // console.log(response.data);
            // console.log(response.data.Ratings);
            let ratings = response.data.Ratings;
            let thumbNail = response.data.Poster;
            let exactRating = ratings[0]
            // console.log(ratings[0]);
            outsideRating.push(exactRating);
            thumbNails.push(thumbNail);
            console.log(outsideRating);
            }).catch((e) => {
                console.log(e);
                alert("failed to fetch external movie rating");
            });
            let li = document.createElement('li');
            let name = document.createElement('p');
            let genre = document.createElement('p');
            let plot = document.createElement('p');
            let releaseDate = document.createElement('p');
            let rating = document.createElement('p');
            let notes = document.createElement('p');
            let externalRating = document.createElement('p');
            let thumbNail = document.createElement('IMG');
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
            externalRating.innerText = `External Rating: Source: ${outsideRating[parseInt(movie.id)].Source}, Value: ${outsideRating[parseInt(movie.id)].Value}`;
            thumbNail.src = `${thumbNails[parseInt(movie.id)]}`;
            thumbNail.style.width = '50%';
            movieContainer.appendChild(thumbNail);
            movieContainer.appendChild(name);
            movieContainer.appendChild(genre);
            movieContainer.appendChild(plot);
            movieContainer.appendChild(releaseDate);
            movieContainer.appendChild(rating);
            movieContainer.appendChild(notes);
            movieContainer.appendChild(externalRating);
            movieContainer.appendChild(deleteButton);
            movieContainer.style.display = 'flex';
            movieContainer.style.flexDirection = 'column';
            movieContainer.style.border = '1px solid black';
            movieContainer.style.borderRadius = '15px';
            movieContainer.style.padding = '16px';
            movieContainer.style.marginBottom = '8px';
            movieContainer.style.width = '50%';
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