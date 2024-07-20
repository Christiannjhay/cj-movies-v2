import HoverPLayIcon from '@/icons/HoverPlayIcon';
import React from 'react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string; 
  release_date: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const getYear = (dateString: string): string => {
    return new Date(dateString).getFullYear().toString();
  };

  return (
    <div className="relative rounded-lg overflow-hidden" onClick={onClick}>
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-80 rounded-2xl"
        />
        <div className="absolute inset-0 bg-red-500 bg-opacity-15 rounded-2xl flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="text-white bg-transparent rounded-lg p-2 hover:text-red-500 hover:scale-105 transition duration-300"
          >
            <HoverPLayIcon/>
          </button>
        </div>
      </div>
      <div className="p-1">
        <h3 className="text-red-500 font-normal text-sm">{getYear(movie.release_date)}</h3>
        <h2 className="text-white text-sm font-bold mb-2">{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;