import React, { useEffect } from 'react';
import { MovieContextProvider } from './contexts/MovieContext.jsx';
import MovieList from './components/MovieList.jsx';
import SearchForm from './components/SearchForm.jsx';
import './App.css';
function App() {
  return (
    <MovieContextProvider>
      <>
      <div className='App'>
        <div className="helper">
        <SearchForm />
        </div>
      </div>
      <MovieList />
      </>
    </MovieContextProvider>
  );
}

export default App;