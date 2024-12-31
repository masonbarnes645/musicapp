const buildSpotifyAuthUrl = () => {
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('client_id', '90e93151cab9465ea06646bdd4e8b97b');
    authUrl.searchParams.append('redirect_uri', 'http://127.0.0.1:5000/callback');
    authUrl.searchParams.append('scope', 'user-read-private user-read-email user-top-read user-follow-read playlist-read-private');
  
    return authUrl.toString();
  };
  
  export const spotifyAuthUrl = buildSpotifyAuthUrl();

  
  
