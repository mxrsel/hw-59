import React, {useState} from 'react';

interface Props {
  onAddMovie: (title: string) => void;
}

const MovieForm: React.FC<Props> = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState<string>('');

  const handleAddMovie = () => {
    if (newMovie !== '') {
      onAddMovie(newMovie);
      setNewMovie('');
    }
  };


  return (
    <div>
      <input
        type='text'
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />

      <button onClick={handleAddMovie}>Add Movie</button>
      
    </div>
  );
};

export default MovieForm;