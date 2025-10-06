import React, { useState } from 'react';
import './Music.css';

// Album covers
const albumCovers = {
  coldplay: '/images/coldplay.jpg',
  weekend: '/images/weekend.jpeg',
  travis: '/images/travis.jpg',
  // Local images
  arjit: '/images/arjith.jpeg',
  maroon5: '/images/maroon5.png',
  anirudh: '/images/anirudh.jpeg',
  sushin: '/images/sushin.jpeg',
  jakes: '/images/jakes.jpeg',
  ed: '/images/ed.jpeg'
};

const featuredArtists = [
  {
    id: 1,
    name: 'Coldplay',
    latestAlbum: 'Music of the Spheres',
    latestSingle: 'My Universe (feat. BTS)',
    genre: 'Alternative/Indie',
    image: albumCovers.coldplay,
    topTracks: [
      { name: 'Viva La Vida', youtubeId: 'dvgZkm1xWPE' },
      { name: 'The Scientist', youtubeId: 'RB-RcX5DS5A' },
      { name: 'Paradise', youtubeId: '1G4isv_Fylg' },
      { name: 'Yellow', youtubeId: 'yKNxeF4KMsY' },
      { name: 'Fix You', youtubeId: 'k4V3Mo61fJM' }
    ],
    color: '#1E90FF'
  },
  {
    id: 2,
    name: 'The Weeknd',
    latestAlbum: 'Dawn FM',
    latestSingle: 'Take My Breath',
    genre: 'R&B/Pop',
    image: albumCovers.weekend,
    topTracks: [
      { name: 'Moth To A Flame (with Swedish House Mafia)', youtubeId: 'u9n7Cw-4_HQ' },
      { name: 'Save Your Tears', youtubeId: 'XXYlFuWEuKI' },
      { name: 'Blinding Lights (Official Video)', youtubeId: 'fHI8X4OXluQ' },
      { name: 'Starboy (feat. Daft Punk)', youtubeId: '34Na4j8AVgA' },
      { name: 'Die For You (Official Video)', youtubeId: 'uPD0QOGTmMI' }
    ],
    color: '#FF4500'
  },
  {
    id: 3,
    name: 'Travis Scott',
    latestAlbum: 'UTOPIA',
    latestSingle: 'MELTDOWN (feat. Drake)',
    genre: 'Hip-Hop/Trap',
    image: albumCovers.travis,
    topTracks: [
      { name: 'goosebumps (feat. Kendrick Lamar)', youtubeId: 'Dst9gZkq1a8' },
      { name: 'SICKO MODE (feat. Drake)', youtubeId: '6ONRf7h3Mdk' },
      { name: 'FE!N (feat. Playboi Carti)', youtubeId: 'B9synWjqBn8' },
      { name: 'MELTDOWN (feat. Drake)', youtubeId: 'LuKm4L9ryB0' },
      { name: 'HIGHEST IN THE ROOM', youtubeId: 'tfSS1e3kYeo' }
    ],
    color: '#8A2BE2'
  },
  {
    id: 4,
    name: 'Arijit Singh',
    latestAlbum: 'Satyaprem Ki Katha',
    latestSingle: 'Tere Vaaste',
    genre: 'Bollywood',
    image: albumCovers.arjit,
    topTracks: [
      { name: 'Kesariya', youtubeId: 'BddP6PYo2gs' },
      { name: 'Channa Mereya', youtubeId: 'bzSTpdcs-EI' },
      { name: 'Tum Hi Ho', youtubeId: 'IJq0yyWug1k' }
    ],
    color: '#FF6B6B'
  },
  {
    id: 5,
    name: 'Maroon 5',
    latestAlbum: 'Jordi',
    latestSingle: 'Memories',
    genre: 'Pop Rock',
    image: albumCovers.maroon5,
    topTracks: [
      { name: 'Memories', youtubeId: 'SlPhMPnQ58k' },
      { name: 'Sugar', youtubeId: '09R8_2nJtjg' },
      { name: 'Girls Like You', youtubeId: 'aJOTlE1K90k' }
    ],
    color: '#FF4757'
  },
  {
    id: 6,
    name: 'Anirudh Ravichander',
    latestAlbum: 'Jailer',
    latestSingle: 'Hukum',
    genre: 'Kollywood',
    image: albumCovers.anirudh,
    topTracks: [
      { name: 'Hukum - Thalaivar Alappara (Jailer)', youtubeId: 'gB2zKZxESTg' },
      { name: 'Dippam Dappam (Kaathuvaakula Rendu Kaadhal)', youtubeId: 'tFX2UvkQj44' },
      { name: 'Arabic Kuthu - Halamithi Habibo (Beast)', youtubeId: 'KUN5Uf9mObQ' }
    ],
    color: '#1E90FF'
  },
  {
    id: 7,
    name: 'Sushin Shyam',
    latestAlbum: 'Jigarthanda DoubleX',
    latestSingle: 'Kannamma',
    genre: 'Mollywood',
    image: albumCovers.sushin,
    topTracks: [
      { name: 'Parudeesa (Bheeshma Parvam)', youtubeId: 'O_ZIs4p14Fo' },
      { name: 'Maradona - Nilapakshi', youtubeId: 'VCRGnxVVGwY' },
      { name: 'Theerame (Malik)', youtubeId: '18cpx0zI6SY' }
    ],
    color: '#2ED573'
  },
  {
    id: 8,
    name: 'Jakes Bejoy',
    latestAlbum: 'Kumari',
    latestSingle: 'Aaradhike',
    genre: 'Mollywood',
    image: albumCovers.jakes,
    topTracks: [
      { name: 'Minnalvala (Narivetta)', youtubeId: 'izbydia9jz4' },
      { name: 'Ranam Title Track - You Made Me Feel', youtubeId: 'UImrau29cu8' },
      { name: 'Lokah (Promo Video Song)', youtubeId: 'uM3Bjbskv48' }
    ],
    color: '#FF7F50'
  },
  {
    id: 9,
    name: 'Ed Sheeran',
    latestAlbum: 'Subtract',
    latestSingle: 'Eyes Closed',
    genre: 'Pop',
    image: albumCovers.ed,
    topTracks: [
      { name: 'Shape of You', youtubeId: 'JGwWNGJdvx8' },
      { name: 'Perfect', youtubeId: '2Vv-BfVoq4g' },
      { name: 'Thinking Out Loud', youtubeId: 'lp-EO5I60KA' }
    ],
    color: '#FF6B81'
  }
];

