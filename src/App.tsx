import React, { useState } from 'react';
import MovieForm from './components /MovieForm';
import MovieList from './components /MovieList';

interface Movie {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleAddMovie = (newMovie: string) => {
    const newMovieItem: Movie = {
      id: Math.floor(Math.random() * 1000), // Генерируем случайный id
      title: newMovie,
    };
    setMovies((prevMovies) => [...prevMovies, newMovieItem]);
  };

  const handleEditMovie = (id: number, title: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, title: title } : movie
      )
    );
  };

  const handleRemoveMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies.map((movie, index) => ({ ...movie, id: index + 1 }))}
        onEditMovie={handleEditMovie}
        onRemoveMovie={handleRemoveMovie}
      />
    </div>
  );
};

export default App;