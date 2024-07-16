'use client';

import React, { useState, useEffect } from 'react';

interface SpotifyTrack {
  item: {
    name: string;
    artists: Array<{ name: string }>;
  };
}

const NowPlaying: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<SpotifyTrack | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/spotify');
        console.log('API Response:', res); // Log the entire response

        if (res.ok) {
          const data: SpotifyTrack = await res.json();
          console.log('Spotify Data:', data); // Log the parsed data
          setNowPlaying(data);
          setError(null);
        } else {
          const errorData = await res.json();
          console.error('API Error:', errorData);
          setError(`Error: ${errorData.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error fetching now playing:', error);
        setError('Failed to fetch currently playing track');
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!nowPlaying || !nowPlaying.item) {
    return <div>No track currently playing</div>;
  }

  const { name, artists } = nowPlaying.item;

  return (
    <div>
      Now Playing: {name} by {artists[0].name}
    </div>
  );
};

export default NowPlaying;