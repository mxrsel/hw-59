import React from 'react';

interface Movie {
  id: number;
  title: string;
}

interface MovieItemProps {
  movie: Movie;
  onEditMovie:(id: number, title: string) => void;
  onRemoveMovie: (id: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movie, onEditMovie, onRemoveMovie}) => {
  return (
    <li>
      <input
        type='text'
        value={movie.id}
        onChange={(e) => onEditMovie(movie.id, e.target.value)}
      />
      <button onClick={() => onRemoveMovie(movie.id)}>Delete Movie</button>
    </li>
  );
};

export default MovieItem;