const genres = [
  { name: 'Alternative/Indie', color: '#1E90FF' },
  { name: 'R&B/Pop', color: '#FF4500' },
  { name: 'Hip-Hop/Trap', color: '#8A2BE2' },
  { name: 'Electronic', color: '#32CD32' },
  { name: 'K-Pop', color: '#FF1493' },
];

// Get all unique genres from featured artists
const allGenres = Array.from(new Set(featuredArtists.map(artist => artist.genre)));

// Genre colors mapping
const genreColors: Record<string, string> = {
  'Alternative/Indie': '#1DB954',
  'R&B/Pop': '#4CC9F0',
  'Hip-Hop/Trap': '#9B5DE5',
  'Electronic': '#F15BB5',
  'K-Pop': '#F72585',
  'Bollywood': '#FF9E00',
  'Mollywood': '#FF9E00',
  'Kollywood': '#9B5DE5',
  'Pop': '#00BBF9'
};

const Music: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  
  // Create ripple effect
  const createRipple = (event: React.MouseEvent<HTMLSpanElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size/2}px`;
    ripple.style.top = `${event.clientY - rect.top - size/2}px`;
    
    // Add ripple to button
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };
  
  // Handle genre filter
  const handleGenreClick = (genre: string, e: React.MouseEvent<HTMLSpanElement>) => {
    createRipple(e);
    setActiveGenre(activeGenre === genre ? null : genre);
  };
  
  // Filter artists by active genre
  const filteredArtists = activeGenre 
    ? featuredArtists.filter(artist => artist.genre === activeGenre)
    : featuredArtists;

  const playTrack = (trackName: string, youtubeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentTrack(trackName);
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="music-page">
      <div className="music-hero">
        <h1>My Music Universe</h1>
        <p className="subtitle">Exploring the sounds that move me</p>
      </div>

      <div className="featured-artists">
        <h2>Featured Artists</h2>
        <div className="artist-grid">
          {filteredArtists.map((artist) => (
            <div 
              key={artist.id} 
              className={`artist-card ${selectedArtist === artist.id ? 'active' : ''}`}
              style={{ '--artist-color': artist.color } as React.CSSProperties}
              onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
            >
              <div className="artist-image">
                <img src={artist.image} alt={artist.name} />
                <div className="artist-overlay">
                  <span>Latest: {artist.latestSingle}</span>
                </div>
              </div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p className="genre">{artist.genre}</p>
                {selectedArtist === artist.id && (
                  <div className="tracklist">
                    <h4>Top Tracks</h4>
                    <ul>
                      {artist.topTracks.map((track, index) => (
                        <li 
                          key={index} 
                          className={currentTrack === track.name ? 'playing' : ''}
                          onClick={(e) => playTrack(track.name, track.youtubeId, e)}
                        >
                          {track.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="genres-section">
        <h2>Explore Genres</h2>
        <div className="genre-tags">
          <span 
            className={`genre-tag ${!activeGenre ? 'active' : ''}`}
            onClick={(e) => handleGenreClick('', e)}
            style={{ '--genre-color': '#6c63ff' } as React.CSSProperties}
          >
            All Genres
          </span>
          {allGenres.map((genre, index) => (
            <span 
              key={index} 
              className={`genre-tag ${activeGenre === genre ? 'active' : ''}`}
              data-genre={genre}
              onClick={(e) => handleGenreClick(genre, e)}
              style={{ '--genre-color': genreColors[genre] || '#6c63ff' } as React.CSSProperties}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {currentTrack && (
        <div className="now-playing">
          <div className="now-playing-content">
            <span className="now-playing-text">Now Playing:</span>
            <span className="track-name">{currentTrack}</span>
            <button 
              className="close-btn"
              onClick={() => setCurrentTrack(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
