import React, { useEffect } from 'react';
import { FaFilm } from 'react-icons/fa';
import './Movies.css';

interface Movie {
  id: number;
  title: string;
  genre: string[];
  year: number;
  rating: number;
  poster: string;
  description: string;
}

const Movies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      genre: ["Sci-Fi", "Action", "Thriller"],
      year: 2010,
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      genre: ["Drama", "Crime"],
      year: 1994,
      rating: 9.3,
      poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: ["Action", "Crime", "Drama"],
      year: 2008,
      rating: 9.0,
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: ["Crime", "Drama"],
      year: 1994,
      rating: 8.9,
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
      id: 5,
      title: "The Godfather",
      genre: ["Crime", "Drama"],
      year: 1972,
      rating: 9.2,
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      genre: ["Action", "Adventure", "Sci-Fi"],
      year: 2019,
      rating: 8.4,
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      id: 7,
      title: "Deadpool",
      genre: ["Action", "Adventure", "Comedy"],
      year: 2016,
      rating: 8.0,
      poster: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
    },
    {
      id: 8,
      title: "Interstellar",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      year: 2014,
      rating: 8.6,
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      id: 9,
      title: "Top Gun: Maverick",
      genre: ["Action", "Drama"],
      year: 2022,
      rating: 8.3,
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him."
    },
    {
      id: 10,
      title: "John Wick: Chapter 4",
      genre: ["Action", "Crime", "Thriller"],
      year: 2023,
      rating: 8.0,
      poster: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
    },
    {
      id: 11,
      title: "Mission: Impossible - Fallout",
      genre: ["Action", "Adventure", "Thriller"],
      year: 2018,
      rating: 7.7,
      poster: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg",
      description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission goes wrong when a group of terrorists known as the Apostles acquire a dangerous weapon."
    },
    {
      id: 12,
      title: "The Matrix",
      genre: ["Action", "Sci-Fi"],
      year: 1999,
      rating: 8.7,
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    }
  ];

  return (
    <div className="movies-container">
      <div className="section-header">
        <h1><FaFilm className="header-icon" /> My Favorite Movies</h1>
        <p className="subtitle">A collection of films that have inspired and entertained me</p>
      </div>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-poster">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/movies/placeholder.jpg';
                }}
              />
              <div className="movie-rating">
                ⭐ {movie.rating}
              </div>
            </div>
            <div className="movie-details">
              <h3>{movie.title} ({movie.year})</h3>
              <div className="movie-genres">
                {movie.genre.map((g, i) => (
                  <span key={i} className="genre-tag">{g}</span>
                ))}
              </div>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
