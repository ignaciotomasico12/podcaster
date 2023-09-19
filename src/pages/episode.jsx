import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchPodcastDetail } from '../services/apiService';
import Layout from "../components/layout/layout";
import '../styles/episode.css';

export default function EpisodeDetail() {
    const [podcast, setPodcast] = useState(null);
    const [episode, setEpisode] = useState(null);
    const params = useParams();
    const location = useLocation();
    const podcastId = location.pathname.split('/')[2];
    const episodeId = params.id

    useEffect(() => {
        const storedPodcast = JSON.parse(localStorage.getItem(podcastId));
        const podcastList = JSON.parse(localStorage.getItem('podcasts'));
        const listedPodcast = podcastList.values.find((podcast) => podcast.id.attributes['im:id'] === podcastId)
        if (storedPodcast && Date.now() - storedPodcast.timestamp < 24 * 60 * 60 * 1000) {
            storedPodcast.values.sumary = listedPodcast.summary
            const selectedEpisode = storedPodcast.episodes.find((episode) => episode.trackId === parseInt(episodeId))
            setPodcast(storedPodcast.values);
            setEpisode(selectedEpisode);
        } else {
            fetchPodcastDetail(podcastId)
                .then((data) => {
                    let values = data?.results.shift();
                    values.sumary = listedPodcast.summary
                    let episodes = data?.results;
                    localStorage.setItem(podcastId, JSON.stringify({ values, episodes, timestamp: Date.now() }));
                    const selectedEpisode = episodes.find((episode) => episode.trackId === parseInt(episodeId))
                    setPodcast(values);
                    setEpisode(selectedEpisode);
                })
                .catch((error) => {
                    console.error('Error al obtener los datos:', error);
                });
        }
    }, [podcastId, episodeId]);

    const parrafos = episode?.description?.split('\n')

    return (
        <Layout>
            {podcast && episode &&
                <section className="episode_wrapper">
                    <div className="podcast_detail">
                        <div className="podcast_detail_image">
                            <img src={podcast.artworkUrl600} alt={podcast.collectionName} />
                        </div>
                        <div className="podcast_detail_artist">
                            <Link to={`/podcast/${podcastId}`}>
                                <h3>{podcast.trackName}</h3>
                                <p>by {podcast.artistName}</p>
                            </Link>
                        </div>
                        <div className="podcast_detail_info">
                            <b>Description:</b>
                            <p>{podcast.sumary?.label}</p>
                        </div>
                    </div>
                    <div className="episode_description">
                        <div className="episode_description_text">
                            <h3>{episode.trackName}</h3>
                            {parrafos.map((parrafo, index) => {
                                return <p key={index}>{parrafo}</p>
                            })}
                        </div>
                        <div className="episode_player">
                            <audio controls>
                                <source src={episode.episodeUrl} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </section>
            }
        </Layout>
    )
}