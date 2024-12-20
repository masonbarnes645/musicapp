import axios from "axios";

export const fetchArtistById = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/artists/${id}`);  
    return response.data; 
  } catch (error) {
    console.error("Error fetching chart data:", error.message);
    throw new Error(error.message);
  }
};

export const fetchMyProfile = async () =>{
  try {
    const response = await axios.get(`http://127.0.0.1:5000/profile`, {withCredentials: true})
    return response.data
  } catch (error){
    throw new Error(error.message)
  }
}