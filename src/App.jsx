import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/home';
import PodcastDetail from './pages/podcast';
import EpisodeDetail from './pages/episode';

export default function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/podcast/:id" element={<PodcastDetail/>} />
        <Route path="/podcast/:id/episode/:id" element={<EpisodeDetail/>} />
      </Routes>
    </Router>
  );
};