const API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

async function fetchPodcastList() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchPodcastDetail(id) {
    try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export { fetchPodcastList, fetchPodcastDetail };