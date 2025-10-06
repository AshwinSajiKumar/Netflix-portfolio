import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Profile from './pages/Profile';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import StalkMe from './pages/StalkMe';
import Layout from './Layout';
import Music from './pages/Music';
import Movies from './pages/Movies';
import Certifications from './pages/Certifications';
import TVShows from './pages/TVShows';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/stalk-me" element={<Layout><StalkMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/movies" element={<Layout><Movies /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/tv-shows" element={<Layout><TVShows /></Layout>} />
    </Routes>
    </div>
  );
};

export default App;
