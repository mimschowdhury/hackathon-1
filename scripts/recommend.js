const apiKey = '208d1c62';

async function getMovieSuggestion() {
    const genre = document.getElementById('genre').value;
    const response = await fetch(`https://www.omdbapi.com/?s=${genre}&apikey=${apiKey}`);
    const data = await response.json();
    const suggestionDiv = document.getElementById('movie-suggestion');
    suggestionDiv.innerHTML = '';
    
    if (data.Search) {
            const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];
            const movieDetailsResponse = await fetch(`https://www.omdbapi.com/?t=${randomMovie.Title}&apikey=${apiKey}`);
            const movieDetails = await movieDetailsResponse.json();
    
            if (movieDetails.Plot) {
                suggestionDiv.innerHTML = `
                    <div class='result'>
                        <img src='${randomMovie.Poster}' alt='${randomMovie.Title}'>
                        <p><strong>${randomMovie.Title} </strong>(${randomMovie.Year})</p>
                        <p><strong>Plot:</strong> ${movieDetails.Plot}</p>
                    </div>
                `;
            } else {
                suggestionDiv.innerHTML = `
                    <div class='result'>
                        <img src='${randomMovie.Poster}' alt='${randomMovie.Title}'>
                        <p><strong>${randomMovie.Title} </strong> (${randomMovie.Year})</p>
                        <p>Plot not available</p>
                    </div>
                `;
            }
        } else {
            suggestionDiv.innerHTML = '<p>No recommendations found</p>';
        }
    }