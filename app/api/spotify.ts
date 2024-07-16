import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

interface AccessTokenResponse {
  access_token: string;
}

interface SpotifyTrack {
  item: {
    name: string;
    artists: Array<{ name: string }>;
  };
}

const getAccessToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post<AccessTokenResponse>(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN!,
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyTrack | { error: string }>
) {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return res.status(500).json({ error: 'Failed to get access token' });
  }

  try {
    const response = await axios.get<SpotifyTrack>(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching currently playing:', error);
    return res.status(500).json({ error: 'Failed to fetch currently playing' });
  }
}