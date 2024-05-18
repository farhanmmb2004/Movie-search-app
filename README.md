

# Movie Search App

## Repository
```bash
git clone https://github.com/farhanmmb2004/movie-search-app.git
cd Movie-search-app
```

## Components

### MovieCard.jsx
- Displays individual movie information in a card format.
- When clicked, it fetches and displays detailed information about the selected movie.

### MovieDetail.jsx
- Displays detailed information about the selected movie in a modal.

### MovieList.jsx
- Displays a list of movie cards based on the search results.

### SearchForm.jsx
- Contains the search input field and handles the search functionality.

## Context API

### MovieContext.jsx
- Provides context for managing the state of movies, the selected movie, and the search function.

## Services

### api.js
- Contains functions to fetch movies and movie details from the OMDb API.

## Project Structure

```plaintext
src/
├── components/       # Reusable components
│   ├── MovieCard.js  # Movie card component
│   ├── MovieCard.css # Movie card styling
│   ├── MovieDetail.js # Movie detail modal component
│   ├── MovieList.js  # Movie list component
│   └── SearchForm.js # Search form component
├── contexts/         # Context API providers
│   └── MovieContext.js
├── services/         # API service functions
│   └── api.js
├── App.js            # Main app component
├── App.css           # Global styles
└── index.js          # Entry point
```
