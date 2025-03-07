# Movies Roulette 🎬

## Overview 🎥

The **Movies Roulette** project was created during a hackathon to provide movie lovers with a fun way to discover new films. This website uses an external API to give users a random movie recommendation based on their selected genre. The home page also features a randomly generated list of top movies from IMDb to help users discover the best-rated films.

## Features 🚀

- **Movies Roulette**: After selecting a genre, users can click on a button to get a random movie recommendation.
- **Home Page**: Randomly recommends movies from the top 50 movies on IMDb.
- **Genres**: Users can choose from various genres such as Action, Comedy, Drama, etc., and get a movie recommendation tailored to their selection.
- **External API**: Utilizes an external Movies API to fetch movie details based on user input and generate random suggestions.

## Tech Stack 💻

- **Frontend**: 
    [![React](https://skillicons.dev/icons?i=react&theme=dark)](https://reactjs.org/) 
    [![JavaScript](https://skillicons.dev/icons?i=js&theme=dark)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Backend**: No backend (only API calls made from frontend)
- **Libraries**:
    - `react` for building the user interface
    - `axios` for making API requests
    - `react-router-dom` for handling page navigation
    - [![SASS](https://skillicons.dev/icons?i=sass&theme=dark)](https://sass-lang.com/) for styling

## External API 📡

This project uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to get movie data, including information about movies, their genres, ratings, and more.

### Key API Endpoints:
- **Search Movies by Genre**: Allows the app to fetch movies from the selected genre.
- **Top 50 Movies (IMDb)**: Randomly pulls movies from the top-rated list on IMDb.

## How to Run the Project Locally 🏃‍♂️

1. Clone the repository:
    ```bash
    git clone https://github.com/mimschowdhury/hackathon-1.git
    cd movies-roulette
    ```

2. Install dependencies:
    ```bash
    npm install
    ````

3. Start the development server:
    ```bash
    npm run dev
    ```

## Group Members 👥

- **Mimta Chowdhury** - Frontend Development, API Integration
- **Disha Bahare** - Frontend Development, API Integration

## Future Improvements ✨

- Add more genres for users to choose from.
- Enhance the UI with more interactive features.
- Include user reviews and ratings for recommended movies.