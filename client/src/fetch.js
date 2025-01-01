import axios from "axios";

const url = 'http://127.0.0.1:5000'

export const fetchArtistById = async (id) => {
  try {
    const response = await axios.get(`${url}/artists/${id}`);  
    return response.data; 
  } catch (error) {
    console.error("Error fetching chart data:", error.message);
    throw new Error(error.message);
  }
};

export const fetchMyProfile = async () =>{
  try {
    const response = await axios.get(`${url}/profile`, {withCredentials: true})
    return response.data
  } catch (error){
    throw new Error(error.message)
  }
}

export const fetchUserPlaylists = async (id) => {
  try {
    const response = await axios.get(`${url}/user-playlists/${id}`);
    return response.data
  } catch (error){
    throw new Error(error.message)
  }
}