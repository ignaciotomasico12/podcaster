import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchPodcastList } from '../services/apiService';
import Layout from '../components/layout/layout';
import '../styles/home.css';

export default function Home() {
  const [podcasts, setPodcasts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    const storedPodcasts = JSON.parse(localStorage.getItem('podcasts'));
    if (storedPodcasts && Date.now() - storedPodcasts.timestamp < 24 * 60 * 60 * 1000) {
      setPodcasts(storedPodcasts.values);
    } else {
      fetchPodcastList()
        .then((data) => {
          let values = data?.feed?.entry 
          localStorage.setItem('podcasts', JSON.stringify({ values, timestamp: Date.now() }));
          setPodcasts(values);
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    }
  }, []);

  const filteredPodcasts = podcasts?.filter((podcast) => {
    const name = podcast['im:name'].label.toLowerCase();
    const artist = podcast['im:artist'].label.toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || artist.includes(search);
  });


  return (
    <Layout>
      {podcasts && 
        <section className="podcasts_wrapper">
          <div className="podcast_search">
            <div className='count'>
              <p>{filteredPodcasts.length}</p>
            </div>
            <div className='search'>
              <input 
                className='input' type="text" placeholder="Filter podcast..." 
                ref={searchInput} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='podcast_list'>
            {podcasts.filter((podcast) => {
              const name = podcast['im:name'].label.toLowerCase();
              const artist = podcast['im:artist'].label.toLowerCase();
              const search = searchTerm.toLowerCase();
              return name.includes(search) || artist.includes(search);
            }).map((podcast) => {
              return (
                <Link to={`/podcast/${podcast.id.attributes['im:id']}`} className='podcast_item' key={podcast.id.attributes['im:id']}>
                  <div className='podcast_item_image'>
                    <img src={podcast['im:image'][2].label} alt={podcast.title.label} />
                  </div>
                  <div className='podcast_item_info'>
                    <h3>{podcast['im:name'].label.toUpperCase()}</h3>
                    <p>Author: {podcast['im:artist'].label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      }
    </Layout>
  );
};