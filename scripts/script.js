const apiKey = '208d1c62';
const URL = `http://www.omdbapi.com/?apikey=${apiKey}`;
const movies = [
    "Forrest Gump", "The Shawshank Redemption", "The Perks of Being a Wallflower", "The Dark Knight", "Changeling",
    "This Boy's Life", "It's a Wonderful Life", "The Silence of the Lambs", "8 Mile", "The Breakfast Club",
    "Django Unchained", "Silver Linings Playbook", "The Shining", "Se7en", "American Beauty",
    "Pulp Fiction", "Zero Dark Thirty", "Argo", "The Hurt Locker", "The Godfather",
    "The Town", "The Departed", "Scream", "Up in the Air", "What's Eating Gilbert Grape",
    "Lost in Translation", "The Conjuring", "Juno", "Stand by Me", "The Green Mile",
    "Super 8", "Jarhead", "Shutter Island", "Lawless", "Winter's Bone",
    "Saving Private Ryan", "Black Swan", "Inception", "A Few Good Men", "Law Abiding Citizen"
];

async function fetchMovieData(title) {
    const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
    return response.json();
}

async function displayRandomMovies() {
    const movieCardsDiv = document.getElementById('movie__cards');
    movieCardsDiv.innerHTML = '';

    // Shuffle the movies array and select 4 random movies
    const shuffledMovies = movies.sort(() => 0.5 - Math.random()).slice(0, 4);

    for (const title of shuffledMovies) {
        const movie = await fetchMovieData(title);
        if (movie.Response === "True") {
            movieCardsDiv.innerHTML += `
                <div class='movies__card'>
                    <img class='movies__img' src='${movie.Poster}' alt='${movie.Title}'>
                    <h3>${movie.Title} (${movie.Year})</h3>
                    <p>${movie.Plot}</p>
                </div>
            `;
        }
    }
}

async function searchMovie() {
    const query = document.getElementById('movie-search').value;
    const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`);
    const data = await response.json();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';
    
    if (data.Response === "True") {
        resultsDiv.innerHTML = `
            <div class='result'>
                <img src='${data.Poster}' alt='${data.Title}'>
                <p>${data.Title} (${data.Year})</p>
                <p>${data.Plot}</p>
            </div>
        `;
    } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
    }
}

// Load random movies when the page loads
window.onload = displayRandomMovies;