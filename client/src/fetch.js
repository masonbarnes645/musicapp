import axios from "axios";

export const fetchArtistById = async (id) => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/artists/${id}`);  
    console.log(res.data);  
    return res.data; 
  } catch (error) {
    console.error("Error fetching chart data:", error.message);
    throw new Error(error.message);
  }
};


const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=90e93151cab9465ea06646bdd4e8b97b&response_type=code&redirect_uri=http://127.0.0.1:5000/callback
&scope=YOUR_SCOPES`

console.log(SPOTIFY_AUTH_URL)