import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchPodcastDetail } from '../services/apiService';
import Layout from "../components/layout/layout";
import '../styles/podcast.css';

export default function PodcastDetail() {
    const [podcast, setPodcast] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const storedPodcast = JSON.parse(localStorage.getItem(id));
        const podcastList = JSON.parse(localStorage.getItem('podcasts'));
        const listedPodcast = podcastList.values.find((podcast) => podcast.id.attributes['im:id'] === id)
        if (storedPodcast && Date.now() - storedPodcast.timestamp < 24 * 60 * 60 * 1000) {
            storedPodcast.values.sumary = listedPodcast.summary
            setPodcast(storedPodcast.values);
            setEpisodes(storedPodcast.episodes);
        } else {
            fetchPodcastDetail(id)
                .then((data) => {
                    let values = data?.results.shift();
                    values.sumary = listedPodcast.summary
                    let episodes = data?.results;
                    localStorage.setItem(id, JSON.stringify({ values, episodes, timestamp: Date.now() }));
                    setPodcast(values);
                    setEpisodes(episodes)
                })
                .catch((error) => {
                    console.error('Error al obtener los datos:', error);
                });
        }
    }, [id]);

    return (
        <Layout>
            {podcast && episodes &&
                <section className="podcast_wrapper">
                    <div className="podcast_detail">
                        <div className="podcast_detail_image">
                            <img src={podcast.artworkUrl600} alt={podcast.collectionName} />
                        </div>
                        <div className="podcast_detail_artist">
                            <h3>{podcast.trackName}</h3>
                            <p>by {podcast.artistName}</p>
                        </div>
                        <div className="podcast_detail_info">
                            <b>Description:</b>
                            <p>{podcast.sumary?.label}</p>
                        </div>
                    </div>
                    <div className="episodes">
                        <div className="episodes_count">
                            <h3>Episodes: {episodes.length}</h3>
                        </div>
                        <div className="episodes_list">
                            <div className="list_header">
                                <span>Title</span>
                                <span>Date</span>
                                <span>Duration</span>
                            </div>
                            <div className="list_body">
                                {episodes.map((episode, index) => {
                                    const fecha = new Date(episode.releaseDate);
                                    const dia = fecha.getDate().toString().padStart(2, '0');
                                    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
                                    const año = fecha.getFullYear();
                                    const fechaFormateada = `${dia}/${mes}/${año}`;

                                    const tiempoEnSegundos = episode.trackTimeMillis / 1000;
                                    const horas = Math.floor(tiempoEnSegundos / 3600);
                                    const minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
                                    const horasFormateadas = horas.toString().padStart(2, '0');
                                    const minutosFormateados = minutos.toString().padStart(2, '0');
                                    const tiempoFormateado = `${horasFormateadas}:${minutosFormateados}`;

                                    const styles = index % 2 === 0 ? 'grey_bg' : 'white_bg';

                                    console.log(episode)

                                    return (
                                        <div className={`episode ${styles}`} key={index}>
                                            <Link className="item" to={`/podcast/${id}/episode/${episode.trackId}`}>{episode.trackName}</Link>
                                            <span className="item">{fechaFormateada}</span>
                                            <span className="item">{tiempoFormateado}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            }
        </Layout>
    )
}