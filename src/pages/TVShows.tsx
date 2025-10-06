import React, { useEffect } from 'react';
import { FaTv } from 'react-icons/fa';
import './TVShows.css';

interface Show {
  id: number;
  title: string;
  genre: string[];
  year: number;
  rating: number;
  poster: string;
  description: string;
  seasons: number;
}

const TVShows: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shows: Show[] = [
    {
      id: 1,
      title: "Peaky Blinders",
      genre: ["Crime", "Drama"],
      year: 2013,
      rating: 8.8,
      poster: "/images/peaky.jpg",
      description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
      seasons: 6
    },
    {
      id: 2,
      title: "Stranger Things",
      genre: ["Drama", "Fantasy", "Horror"],
      year: 2016,
      rating: 8.7,
      poster: "/images/stranger.jpg",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      seasons: 4
    },
    {
      id: 3,
      title: "The Mandalorian",
      genre: ["Action", "Adventure", "Sci-Fi"],
      year: 2019,
      rating: 8.8,
      poster: "/images/mandalorian.jpg",
      description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      seasons: 3
    },
    {
      id: 4,
      title: "Breaking Bad",
      genre: ["Crime", "Drama", "Thriller"],
      year: 2008,
      rating: 9.5,
      poster: "/images/breaking.jpeg",
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      seasons: 5
    },
    {
      id: 5,
      title: "The Witcher",
      genre: ["Action", "Adventure", "Drama"],
      year: 2019,
      rating: 8.2,
      poster: "/images/witcher.jpeg",
      description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      seasons: 3
    },
    {
      id: 6,
      title: "The Last of Us",
      genre: ["Action", "Adventure", "Drama"],
      year: 2023,
      rating: 8.9,
      poster: "/images/lastofus.jpg",
      description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      seasons: 1
    },
    {
      id: 7,
      title: "Vikings",
      genre: ["Action", "Adventure", "Drama"],
      year: 2013,
      rating: 8.5,
      poster: "/images/vikings.jpeg",
      description: "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
      seasons: 6
    },
    {
      id: 8,
      title: "The Boys",
      genre: ["Action", "Comedy", "Crime"],
      year: 2019,
      rating: 8.7,
      poster: "/images/boys.jpeg",
      description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
      seasons: 4
    },
    {
      id: 9,
      title: "Loki",
      genre: ["Action", "Adventure", "Fantasy"],
      year: 2021,
      rating: 8.2,
      poster: "/images/loki.jpg",
      description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
      seasons: 2
    },
    {
      id: 10,
      title: "The Umbrella Academy",
      genre: ["Action", "Adventure", "Comedy"],
      year: 2019,
      rating: 8.0,
      poster: "/images/umbrella.jpg",
      description: "A family of former child heroes, now grown apart, must reunite to solve the mystery of their father's death and the threat of an impending apocalypse.",
      seasons: 3
    },
    {
      id: 11,
      title: "The Dark",
      genre: ["Crime", "Drama", "Mystery"],
      year: 2017,
      rating: 7.9,
      poster: "/images/dark.jpg",
      description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
      seasons: 3
    },
    {
      id: 12,
      title: "Friends",
      genre: ["Comedy", "Romance"],
      year: 1994,
      rating: 8.9,
      poster: "/images/friends.jpg",
      description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      seasons: 10
    }
  ];

  return (
    <div className="shows-container">
      <div className="section-header">
        <h1><FaTv className="header-icon" /> TV Shows</h1>
        <p className="subtitle">A collection of my favorite TV series across different genres</p>
      </div>
      
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <div className="show-poster">
              <img 
                src={show.poster} 
                alt={show.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/movies/placeholder.jpg';
                }}
              />
              <div className="show-rating">
                <span>★</span> {show.rating}
              </div>
            </div>
            <div className="show-details">
              <h3>{show.title}</h3>
              <div className="show-meta">
                <span className="show-year">{show.year}</span>
                <span className="show-seasons">{show.seasons} Season{show.seasons !== 1 ? 's' : ''}</span>
              </div>
              <div className="show-genres">
                {show.genre.map((g, i) => (
                  <span key={i} className="genre-tag">{g}</span>
                ))}
              </div>
              <p className="show-description">{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
