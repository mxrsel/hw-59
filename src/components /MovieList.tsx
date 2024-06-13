import React from 'react';
import MovieItem from './MovieItem';

interface Movie {
  id: number;
  title: string;
}

interface MovieListProps {
  movies: Movie[];
  onEditMovie:(id: number, title: string) => void;
  onRemoveMovie: (id: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({movies, onEditMovie, onRemoveMovie }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onEditMovie={onEditMovie}
          onRemoveMovie={onRemoveMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;